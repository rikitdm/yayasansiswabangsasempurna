
import { Metadata } from "next";
import { NewsCard } from "@/components/news-card";

export const metadata: Metadata = {
  title: "News & Stories | Yayasan Siswa Bangsa Sempurna",
  description: "Read about the lives you've changed and the communities we've supported together.",
};

const newsArticles = [
  {
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "education children",
    category: "Education",
    title: "How Your Support is Building Brighter Futures",
    description: "Read about how our latest education initiatives are making a difference in children's lives.",
  },
  {
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "disaster relief supplies",
    category: "Disaster Relief",
    title: "On the Front Lines: Our Response to the Latest Crisis",
    description: "Learn how our teams are providing critical aid to communities affected by recent events.",
  },
  {
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "community health",
    category: "Health",
    title: "Bringing Healthcare to Remote Villages",
    description: "Discover the impact of our mobile health clinics on underserved populations.",
  },
  {
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "clean water well",
    category: "Clean Water",
    title: "A Sip of Hope: New Wells Bring Life to a Community",
    description: "See how access to clean water is transforming a village in a draught-stricken region.",
  },
  {
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "volunteers working",
    category: "Community",
    title: "The Power of a Volunteer Hour",
    description: "Our volunteers are the heart of our organization. Read their stories.",
  },
  {
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "successful fundraising event",
    category: "Fundraising",
    title: "Annual Gala Raises Record-Breaking Amount",
    description: "A look back at our most successful fundraising event to date.",
  },
];


export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          News & Stories
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Stay updated with our latest activities and read inspiring stories from the communities we serve.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {newsArticles.map((article, i) => (
          <NewsCard key={i} {...article} />
        ))}
      </div>
    </div>
  );
}
