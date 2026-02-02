import type { Subject } from "../../../types";
import { azureAppServicesTopic } from "./app-services";
import { azureContainersTopic } from "./containers";
import { azureServiceBusTopic } from "./service-bus";
import { azureCloudDeploymentTopic } from "./cloud-deployment";
import { azureNetworkingTopic } from "./networking";
import { azureApiSecurityTopic } from "./api-security";

export const azureSubject: Subject = {
  id: "azure",
  name: "Microsoft Azure",
  topics: [
    azureAppServicesTopic,
    azureContainersTopic,
    azureServiceBusTopic,
    azureCloudDeploymentTopic,
    azureNetworkingTopic,
    azureApiSecurityTopic,
  ],
};
