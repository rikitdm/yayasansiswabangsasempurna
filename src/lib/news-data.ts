
export interface NewsArticle {
  slug: string;
  imageSrc: string;
  imageHint: string;
  category: string;
  title: string;
  description: string;
  content: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "how-your-support-is-building-brighter-futures",
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "education children",
    category: "Education",
    title: "How Your Support is Building Brighter Futures",
    description: "Read about how our latest education initiatives are making a difference in children's lives.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Your generous contributions have enabled us to provide scholarships to over 200 students this year, giving them the tools they need to succeed and build a brighter future for themselves and their communities."
  },
  {
    slug: "on-the-front-lines-our-response-to-the-latest-crisis",
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "disaster relief supplies",
    category: "Disaster Relief",
    title: "On the Front Lines: Our Response to the Latest Crisis",
    description: "Learn how our teams are providing critical aid to communities affected by recent events.",
    content: "In the wake of the recent natural disaster, our emergency response teams were among the first on the ground, providing essential supplies like food, water, and shelter to those affected. Thanks to your immediate support, we've been able to reach over 1,000 families, offering them a beacon of hope in their darkest hour. The road to recovery is long, but together, we are making a tangible difference."
  },
  {
    slug: "bringing-healthcare-to-remote-villages",
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "community health",
    category: "Health",
    title: "Bringing Healthcare to Remote Villages",
    description: "Discover the impact of our mobile health clinics on underserved populations.",
    content: "Access to healthcare is a fundamental right, yet many in remote areas go without. Our mobile health clinics, staffed by dedicated volunteer doctors and nurses, travel to these underserved communities, providing free medical check-ups, vaccinations, and essential medicines. This year alone, we have conducted over 50 clinics, treating thousands and promoting a healthier future for all."
  },
  {
    slug: "a-sip-of-hope-new-wells-bring-life-to-a-community",
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "clean water well",
    category: "Clean Water",
    title: "A Sip of Hope: New Wells Bring Life to a Community",
    description: "See how access to clean water is transforming a village in a draught-stricken region.",
    content: "For the village of Tegal, a clean water source was a distant dream. Today, it's a reality. With your help, we have successfully constructed two new wells, providing the entire community with safe, accessible drinking water. This project has not only improved health and sanitation but has also empowered women and children, who no longer have to walk miles each day to fetch water."
  },
  {
    slug: "the-power-of-a-volunteer-hour",
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "volunteers working",
    category: "Community",
    title: "The Power of a Volunteer Hour",
    description: "Our volunteers are the heart of our organization. Read their stories.",
    content: "Every achievement, every milestone, every life changed is a testament to the power of our incredible volunteers. They are the driving force behind our mission, dedicating their time, skills, and passion to make a difference. From packing aid boxes to teaching classes, their contribution is immeasurable. This is a tribute to their unwavering spirit."
  },
  {
    slug: "annual-gala-raises-record-breaking-amount",
    imageSrc: "https://placehold.co/400x250.png",
    imageHint: "successful fundraising event",
    category: "Fundraising",
    title: "Annual Gala Raises Record-Breaking Amount",
    description: "A look back at our most successful fundraising event to date.",
    content: "Our Annual Charity Gala was a night to remember! We are thrilled to announce that we raised a record-breaking $500,000, all of which will go directly towards our educational and healthcare programs. We are immensely grateful to our sponsors, donors, and everyone who attended for their incredible generosity. Together, we are changing lives."
  },
];
