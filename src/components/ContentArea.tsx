import type { Subject } from "../types";
import { useRef, useEffect, lazy, Suspense, useState } from "react";

// Lazy load QuestionDisplay for better performance
const QuestionDisplay = lazy(() => import("./QuestionDisplay").then(m => ({ default: m.QuestionDisplay })));

// Loading skeleton for questions
function QuestionSkeleton() {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-100 rounded w-1/2"></div>
    </div>
  );
}

interface ContentAreaProps {
  subjects: Subject[];
  selectedSubject: string | null;
  selectedTopic: string | null;
  onSubjectSelect?: (subjectId: string) => void;
  onTopicSelect?: (topicId: string) => void;
}

export function ContentArea({
  subjects,
  selectedSubject,
  selectedTopic,
  onSubjectSelect,
  onTopicSelect,
}: ContentAreaProps) {
  const subject = subjects.find((s) => s.id === selectedSubject);
  const topic = subject?.topics.find((t) => t.id === selectedTopic);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  const [showQuestionNav, setShowQuestionNav] = useState(false);
  // Store both topic and question id to auto-reset when topic changes
  const [expandedQuestion, setExpandedQuestion] = useState<{ topicId: string; questionId: string } | null>(null);
  
  // Derive expanded question id for current topic only
  const expandedQuestionId = expandedQuestion?.topicId === selectedTopic ? expandedQuestion.questionId : null;

  const scrollToQuestion = (questionId: string) => {
    if (selectedTopic) {
      setExpandedQuestion({ topicId: selectedTopic, questionId });
    }
    // Small delay to ensure state updates before scrolling
    setTimeout(() => {
      const element = document.getElementById(`question-${questionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
    setShowQuestionNav(false);
  };

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
    <div ref={contentRef} className="content-area flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sticky Breadcrumb Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 px-12 md:px-16 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm flex-wrap">
          {/* Subject Label */}
          <span className="px-3 py-1.5 bg-gray-100 rounded-full font-semibold text-gray-500">
            Subject
          </span>
          
          {/* First Arrow - Change Subject Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowSubjectDropdown(true)}
            onMouseLeave={() => setShowSubjectDropdown(false)}
          >
            <svg 
              className="w-5 h-5 text-gray-400 hover:text-indigo-600 cursor-pointer transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            
            {/* Subject Dropdown */}
            {showSubjectDropdown && onSubjectSelect && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 py-2 min-w-[220px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-gray-100">
                  Switch Subject
                </div>
                {subjects.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onSubjectSelect(s.id);
                      setShowSubjectDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                      s.id === selectedSubject
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="text-xl">{s.icon || '📖'}</span>
                    <span className="font-medium">{s.name}</span>
                    {s.id === selectedSubject && (
                      <svg className="w-4 h-4 ml-auto text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Subject Name */}
          <span className="px-4 py-2 bg-white rounded-full font-semibold text-indigo-600 shadow-sm border-2 border-indigo-100 flex items-center gap-2">
            <span className="text-lg">{subject?.icon || '📖'}</span>
            {subject?.name}
          </span>
          
          {/* Second Arrow - Change Topic Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowTopicDropdown(true)}
            onMouseLeave={() => setShowTopicDropdown(false)}
          >
            <svg 
              className="w-5 h-5 text-gray-400 hover:text-purple-600 cursor-pointer transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            
            {/* Topic Dropdown */}
            {showTopicDropdown && onTopicSelect && subject && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 py-2 min-w-[220px] max-h-[300px] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-gray-100 sticky top-0 bg-white">
                  Switch Topic
                </div>
                {subject.topics.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onTopicSelect(t.id);
                      setShowTopicDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                      t.id === selectedTopic
                        ? 'bg-purple-50 text-purple-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-medium flex-1">{t.name}</span>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-500">
                      {t.questions.length}Q
                    </span>
                    {t.id === selectedTopic && (
                      <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Topic Name */}
          <span className="px-4 py-2 bg-white rounded-full font-semibold text-purple-600 shadow-sm border-2 border-purple-100">
            {topic.name}
          </span>

          {/* Question Navigator */}
          <div className="ml-auto relative">
            <button
              onClick={() => setShowQuestionNav(!showQuestionNav)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Jump to Q
              <svg className={`w-4 h-4 transition-transform ${showQuestionNav ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {showQuestionNav && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 py-2 min-w-[320px] max-h-[400px] overflow-y-auto z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-gray-100 sticky top-0 bg-white">
                  Questions ({topic.questions.length})
                </div>
                {topic.questions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => scrollToQuestion(q.id)}
                    className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-indigo-50 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-gray-700 line-clamp-2 leading-snug">
                      {q.question}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-12 md:p-16">
        <div className="max-w-5xl mx-auto">
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
            <div key={question.id} id={`question-${question.id}`} className="transform transition-all duration-300 hover:scale-[1.01] scroll-mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <Suspense fallback={<QuestionSkeleton />}>
                    <QuestionDisplay question={question} isExpanded={expandedQuestionId === question.id} />
                  </Suspense>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
