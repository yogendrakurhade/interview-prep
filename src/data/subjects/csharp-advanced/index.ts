import type { Subject } from "../../../types";
import { csharpOopsConceptsTopic } from "./oops-concepts";
import { csharpSolidPrinciplesTopic } from "./solid-principles";
import { csharpMultiThreadingTopic } from "./multi-threading";
import { csharpAsynchronousProgrammingTopic } from "./asynchronous-programming";
import { csharpLinqTopic } from "./linq";
import { csharpGarbageCollectionTopic } from "./garbage-collection";
import { csharpCollectionsTopic } from "./collections";
import { csharpNetCoreTopic } from "./net-core";

export const csharpAdvancedSubject: Subject = {
  id: "csharp-advanced",
  name: "C# Advanced",
  topics: [csharpOopsConceptsTopic, csharpSolidPrinciplesTopic, csharpMultiThreadingTopic, csharpAsynchronousProgrammingTopic, csharpLinqTopic, csharpGarbageCollectionTopic, csharpCollectionsTopic, csharpNetCoreTopic],
};
