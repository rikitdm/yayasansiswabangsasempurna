
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { NewsArticle } from "@/lib/news-data";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  if (!article) {
    return null;
  }
  const { slug, imageSrc, imageHint, category, title, description, author, publishedDate } = article;
  return (
    <Card className="w-full overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
       <Link href={`/news/${slug}`} prefetch={false}>
        <CardHeader className="p-0">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={250}
            className="aspect-video w-full object-cover"
            data-ai-hint={imageHint}
          />
        </CardHeader>
      </Link>
      <CardContent className="p-4 md:p-6 flex-1">
        <Badge variant="secondary" className="mb-2">{category}</Badge>
        <CardTitle className="mb-2 font-headline text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 md:p-6 md:pt-0 flex-col items-start gap-2">
        {(author || publishedDate) && (
            <div className="text-sm text-muted-foreground">
              {author && <span>By {author}</span>}
              {author && publishedDate && <span> &middot; </span>}
              {publishedDate && <span>{new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
            </div>
        )}
        <Link href={`/news/${slug}`} prefetch={false}>
            <Button variant="link" className="p-0 h-auto">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
