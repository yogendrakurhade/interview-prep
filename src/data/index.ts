import type { Subject } from "../types";
import { javaScriptSubject } from "./subjects/javascript";
import { reactSubject } from "./subjects/react";

export const subjects: Subject[] = [javaScriptSubject, reactSubject];
