import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { HandHeart, Newspaper, Globe, Building } from "lucide-react";
import Image from "next/image";
import { DonationImpactForm } from "@/components/donation-impact-form";

const projects = [
  {
    title: "School Supplies for Kids",
    description: "Help provide essential school supplies for underprivileged children to support their education.",
    raised: 7500,
    goal: 10000,
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "children school supplies",
  },
  {
    title: "Disaster Relief: Hurricane Ian",
    description: "Support our rapid response team in providing aid to families affected by the recent hurricane.",
    raised: 120000,
    goal: 150000,
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "hurricane disaster relief",
  },
  {
    title: "Community Health Clinics",
    description: "Fund mobile health clinics that offer free medical care in remote and underserved areas.",
    raised: 45000,
    goal: 60000,
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "mobile health clinic",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Volunteers working together"
          fill
          className="object-cover -z-10"
          data-ai-hint="volunteers smiling"
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white font-headline">
              Connect Your Generosity with Need
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              Join our community of donors and nonprofits to make a tangible impact on lives around the world.
            </p>
            <div className="mt-6">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90">
                <HandHeart className="mr-2 h-5 w-5" />
                Give Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Project Showcase */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Featured Projects</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Your donation can bring hope and change. Choose a cause that speaks to you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Real-time Crisis Tracking (Disasters) */}
      <section className="bg-card py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Globe className="h-12 w-12 mx-auto text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Real-time Crisis Response</h2>
          <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">We're on the ground where help is needed most. See our active disaster relief efforts.</p>
          <div className="mt-8">
            <Button variant="outline">View Active Disasters</Button>
          </div>
        </div>
      </section>

      {/* Donation Impact AI Tool */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <DonationImpactForm />
        </div>
      </section>
      
      {/* News & Stories + Corporate Partnerships */}
      <section className="bg-card py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4 text-center lg:text-left">
              <Newspaper className="h-12 w-12 mx-auto lg:mx-0 text-primary" />
              <h3 className="text-2xl font-bold font-headline">News & Stories</h3>
              <p className="text-muted-foreground">Read about the lives you've changed and the communities we've supported together.</p>
              <Button variant="outline">Read Our Blog</Button>
            </div>
            <div className="space-y-4 text-center lg:text-left">
              <Building className="h-12 w-12 mx-auto lg:mx-0 text-primary" />
              <h3 className="text-2xl font-bold font-headline">For Companies</h3>
              <p className="text-muted-foreground">Partner with us to amplify your company's social impact through strategic giving.</p>
              <Button variant="outline">Corporate Partnerships</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
