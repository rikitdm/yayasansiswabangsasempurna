import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects-data";

interface ProjectCardProps extends Omit<Project, 'id' | 'content'> {}

export function ProjectCard({ imageSrc, title, description, raised, goal, imageHint, slug }: ProjectCardProps) {
  const progress = (raised / goal) * 100;

  return (
    <Card className="w-full overflow-hidden transition-all hover:shadow-lg">
        <Link href={`/projects/${slug}`} prefetch={false}>
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
      <CardContent className="p-4 md:p-6">
        <Link href={`/projects/${slug}`} prefetch={false}>
            <CardTitle className="mb-2 font-headline text-xl hover:text-primary transition-colors">{title}</CardTitle>
        </Link>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <Progress value={progress} className="h-2 [&>div]:bg-primary" />
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>Terkumpul: ${raised.toLocaleString()}</span>
            <span>Target: ${goal.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 md:p-6 md:pt-0">
        <Link href={`/projects/${slug}`} className="w-full" prefetch={false}>
            <Button className="w-full bg-accent hover:bg-accent/90">Donasi Sekarang</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}