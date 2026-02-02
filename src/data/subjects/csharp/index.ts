import type { Subject } from "../../../types";
import { csharpCreationalPatternsTopic } from "./creational-patterns";
import { csharpStructuralPatternsTopic } from "./structural-patterns";
import { csharpBehavioralPatternsTopic } from "./behavioral-patterns";

export const csharpSubject: Subject = {
  id: "csharp",
  name: "C# Design Patterns",
  icon: "🛠️",
  topics: [csharpCreationalPatternsTopic, csharpStructuralPatternsTopic, csharpBehavioralPatternsTopic],
};
