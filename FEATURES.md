# Interview Prep Guide - Features

## ✅ Build Issues Resolved
- Fixed Vite config to output to `build/` directory instead of `dist/`
- Fixed TypeScript imports to use type-only imports for compliance with `verbatimModuleSyntax`
- Build now completes successfully without errors

## 📚 Core Features

### 1. **Navbar Navigation**
- Left sidebar: Browse all subjects
- Right sidebar: View topics for selected subject
- Click to select and navigate

### 2. **Questions & Answers**
- Toggle answer visibility with "Show Answer" button
- Clean, organized display
- Breadcrumb navigation

### 3. **Code Snippets** ✨ NEW
- Display code examples for each question
- Supports multiple programming languages (JavaScript, JSX, etc.)
- **Copy button** to quickly copy code to clipboard
- Syntax-highlighted code block with dark theme
- Example: Question "What are React hooks?" now includes actual code

### 4. **Diagrams** ✨ NEW
- Display visual diagrams related to concepts
- Each diagram has a title and optional description
- Example: Virtual DOM question includes a diagram placeholder
- Responsive image display

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx & Navbar.css - Navigation sidebar
│   ├── ContentArea.tsx & ContentArea.css - Main content display
│   ├── QuestionDisplay.tsx & QuestionDisplay.css - Question cards
│   ├── CodeSnippet.tsx & CodeSnippet.css - Code block display ✨
│   └── DiagramDisplay.tsx & DiagramDisplay.css - Diagram display ✨
├── data/
│   └── subjects.ts - Sample data with Q&A, code, diagrams
├── types/
│   └── index.ts - TypeScript interfaces
└── App.tsx - Main app component
```

## 🎨 Styling Highlights
- Modern gradient navbar (purple to pink)
- Dark code editor theme
- Smooth animations and transitions
- Responsive layout
- Custom scrollbars

## 🚀 How to Use

### Running the App
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run deploy     # Deploy to GitHub Pages
```

### Adding Questions with Code & Diagrams

Edit `src/data/subjects.ts`:

```typescript
{
  id: "q7",
  question: "Your question here?",
  answer: "Your answer here.",
  codeSnippets: [
    {
      language: "javascript",
      code: `// Your code here`
    }
  ],
  diagrams: [
    {
      title: "Diagram Title",
      imageUrl: "https://example.com/image.png",
      description: "Optional description"
    }
  ]
}
```

## 🎯 Data Structure

### Question Interface
```typescript
interface Question {
  id: string;
  question: string;
  answer: string;
  codeSnippets?: CodeSnippet[];
  diagrams?: Diagram[];
}

interface CodeSnippet {
  language: string;
  code: string;
}

interface Diagram {
  title: string;
  imageUrl: string;
  description?: string;
}
```

## ✨ Features at a Glance
- ✅ Hierarchical navigation (Subject → Topic → Questions)
- ✅ Toggle answer visibility
- ✅ Code snippets with copy functionality
- ✅ Diagram support with descriptions
- ✅ Beautiful UI with gradient theme
- ✅ Dark code editor theme
- ✅ Fully typed with TypeScript
- ✅ Production build ready

---

**Server Running on:** http://localhost:5174/
