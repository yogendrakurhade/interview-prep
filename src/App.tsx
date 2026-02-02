import { useState, useEffect, lazy, Suspense } from "react";
import { subjects } from "./data";
import "./App.css";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar").then(m => ({ default: m.Navbar })));
const ContentArea = lazy(() => import("./components/ContentArea").then(m => ({ default: m.ContentArea })));

// Loading fallback component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <span className="text-gray-600 font-medium">Loading...</span>
      </div>
    </div>
  );
}

function App() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const handleSubjectSelect = (subjectId: string, topicId?: string) => {
    setSelectedSubject(subjectId);
    // If a specific topic is provided, use it; otherwise auto-select first topic
    if (topicId) {
      setSelectedTopic(topicId);
    } else {
      const subject = subjects.find((s) => s.id === subjectId);
      if (subject && subject.topics.length > 0) {
        setSelectedTopic(subject.topics[0].id);
      } else {
        setSelectedTopic(null);
      }
    }
  };

  // Scroll to top when topic changes
  useEffect(() => {
    const contentArea = document.querySelector(".content-area");
    if (contentArea) {
      contentArea.scrollTop = 0;
    }
  }, [selectedTopic]);

  return (
    <div className="app">
      <Suspense fallback={<div className="w-64 bg-gray-100 animate-pulse" />}>
        <Navbar
          subjects={subjects}
          selectedSubject={selectedSubject}
          selectedTopic={selectedTopic}
          onSubjectSelect={handleSubjectSelect}
          onTopicSelect={setSelectedTopic}
          isOpen={isNavbarOpen}
          onToggle={() => setIsNavbarOpen(!isNavbarOpen)}
        />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ContentArea
          subjects={subjects}
          selectedSubject={selectedSubject}
          selectedTopic={selectedTopic}
          onSubjectSelect={handleSubjectSelect}
          onTopicSelect={setSelectedTopic}
        />
      </Suspense>
    </div>
  );
}

export default App;
