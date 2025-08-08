import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami | Yayasan Siswa Bangsa Sempurna",
  description: "Kami memiliki misi untuk menutup kesenjangan kebutuhan dan membuka kesempatan untuk semua. Pelajari tentang misi kami, kisah kami, dan bagaimana Anda dapat membuat perbedaan.",
};

const differenceCards = [
    {
        title: "Menjadi Pendukung",
        description: "Baik Anda memberikan donasi satu kali atau menjadi donatur bulanan, donasi Anda yang murah hati dapat memberikan dampak langsung bagi individu atau keluarga yang membutuhkan.",
        buttonText: "Pelajari Lebih Lanjut",
        href: "/give",
    },
    {
        title: "Donasi Barang",
        description: "Saat bencana melanda, bersiaplah untuk membantu. Kami dapat bekerja sama dengan tim Anda untuk memastikan barang-barang Anda digunakan pada waktu yang tepat selama upaya pemulihan dan tidak terbuang sia-sia.",
        buttonText: "Pelajari Lebih Lanjut",
        href: "/give/goods",
    },
    {
        title: "Bergabung dengan Tim Kami",
        description: "Berkontribusi pada misi kami dengan membantu tim kami menyortir, mengemas, dan mengirimkan barang-barang yang disumbangkan. Tertarik dengan karier? Cari posisi yang terbuka.",
        buttonText: "Pelajari Lebih Lanjut",
        href: "/help",
    },
    {
        title: "Menjadi Anggota",
        description: "Dengan bergabung dalam jaringan lembaga nonprofit kami, Anda dapat menerima barang-barang yang sangat dibutuhkan untuk membantu komunitas Anda sebelum dan sesudah bencana.",
        buttonText: "Pelajari Lebih Lanjut",
        href: "/signup",
    },
];

const teamMembers = [
    {
        name: "Nahdi Permadi",
        role: "Ketua Yayasan",
        imageSrc: "https://placehold.co/300x300.png",
        imageHint: "portrait person"
    },
    {
        name: "Anis Toha Mansur",
        role: "Dewan Penasehat",
        imageSrc: "https://placehold.co/300x300.png",
        imageHint: "portrait person"
    },
    {
        name: "Adrian Wakum",
        role: "Funds Operation",
        imageSrc: "https://placehold.co/300x300.png",
        imageHint: "portrait person"
    },
    {
        name: "Riki Kusnadi",
        role: "IT Support",
        imageSrc: "https://placehold.co/300x300.png",
        imageHint: "portrait person"
    }
];

export default function AboutPage() {
  const heroImage = "https://placehold.co/600x400.png";

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              KAMI DALAM MISI UNTUK MENUTUP KESENJANGAN KEBUTUHAN
            </h1>
            <p className="text-lg text-muted-foreground">
              Pada tahun 1983, kami memulai perjalanan untuk mendistribusikan donasi produk langsung kepada orang-orang yang membutuhkan dan, hari ini, kami masih terus berjalan. Melalui kemitraan yang langgeng dengan para donatur korporat dan jaringan lembaga nonprofit kami, kami dengan bangga telah mendistribusikan lebih dari $18 miliar dalam bentuk barang kepada lebih dari 100 juta orang di seluruh dunia.
            </p>
            <p className="text-lg text-muted-foreground">
              Di tengah urgensi peristiwa cuaca ekstrem, kemiskinan yang terus-menerus, dan krisis yang mendesak, kami terus menutup kesenjangan kebutuhan dan membuka peluang: bagi para donatur dan lembaga nonprofit untuk melayani komunitas mereka dengan lebih baik, bagi komunitas untuk menjadi lebih tangguh, dan bagi kita semua untuk menciptakan dunia yang lebih berkelanjutan.
            </p>
          </div>
          <div>
            <Image
              src={heroImage}
              alt="Tim kami sedang bekerja"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="volunteers warehouse"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="py-12 md:py-24 max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Misi Kami</h2>
            <p className="text-xl font-semibold text-primary">
                Misi kami adalah menutup kesenjangan kebutuhan untuk membuka kesempatan bagi semua.
            </p>
            <p className="text-muted-foreground">
                Kita hidup di dunia yang serba berkecukupan, namun jutaan orang berada dalam kebutuhan kritis setiap hari, menciptakan kesenjangan kebutuhan yang luas. Kami dalam misi untuk menutup kesenjangan itu. Kami tahu ada lebih dari cukup untuk semua. Itulah mengapa kami bekerja untuk menyalurkan barang-barang donasi ke tempat yang paling membutuhkannya, untuk menutup kesenjangan kebutuhan.
            </p>
             <p className="text-muted-foreground">
               Ketika kita menutup kesenjangan, kita membuka peluang: bagi para donatur dan lembaga nonprofit untuk melayani komunitas mereka dengan lebih baik, bagi komunitas untuk menjadi lebih tangguh dan bagi kita semua untuk mengurangi limbah. Tetapi yang terpenting, kami membantu orang-orang untuk mencapai potensi mereka yang tak terbatas.
            </p>
        </div>

        {/* Our Team Section */}
        <div className="py-12 md:py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Tim Kami</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <Card key={member.name} className="text-center flex flex-col items-center justify-start p-4">
                        <Image
                          src={member.imageSrc}
                          alt={member.name}
                          width={150}
                          height={150}
                          className="rounded-full mx-auto mb-4"
                          data-ai-hint={member.imageHint}
                        />
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-2">
                            <p className="text-muted-foreground">{member.role}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        {/* Make a Difference Section */}
        <div className="py-12 md:py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Buat Perbedaan</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {differenceCards.map((card) => (
                    <Card key={card.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <CardDescription>{card.description}</CardDescription>
                        </CardContent>
                        <CardContent>
                            <Link href={card.href}>
                                <Button variant="outline">{card.buttonText}</Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

      </div>
    </>
  );
}