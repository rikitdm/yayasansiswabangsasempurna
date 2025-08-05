
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Companies | Yayasan Siswa Bangsa Sempurna",
  description: "Partner with us to amplify your company's social impact.",
};

export default function CompaniesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Corporate Partnerships
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Join us to create meaningful change and enhance your corporate social responsibility programs. We offer a range of partnership opportunities.
        </p>
        <Button size="lg" className="mt-8">Contact Us</Button>
      </div>
      {/* You can add more detailed sections about partnership opportunities here. */}
    </div>
  );
}
