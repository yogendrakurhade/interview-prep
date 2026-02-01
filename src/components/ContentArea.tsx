import type { Subject } from "../types";
import { QuestionDisplay } from "./QuestionDisplay";
import { useRef, useEffect } from "react";

interface ContentAreaProps {
  subjects: Subject[];
  selectedSubject: string | null;
  selectedTopic: string | null;
}

export function ContentArea({
  subjects,
  selectedSubject,
  selectedTopic,
}: ContentAreaProps) {
  const subject = subjects.find((s) => s.id === selectedSubject);
  const topic = subject?.topics.find((t) => t.id === selectedTopic);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [selectedTopic]);

  if (!selectedSubject) {
    return (
      <div className="content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
        <div className="text-6xl mb-4">📚</div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">Welcome to Interview Prep</h2>
        <p className="text-gray-600 text-lg">Choose a subject from the sidebar to get started.</p>
      </div>
    );
  }

  if (!selectedTopic) {
    return (
      <div className="content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
        <div className="text-6xl mb-4">👉</div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">Select a Topic</h2>
        <p className="text-gray-600 text-lg">Choose a topic to view questions and answers.</p>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="content-area flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-800">Topic Not Found</h2>
      </div>
    );
  }

  return (
    <div ref={contentRef} className="content-area flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-12 md:p-16">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-3 mb-8 text-sm">
          <span className="px-4 py-2 bg-white rounded-full font-semibold text-indigo-600 shadow-sm border-2 border-indigo-100">
            {subject?.name}
          </span>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="px-4 py-2 bg-white rounded-full font-semibold text-purple-600 shadow-sm border-2 border-purple-100">
            {topic.name}
          </span>
        </nav>

        {/* Header */}
        <div className="mb-10 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {topic.name}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold text-sm">
                {topic.questions.length}
              </div>
              <span className="text-gray-700 font-semibold">
                question{topic.questions.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-10 space-y-2">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{
                width: `${Math.min((topic.questions.length / 15) * 100, 100)}%`,
              }}
            />
          </div>
          <p className="text-sm text-gray-500">Learning path progress</p>
        </div>

        {/* Questions */}
        <div className="grid gap-8">
          {topic.questions.map((question, index) => (
            <div key={question.id} className="transform transition-all duration-300 hover:scale-[1.01]">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <QuestionDisplay question={question} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
