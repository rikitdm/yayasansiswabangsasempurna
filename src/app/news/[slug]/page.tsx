
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsArticleBySlug, getNewsArticles } from "@/lib/news-data";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getNewsArticleBySlug(params.slug);

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

export default async function ArticlePage({ params }: Props) {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <article className="max-w-4xl mx-auto">
        <div className="mb-4">
            <Badge variant="secondary">{article.category}</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline mb-4 text-primary">
          {article.title}
        </h1>
        
        {(article.author || article.publishedDate) && (
            <div className="mb-8 text-lg text-muted-foreground">
              {article.author && <span>By {article.author}</span>}
              {article.author && article.publishedDate && <span> &middot; </span>}
              {article.publishedDate && <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
            </div>
        )}

        <p className="text-xl text-muted-foreground font-semibold mb-8">{article.description}</p>
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
    const articles = await getNewsArticles();
    // Filter out any articles that don't have a slug to prevent build errors
    return articles
      .filter(article => !!article.slug) 
      .map((article) => ({
        slug: article.slug,
      }));
}
