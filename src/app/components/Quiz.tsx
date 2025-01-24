"use client";

import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizProps {
  questions: Question[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Show confetti for 3 seconds
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="p-4">
      {showConfetti && <Confetti width={width} height={height} />}
      <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
      <ul className="space-y-2">
        {question.options.map((option) => (
          <li
            key={option}
            className={`cursor-pointer border p-2 rounded text-xl border-black ${
              selectedAnswer === option
                ? option === question.correctAnswer
                  ? "bg-green-500 text-white scale-105"
                  : "bg-red-500 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>

      {showAnswer && (
        <div className="mt-4">
          <p className="text-lg border-black">
            <strong>Correct Answer:</strong> {question.correctAnswer}
          </p>
          <p className="text-lg border-black">
            <strong>Your Answer:</strong> {selectedAnswer}
          </p>
        </div>
      )}

      <div className="mt-6">
        {currentQuestion < questions.length - 1 ? (
            <div className="flex md:flex-row flex-col gap-4">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
          <button
          className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ${
            currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Previous Question
        </button>
          
          </div>
        ) : (
          <div>
            <p className="text-lg font-bold text-green-600">Quiz Completed!</p>
            <p className="text-lg">
              You scored {score} out of {questions.length}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
