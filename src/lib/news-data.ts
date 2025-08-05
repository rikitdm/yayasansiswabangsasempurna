
'use server';

import { db } from './firebase';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
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
}

// Re-export the type for easy access elsewhere
export type { NewsArticle as NewsArticleType };

const articlesCollection = collection(db, 'newsArticles');

/**
 * Fetches all news articles directly from Firestore.
 * It will not use any local or seed data.
 * @returns A promise that resolves to an array of news articles from Firestore.
 */
export const getNewsArticles = cache(async (): Promise<NewsArticle[]> => {
  try {
    const snapshot = await getDocs(articlesCollection);
    if (snapshot.empty) {
      return []; // Return an empty array if there are no articles in Firestore
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NewsArticle));
  } catch (error) {
    console.error("Error fetching news articles from Firestore:", error);
    return []; // Return an empty array on error to prevent crashing
  }
});

/**
 * Fetches a single news article by its slug from Firestore.
 * It will not use any local or seed data.
 * @param slug The slug of the article to fetch.
 * @returns A promise that resolves to the news article or null if not found.
 */
export const getNewsArticleBySlug = cache(async (slug: string): Promise<NewsArticle | null> => {
  try {
    const q = query(articlesCollection, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.warn(`Article with slug "${slug}" not found in Firestore.`);
      return null;
    }
    
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as NewsArticle;

  } catch (error) {
    console.error(`Error fetching article by slug "${slug}" from Firestore:`, error);
    return null; // Return null on error
  }
});
