"use client";

import { useState, useTransition } from "react";
import { useAuth } from "@/context/auth-context";
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
import Link from "next/link";

const initialState = {
  success: false,
  message: "",
  errors: null,
};


export function DonateGoodsDialog() {
  const { user, loading } = useAuth();
  const [formState, setFormState] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    if (!user) {
        setFormState({ ...initialState, message: "Anda harus masuk untuk mengirimkan donasi." });
        return;
    }
    // Add user id to the form data
    formData.append('userId', user.uid);
    formData.append('pickupTime', date ? date.toISOString() : '');

    startTransition(async () => {
        const result = await submitGoodsDonationAction(formState, formData);
        setFormState(result);
    });
  }

  // Reset state when dialog is closed or opened
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
       setTimeout(() => {
        setFormState(initialState);
        setDate(undefined);
      }, 500);
    }
    setOpen(isOpen);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-4 md:mt-0">Donasi Barang</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
         {formState.success ? (
            <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <DialogTitle>Terima Kasih!</DialogTitle>
                <DialogDescription>
                    Permintaan donasi Anda telah diterima. Tim kami akan segera menghubungi Anda untuk mengoordinasikan pengambilan.
                </DialogDescription>
                <Button onClick={() => handleOpenChange(false)}>Tutup</Button>
            </div>
         ) : (
            <>
            <DialogHeader>
                <DialogTitle>Donasi Barang</DialogTitle>
                <DialogDescription>
                Isi formulir di bawah ini untuk memulai donasi barang Anda. Kami akan menghubungi Anda untuk berkoordinasi.
                </DialogDescription>
            </DialogHeader>
             {formState.message && !formState.success && (
                <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{formState.message}</AlertDescription>
                </Alert>
            )}
            
            {loading ? <p>Memuat...</p> : !user ? (
                 <div className="py-8 text-center space-y-4">
                    <AlertCircle className="w-16 h-16 text-destructive mx-auto" />
                    <DialogTitle>Silakan Masuk</DialogTitle>
                    <DialogDescription>
                        Anda harus masuk untuk menyumbangkan barang. Ini memungkinkan kami untuk melacak kontribusi Anda dan agar Anda dapat melihat dampaknya.
                    </DialogDescription>
                    <div className="flex gap-4 justify-center">
                        <Button asChild><Link href="/signin">Masuk</Link></Button>
                        <Button asChild variant="outline"><Link href="/signup">Daftar</Link></Button>
                    </div>
                </div>
            ) : (
                <form action={handleSubmit} className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Nama</Label>
                        <Input id="name" name="name" placeholder="Nama lengkap Anda" className="col-span-3" defaultValue={user.displayName ?? ''} />
                    </div>
                     {formState.errors?.name && <p className="col-span-4 text-right text-sm font-medium text-destructive">{formState.errors.name[0]}</p>}
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="email.anda@contoh.com" className="col-span-3" defaultValue={user.email ?? ''} />
                    </div>
                    {formState.errors?.email && <p className="col-span-4 text-right text-sm font-medium text-destructive">{formState.errors.email[0]}</p>}

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">Telepon</Label>
                        <Input id="phone" name="phone" placeholder="Nomor telepon Anda" className="col-span-3" />
                    </div>
                    {formState.errors?.phone && <p className="col-span-4 text-right text-sm font-medium text-destructive">{formState.errors.phone[0]}</p>}

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="company" className="text-right">Perusahaan</Label>
                        <Input id="company" name="company" placeholder="Nama perusahaan Anda (opsional)" className="col-span-3" />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="pickupTime" className="text-right">Tanggal Pengambilan</Label>
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
                                {date ? format(date, "PPP") : <span>Pilih tanggal</span>}
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
                    {formState.errors?.pickupTime && <p className="col-span-4 text-right text-sm font-medium text-destructive">{formState.errors.pickupTime[0]}</p>}

                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="items" className="text-right pt-2">Barang</Label>
                        <Textarea id="items" name="items" placeholder="Harap jelaskan barang yang ingin Anda sumbangkan (mis., 10 kotak pakaian baru, 1 palet makanan kaleng)." className="col-span-3" />
                    </div>
                    {formState.errors?.items && <p className="col-span-4 text-right text-sm font-medium text-destructive">{formState.errors.items[0]}</p>}
                    
                    <DialogFooter>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Mengirim..." : "Kirim Permintaan Donasi"}
                        </Button>
                    </DialogFooter>
                </form>
            )}
            </>
         )}
      </DialogContent>
    </Dialog>
  );
}