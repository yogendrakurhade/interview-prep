import type { Topic } from "../../../types";

export const azureContainersTopic: Topic = {
  id: "azure-containers",
  name: "Container Deployment",
  questions: [
    {
      id: "q1",
      question: "What is Docker and how do you containerize a .NET application?",
      answer:
        "Docker packages application with dependencies in isolated container. Dockerfile defines build steps. Container runs same everywhere (development, testing, production). Base images: mcr.microsoft.com/dotnet/sdk (build), mcr.microsoft.com/dotnet/runtime (run). Multi-stage builds: build in SDK, run in runtime for smaller image.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Dockerfile for .NET Application

/*
# Multi-stage build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy project file
COPY ["MyApp.csproj", "."]

# Restore dependencies
RUN dotnet restore "MyApp.csproj"

# Copy source code
COPY . .

# Build application
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

# Publish
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS publish
WORKDIR /src
COPY --from=build /src .
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=publish /app/publish .

EXPOSE 80
ENTRYPOINT ["dotnet", "MyApp.dll"]
*/

// Dockerfile is text file with build instructions
Console.WriteLine("Dockerfile Instructions:");
Console.WriteLine("FROM - Base image");
Console.WriteLine("WORKDIR - Working directory");
Console.WriteLine("COPY - Copy files to container");
Console.WriteLine("RUN - Execute command during build");
Console.WriteLine("ENV - Environment variable");
Console.WriteLine("EXPOSE - Port to expose");
Console.WriteLine("ENTRYPOINT - Command to run");
Console.WriteLine("CMD - Default parameters");

// Build and run Docker container
Console.WriteLine("Docker Commands:");
Console.WriteLine("# Build image");
Console.WriteLine("docker build -t myapp:latest .");
Console.WriteLine("");
Console.WriteLine("# Run container");
Console.WriteLine("docker run -p 80:80 myapp:latest");
Console.WriteLine("");
Console.WriteLine("# View running containers");
Console.WriteLine("docker ps");
Console.WriteLine("");
Console.WriteLine("# Stop container");
Console.WriteLine("docker stop <container-id>");`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Azure Container Registry (ACR) and Azure Container Instances (ACI)?",
      answer:
        "Azure Container Registry stores Docker images privately. Push/pull images to ACR. Azure Container Instances runs containers serverless (no VM management). Pay per second. Good for dev/test, batch jobs, event-driven tasks. For production: use AKS (Kubernetes) for orchestration.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Container Registry (ACR) & Container Instances (ACI)

Console.WriteLine("ACR - Azure Container Registry");
Console.WriteLine("✓ Private Docker image storage");
Console.WriteLine("✓ Geo-replication");
Console.WriteLine("✓ Webhook triggers");
Console.WriteLine("✓ Built-in authentication");

// ACR CLI commands
Console.WriteLine("ACR Commands:");
Console.WriteLine("# Login to ACR");
Console.WriteLine("az acr login --name myregistry");
Console.WriteLine("");
Console.WriteLine("# Tag image");
Console.WriteLine("docker tag myapp:latest myregistry.azurecr.io/myapp:latest");
Console.WriteLine("");
Console.WriteLine("# Push to ACR");
Console.WriteLine("docker push myregistry.azurecr.io/myapp:latest");
Console.WriteLine("");
Console.WriteLine("# List images in ACR");
Console.WriteLine("az acr repository list --name myregistry");

Console.WriteLine("");
Console.WriteLine("ACI - Azure Container Instances");
Console.WriteLine("✓ Serverless container execution");
Console.WriteLine("✓ Pay per second");
Console.WriteLine("✓ Fast startup");
Console.WriteLine("✓ No container orchestration needed");

// Deploy to ACI
Console.WriteLine("Deploy to ACI:");
Console.WriteLine("az container create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name mycontainer \\");
Console.WriteLine("  --image myregistry.azurecr.io/myapp:latest \\");
Console.WriteLine("  --cpu 1 --memory 1 \\");
Console.WriteLine("  --port 80 \\");
Console.WriteLine("  --environment-variables ENV=Production API_KEY=secret");

// Environment variables for container
var containerEnvVars = new Dictionary<string, string>
{
    { "ASPNETCORE_ENVIRONMENT", "Production" },
    { "ConnectionStrings:Default", "Server=...;Database=..." },
    { "Logging:LogLevel:Default", "Information" }
};

Console.WriteLine("ACI Pricing:");
Console.WriteLine("- 1 CPU core: ~$0.0000145/second (~$40/month)");
Console.WriteLine("- 4 CPU cores: ~$0.000116/second (~$320/month)");
Console.WriteLine("- Pay only when running");`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is Azure Kubernetes Service (AKS) and when should you use it?",
      answer:
        "Azure Kubernetes Service is managed Kubernetes cluster for container orchestration. Automatically scales pods, manages updates, health checks. Use when: many containers, complex deployments, auto-scaling needed, multi-environment. Higher complexity than ACI. Includes monitoring, RBAC, networking policies.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Kubernetes Service (AKS)

Console.WriteLine("AKS - Azure Kubernetes Service");
Console.WriteLine("✓ Managed Kubernetes");
Console.WriteLine("✓ Auto-scaling");
Console.WriteLine("✓ Health management");
Console.WriteLine("✓ Rolling updates");
Console.WriteLine("✓ RBAC");
Console.WriteLine("✓ Monitoring integration");

// AKS Kubernetes manifest (deployment.yaml)
/*
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myregistry.azurecr.io/myapp:latest
        ports:
        - containerPort: 80
        env:
        - name: ASPNETCORE_ENVIRONMENT
          value: "Production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 80
          initialDelaySeconds: 10
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
  selector:
    app: myapp
*/

// Create AKS cluster
Console.WriteLine("AKS Cluster Creation:");
Console.WriteLine("az aks create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myCluster \\");
Console.WriteLine("  --node-count 3 \\");
Console.WriteLine("  --vm-set-type VirtualMachineScaleSets \\");
Console.WriteLine("  --enable-managed-identity");

// Deploy to AKS
Console.WriteLine("Deploy to AKS:");
Console.WriteLine("# Get cluster credentials");
Console.WriteLine("az aks get-credentials --resource-group myRG --name myCluster");
Console.WriteLine("");
Console.WriteLine("# Deploy manifest");
Console.WriteLine("kubectl apply -f deployment.yaml");
Console.WriteLine("");
Console.WriteLine("# Check deployment");
Console.WriteLine("kubectl get deployments");
Console.WriteLine("kubectl get pods");
Console.WriteLine("kubectl get svc");

// Auto-scaling in Kubernetes
/*
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
*/

Console.WriteLine("Kubernetes Concepts:");
Console.WriteLine("Pod - Smallest unit, wraps container");
Console.WriteLine("Deployment - Manages pods");
Console.WriteLine("Service - Exposes pods");
Console.WriteLine("Namespace - Logical partition");
Console.WriteLine("PersistentVolume - Storage");
Console.WriteLine("ConfigMap - Configuration");
Console.WriteLine("Secret - Sensitive data");

Console.WriteLine("When to use AKS:");
Console.WriteLine("✓ Large-scale container deployments");
Console.WriteLine("✓ Need complex orchestration");
Console.WriteLine("✓ Microservices architecture");
Console.WriteLine("✓ Multi-cloud or hybrid");
Console.WriteLine("✓ Need RBAC and security policies");`,
        },
      ],
    },
    {
      id: "q4",
      question: "What is Azure App Service for Containers and how do you deploy a Docker image?",
      answer:
        "App Service for Containers runs Docker containers on App Service (with same scaling/deployment benefits). Simpler than AKS. Deploy from: Docker Hub, ACR, or private registry. Single container or docker-compose. Faster startup than traditional App Service.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure App Service for Containers

Console.WriteLine("App Service for Containers");
Console.WriteLine("✓ Single container or docker-compose");
Console.WriteLine("✓ App Service scaling");
Console.WriteLine("✓ Deployment slots");
Console.WriteLine("✓ Auto-scaling");
Console.WriteLine("✓ Easier than AKS for simple deployments");

// Deploy from ACR
Console.WriteLine("Deploy from Azure Container Registry:");
Console.WriteLine("az webapp create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --plan myPlan \\");
Console.WriteLine("  --name mycontainerapp \\");
Console.WriteLine("  --deployment-container-image-name myregistry.azurecr.io/myapp:latest");

// Docker Compose for multiple containers
/*
version: '3.8'
services:
  web:
    image: myregistry.azurecr.io/myapp:latest
    ports:
      - "80:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ConnectionStrings:Default=Server=db;Database=mydb;
    depends_on:
      - db
  
  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=StrongPassword123!
    ports:
      - "1433:1433"
*/

// Deploy docker-compose
Console.WriteLine("Deploy docker-compose.yml:");
Console.WriteLine("az webapp create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --plan myPlan \\");
Console.WriteLine("  --name myapp \\");
Console.WriteLine("  --multicontainer-config-type compose \\");
Console.WriteLine("  --multicontainer-config-file docker-compose.yml");

// Update container image
Console.WriteLine("Update container image:");
Console.WriteLine("az webapp config container set \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myapp \\");
Console.WriteLine("  --docker-custom-image-name myregistry.azurecr.io/myapp:v2 \\");
Console.WriteLine("  --docker-registry-server-url https://myregistry.azurecr.io \\");
Console.WriteLine("  --docker-registry-server-user <username> \\");
Console.WriteLine("  --docker-registry-server-password <password>");

// Webhook for auto-update on ACR push
Console.WriteLine("Webhook triggers automatic deployment on image push");`,
        },
      ],
    },
  ],
};
