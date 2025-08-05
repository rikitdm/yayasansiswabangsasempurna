
import { db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
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

// Helper to fetch all articles. It will only return articles from Firestore.
export const getNewsArticles = cache(async (): Promise<NewsArticle[]> => {
  try {
    const snapshot = await getDocs(articlesCollection);
    if (!snapshot.empty) {
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NewsArticle));
    }
    // If firestore is empty or fails, return an empty array.
    return [];
  } catch (error) {
    console.error("Error fetching news articles from Firestore.", error);
    // If there is any error fetching from Firestore, return an empty array.
    return [];
  }
});

// Helper to fetch a single article by its slug from Firestore only.
export const getNewsArticleBySlug = cache(async (slug: string): Promise<NewsArticle | null> => {
  try {
    const q = query(articlesCollection, where("slug", "==", slug));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() } as NewsArticle;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching article by slug "${slug}" from Firestore.`, error);
    return null;
  }
});
