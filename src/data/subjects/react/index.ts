import type { Subject } from "../../../types";
import { reactBasicsTopic } from "./basics";
import { reactHooksTopic } from "./hooks";
import { reactPerformanceTopic } from "./performance";
import { reactUnitTestingTopic } from "./unit-testing";
import { reactRouterTopic } from "./router";
import { reactCustomHooksTopic } from "./custom-hooks";
import { reactContextStateManagementTopic } from "./context-state-management";
import { reactVirtualDOMTopic } from "./virtual-dom-advanced";
import { reactAPIIntegrationTopic } from "./api-integration";

export const reactSubject: Subject = {
  id: "react",
  name: "React",
  icon: "⚛️",
  topics: [
    reactBasicsTopic,
    reactHooksTopic,
    reactPerformanceTopic,
    reactUnitTestingTopic,
    reactRouterTopic,
    reactCustomHooksTopic,
    reactContextStateManagementTopic,
    reactVirtualDOMTopic,
    reactAPIIntegrationTopic,
  ],
};
