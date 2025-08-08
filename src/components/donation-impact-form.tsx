"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { generateImpactNarrativeAction } from "@/app/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const initialState = {
  success: false,
  message: "",
  narrative: "",
  errors: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Menghasilkan..." : "Hasilkan Narasi"}
      <Sparkles className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function DonationImpactForm() {
  const [state, formAction] = useActionState(generateImpactNarrativeAction, initialState);
  
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-accent" />
          Hasilkan Dampak Donasi
        </CardTitle>
        <CardDescription>
          Lihat bagaimana AI kami dapat membuat narasi yang menarik untuk menunjukkan kepada para donatur dampak nyata dari kontribusi mereka.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectName">Nama Proyek</Label>
              <Input id="projectName" name="projectName" defaultValue="Inisiatif Air Bersih" />
              {state.errors?.projectName && <p className="text-sm font-medium text-destructive">{state.errors.projectName[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="donationAmount">Jumlah Donasi ($)</Label>
              <Input id="donationAmount" name="donationAmount" type="number" defaultValue="50" />
              {state.errors?.donationAmount && <p className="text-sm font-medium text-destructive">{state.errors.donationAmount[0]}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="projectGoal">Tujuan Proyek</Label>
            <Textarea id="projectGoal" name="projectGoal" defaultValue="Membangun dan memelihara 10 sumur baru di komunitas pedesaan, menyediakan air minum bersih dan dapat diakses oleh lebih dari 5.000 orang." />
            {state.errors?.projectGoal && <p className="text-sm font-medium text-destructive">{state.errors.projectGoal[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="impactPerDollar">Dampak per Dolar</Label>
            <Input id="impactPerDollar" name="impactPerDollar" defaultValue="Menyediakan air bersih bagi satu orang selama setahun." />
            {state.errors?.impactPerDollar && <p className="text-sm font-medium text-destructive">{state.errors.impactPerDollar[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
          {state.success && state.narrative && (
            <div className="mt-4 w-full rounded-lg border bg-secondary/30 p-4 animate-in fade-in-50">
              <h4 className="font-semibold mb-2">Narasi yang Dihasilkan:</h4>
              <p className="text-sm text-secondary-foreground">{state.narrative}</p>
            </div>
          )}
          {!state.success && state.message && (
            <p className="text-sm font-medium text-destructive">{state.message}</p>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}