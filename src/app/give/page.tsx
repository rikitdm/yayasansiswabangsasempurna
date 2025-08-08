import { Metadata } from "next";
import { DonationForm } from "@/components/donation-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cara Memberi | Yayasan Siswa Bangsa Sempurna",
  description: "Jelajahi berbagai cara Anda dapat berkontribusi untuk tujuan kami.",
};

export default function GivePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Cara Memberi
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Kontribusi Anda, besar atau kecil, membuat perbedaan besar. Temukan opsi pemberian yang tepat untuk Anda.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
        <div>
          <DonationForm />
        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Cara Lain untuk Memberi</CardTitle>
                    <CardDescription>Selain donasi online, berikut adalah cara lain Anda dapat mendukung pekerjaan kami.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Pencocokan Perusahaan</h3>
                        <p className="text-sm text-muted-foreground">Banyak perusahaan akan mencocokkan donasi Anda. Tanyakan kepada departemen SDM Anda untuk menggandakan dampak Anda.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Donasi Saham & Kripto</h3>
                        <p className="text-sm text-muted-foreground">Kami menerima donasi saham dan mata uang kripto. Hubungi kami untuk informasi lebih lanjut.</p>
                    </div>
                     <div>
                        <h3 className="font-semibold">Pemberian Terencana</h3>
                        <p className="text-sm text-muted-foreground">Tinggalkan warisan abadi dengan memasukkan kami dalam wasiat atau rencana warisan Anda.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}