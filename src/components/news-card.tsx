import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  imageSrc: string;
  imageHint: string;
  category: string;
  title: string;
  description: string;
}

export function NewsCard({ imageSrc, imageHint, category, title, description }: NewsCardProps) {
  return (
    <Card className="w-full overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
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
      <CardContent className="p-4 md:p-6 flex-1">
        <Badge variant="secondary" className="mb-2">{category}</Badge>
        <CardTitle className="mb-2 font-headline text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0 md:p-6 md:pt-0">
        <Button variant="link" className="p-0 h-auto">Read More</Button>
      </CardFooter>
    </Card>
  );
}
