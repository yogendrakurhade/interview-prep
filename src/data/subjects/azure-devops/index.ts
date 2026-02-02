import type { Subject } from "../../../types";
import { azureDevOpsOverviewTopic } from "./overview";
import { azureReposTopic } from "./repos";
import { azurePipelinesTopic } from "./pipelines";
import { azureTestPlansTopic } from "./test-plans";
import { azureArtifactsTopic } from "./artifacts";

export const azureDevOpsSubject: Subject = {
  id: "azure-devops",
  name: "Azure DevOps",
  icon: "🔄",
  topics: [
    azureDevOpsOverviewTopic,
    azureReposTopic,
    azurePipelinesTopic,
    azureTestPlansTopic,
    azureArtifactsTopic,
  ],
};
