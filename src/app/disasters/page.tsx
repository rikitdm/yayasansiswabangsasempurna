
import { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Disaster Relief | Yayasan Siswa Bangsa Sempurna",
  description: "Support our active disaster relief efforts around the world.",
};

const disasterReliefProjects = [
  {
    title: "Disaster Relief: Hurricane Ian",
    description: "Support our rapid response team in providing aid to families affected by the recent hurricane.",
    raised: 120000,
    goal: 150000,
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "hurricane disaster relief",
  },
  {
    title: "Earthquake Emergency Fund",
    description: "Help provide shelter, food, and medical supplies to those impacted by the recent earthquake.",
    raised: 85000,
    goal: 100000,
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "earthquake relief supplies",
  },
   {
    title: "Wildfire Response",
    description: "Contribute to our efforts to support communities and wildlife affected by devastating wildfires.",
    raised: 62000,
    goal: 75000,
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "wildfire aftermath",
  },
];


export default function DisastersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Active Disaster Relief
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your immediate support can provide critical aid to communities in crisis. Here are our active response efforts.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {disasterReliefProjects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}
