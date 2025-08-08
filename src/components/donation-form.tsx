"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HandHeart, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const oneTimeAmounts = [25, 50, 100, 250];
const monthlyAmounts = [10, 25, 50, 100];

export function DonationForm() {
  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = donationType === "one-time" ? oneTimeAmounts : monthlyAmounts;
  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(0); // Deselect predefined amounts
    }
  };


  return (
    <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-xl">
          BAGAIMANA ANDA MEMBANTU ANAK-ANAK DALAM KRISIS
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="one-time" onValueChange={setDonationType} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="one-time">Satu Kali Saja</TabsTrigger>
            <TabsTrigger value="monthly">Rutin</TabsTrigger>
          </TabsList>
          <TabsContent value="one-time">
            <div className="grid grid-cols-2 gap-2 mt-4">
              {oneTimeAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "default" : "outline"}
                  className={cn("w-full", selectedAmount === amount && "bg-accent hover:bg-accent/90")}
                  onClick={() => handleAmountClick(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="monthly">
          <div className="grid grid-cols-2 gap-2 mt-4">
              {monthlyAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "default" : "outline"}
                  className={cn("w-full", selectedAmount === amount && "bg-accent hover:bg-accent/90")}
                  onClick={() => handleAmountClick(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-4 text-center text-sm text-muted-foreground px-4">
            <p>Donasi sebesar $87 dapat menyediakan satu keluarga dengan paket makanan berisi sembako dan kebutuhan pokok lainnya.</p>
        </div>
        <div className="mt-4 relative">
            <Label htmlFor="customAmount" className="sr-only">Masukkan jumlah lain</Label>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
                id="customAmount"
                type="text"
                placeholder="Masukkan jumlah lain"
                className="pl-7"
                value={customAmount}
                onChange={handleCustomAmountChange}
                onFocus={() => setSelectedAmount(0)}
            />
        </div>
        <Button size="lg" className="w-full mt-4 bg-accent hover:bg-accent/90">
          <HandHeart className="mr-2" />
          Donasi Sekarang
        </Button>
        <div className="mt-2 text-center text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Lock className="w-3 h-3"/>
            <span>Donasi Anda diproses dengan aman</span>
        </div>
      </CardContent>
    </Card>
  );
}