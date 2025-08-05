
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Yayasan Siswa Bangsa Sempurna",
  description: "Read our terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline mb-8 text-primary">
        Terms of Service
      </h1>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Please read these terms and conditions carefully before using Our Service.
        </p>

        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Interpretation and Definitions</h2>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        
        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Acknowledgment</h2>
        <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>

        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Contact Us</h2>
        <p>
            If you have any questions about these Terms and Conditions, please contact us through the form on our Help page.
        </p>
      </div>
    </div>
  );
}
