
'use server';

import { db } from './firebase';
import { collection, getDocs, query, where, limit, Timestamp } from 'firebase/firestore';
import { cache } from 'react';

export interface NewsArticle {
  id?: string;
  slug: string;
  imageSrc: string;
  imageHint: string;
  category: string;
  title: string;
  description: string;
  content: string;
  author?: string;
  publishedDate?: string; // Keep as string for client-side rendering
}

// Re-export the type for easy access elsewhere
export type { NewsArticle as NewsArticleType };

const processDoc = (doc: any) => {
  const data = doc.data();
  // Convert Firestore Timestamp to a serializable format (ISO string)
  if (data.publishedDate && data.publishedDate instanceof Timestamp) {
    data.publishedDate = data.publishedDate.toDate().toISOString();
  }
  return { id: doc.id, ...data } as NewsArticle;
}

/**
 * Fetches all news articles directly from Firestore.
 * @returns A promise that resolves to an array of news articles from Firestore.
 */
export const getNewsArticles = cache(async (): Promise<NewsArticle[]> => {
  if (!db) {
    console.error("Firestore is not initialized. Check your Firebase config.");
    return [];
  }
  try {
    const articlesCollection = collection(db, 'newsArticles');
    const snapshot = await getDocs(articlesCollection);
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(processDoc);
  } catch (error) {
    console.error("Error fetching news articles from Firestore:", error);
    return [];
  }
});

/**
 * Fetches a single news article by its slug from Firestore.
 * @param slug The slug of the article to fetch.
 * @returns A promise that resolves to the news article or null if not found.
 */
export const getNewsArticleBySlug = cache(async (slug: string): Promise<NewsArticle | null> => {
   if (!db) {
    console.error("Firestore is not initialized. Check your Firebase config.");
    return null;
  }
  try {
    const articlesCollection = collection(db, 'newsArticles');
    const q = query(articlesCollection, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }
    
    const doc = snapshot.docs[0];
    return processDoc(doc);

  } catch (error) {
    console.error(`Error fetching article by slug "${slug}" from Firestore:`, error);
    return null;
  }
});
