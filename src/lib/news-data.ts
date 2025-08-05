
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

// Helper to fetch all articles.
// This function will now ONLY fetch from Firestore.
export const getNewsArticles = cache(async (): Promise<NewsArticle[]> => {
  let articles: NewsArticle[] = [];
  try {
    const snapshot = await getDocs(articlesCollection);
    if (!snapshot.empty) {
      articles = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NewsArticle));
    }
  } catch (error) {
    console.error("Error fetching news articles from Firestore:", error);
    // In case of an error, we will return an empty array to avoid any fallback issues.
    // The error will be logged to the server console.
    return [];
  }
  return articles;
});

// Helper to fetch a single article by its slug
export const getNewsArticleBySlug = cache(async (slug: string): Promise<NewsArticle | null> => {
  try {
    const q = query(articlesCollection, where("slug", "==", slug));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log(`No article found with slug: ${slug}`);
      return null;
    }
    
    // Assuming slugs are unique, return the first document found.
    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as NewsArticle;

  } catch (error) {
    console.error(`Error fetching article by slug "${slug}":`, error);
    return null;
  }
});
