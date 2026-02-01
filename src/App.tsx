import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { ContentArea } from "./components/ContentArea";
import { subjects } from "./data";
import "./App.css";

function App() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  // Auto-select first topic when subject is selected
  useEffect(() => {
    if (selectedSubject) {
      const subject = subjects.find((s) => s.id === selectedSubject);
      if (subject && subject.topics.length > 0) {
        setSelectedTopic(subject.topics[0].id);
      } else {
        setSelectedTopic(null);
      }
    }
  }, [selectedSubject]);

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
        onSubjectSelect={(subjectId) => {
          setSelectedSubject(subjectId);
        }}
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
