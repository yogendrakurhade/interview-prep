import type { Subject } from "../types";

interface NavbarProps {
  subjects: Subject[];
  selectedSubject: string | null;
  selectedTopic: string | null;
  onSubjectSelect: (subjectId: string) => void;
  onTopicSelect: (topicId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Navbar({
  subjects,
  selectedSubject,
  selectedTopic,
  onSubjectSelect,
  onTopicSelect,
  isOpen,
  onToggle,
}: NavbarProps) {
  const currentSubject = subjects.find((s) => s.id === selectedSubject);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`flex flex-col h-screen bg-white shadow-2xl flex-shrink-0 border-r-2 border-indigo-100 transition-all duration-300 ease-in-out ${
          isOpen ? "w-80" : "w-24"
        }`}
      >
        {/* Header */}
        <div className="px-6 py-8 border-b-2 border-indigo-100 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex-shrink-0">
          <div className="flex items-center justify-between">
            {isOpen && (
              <div>
                <h1 className="text-4xl font-bold tracking-tight">📚</h1>
                <p className="text-base font-semibold mt-3 opacity-90">Interview Prep Guide</p>
              </div>
            )}
            {!isOpen && <h1 className="text-3xl font-bold">📚</h1>}
            <button
              onClick={onToggle}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              title={isOpen ? "Collapse" : "Expand"}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 0z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.293 10.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414l-3.293 3.293a1 1 0 01-1.414 0z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex flex-1 overflow-hidden gap-0">
          {/* Subjects Sidebar */}
          <div className="flex-1 border-r-2 border-gray-200 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
            <div className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-indigo-600 bg-white border-b border-gray-200 sticky top-0">
              {isOpen && "Subjects"}
              {!isOpen && "📋"}
            </div>
            <ul className="space-y-3 p-4">
              {subjects.map((subject) => (
                <li key={subject.id}>
                  <button
                    className={`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                      selectedSubject === subject.id
                        ? "bg-indigo-600 text-white shadow-lg scale-105"
                        : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                    }`}
                    onClick={() => onSubjectSelect(subject.id)}
                    title={subject.name}
                  >
                    {isOpen ? subject.name : subject.name.charAt(0).toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics Sidebar */}
          {currentSubject && isOpen && (
            <div className="w-40 border-r-2 border-gray-200 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
              <div className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-purple-600 bg-white border-b border-gray-200 sticky top-0">
                Topics
              </div>
              <ul className="space-y-3 p-4">
                {currentSubject.topics.map((topic) => (
                  <li key={topic.id}>
                    <button
                      className={`w-full text-left px-5 py-4 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-between ${
                        selectedTopic === topic.id
                          ? "bg-purple-600 text-white shadow-lg scale-105"
                          : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                      }`}
                      onClick={() => onTopicSelect(topic.id)}
                    >
                      <span>{topic.name}</span>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ml-2 ${
                          selectedTopic === topic.id
                            ? "bg-white/30 text-white"
                            : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {topic.questions.length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
