
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Yayasan Siswa Bangsa Sempurna",
  description: "Read our privacy policy to understand how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-24 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline mb-8 text-primary">
        Privacy Policy
      </h1>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Yayasan Siswa Bangsa Sempurna (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the
          website (the &quot;Service&quot;). This page informs you of our policies
          regarding the collection, use, and disclosure of personal data when you
          use our Service and the choices you have associated with that data.
        </p>

        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
        </p>

        <h3 className="text-xl font-bold font-headline mt-6 mb-3 text-primary">Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you (&quot;Personal Data&quot;). Personally identifiable information
          may include, but is not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Use of Data</h2>
        <p>
          Yayasan Siswa Bangsa Sempurna uses the collected data for various purposes:
        </p>
        <ul>
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
        
        <h2 className="text-2xl font-bold font-headline mt-8 mb-4 text-primary">Contact Us</h2>
        <p>
            If you have any questions about this Privacy Policy, please contact us through the form on our Help page.
        </p>
      </div>
    </div>
  );
}
