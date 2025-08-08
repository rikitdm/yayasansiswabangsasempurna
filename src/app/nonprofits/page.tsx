import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Untuk Lembaga Nonprofit | Yayasan Siswa Bangsa Sempurna",
  description: "Bergabunglah dengan jaringan kami untuk terhubung dengan para donatur dan sukarelawan.",
};

export default function NonprofitsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Untuk Lembaga Nonprofit
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Jadilah bagian dari jaringan kami untuk mendapatkan visibilitas, mengakses peluang pendanaan, dan terhubung dengan komunitas pendukung.
        </p>
        <Button size="lg" className="mt-8">Ajukan untuk Bergabung</Button>
      </div>
      {/* Anda dapat menambahkan bagian yang lebih rinci tentang manfaat dan proses pendaftaran di sini. */}
    </div>
  );
}