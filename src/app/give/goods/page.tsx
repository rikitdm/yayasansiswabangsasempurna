
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Donate Goods | Yayasan Siswa Bangsa Sempurna",
    description: "Learn about the types of goods we accept and how your donation makes a difference.",
};

const itemCategories = [
  {
    title: "Clothing",
    items: ["Shoes", "Boots", "Coats", "Dress & Work Clothes", "Sweaters", "Pants", "Shorts", "Skirts", "Shirts", "Under Garments", "Hats", "Caps Gloves", "Scarves", "Purses", "Belts", "Watches", "And Accessories"],
  },
  {
    title: "Infant Supplies",
    items: ["Diapers", "Wipes", "Creams", "Lotions", "Strollers", "Car Seats", "Bottles", "Onesies", "Sleepers", "Blankets", "Pack-N-Plays", "Cribs", "Baby Monitors"],
  },
  {
    title: "Toys & games",
    items: ["Board Games", "Action Figures", "Dolls", "Stuffed Toys", "Children's Books", "Handheld Electronic Games"],
  },
  {
    title: "Toiletries",
    items: ["Shampoo", "Deodorant", "Soap", "Toothpaste", "Make-Up", "Fragrances", "Adult Diapers", "OTC Medicines", "First Aid", "Lotions", "Sunscreen", "Bug Spray"],
  },
  {
    title: "Technology",
    items: ["Laptops", "Tablets", "Desktop", "Computers"],
  },
  {
    title: "Cleaning Supplies",
    items: ["Detergent", "Fabric Softeners", "All-Purpose Cleaners", "Paper Towels", "Toilet Paper", "Ziploc Bags", "Buckets", "Mops", "Sponges", "Garbage Bags"],
  },
  {
    title: "Office & School supplies",
    items: ["Copy Paper", "Notebooks", "Calculators", "Backpacks", "Storage Containers", "Markers", "Crayons", "Arts & Crafts Supplies", "Pens", "Staplers", "Tape", "Glue"],
  },
  {
    title: "Home goods",
    items: ["Towels", "Kitchen Appliances", "Pots", "Pans", "Glasses", "Silverware", "Bedding", "Pillows", "Mattresses", "Hand Tools", "Power Tools", "Power Strips", "Lumber", "Paint"],
  },
  {
    title: "Electronics",
    items: ["TVs", "Phones", "Videos", "Music"],
  },
  {
    title: "Sporting Equipment",
    items: ["Balls", "Frisbees", "Bats", "Lawn Games", "Athletic Shoes", "Uniforms", "Clothing", "Sports Equipment"],
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
                      How You Can Do the Most Good?
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                      According to the United for ALICE Report, 42% of households already struggled to make ends meet before the pandemic — and today low-wage workers are being priced out of affording the basics due to unprecedented inflation. Every time you donate goods, your organization has a direct impact on people who need it most, now.
                    </p>
                </div>
                <Button size="lg" className="mt-4 md:mt-0">Donate Goods</Button>
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
