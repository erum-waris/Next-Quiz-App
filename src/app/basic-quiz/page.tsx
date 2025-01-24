import Link from "next/link";
import Quiz from "../components/Quiz";



const basicQuestions = [
        {
          question: "What is Next.js?",
          options: [
            "A JavaScript library for building user interfaces",
            "A framework for server-side rendering React applications",
            "A CSS framework for styling web applications",
            "A database management system",
          ],
          correctAnswer: "A framework for server-side rendering React applications",
        },
        {
          question: "Which command is used to create a new Next.js application?",
          options: [
            "npx create-react-app my-app",
            "npx create-next-app my-app",
            "npm init next-app my-app",
            "npm create-next-app my-app",
          ],
          correctAnswer: "npx create-next-app my-app",
        },
        {
          question: "In Next.js, which folder is used to define routes?",
          options: ["components", "pages", "routes", "views"],
          correctAnswer: "pages",
        },
        {
          question: "What does SSG stand for in Next.js?",
          options: [
            "Server-Side Generation",
            "Static Site Generation",
            "Single-Page Generation",
            "Static Server Generation",
          ],
          correctAnswer: "Static Site Generation",
        },
        {
          question: "Which function is used to fetch data at build time in Next.js?",
          options: [
            "getServerSideProps",
            "getStaticProps",
            "componentDidMount",
            "useEffect",
          ],
          correctAnswer: "getStaticProps",
        },
        {
          question: "How do you create a dynamic route in Next.js?",
          options: [
            "By using the useRouter hook",
            "By creating a file with square brackets in the pages directory",
            "By defining routes in a routes.js file",
            "By using the Link component",
          ],
          correctAnswer:
            "By creating a file with square brackets in the pages directory",
        },
        {
          question: "Which of the following is a built-in CSS support feature in Next.js?",
          options: ["CSS Modules", "Styled Components", "Sass", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          question: "What is the purpose of the next.config.js file in a Next.js project?",
          options: [
            "To configure the database connection",
            "To define environment variables",
            "To customize the Next.js configuration",
            "To set up routing rules",
          ],
          correctAnswer: "To customize the Next.js configuration",
        },
        {
          question: "Which method is used for client-side navigation in Next.js?",
          options: [
            "window.location.href",
            "Link component from next/link",
            "navigate function",
            "useHistory hook",
          ],
          correctAnswer: "Link component from next/link",
        },
        {
          question: "What is the default port for running a Next.js application in development mode?",
          options: ["3000", "8000", "5000", "8080"],
          correctAnswer: "3000",
        },
        {
          question: "How can you enable TypeScript support in a Next.js project?",
          options: [
            "Rename files to .ts and .tsx",
            "Install TypeScript and create a tsconfig.json file",
            "Use the --typescript flag when creating the app",
            "All of the above",
          ],
          correctAnswer: "All of the above",
        },
        {
          question: "Which hook is provided by Next.js for accessing the router object?",
          options: ["useRouter", "useRoute", "useNavigation", "useHistory"],
          correctAnswer: "useRouter",
        },
        {
          question: "What is the purpose of the _app.js file in Next.js?",
          options: [
            "To define API routes",
            "To customize the default HTML document",
            "To initialize pages and persist layout between page changes",
            "To configure environment variables",
          ],
          correctAnswer:
            "To initialize pages and persist layout between page changes",
        },
        {
          question: "How do you add global CSS styles in a Next.js application?",
          options: [
            "Import the CSS file in the _app.js file",
            "Import the CSS file in each component",
            "Use inline styles",
            "Use CSS Modules",
          ],
          correctAnswer: "Import the CSS file in the _app.js file",
        },
        {
          question: "Which of the following is true about Next.js API routes?",
          options: [
            "They are used to create serverless functions",
            "They are defined in the api directory inside pages",
            "They can be used to handle form submissions",
            "All of the above",
          ],
          correctAnswer: "All of the above",
        },
        {
          question: "What does the next build command do?",
          options: [
            "Starts the development server",
            "Builds the application for production",
            "Runs the application in production mode",
            "Cleans the build artifacts",
          ],
          correctAnswer: "Builds the application for production",
        },
        {
          question: "How can you serve static files in Next.js?",
          options: [
            "Place them in the public directory",
            "Place them in the static directory",
            "Place them in the assets directory",
            "Place them in the public/static directory",
          ],
          correctAnswer: "Place them in the public directory",
        },
        {
          question: "Which lifecycle method is not available in Next.js?",
          options: [
            "componentDidMount",
            "getInitialProps",
            "getServerSideProps",
            "getStaticProps",
          ],
          correctAnswer: "componentDidMount",
        },
        {
          question: "What is the purpose of the next/link component?",
          options: [
            "To link CSS files",
            "To perform client-side navigation",
            "To link JavaScript files",
            "To create external links",
          ],
          correctAnswer: "To perform client-side navigation",
        },
        {
          question: "How do you handle images in Next.js for optimization?",
          options: [
            "Use the next/image component",
            "Use the img HTML tag",
            "Use external image hosting",
            "Use CSS background images",
          ],
          correctAnswer: "Use the next/image component",
        },
      
      
      

];

export default function BasicQuiz() {
  return (
    <>
     
      <main className="container flex flex-col justify-center items-center mx-auto py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Basic Level Quiz</h1>
        <button  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            <Link href="/intermediate-quiz">
            Intermediate Quiz
            </Link>
        </button>
        <Quiz questions={basicQuestions} />
      </main>
      
    </>
  );
}
