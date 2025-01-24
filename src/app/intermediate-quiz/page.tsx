import Link from "next/link";
import Quiz from "../components/Quiz";

const intermediateQuestions = [
    {
        question: "What is the purpose of the 'getStaticProps' function in Next.js?",
        options: [
          "To fetch data at build time for static generation",
          "To fetch data on each request for server-side rendering",
          "To handle form submissions",
          "To manage state in components",
        ],
        correctAnswer: "To fetch data at build time for static generation",
      },
      {
        question: "Which of the following methods is used to fetch data on each request in Next.js?",
        options: [
          "getStaticProps",
          "getServerSideProps",
          "getInitialProps",
          "useEffect",
        ],
        correctAnswer: "getServerSideProps",
      },
      {
        question: "How does Next.js handle routing?",
        options: [
          "By using a custom routing library",
          "By defining routes in a configuration file",
          "By mapping files in the 'pages' directory to routes",
          "By using React Router",
        ],
        correctAnswer: "By mapping files in the 'pages' directory to routes",
      },
      {
        question: "What is the purpose of the '_app.js' file in a Next.js project?",
        options: [
          "To define global styles",
          "To manage state across pages",
          "To customize the default App component",
          "To configure routing",
        ],
        correctAnswer: "To customize the default App component",
      },
      {
        question: "Which hook is used to access the router object in Next.js?",
        options: [
          "useRouter",
          "useHistory",
          "useLocation",
          "useParams",
        ],
        correctAnswer: "useRouter",
      },
      {
        question: "What is the default behavior of Next.js regarding static assets?",
        options: [
          "They are served from the 'public' directory",
          "They are bundled with the JavaScript files",
          "They are stored in a CDN",
          "They are embedded in the HTML",
        ],
        correctAnswer: "They are served from the 'public' directory",
      },
      {
        question: "Which of the following is true about Next.js API routes?",
        options: [
          "They are used to create serverless functions",
          "They are defined in the 'api' directory inside 'pages'",
          "They can be used to handle form submissions",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        question: "What is the purpose of the 'getServerSideProps' function in Next.js?",
        options: [
          "To fetch data at build time for static generation",
          "To fetch data on each request for server-side rendering",
          "To handle form submissions",
          "To manage state in components",
        ],
        correctAnswer: "To fetch data on each request for server-side rendering",
      },
      {
        question: "How can you implement dynamic routing in Next.js?",
        options: [
          "By using React Router",
          "By creating files with dynamic names in the 'pages' directory",
          "By defining routes in a configuration file",
          "By using the 'useRouter' hook",
        ],
        correctAnswer: "By creating files with dynamic names in the 'pages' directory",
      },
      {
        question: "What is the purpose of the 'getStaticPaths' function in Next.js?",
        options: [
          "To specify which dynamic routes to pre-render at build time",
          "To fetch data on each request for server-side rendering",
          "To handle form submissions",
          "To manage state in components",
        ],
        correctAnswer: "To specify which dynamic routes to pre-render at build time",
      },
      {
        question: "Which of the following is used to handle client-side navigation in Next.js?",
        options: [
          "useRouter",
          "Link",
          "useHistory",
          "useLocation",
        ],
        correctAnswer: "Link",
      },
      {
        question: "What is the purpose of the 'next.config.js' file in a Next.js project?",
        options: [
          "To define global styles",
          "To manage state across pages",
          "To customize the default Next.js configuration",
          "To configure routing",
        ],
        correctAnswer: "To customize the default Next.js configuration",
      },
      {
        question: "Which of the following methods is used to fetch data at build time in Next.js?",
        options: [
          "getStaticProps",
          "getServerSideProps",
          "getInitialProps",
          "useEffect",
        ],
        correctAnswer: "getStaticProps",
      },
      {
        question: "What is the purpose of the 'useEffect' hook in Next.js?",
        options: [
          "To fetch data at build time",
          "To fetch data on each request",
          "To perform side effects in function components",
          "To manage state in components",
        ],
        correctAnswer: "To perform side effects in function components",
      },
      {
        question: "Which of the following is true about Next.js Image Optimization?",
        options: [
          "It automatically optimizes images for faster loading",
          "It requires manual optimization for each image",
          "It only supports images in the 'public' directory",
          "It does not support external image sources",
        ],
        correctAnswer: "It automatically optimizes images for faster loading",
      },
      {
        question: "What is the purpose of the 'next/image' component in Next.js?",
        options: [
          "To display images with automatic optimization",
          "To display images without optimization",
          "To handle image uploads",
          "To manage image assets",
        ],
        correctAnswer: "To display images with automatic optimization",
      },
      {
        question: "Which of the following is used to handle CSS in Next.js?",
        options: [
          "CSS Modules",
          "Styled Components",
          "SASS",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        question: "What is the purpose of the 'getInitialProps' function in Next.js?",
        options: [
          "To fetch data on both server and client-side and pass it as props to the component",
          "To fetch data at build time for static generation",
          "To fetch data on each request for server-side rendering",
          "To handle form submissions",
        ],
        correctAnswer: "To fetch data on both server and client-side and pass it as props to the component",
      },
      {
        question: "Which of the following is used to handle client-side navigation in Next.js?",
        options: [
          "useRouter",
          "Link",
          "useHistory",
          "useLocation",
        ],
        correctAnswer: "Link",
      },
      {
        question: "What is the purpose of the 'next.config.js' file in a Next.js project?",
        options: [
          "To define global styles",
          "To manage state across pages",
          "To customize the default Next.js configuration",
          "To configure routing",
        ],
        correctAnswer: "To customize the default Next.js configuration",
      },
]




export default function IntermediateQuiz() {
  return (
    <>
     
      <main className="container flex flex-col justify-center items-center mx-auto py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Intermediate Level Quiz</h1>
        <button  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            <Link href="/advance-quiz">
           Advance Quiz
            </Link>
        </button>
        <Quiz questions={intermediateQuestions} />
      </main>
      
    </>
  );
}
