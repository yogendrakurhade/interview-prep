import type { Subject } from "../../../types";
import { reactBasicsTopic } from "./basics";
import { reactHooksTopic } from "./hooks";
import { reactPerformanceTopic } from "./performance";

export const reactSubject: Subject = {
  id: "react",
  name: "React",
  topics: [reactBasicsTopic, reactHooksTopic, reactPerformanceTopic],
};
