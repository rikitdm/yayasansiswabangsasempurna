import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Yayasan Siswa Bangsa Sempurna",
  description: "Baca kebijakan privasi kami untuk memahami bagaimana kami menangani data Anda.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline mb-8 text-primary">
        Kebijakan Privasi
      </h1>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>Terakhir diperbarui: {new Date().toLocaleDateString()}</p>
        <p>
          Yayasan Siswa Bangsa Sempurna ("kami", "milik kami", atau "kita") mengoperasikan
          situs web ("Layanan"). Halaman ini memberitahu Anda tentang kebijakan kami
          mengenai pengumpulan, penggunaan, dan pengungkapan data pribadi saat Anda
          menggunakan Layanan kami dan pilihan yang Anda miliki terkait data tersebut.
        </p>

        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Pengumpulan dan Penggunaan Informasi</h2>
        <p>
          Kami mengumpulkan beberapa jenis informasi yang berbeda untuk berbagai tujuan
          untuk menyediakan dan meningkatkan Layanan kami kepada Anda.
        </p>

        <h3 className="text-xl font-bold font-headline mt-6 mb-3 text-primary">Jenis Data yang Dikumpulkan</h3>
        <h4>Data Pribadi</h4>
        <p>
          Saat menggunakan Layanan kami, kami mungkin meminta Anda untuk memberikan kami informasi
          tertentu yang dapat diidentifikasi secara pribadi yang dapat digunakan untuk menghubungi atau
          mengidentifikasi Anda ("Data Pribadi"). Informasi yang dapat diidentifikasi secara pribadi
          dapat mencakup, namun tidak terbatas pada:
        </p>
        <ul>
          <li>Alamat email</li>
          <li>Nama depan dan nama belakang</li>
          <li>Nomor telepon</li>
          <li>Alamat, Negara Bagian, Provinsi, Kode Pos, Kota</li>
          <li>Cookie dan Data Penggunaan</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Penggunaan Data</h2>
        <p>
          Yayasan Siswa Bangsa Sempurna menggunakan data yang dikumpulkan untuk berbagai tujuan:
        </p>
        <ul>
          <li>Untuk menyediakan dan memelihara Layanan</li>
          <li>Untuk memberitahu Anda tentang perubahan pada Layanan kami</li>
          <li>
            Untuk memungkinkan Anda berpartisipasi dalam fitur interaktif Layanan kami
            saat Anda memilih untuk melakukannya
          </li>
          <li>Untuk menyediakan layanan dan dukungan pelanggan</li>
          <li>
            Untuk memberikan analisis atau informasi berharga sehingga kami dapat meningkatkan
            Layanan
          </li>
          <li>Untuk memantau penggunaan Layanan</li>
          <li>Untuk mendeteksi, mencegah, dan mengatasi masalah teknis</li>
        </ul>
        
        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Hubungi Kami</h2>
        <p>
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui formulir di halaman Bantuan kami.
        </p>
      </div>
    </div>
  );
}