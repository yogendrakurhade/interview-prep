import type { Subject } from "../../../types";
import { azureAppServicesTopic } from "./app-services";
import { azureContainersTopic } from "./containers";
import { azureServiceBusTopic } from "./service-bus";
import { azureCloudDeploymentTopic } from "./cloud-deployment";
import { azureNetworkingTopic } from "./networking";
import { azureApiSecurityTopic } from "./api-security";
import { azureStorageServicesTopic } from "./storage-services";
import { azureDurableFunctionsTopic } from "./durable-functions";
import { azureEventGridTopic } from "./event-grid";
import { azureEventHubTopic } from "./event-hub";
import { keyVaultTopic } from "./key-vault";
import { azureLoggingMonitoringTopic } from "./logging-monitoring";
import { azureKubernetesServicesTopic } from "./kubernetes-services";

export const azureSubject: Subject = {
  id: "azure",
  name: "Microsoft Azure",
  icon: "☁️",
  topics: [
    azureAppServicesTopic,
    azureContainersTopic,
    azureServiceBusTopic,
    azureCloudDeploymentTopic,
    azureNetworkingTopic,
    azureApiSecurityTopic,
    azureStorageServicesTopic,
    azureDurableFunctionsTopic,
    azureEventGridTopic,
    azureEventHubTopic,
    keyVaultTopic,
    azureLoggingMonitoringTopic,
    azureKubernetesServicesTopic,
  ],
};
