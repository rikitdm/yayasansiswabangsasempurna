import { Metadata } from "next";
import { NewsCard } from "@/components/news-card";
import { getNewsArticles } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "Berita & Cerita | Yayasan Siswa Bangsa Sempurna",
  description: "Baca tentang kehidupan yang telah Anda ubah dan komunitas yang telah kita dukung bersama.",
};

export default async function NewsPage() {
  const newsArticles = await getNewsArticles();
  
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Berita & Cerita
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tetap terupdate dengan kegiatan terbaru kami dan baca cerita-cerita inspiratif dari komunitas yang kami layani.
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