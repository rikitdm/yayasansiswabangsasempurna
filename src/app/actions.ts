
"use server";

import { z } from "zod";
import { generateDonationImpactNarrative } from "@/ai/flows/generate-donation-impact-narrative";

export const generateImpactNarrativeAction = async (prevState: any, formData: FormData) => {
  const schema = z.object({
    donationAmount: z.coerce.number().min(1, "Donation must be at least $1."),
    projectName: z.string().min(1, "Project name is required."),
    projectGoal: z.string().min(1, "Project goal is required."),
    impactPerDollar: z.string().min(1, "Impact per dollar is required."),
  });

  const parsed = schema.safeParse({
    donationAmount: formData.get("donationAmount"),
    projectName: formData.get("projectName"),
    projectGoal: formData.get("projectGoal"),
    impactPerDollar: formData.get("impactPerDollar"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Invalid form data.",
      narrative: "",
    };
  }

  try {
    const result = await generateDonationImpactNarrative(parsed.data);
    return { 
        success: true, 
        narrative: result.impactNarrative, 
        message: "",
        errors: undefined 
    };
  } catch (error) {
    console.error("AI Error:", error);
    return {
      success: false,
      message: "Failed to generate narrative. Please try again.",
      narrative: "",
      errors: undefined
    };
  }
};
