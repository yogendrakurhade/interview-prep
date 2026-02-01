import type { Subject } from "../types";
import { javaScriptSubject } from "./subjects/javascript";
import { reactSubject } from "./subjects/react";
import { csharpSubject } from "./subjects/csharp";
import { microservicesSubject } from "./subjects/microservices";

export const subjects: Subject[] = [
  javaScriptSubject,
  reactSubject,
  csharpSubject,
  microservicesSubject,
];
