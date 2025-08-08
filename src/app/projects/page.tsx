// src/app/projects/page.tsx

import { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "../../lib/projects-data";

export const metadata: Metadata = {
  title: "Projects | Yayasan Siswa Bangsa Sempurna",
  description: "Support our active relief efforts around the world.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Active Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your immediate support can provide critical aid to communities in crisis. Here are our active response efforts.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}