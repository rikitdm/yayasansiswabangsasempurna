
import { Metadata } from "next";
import { DonationForm } from "@/components/donation-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ways to Give | Yayasan Siswa Bangsa Sempurna",
  description: "Explore the different ways you can contribute to our cause.",
};

export default function GivePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Ways to Give
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your contribution, big or small, makes a world of difference. Find the giving option that's right for you.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 mt-12 items-start">
        <div>
          <DonationForm />
        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Other Ways to Give</CardTitle>
                    <CardDescription>Beyond online donations, here are other ways you can support our work.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Corporate Matching</h3>
                        <p className="text-sm text-muted-foreground">Many employers will match your donation. Check with your HR department to double your impact.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Stock & Crypto Donations</h3>
                        <p className="text-sm text-muted-foreground">We accept donations of stock and cryptocurrency. Contact us for more information.</p>
                    </div>
                     <div>
                        <h3 className="font-semibold">Planned Giving</h3>
                        <p className="text-sm text-muted-foreground">Leave a lasting legacy by including us in your will or estate plans.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
