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
import { getNewsArticles } from "@/lib/news-data";
import { getProjects } from "@/lib/projects-data";

export default async function Home() {
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/yayasan-siswa-bangsa-sempurna.firebasestorage.app/o/Hero%20Image%2F4.png?alt=media&token=6b422c74-6d4c-4737-9fd1-63cc8f789cb6";
  const homeNewsArticles = (await getNewsArticles()).slice(0, 4);
  const projects = (await getProjects()).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40">
        <Image
          src={imageUrl}
          alt="Anak-anak Indonesia yang bahagia"
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
                Masa Depan Mereka di Tangan Anda
              </h1>
              <p className="mt-4 text-lg text-white/90 md:text-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                Jadilah bagian dari solusi. Donasi Anda memiliki kekuatan untuk mengubah kehidupan
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Proyek Unggulan</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Donasi Anda dapat membawa harapan dan perubahan. Pilih tujuan yang sesuai dengan hati Anda.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Berita & Cerita</h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              Baca tentang kehidupan yang telah Anda ubah dan komunitas yang telah kita dukung bersama.
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
              <Building className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-bold font-headline">Untuk Perusahaan</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">Bermitra dengan kami untuk memperkuat dampak sosial perusahaan Anda melalui pemberian yang strategis.</p>
              <Button variant="outline">Kemitraan Korporat</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}