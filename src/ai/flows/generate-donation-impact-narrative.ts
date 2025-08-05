'use server';
/**
 * @fileOverview Generates a personalized impact narrative for a donation.
 *
 * - generateDonationImpactNarrative - A function that generates the impact narrative.
 * - GenerateDonationImpactNarrativeInput - The input type for the generateDonationImpactNarrative function.
 * - GenerateDonationImpactNarrativeOutput - The return type for the generateDonationImpactNarrative function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDonationImpactNarrativeInputSchema = z.object({
  donationAmount: z.number().describe('The amount of the donation.'),
  projectName: z.string().describe('The name of the project the donation is for.'),
  projectGoal: z.string().describe('The overall goal of the project.'),
  impactPerDollar: z
    .string()
    .describe(
      'A description of what one dollar provides to the project. Example: Provides 2 meals.'
    ),
});
export type GenerateDonationImpactNarrativeInput = z.infer<
  typeof GenerateDonationImpactNarrativeInputSchema
>;

const GenerateDonationImpactNarrativeOutputSchema = z.object({
  impactNarrative: z
    .string()
    .describe('A personalized description of the impact of the donation.'),
});

export type GenerateDonationImpactNarrativeOutput = z.infer<
  typeof GenerateDonationImpactNarrativeOutputSchema
>;

export async function generateDonationImpactNarrative(
  input: GenerateDonationImpactNarrativeInput
): Promise<GenerateDonationImpactNarrativeOutput> {
  return generateDonationImpactNarrativeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDonationImpactNarrativePrompt',
  input: {schema: GenerateDonationImpactNarrativeInputSchema},
  output: {schema: GenerateDonationImpactNarrativeOutputSchema},
  prompt: `You are a fundraising expert who is excellent at writing personalized donation impact narratives.

  Based on the information below, write a short, compelling paragraph describing the impact of a donation.

  Donation Amount: {{{donationAmount}}}
  Project Name: {{{projectName}}}
  Project Goal: {{{projectGoal}}}
  Impact Per Dollar: {{{impactPerDollar}}}

  Write in the first person, from the perspective of the organization thanking the donor.
  Be specific about the impact the donation will have.
  Do not thank the donor directly - focus on the impact.
`,
});

const generateDonationImpactNarrativeFlow = ai.defineFlow(
  {
    name: 'generateDonationImpactNarrativeFlow',
    inputSchema: GenerateDonationImpactNarrativeInputSchema,
    outputSchema: GenerateDonationImpactNarrativeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

