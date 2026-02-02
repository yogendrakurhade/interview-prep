import type { Subject } from "../../../types";
import { awsMSKTopic } from "./msk";
import { awsECSTopic } from "./ecs";
import { awsAuroraDBTopic } from "./aurora-db";

export const awsSubject: Subject = {
  id: "aws",
  name: "AWS Services",
  icon: "🟠",
  topics: [awsMSKTopic, awsECSTopic, awsAuroraDBTopic],
};
