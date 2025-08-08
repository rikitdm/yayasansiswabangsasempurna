import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { DonateGoodsDialog } from "@/components/donate-goods-dialog";

export const metadata: Metadata = {
    title: "Donasi Barang | Yayasan Siswa Bangsa Sempurna",
    description: "Pelajari tentang jenis barang yang kami terima dan bagaimana donasi Anda membuat perbedaan.",
};

const itemCategories = [
  {
    title: "Pakaian",
    items: ["Sepatu", "Sepatu Bot", "Mantel", "Pakaian Formal & Kerja", "Sweater", "Celana", "Celana Pendek", "Rok", "Kemeja", "Pakaian Dalam", "Topi", "Topi Sarung Tangan", "Syal", "Dompet", "Ikat Pinggang", "Jam Tangan", "Dan Aksesoris"],
  },
  {
    title: "Perlengkapan Bayi",
    items: ["Popok", "Tisu Basah", "Krim", "Lotion", "Kereta Dorong", "Kursi Mobil", "Botol", "Baju Monyet", "Baju Tidur", "Selimut", "Boks Bayi", "Tempat Tidur Bayi", "Monitor Bayi"],
  },
  {
    title: "Mainan & permainan",
    items: ["Permainan Papan", "Figur Aksi", "Boneka", "Mainan Mewah", "Buku Anak-Anak", "Permainan Elektronik Genggam"],
  },
  {
    title: "Perlengkapan Mandi",
    items: ["Sampo", "Deodoran", "Sabun", "Pasta Gigi", "Rias Wajah", "Wewangian", "Popok Dewasa", "Obat OTC", "Pertolongan Pertama", "Lotion", "Tabir Surya", "Semprotan Serangga"],
  },
  {
    title: "Teknologi",
    items: ["Laptop", "Tablet", "Komputer", "Desktop"],
  },
  {
    title: "Perlengkapan Kebersihan",
    items: ["Deterjen", "Pelembut Kain", "Pembersih Serbaguna", "Tisu Dapur", "Kertas Toilet", "Kantong Ziploc", "Ember", "Pel", "Spons", "Kantong Sampah"],
  },
  {
    title: "Perlengkapan Kantor & Sekolah",
    items: ["Kertas Fotokopi", "Buku Catatan", "Kalkulator", "Ransel", "Wadah Penyimpanan", "Spidol", "Krayon", "Perlengkapan Seni & Kerajinan", "Pena", "Stapler", "Pita Perekat", "Lem"],
  },
  {
    title: "Peralatan Rumah Tangga",
    items: ["Handuk", "Peralatan Dapur", "Panci", "Wajan", "Gelas", "Peralatan Perak", "Sprei", "Bantal", "Kasur", "Peralatan Tangan", "Peralatan Listrik", "Kabel Ekstensi", "Kayu", "Cat"],
  },
  {
    title: "Elektronik",
    items: ["TV", "Ponsel", "Video", "Musik"],
  },
  {
    title: "Peralatan Olahraga",
    items: ["Bola", "Frisbee", "Pemukul", "Permainan Halaman", "Sepatu Atletik", "Seragam", "Pakaian", "Peralatan Olahraga"],
  },
];


export default function DonateGoodsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
        <div className="max-w-4xl mx-auto">
            <div className="text-center md:text-left mb-8 md:flex md:items-center md:justify-between">
                <div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                      Bagaimana Anda Bisa Melakukan Kebaikan Terbanyak?
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                      Menurut Laporan United for ALICE, 42% rumah tangga sudah berjuang untuk memenuhi kebutuhan sebelum pandemi — dan saat ini pekerja berupah rendah semakin sulit untuk memenuhi kebutuhan dasar karena inflasi yang belum pernah terjadi sebelumnya. Setiap kali Anda menyumbangkan barang, organisasi Anda memberikan dampak langsung kepada orang-orang yang paling membutuhkannya, sekarang.
                    </p>
                </div>
                <DonateGoodsDialog />
            </div>
          
            <Card className="p-6 md:p-10 bg-card">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                {itemCategories.map((category) => (
                  <div key={category.title}>
                    <h2 className="text-2xl font-headline font-semibold mb-4 text-primary">{category.title}</h2>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
        </div>
      </div>
    </div>
  );
}