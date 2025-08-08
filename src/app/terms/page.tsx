import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ketentuan Layanan | Yayasan Siswa Bangsa Sempurna",
  description: "Baca ketentuan layanan kami.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline mb-8 text-primary">
        Ketentuan Layanan
      </h1>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>Terakhir diperbarui: {new Date().toLocaleDateString()}</p>
        <p>
          Harap baca syarat dan ketentuan ini dengan saksama sebelum menggunakan Layanan Kami.
        </p>

        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Penafsiran dan Definisi</h2>
        <p>
          Kata-kata yang huruf awalnya ditulis dengan huruf kapital memiliki arti yang didefinisikan dalam kondisi berikut. Definisi berikut akan memiliki arti yang sama terlepas dari apakah mereka muncul dalam bentuk tunggal atau jamak.
        </p>
        
        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Pengakuan</h2>
        <p>
            Ini adalah Syarat dan Ketentuan yang mengatur penggunaan Layanan ini dan perjanjian yang berlaku antara Anda dan Perusahaan. Syarat dan Ketentuan ini menetapkan hak dan kewajiban semua pengguna mengenai penggunaan Layanan.
        </p>
        <p>
            Akses Anda ke dan penggunaan Layanan bergantung pada penerimaan dan kepatuhan Anda terhadap Syarat dan Ketentuan ini. Syarat dan Ketentuan ini berlaku untuk semua pengunjung, pengguna, dan orang lain yang mengakses atau menggunakan Layanan.
        </p>

        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Hubungi Kami</h2>
        <p>
            Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami melalui formulir di halaman Bantuan kami.
        </p>
      </div>
    </div>
  );
}