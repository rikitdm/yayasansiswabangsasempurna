import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Untuk Perusahaan | Yayasan Siswa Bangsa Sempurna",
  description: "Bermitra dengan kami untuk memperkuat dampak sosial perusahaan Anda.",
};

export default function CompaniesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Kemitraan Korporat
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Bergabunglah dengan kami untuk menciptakan perubahan yang berarti dan meningkatkan program tanggung jawab sosial perusahaan Anda. Kami menawarkan berbagai peluang kemitraan.
        </p>
        <Button size="lg" className="mt-8">Hubungi Kami</Button>
      </div>
      {/* Anda dapat menambahkan bagian yang lebih rinci tentang peluang kemitraan di sini. */}
    </div>
  );
}