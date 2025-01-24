"use client"

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" sticky top-0 bg-blue-950 text-white py-4 text-xl">
      <nav className="container mx-auto flex justify-between items-center px-4">
      {isOpen ? <h1 className=""></h1>: <h1 className="text-3xl md:text-4xl font-bold  hover:underline">Quiz App</h1>}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/basic-quiz" className="hover:underline">
              Basic Quiz
            </Link>
          </li>
          <li>
            <Link href="/intermediate-quiz" className="hover:underline">
              Intermediate Quiz
            </Link>
          </li>
          <li>
            <Link href="/advance-quiz" className="hover:underline">
              Advance Quiz
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col justify-center items-center space-y-2 px-4 pb-4">
            <li>
              <Link href="/" className="hover:underline" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/basic-quiz"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Basic Quiz
              </Link>
            </li>
            <li>
              <Link
                href="/intermediate-quiz"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Intermediate Quiz
              </Link>
            </li>
            <li>
              <Link
                href="/advance-quiz"
                className="hover:underline"
                onClick={toggleMenu}
              >
                Advance Quiz
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
