
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export const metadata: Metadata = {
  title: "Help & FAQ | Yayasan Siswa Bangsa Sempurna",
  description: "Find answers to frequently asked questions.",
};

const faqs = [
    {
        question: "Is my donation tax-deductible?",
        answer: "Yes, we are a registered 501(c)(3) non-profit organization, and all donations are tax-deductible to the extent allowed by law."
    },
    {
        question: "How much of my donation goes directly to programs?",
        answer: "We are proud to say that 85% of every dollar donated goes directly to our programs and services, with the remaining 15% covering administrative and fundraising costs."
    },
    {
        question: "Can I choose which project my donation supports?",
        answer: "Absolutely. When you donate, you can select a specific project or fund you wish to support. If you don't select one, your gift will be used where it is needed most."
    },
    {
        question: "How do I get a receipt for my donation?",
        answer: "A receipt for your donation will be sent to the email address you provide at the time of donation. For monthly donors, a consolidated receipt is sent at the end of the year."
    },
    {
        question: "How can I volunteer?",
        answer: "We have various volunteer opportunities available. Please visit our 'For Nonprofits' page or contact us directly to learn more about how you can get involved."
    }
]

export default function HelpPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions? We're here to help.
        </p>
      </div>
      <div className="mx-auto max-w-3xl mt-12">
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
