import type { Subject } from "../../../types";
import { angularBasicsTopic } from "./basics";
import { angularComponentsTopic } from "./components";
import { angularServicesDITopic } from "./services-di";
import { angularRoutingTopic } from "./routing";
import { angularFormsTopic } from "./forms";
import { angularRxJSTopic } from "./rxjs-observables";

export const angularSubject: Subject = {
  id: "angular",
  name: "Angular",
  icon: "🅰️",
  topics: [
    angularBasicsTopic,
    angularComponentsTopic,
    angularServicesDITopic,
    angularRoutingTopic,
    angularFormsTopic,
    angularRxJSTopic,
  ],
};
