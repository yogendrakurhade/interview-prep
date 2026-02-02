import type { Subject } from "../types";
import { javaScriptSubject } from "./subjects/javascript";
import { reactSubject } from "./subjects/react";
import { csharpSubject } from "./subjects/csharp";
import { microservicesSubject } from "./subjects/microservices";
import { csharpAdvancedSubject } from "./subjects/csharp-advanced";
import { azureSubject } from "./subjects/azure";
import { azureDevOpsSubject } from "./subjects/azure-devops";

export const subjects: Subject[] = [
  javaScriptSubject,
  reactSubject,
  csharpSubject,
  microservicesSubject,
  csharpAdvancedSubject,
  azureSubject,
  azureDevOpsSubject,
];
