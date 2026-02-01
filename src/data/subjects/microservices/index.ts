import type { Subject } from "../../../types";
import { microservicesCommunicationPatternsTopic } from "./communication-patterns";
import { microservicesResiliencePatternsTopic } from "./resilience-patterns";
import { microservicesDataPatternsTopic } from "./data-patterns";

export const microservicesSubject: Subject = {
  id: "microservices",
  name: "Microservices",
  topics: [
    microservicesCommunicationPatternsTopic,
    microservicesResiliencePatternsTopic,
    microservicesDataPatternsTopic,
  ],
};
