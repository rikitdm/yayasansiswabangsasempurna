import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


export const metadata: Metadata = {
  title: "Bantuan & FAQ | Yayasan Siswa Bangsa Sempurna",
  description: "Temukan jawaban atas pertanyaan yang sering diajukan atau hubungi kami secara langsung.",
};

const faqs = [
    {
        question: "Apakah donasi saya dapat mengurangi pajak?",
        answer: "Ya, kami adalah organisasi nirlaba 501(c)(3) yang terdaftar, dan semua donasi dapat dikurangkan dari pajak sejauh diizinkan oleh hukum."
    },
    {
        question: "Berapa persen dari donasi saya yang langsung disalurkan ke program?",
        answer: "Kami bangga mengatakan bahwa 85% dari setiap dolar yang didonasikan langsung disalurkan ke program dan layanan kami, dengan sisa 15% untuk menutupi biaya administrasi dan penggalangan dana."
    },
    {
        question: "Dapatkah saya memilih proyek mana yang didukung oleh donasi saya?",
        answer: "Tentu saja. Saat Anda berdonasi, Anda dapat memilih proyek atau dana tertentu yang ingin Anda dukung. Jika Anda tidak memilih, donasi Anda akan digunakan di tempat yang paling membutuhkan."
    },
    {
        question: "Bagaimana cara mendapatkan tanda terima untuk donasi saya?",
        answer: "Tanda terima untuk donasi Anda akan dikirim ke alamat email yang Anda berikan pada saat donasi. Untuk donatur bulanan, tanda terima gabungan dikirim pada akhir tahun."
    },
    {
        question: "Bagaimana saya bisa menjadi sukarelawan?",
        answer: "Kami memiliki berbagai peluang sukarelawan yang tersedia. Silakan kunjungi halaman 'Untuk Lembaga Nonprofit' kami atau hubungi kami secara langsung untuk mempelajari lebih lanjut tentang bagaimana Anda dapat terlibat."
    }
]

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Pusat Bantuan
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ada pertanyaan? Kami di sini untuk membantu.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
        <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                Pertanyaan yang Sering Diajukan
            </h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                    {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Hubungi Kami</CardTitle>
                    <CardDescription>
                        Tidak dapat menemukan jawaban yang Anda cari? Isi formulir di bawah ini.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nama</Label>
                            <Input id="name" placeholder="Masukkan nama Anda" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Masukkan email Anda" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Pesan</Label>
                            <Textarea id="message" placeholder="Masukkan pesan Anda" className="min-h-[120px]" />
                        </div>
                        <Button type="submit" className="w-full">Kirim Pesan</Button>
                   </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}