'use server';

import { db } from './firebase';
import { collection, getDocs, query, where, limit, Timestamp } from 'firebase/firestore';
import { cache } from 'react';

export interface Project {
  id?: string;
  slug: string;
  imageSrc: string;
  imageHint: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  content?: string; // Optional extended content for the project page
}

const processDoc = (doc: any) => {
  const data = doc.data();
  if (data.publishedDate && data.publishedDate instanceof Timestamp) {
    data.publishedDate = data.toDate().toISOString();
  }
  return { id: doc.id, ...data } as Project;
}

/**
 * Fetches all projects directly from Firestore.
 * @returns A promise that resolves to an array of projects from Firestore.
 */
export const getProjects = cache(async (): Promise<Project[]> => {
  if (!db) {
    console.error("Firestore is not initialized. Check your Firebase config.");
    return [];
  }
  try {
    const projectsCollection = collection(db, 'projects');
    const snapshot = await getDocs(projectsCollection);
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(processDoc);
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    return [];
  }
});

/**
 * Fetches a single project by its slug from Firestore.
 * @param slug The slug of the project to fetch.
 * @returns A promise that resolves to the project or null if not found.
 */
export const getProjectBySlug = cache(async (slug: string): Promise<Project | null> => {
   // --- FIX STARTS HERE ---
   // Add a check to ensure the slug is a valid string before querying
   if (!slug || typeof slug !== 'string') {
    return null;
   }
   // --- FIX ENDS HERE ---

   if (!db) {
    console.error("Firestore is not initialized. Check your Firebase config.");
    return null;
  }
  try {
    const projectsCollection = collection(db, 'projects');
    const q = query(projectsCollection, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }
    
    const doc = snapshot.docs[0];
    return processDoc(doc);

  } catch (error) {
    console.error(`Error fetching project by slug "${slug}" from Firestore:`, error);
    return null;
  }
});