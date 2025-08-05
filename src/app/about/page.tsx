
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Yayasan Siswa Bangsa Sempurna",
  description: "We're on a mission to close the need gap and open opportunity for all. Learn about our mission, our story, and how you can make a difference.",
};

const differenceCards = [
    {
        title: "Become a Supporter",
        description: "Whether you make a one-time donation or become a monthly donor, your generous gift can make a direct impact for an individual or family in need.",
        buttonText: "Learn More",
        href: "/give",
    },
    {
        title: "Donate Goods",
        description: "When disaster strikes, be ready to help. We can work with your team to ensure your goods are used at the right time during recovery efforts and don't end up going to waste.",
        buttonText: "Learn More",
        href: "/give/goods",
    },
    {
        title: "Join Our Team",
        description: "Contribute to our mission by helping our team sort, pack, and ship donated goods. Interested in careers? Search open positions.",
        buttonText: "Learn More",
        href: "/help",
    },
    {
        title: "Become a Member",
        description: "By joining our nonprofit network, you can receive critically needed goods to help your community both pre-disaster and post-disaster.",
        buttonText: "Learn More",
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
              WE'RE ON A MISSION TO CLOSE THE NEED GAP
            </h1>
            <p className="text-lg text-muted-foreground">
              In 1983, we set out on a journey to distribute product donations directly to people in need and, today, we're still going strong. Through lasting partnerships with our corporate donors and nonprofit network, we've proudly distributed more than $18 billion in goods to over 100 million people globally.
            </p>
            <p className="text-lg text-muted-foreground">
              Amid the urgency of extreme weather events, persistent poverty, and urgent crises, we continue to close the need gap and open opportunity: for donors and nonprofits to better serve their communities, for communities to become more resilient, and for us all to create a more sustainable world.
            </p>
          </div>
          <div>
            <Image
              src={heroImage}
              alt="Our team working"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="volunteers warehouse"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="py-12 md:py-24 max-w-4xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our Mission</h2>
            <p className="text-xl font-semibold text-primary">
                Our mission is to close the need gap to open opportunity for all.
            </p>
            <p className="text-muted-foreground">
                We live in a world of plenty, yet millions of people find themselves in critical need every day, creating a vast need gap. We are on a mission to close that gap. We know there's more than enough to go around. That's why we work to get donated goods to where they can do the most good, to close the need gap.
            </p>
             <p className="text-muted-foreground">
               When we close the gap, we open opportunity: for donors and nonprofits to better serve their communities, for communities to become more resilient and for us all to create less waste. But most of all, we help people to reach their boundless potential.
            </p>
        </div>

        {/* Our Team Section */}
        <div className="py-12 md:py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our Team</h2>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Make a Difference</h2>
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
