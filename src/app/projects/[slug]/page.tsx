import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/projects-data";
import { DonationForm } from "@/components/donation-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} | Yayasan Siswa Bangsa Sempurna`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }
  
  const progress = (project.raised / project.goal) * 100;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
                <Image
                    src={project.imageSrc || '/placeholder-image.jpg'}
                    alt={project.title || 'Project Image'}
                    width={800}
                    height={450}
                    className="w-full aspect-video object-cover rounded-lg shadow-lg"
                    data-ai-hint={project.imageHint}
                />
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                    {project.title}
                </h1>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>{project.description}</p>
                    {project.content && <p>{project.content}</p>}
                </div>
            </div>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Progres Proyek</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Progress value={progress} className="h-4" />
                        <div className="mt-4 flex justify-between text-lg font-semibold">
                            <span>${project.raised.toLocaleString()}</span>
                            <span className="text-muted-foreground">${project.goal.toLocaleString()}</span>
                        </div>
                         <div className="mt-1 flex justify-between text-sm text-muted-foreground">
                            <span>Terkumpul</span>
                            <span>Target</span>
                        </div>
                    </CardContent>
                </Card>
                <DonationForm />
            </div>
        </div>
    </div>
  );
}

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects
      .filter(project => !!project.slug) 
      .map((project) => ({
        slug: project.slug,
      }));
}