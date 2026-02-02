import type { Subject } from "../../../types";
import { basicsTopics } from "./basics";
import { asyncTopic } from "./async";
import { closuresTopic } from "./closures";
import { thisBindingTopic } from "./this-binding";
import { prototypesTopic } from "./prototypes";
import { copyMethodsTopic } from "./copy-methods";

export const javaScriptSubject: Subject = {
  id: "javascript",
  name: "JavaScript",
  icon: "🟨",
  topics: [basicsTopics, asyncTopic, closuresTopic, thisBindingTopic, prototypesTopic, copyMethodsTopic],
};
