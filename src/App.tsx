import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { ContentArea } from "./components/ContentArea";
import { subjects } from "./data";
import "./App.css";

function App() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    // Auto-select first topic of the subject
    const subject = subjects.find((s) => s.id === subjectId);
    if (subject && subject.topics.length > 0) {
      setSelectedTopic(subject.topics[0].id);
    } else {
      setSelectedTopic(null);
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
      <Navbar
        subjects={subjects}
        selectedSubject={selectedSubject}
        selectedTopic={selectedTopic}
        onSubjectSelect={handleSubjectSelect}
        onTopicSelect={setSelectedTopic}
        isOpen={isNavbarOpen}
        onToggle={() => setIsNavbarOpen(!isNavbarOpen)}
      />
      <ContentArea
        subjects={subjects}
        selectedSubject={selectedSubject}
        selectedTopic={selectedTopic}
      />
    </div>
  );
}

export default App;
