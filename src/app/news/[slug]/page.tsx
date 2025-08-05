
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { newsArticles, NewsArticle } from "@/lib/news-data";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Yayasan Siswa Bangsa Sempurna`,
    description: article.description,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Badge variant="secondary">{article.category}</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline mb-4 text-primary">
          {article.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">{article.description}</p>
        <Image
          src={article.imageSrc}
          alt={article.title}
          width={800}
          height={450}
          className="w-full aspect-video object-cover rounded-lg shadow-lg mb-8"
          data-ai-hint={article.imageHint}
        />
        <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>{article.content}</p>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
    return newsArticles.map((article) => ({
        slug: article.slug,
    }));
}
