
'use server';

import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export interface GoodsDonation {
    name: string;
    email: string;
    phone: string;
    company?: string;
    pickupTime: string;
    items: string;
    submittedAt: Timestamp;
}

/**
 * Adds a new goods donation inquiry to Firestore.
 * @param data The donation data to add.
 * @returns A promise that resolves when the data has been added.
 */
export async function addGoodsDonation(data: Omit<GoodsDonation, 'submittedAt'>) {
    if (!db) {
        console.error("Firestore is not initialized. Check your Firebase config.");
        throw new Error("Database not available");
    }

    try {
        const donationsCollection = collection(db, 'goodsDonations');
        await addDoc(donationsCollection, {
            ...data,
            submittedAt: Timestamp.now(),
        });
    } catch (error) {
        console.error("Error adding goods donation to Firestore:", error);
        throw new Error("Could not submit donation inquiry.");
    }
}
