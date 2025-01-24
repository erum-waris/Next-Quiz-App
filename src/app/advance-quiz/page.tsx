import Link from "next/link";
import Quiz from "../components/Quiz";

const advanceQuestions = [
  
    {
        question: "What is the default pre-rendering method in Next.js?",
        options: [
          "Server-Side Rendering (SSR)",
          "Static Site Generation (SSG)",
          "Client-Side Rendering (CSR)",
          "Incremental Static Regeneration (ISR)"
        ],
        correctAnswer: "Static Site Generation (SSG)"
      },
      {
        question: "How can you fetch data at build time in Next.js?",
        options: [
          "getServerSideProps",
          "getStaticProps",
          "useEffect",
          "useSWR"
        ],
        correctAnswer: "getStaticProps"
      },
      {
        question: "Which method is used to fetch data on each request in Next.js?",
        options: [
          "getServerSideProps",
          "getStaticProps",
          "useEffect",
          "useSWR"
        ],
        correctAnswer: "getServerSideProps"
      },
      {
        question: "What is the purpose of the 'pages' directory in Next.js?",
        options: [
          "To define API routes",
          "To define React components",
          "To define routes and pages",
          "To store static assets"
        ],
        correctAnswer: "To define routes and pages"
      },
      {
        question: "How do you create a dynamic route in Next.js?",
        options: [
          "By creating a file with a dynamic segment in the 'pages' directory",
          "By using React Router",
          "By defining routes in 'next.config.js'",
          "By using the 'useRouter' hook"
        ],
        correctAnswer: "By creating a file with a dynamic segment in the 'pages' directory"
      },
      {
        question: "What is the purpose of the 'getStaticPaths' function in Next.js?",
        options: [
          "To specify which dynamic routes to pre-render at build time",
          "To fetch data on each request",
          "To define API routes",
          "To handle form submissions"
        ],
        correctAnswer: "To specify which dynamic routes to pre-render at build time"
      },
      {
        question: "How can you implement serverless functions in Next.js?",
        options: [
          "By creating files in the 'pages/api' directory",
          "By using the 'useEffect' hook",
          "By defining functions in 'next.config.js'",
          "By creating components in the 'components' directory"
        ],
        correctAnswer: "By creating files in the 'pages/api' directory"
      },
      {
        question: "What is the purpose of the 'next.config.js' file in a Next.js project?",
        options: [
          "To configure build settings and environment variables",
          "To define routes and pages",
          "To store static assets",
          "To manage state"
        ],
        correctAnswer: "To configure build settings and environment variables"
      },
      {
        question: "How can you enable TypeScript in a Next.js project?",
        options: [
          "By installing TypeScript and creating a 'tsconfig.json' file",
          "By installing TypeScript and creating a 'next.config.js' file",
          "By installing TypeScript and creating a 'pages/_app.tsx' file",
          "By installing TypeScript and creating a 'pages/_document.tsx' file"
        ],
        correctAnswer: "By installing TypeScript and creating a 'tsconfig.json' file"
      },
      {
        question: "What is the purpose of the 'getInitialProps' function in Next.js?",
        options: [
          "To fetch data before rendering a page",
          "To define API routes",
          "To handle form submissions",
          "To configure build settings"
        ],
        correctAnswer: "To fetch data before rendering a page"
      },
      {
        question: "How can you implement authentication in a Next.js application?",
        options: [
          "By using middleware and API routes",
          "By using the 'useEffect' hook",
          "By defining routes in 'next.config.js'",
          "By creating components in the 'components' directory"
        ],
        correctAnswer: "By using middleware and API routes"
      },
      {
        question: "What is the purpose of the 'useRouter' hook in Next.js?",
        options: [
          "To access the router object and perform navigation",
          "To fetch data on each request",
          "To define API routes",
          "To handle form submissions"
        ],
        correctAnswer: "To access the router object and perform navigation"
      },
      {
        question: "How can you implement image optimization in Next.js?",
        options: [
          "By using the 'next/image' component",
          "By using the 'useEffect' hook",
          "By defining routes in 'next.config.js'",
          "By creating components in the 'components' directory"
        ],
        correctAnswer: "By using the 'next/image' component"
      },
      {
        question: "What is the purpose of the 'next/head' component in Next.js?",
        options: [
          "To manage the document head for each page",
          "To define API routes",
          "To handle form submissions",
          "To configure build settings"
        ],
        correctAnswer: "To manage the document head for each page"
      },
      {
        question: "How can you implement internationalization (i18n) in Next.js?",
        options: [
          "By using the 'next-i18next' package",
          "By using the 'useEffect' hook",
          "By defining routes in 'next.config.js'",
          "By creating components in the 'components' directory"
        ],
        correctAnswer: "By using the 'next-i18next' package"
      },
      {
        question: "What is the purpose of the 'next/image' component in Next.js?",
        options: [
          "To optimize images for performance",
          "To define API routes",
          "To handle form submissions",
          "To configure build settings"
        ],
        correctAnswer: "To optimize images for performance"
      },
      {
        question: "How can you implement custom error pages in Next.js?",
        options: [
          "By creating '_error.js' or '_error.tsx' files in the 'pages' directory",
          "By using the 'useEffect' hook",
          "By defining routes in 'next.config.js'",
          "By creating components in the 'components' directory"
        ],
        correctAnswer: "By creating '_error.js' or '_error.tsx' files in the 'pages' directory"
      },
      {
        question: "What is the purpose of the 'next/link' component in Next.js?",
        options: [
          "To enable client-side navigation between pages",
          "To define API routes",
          "To handle form submissions",
          "To configure build settings"
        ],
        correctAnswer: "To enable client-side navigation between pages"
      },
      {
        question: "How does the App Router in Next.js 14+ differ from the Pages Router?",
        options: [
          "The App Router uses a file-based routing system, while the Pages Router uses a configuration-based system.",
          "The App Router allows for nested routing and layouts, whereas the Pages Router does not.",
          "The App Router is designed for static site generation, while the Pages Router is for server-side rendering.",
          "The App Router requires manual route definitions, while the Pages Router auto-generates routes."
        ],
        correctAnswer: "The App Router allows for nested routing and layouts, whereas the Pages Router does not."
      },
      {
        question: "In Next.js 14+, how can you define a nested route using the App Router?",
        options: [
          "By creating a subdirectory within the 'pages' directory.",
          "By using the 'next/link' component with a dynamic segment.",
          "By creating a subdirectory within the 'app' directory.",
          "By defining routes in the 'next.config.js' file."
        ],
        correctAnswer: "By creating a subdirectory within the 'app' directory."
      },
      {
        question: "What is the purpose of the 'layout.tsx' file in the App Router?",
        options: [
          "To define the global layout for the application.",
          "To handle API routes.",
          "To configure environment variables.",
          "To manage state across pages."
        ],
        correctAnswer: "To define the global layout for the application."
      },
      {
        question: "How does Next.js 14+ handle data fetching in the App Router?",
        options: [
          "By using the 'getServerSideProps' function.",
          "By using the 'getStaticProps' function.",
          "By using React's 'useEffect' hook.",
          "By using the 'fetch' API directly within components."
        ],
        correctAnswer: "By using React's 'useEffect' hook."
      },
      {
        question: "In the App Router, how can you handle dynamic routes?",
        options: [
          "By creating a file with a dynamic segment in the 'pages' directory.",
          "By using the 'useRouter' hook with dynamic parameters.",
          "By creating a file with a dynamic segment in the 'app' directory.",
          "By defining dynamic routes in the 'next.config.js' file."
        ],
        correctAnswer: "By creating a file with a dynamic segment in the 'app' directory."
      }
      
]





export default function AdvanceQuiz() {
    return (
      <>
       
        <main className="container flex flex-col justify-center items-center mx-auto py-16">
          <h1 className="text-3xl font-bold mb-8 text-center">Advance Level Quiz</h1>
          <button  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              <Link href="/">
            Best of Luck Go Home
              </Link>
          </button>
          <Quiz questions={advanceQuestions} />
        </main>
        
      </>
    );
  }