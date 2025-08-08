import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { SVGProps } from "react";
import Image from "next/image";

export function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon className="h-6 w-6" /> },
    { name: "Twitter", icon: <TwitterIcon className="h-6 w-6" /> },
    { name: "Instagram", icon: <InstagramIcon className="h-6 w-6" /> },
    { name: "LinkedIn", icon: <LinkedinIcon className="h-6 w-6" /> },
  ];

  const footerLinks = [
    {
      title: "Tentang",
      links: [
        { label: "Misi Kami", href: "/about" },
        { label: "Tim", href: "/about" },
        { label: "Karier", href: "/about" },
      ],
    },
    {
      title: "Dukungan",
      links: [
        { label: "Pusat Bantuan", href: "/help" },
        { label: "Hubungi Kami", href: "/help" },
        { label: "FAQ", href: "/help" },
      ],
    },
    {
      title: "Hukum",
      links: [
        { label: "Kebijakan Privasi", href: "/privacy" },
        { label: "Ketentuan Layanan", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/yayasan-siswa-bangsa-sem-9uim7.appspot.com/o/Icon%2FLogo_ysbs-removebg-preview.png?alt=media&token=897c6252-2530-4970-b496-2204155192b4" alt="logo" width={40} height={40} />
            <span className="text-2xl font-bold text-primary font-headline">
              Yayasan Siswa Bangsa Sempurna
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Menghubungkan kedermawanan dengan kebutuhan di seluruh dunia.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="grid gap-2">
            <h4 className="font-semibold font-headline">{section.title}</h4>
            {section.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="grid gap-2">
          <h4 className="font-semibold font-headline">Tetap Terhubung</h4>
          <p className="text-sm text-muted-foreground">
            Daftar buletin kami untuk mendapatkan berita dan pembaruan terbaru.
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1"
            />
            <Button type="submit" variant="default">Berlangganan</Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yayasan Siswa Bangsa Sempurna. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-3.3 1.4H6.7c-3.3 0-3.3-3.3-3.3-3.3s1.6-1.4 3.3-1.4H22c0 0-1.6-1.4-3.3-1.4-1.8 0-3.3 1.4-3.3 1.4s-1.5-1.4-3.3-1.4c-1.8 0-3.3 1.4-3.3 1.4s-1.5-1.4-3.3-1.4c-1.8 0-3.3 1.4-3.3 1.4" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}