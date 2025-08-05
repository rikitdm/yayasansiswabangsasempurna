
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

const seedData: NewsArticle[] = [
    {
        slug: "how-your-support-is-building-brighter-futures",
        imageSrc: "https://placehold.co/400x250.png",
        imageHint: "education children",
        category: "Education",
        title: "How Your Support is Building Brighter Futures",
        description: "Read about how our latest education initiatives are making a difference in children's lives.",
        content: "Thanks to the generous contributions of our donors, we've been able to provide over 1,000 children with essential school supplies and scholarships. This support is not just about books and pencils; it's about opening doors to a brighter future, empowering communities, and fostering a love for learning that will last a lifetime. Each donation helps us build classrooms, train teachers, and create safe learning environments where students can thrive."
    },
    {
        slug: "community-health-fair-a-resounding-success",
        imageSrc: "https://placehold.co/400x250.png",
        imageHint: "health fair volunteers",
        category: "Health",
        title: "Community Health Fair: A Resounding Success",
        description: "Our recent health fair provided free check-ups and medical advice to over 500 community members.",
        content: "The annual Community Health Fair was a tremendous success, connecting hundreds of individuals and families with vital health resources. Volunteers, including doctors, nurses, and local students, provided services ranging from blood pressure screenings to dental hygiene tips. It's a powerful example of what we can achieve when we come together to care for our community's well-being."
    },
    {
        slug: "disaster-response-update-aid-reaches-affected-families",
        imageSrc: "https://placehold.co/400x250.png",
        imageHint: "disaster relief supplies",
        category: "Disaster Relief",
        title: "Disaster Response Update: Aid Reaches Affected Families",
        description: "Our rapid response team has been on the ground, delivering essential supplies to families impacted by the recent floods.",
        content: "In the wake of the recent floods, our disaster response team was immediately mobilized. We've been working tirelessly to distribute food, clean water, and temporary shelter to those who have lost so much. The road to recovery is long, but with your continued support, we can help these communities rebuild and restore hope."
    },
    {
        slug: "a-new-well-brings-clean-water-and-new-hope",
        imageSrc: "https://placehold.co/400x250.png",
        imageHint: "clean water well",
        category: "Clean Water",
        title: "A New Well Brings Clean Water and New Hope",
        description: "The completion of a new well project is transforming a village by providing access to safe, clean drinking water.",
        content: "For the village of Mvura, the daily struggle for clean water is now a thing of the past. The newly constructed well, funded entirely by our donors, is more than just a source of water; it's a source of health, opportunity, and hope. Children can now attend school instead of walking miles to fetch water, and families are healthier and safer."
    }
];

const articlesCollection = collection(db, 'newsArticles');

// Helper to fetch all articles.
export const getNewsArticles = cache(async (): Promise<NewsArticle[]> => {
  try {
    const snapshot = await getDocs(articlesCollection);
    // If the snapshot is not empty, return the articles from Firestore.
    if (!snapshot.empty) {
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NewsArticle));
    }
    // If the snapshot is empty, return the seed data.
    return seedData;
  } catch (error) {
    console.error("Error fetching news articles from Firestore. Falling back to seed data.", error);
    // If there is any error fetching from Firestore, return the seed data.
    return seedData;
  }
});

// Helper to fetch a single article by its slug
export const getNewsArticleBySlug = cache(async (slug: string): Promise<NewsArticle | null> => {
  try {
    const q = query(articlesCollection, where("slug", "==", slug));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() } as NewsArticle;
    }
  } catch (error) {
    console.error(`Error fetching article by slug "${slug}" from Firestore.`, error);
  }
  
  // Fallback for both Firestore fetch error and if document is not found in Firestore.
  console.log(`Article with slug "${slug}" not found in Firestore, checking seed data.`);
  const article = seedData.find((a) => a.slug === slug);
  return article || null;
});
