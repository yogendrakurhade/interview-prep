import { useState } from "react";
import type { Question } from "../types";
import { CodeSnippetComponent } from "./CodeSnippet";
import { DiagramDisplay } from "./DiagramDisplay";

interface QuestionDisplayProps {
  question: Question;
}

export function QuestionDisplay({ question }: QuestionDisplayProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
      {/* Question Section - Clickable */}
      <div
        className="flex items-center justify-between gap-4 cursor-pointer px-6 py-4"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <p className="text-lg font-bold text-gray-900 leading-relaxed flex-1">
          {question.question}
        </p>
        <div className="flex-shrink-0 text-gray-400 hover:text-indigo-600 transition-colors">
          {showAnswer ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
            </svg>
          )}
        </div>
      </div>

      {/* Answer Section - Not clickable for toggle */}
      {showAnswer && (
        <div className="mt-8 pt-8 px-6 pb-6 border-t-2 border-gray-100 space-y-6 animate-in fade-in duration-300">
          {/* Answer Text */}
          <div>
            <h3 className="inline-block px-3 py-1 bg-green-100 rounded-full text-xs font-bold text-green-700 mb-3">
              ANSWER
            </h3>
            <p className="text-gray-800 leading-relaxed text-base">
              {question.answer}
            </p>
          </div>

          {/* Diagrams */}
          {question.diagrams && question.diagrams.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                Diagrams
              </h4>
              <div className="space-y-4">
                {question.diagrams.map((diagram, index) => (
                  <DiagramDisplay key={index} diagram={diagram} />
                ))}
              </div>
            </div>
          )}

          {/* Code Examples */}
          {question.codeSnippets && question.codeSnippets.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                Code Examples
              </h4>
              <div className="space-y-3">
                {question.codeSnippets.map((snippet, index) => (
                  <CodeSnippetComponent key={index} snippet={snippet} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
