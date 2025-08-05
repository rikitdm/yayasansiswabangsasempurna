
"use client";

import { useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
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
import { submitGoodsDonationAction } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CalendarIcon, CheckCircle2 } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const initialState = {
  success: false,
  message: "",
  errors: null,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit Donation Inquiry"}
        </Button>
    )
}

export function DonateGoodsDialog() {
  const [state, formAction] = useActionState(submitGoodsDonationAction, initialState);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-4 md:mt-0">Donate Goods</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
         {state.success ? (
            <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <DialogTitle>Thank You!</DialogTitle>
                <DialogDescription>
                    Your donation inquiry has been received. Our team will contact you shortly to coordinate the pick-up.
                </DialogDescription>
                <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
         ) : (
            <>
            <DialogHeader>
                <DialogTitle>Donate Goods</DialogTitle>
                <DialogDescription>
                Fill out the form below to initiate your goods donation. We'll be in touch to coordinate.
                </DialogDescription>
            </DialogHeader>
             {state.message && !state.success && (
                <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}
            <form action={formAction} className="space-y-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Name</Label>
                    <Input id="name" name="name" placeholder="Your full name" className="col-span-3" />
                </div>
                 {state.errors?.name && <p className="col-span-4 text-right text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" className="col-span-3" />
                </div>
                {state.errors?.email && <p className="col-span-4 text-right text-sm font-medium text-destructive">{state.errors.email[0]}</p>}

                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phone" className="text-right">Phone</Label>
                    <Input id="phone" name="phone" placeholder="Your phone number" className="col-span-3" />
                </div>
                {state.errors?.phone && <p className="col-span-4 text-right text-sm font-medium text-destructive">{state.errors.phone[0]}</p>}

                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="company" className="text-right">Company</Label>
                    <Input id="company" name="company" placeholder="Your company name (optional)" className="col-span-3" />
                </div>
                
                <input type="hidden" name="pickupTime" value={date?.toISOString() || ''} />
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="pickupTime" className="text-right">Pick-up Date</Label>
                     <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "col-span-3 justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                            >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                {state.errors?.pickupTime && <p className="col-span-4 text-right text-sm font-medium text-destructive">{state.errors.pickupTime[0]}</p>}

                <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="items" className="text-right pt-2">Items</Label>
                    <Textarea id="items" name="items" placeholder="Please describe the goods you'd like to donate (e.g., 10 boxes of new clothing, 1 pallet of canned goods)." className="col-span-3" />
                </div>
                {state.errors?.items && <p className="col-span-4 text-right text-sm font-medium text-destructive">{state.errors.items[0]}</p>}
                
                <DialogFooter>
                    <SubmitButton />
                </DialogFooter>
            </form>
            </>
         )}
      </DialogContent>
    </Dialog>
  );
}
