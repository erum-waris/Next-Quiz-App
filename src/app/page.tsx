
import Link from "next/link";


export default function Home() {
  return (
  <> 
     
      <main className="container max-w-screen mx-auto text-center py-16">
        <h1 className="xs:text-xl text-3xl md:text-4xl font-bold mb-4">Welcome to Quiz App 
        Created By </h1>
        <div className="flex justify-center items-center">
        <h1 className="bg-green-400 text-2xl rounded-lg max-w-max py-2 px-2 font-bold mb-3">ERUM WARIS</h1>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Introduction To Next-js </h1>
       
        <p className="md:text-2xl text-xl mb-6 mt-4 rounded-lg text-white bg-blue-950 mx-7 p-5">Next.js is a powerful React framework that enables developers to build full-stack web applications with features like server-side rendering and static site generation. It simplifies the development process by handling configurations such as bundling and compiling, allowing you to focus on building your application. With Next.js, you can create fast, dynamic, and interactive React applications efficiently.</p>
        <Link href="/basic-quiz">
          <button className="bg-blue-600 text-white text-md md:text-xl py-3 px-6 rounded-lg hover:bg-gray-700">
            Attempt Quiz
          </button>
        </Link>
      </main>
      
    </>
  );
}
