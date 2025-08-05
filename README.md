
# Cause Connector

Welcome to Cause Connector! This is a web application built to connect generosity with need, providing a platform for donors and non-profits to make a tangible impact.

This project was bootstrapped with [Firebase Studio](https://firebase.google.com/studio).

## Tech Stack

This project is built with a modern, performant, and scalable tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Generative AI**: [Firebase Genkit](https://firebase.google.com/docs/genkit)
- **Database**: [Firestore](https://firebase.google.com/docs/firestore)

## Project Structure

Here's a quick overview of the key directories:

- `src/app/`: This is the main directory for all pages in the application, following the Next.js App Router convention.
- `src/components/`: Contains all the reusable React components, including UI components from ShadCN.
- `src/lib/`: Holds utility functions and the Firebase configuration and data fetching logic.
- `src/ai/`: Contains all the Genkit flows for generative AI features.
- `public/`: For static assets like images or fonts.

## How to Customize Your Website

Most of the content on the website is directly written into the React components for each page. This makes it easy to find and update text, images, and other content.

### Example: Changing an Image on the "About Us" Page

As requested, here’s how you can change the main image on the "About Us" page:

1.  **Navigate to the file**: Open the file for the "About Us" page, which is located at `src/app/about/page.tsx`.

2.  **Find the image variable**: Near the top of the `AboutPage` function, you will see a line that defines the image URL:
    ```javascript
    export default function AboutPage() {
      const heroImage = "https://placehold.co/600x400.png";
      // ... rest of the component
    }
    ```

3.  **Update the URL**: Simply replace the placeholder URL (`"https://placehold.co/600x400.png"`) with the URL of your new image. For example:
    ```javascript
    const heroImage = "https://your-image-url.com/new-image.jpg";
    ```
    The website will update automatically to show your new image.

### Changing Other Content

-   **Text**: To change text, navigate to the relevant page file in `src/app/` and edit the text directly within the JSX. For example, to change the "Our Mission" text, you would edit it in `src/app/about/page.tsx`.
-   **Team Members**: Team members on the "About Us" page are defined in an array called `teamMembers` within the same file. You can edit the names, roles, and image sources there.
-   **Featured Projects**: The projects on the homepage are defined in a `projects` array in `src/app/page.tsx`. You can update their details in that file.

### Managing News Articles

The "News & Stories" section is dynamic and is managed through your **Firestore database**.

To add, remove, or edit articles, you need to:

1.  Go to the [Firebase Console](https://console.firebase.google.com/) for your project.
2.  Navigate to **Firestore Database**.
3.  Find the `newsArticles` collection.
4.  From there, you can add a new document for each new article. Make sure each document has the following fields:
    -   `slug` (string, e.g., "my-new-article")
    -   `title` (string)
    -   `description` (string)
    -   `content` (string)
    -   `category` (string)
    -   `imageSrc` (string, URL to the image)
    -   `imageHint` (string, for internal use)
    -   `author` (string)
    -   `publishedDate` (timestamp)

The website will automatically fetch and display the articles from your database.
