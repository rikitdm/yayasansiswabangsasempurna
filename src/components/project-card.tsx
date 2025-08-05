import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  raised: number;
  goal: number;
  imageHint: string;
}

export function ProjectCard({ imageSrc, title, description, raised, goal, imageHint }: ProjectCardProps) {
  const progress = (raised / goal) * 100;

  return (
    <Card className="w-full overflow-hidden transition-all hover:shadow-lg">
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
      <CardContent className="p-4 md:p-6">
        <CardTitle className="mb-2 font-headline text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <Progress value={progress} className="h-2 [&>div]:bg-primary" />
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>Raised: ${raised.toLocaleString()}</span>
            <span>Goal: ${goal.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 md:p-6 md:pt-0">
        <Button className="w-full bg-accent hover:bg-accent/90">Donate Now</Button>
      </CardFooter>
    </Card>
  );
}
