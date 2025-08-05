
import { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { newsArticles } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "News & Stories | Yayasan Siswa Bangsa Sempurna",
  description: "Read about the lives you've changed and the communities we've supported together.",
};

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
        {newsArticles.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
