
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

const seedData: NewsArticle[] = [
    {
      slug: 'how-your-support-is-building-brighter-futures',
      imageSrc: 'https://placehold.co/400x250.png',
      imageHint: 'education children',
      category: 'Education',
      title: 'How Your Support is Building Brighter Futures',
      description: "Read about how our latest education initiatives are making a difference in children's lives.",
      content: 'Thanks to the generous support of our donors, thousands of children in underserved communities are gaining access to quality education. Our recent projects have focused on building new schools, providing essential learning materials, and funding teacher training programs. These initiatives not only equip students with academic knowledge but also empower them with the confidence and skills needed to break the cycle of poverty. The impact is visible in the smiling faces of students who now have a safe and stimulating environment to learn and grow. Each contribution, no matter the size, plays a vital role in shaping a brighter, more hopeful future for these young learners.'
    },
    {
      slug: 'clean-water-for-all-a-story-of-transformation',
      imageSrc: 'https://placehold.co/400x250.png',
      imageHint: 'clean water community',
      category: 'Health',
      title: 'Clean Water for All: A Story of Transformation',
      description: 'Discover the life-changing impact of providing clean and accessible water to remote villages.',
      content: "Access to clean water is a fundamental human right, yet many communities around the world still struggle to obtain it. Our clean water initiative is changing that narrative, one village at a time. By installing wells and water purification systems, we are not only preventing waterborne diseases but also transforming daily life. Women and children, who once spent hours fetching water from distant sources, now have more time for education and economic activities. The availability of clean water has led to improved sanitation, better health outcomes, and a renewed sense of hope and dignity within these communities. This is the story of how a simple resource can bring about profound transformation."
    },
    {
      slug: 'responding-to-crisis-our-disaster-relief-efforts',
      imageSrc: 'https://placehold.co/400x250.png',
      imageHint: 'disaster relief aid',
      category: 'Disaster Relief',
      title: 'Responding to Crisis: Our Disaster Relief Efforts',
      description: 'Learn how our rapid response teams are providing critical aid to families affected by natural disasters.',
      content: 'When disaster strikes, immediate and effective response is crucial. Our dedicated disaster relief teams are on the ground, providing essential aid such as food, shelter, medical supplies, and emotional support to those who have lost everything. We work closely with local partners to ensure that our efforts are coordinated and meet the most pressing needs of the affected population. From hurricanes to earthquakes, our goal is to help communities not only recover but also rebuild stronger and more resilient than before. Your support enables us to be there for families in their darkest hours, offering a beacon of hope amidst the chaos.'
    },
];

// Helper to fetch all articles. It will only return articles from Firestore.
export const getNewsArticles = cache(async (): Promise<NewsArticle[]> => {
  try {
    const snapshot = await getDocs(articlesCollection);
    if (snapshot.empty) {
      console.warn("Firestore 'newsArticles' collection is empty. Returning seed data.");
      return seedData;
    }
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NewsArticle));
  } catch (error) {
    console.error("Error fetching news articles from Firestore. Returning seed data.", error);
    // If there is any error fetching from Firestore, return the seed data as a fallback.
    return seedData;
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
    
    // Fallback to seed data if not found in Firestore
    const seedArticle = seedData.find(a => a.slug === slug);
    if (seedArticle) {
      console.warn(`Article with slug "${slug}" not found in Firestore. Returning from seed data.`);
      return seedArticle;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching article by slug "${slug}" from Firestore.`, error);
     // Fallback to seed data on error
    const seedArticle = seedData.find(a => a.slug === slug);
    if (seedArticle) {
      console.warn(`Error fetching article with slug "${slug}" from Firestore. Returning from seed data.`);
      return seedArticle;
    }
    return null;
  }
});
