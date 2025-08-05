
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Newspaper, Building } from "lucide-react";
import Image from "next/image";
import { DonationImpactForm } from "@/components/donation-impact-form";
import { DonationForm } from "@/components/donation-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NewsCard } from "@/components/news-card";
import { newsArticles } from "@/lib/news-data";

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

const homeNewsArticles = newsArticles.slice(0, 4);


export default async function Home() {
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/yayasan-siswa-bangsa-sempurna.firebasestorage.app/o/Hero%20Image%2F4.png?alt=media&token=6b422c74-6d4c-4737-9fd1-63cc8f789cb6";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40">
        <Image
          src={imageUrl}
          alt="Happy Indonesian children"
          fill
          className="object-cover"
          data-ai-hint="indonesian children"
          priority
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white font-headline [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                Connect Your Generosity with Need
              </h1>
              <p className="mt-4 text-lg text-white/90 md:text-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                Join our community of donors and nonprofits to make a tangible impact on lives around the world.
              </p>
            </div>
            <div>
              <DonationForm />
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
      
      {/* News & Stories Carousel */}
      <section className="bg-card py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
             <Newspaper className="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">News & Stories</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Read about the lives you've changed and the communities we've supported together.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {homeNewsArticles.map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <NewsCard article={article} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Donation Impact AI Tool */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <DonationImpactForm />
        </div>
      </section>
      
      {/* Corporate Partnerships */}
      <section className="bg-card py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-1">
            <div className="space-y-4 text-center">
              <Building className="h-12 w-12 mx-auto lg:mx-0 text-primary" />
              <h3 className="text-2xl font-bold font-headline">For Companies</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">Partner with us to amplify your company's social impact through strategic giving.</p>
              <Button variant="outline">Corporate Partnerships</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
