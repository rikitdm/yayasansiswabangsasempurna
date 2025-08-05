
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Nonprofits | Yayasan Siswa Bangsa Sempurna",
  description: "Join our network to connect with donors and volunteers.",
};

export default function NonprofitsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          For Nonprofits
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Become a part of our network to gain visibility, access funding opportunities, and connect with a community of supporters.
        </p>
        <Button size="lg" className="mt-8">Apply to Join</Button>
      </div>
      {/* You can add more detailed sections about the benefits and application process here. */}
    </div>
  );
}
