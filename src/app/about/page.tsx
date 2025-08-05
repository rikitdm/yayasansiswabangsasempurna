
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Yayasan Siswa Bangsa Sempurna",
  description: "Learn about our mission, our story, and our team.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          About Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We are dedicated to connecting generosity with need to make a tangible impact on lives around the world.
        </p>
      </div>
      {/* You can add more detailed sections about your mission, team, and history here. */}
    </div>
  );
}
