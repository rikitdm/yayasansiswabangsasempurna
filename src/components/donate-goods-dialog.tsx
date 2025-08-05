
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function DonateGoodsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-4 md:mt-0">Donate Goods</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Donate Goods</DialogTitle>
          <DialogDescription>
            Fill out the form below to initiate your goods donation. We'll be in touch to coordinate.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Your full name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" placeholder="your.email@example.com" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input id="company" placeholder="Your company name (optional)" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="items" className="text-right pt-2">
              Items
            </Label>
            <Textarea id="items" placeholder="Please describe the goods you'd like to donate (e.g., 10 boxes of new clothing, 1 pallet of canned goods)." className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Donation Inquiry</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
