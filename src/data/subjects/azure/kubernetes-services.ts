import type { Topic } from "../../../types";

export const azureKubernetesServicesTopic: Topic = {
  id: "azure-kubernetes-services",
  name: "Kubernetes Services (AKS)",
  questions: [
    {
      id: "q1",
      question: "What is Azure Kubernetes Service (AKS) and what are its key features?",
      answer:
        "AKS is managed Kubernetes service. Azure manages control plane (API server, scheduler, etcd). You manage worker nodes. Features: auto-scaling, auto-upgrades, Azure AD integration, Azure Monitor integration, Virtual Network integration, Azure Policy. Pricing: pay only for worker nodes (VMs), control plane is free.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Kubernetes Service (AKS) Overview

Console.WriteLine("AKS Architecture:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Control Plane (Managed by Azure - FREE)                 │");
Console.WriteLine("│ • API Server    • Scheduler    • etcd                   │");
Console.WriteLine("│ • Controller Manager                                    │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ Worker Nodes (Managed by You - Pay for VMs)             │");
Console.WriteLine("│ • kubelet    • kube-proxy    • Container runtime        │");
Console.WriteLine("│ • Your application pods                                 │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

Console.WriteLine("Key Features:");
Console.WriteLine("• Managed control plane (free, 99.95% SLA)");
Console.WriteLine("• Cluster auto-scaler (scale nodes based on demand)");
Console.WriteLine("• Horizontal Pod Autoscaler (scale pods)");
Console.WriteLine("• Azure AD integration (RBAC)");
Console.WriteLine("• Azure CNI networking (VNet integration)");
Console.WriteLine("• Azure Monitor for containers");
Console.WriteLine("• Azure Policy for Kubernetes");
Console.WriteLine("• Automatic node OS updates");

// Create AKS Cluster
Console.WriteLine(@"
# Create AKS cluster
az aks create \
  --resource-group myRG \
  --name myAKSCluster \
  --node-count 3 \
  --node-vm-size Standard_D4s_v3 \
  --enable-managed-identity \
  --enable-addons monitoring \
  --generate-ssh-keys

# Get credentials
az aks get-credentials --resource-group myRG --name myAKSCluster

# Verify connection
kubectl get nodes
");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you deploy a .NET application to AKS?",
      answer:
        "Steps: 1) Containerize app with Dockerfile, 2) Push to Azure Container Registry, 3) Create Kubernetes manifests (Deployment, Service), 4) Apply with kubectl. Deployment manages replica pods. Service exposes pods (ClusterIP internal, LoadBalancer external). ConfigMaps for config, Secrets for sensitive data.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Deploy .NET App to AKS

// Step 1: Dockerfile (multi-stage build)
Console.WriteLine(@"
# Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY [""MyApp.csproj"", "".""]
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 80
ENTRYPOINT [""dotnet"", ""MyApp.dll""]
");

// Step 2: Build and push to ACR
Console.WriteLine(@"
# Build and push to ACR
az acr build --registry myacr --image myapp:v1 .

# Or using Docker
docker build -t myacr.azurecr.io/myapp:v1 .
az acr login --name myacr
docker push myacr.azurecr.io/myapp:v1
");

// Step 3: Kubernetes Deployment manifest
Console.WriteLine(@"
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  labels:
    app: myapp
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
        image: myacr.azurecr.io/myapp:v1
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: '128Mi'
            cpu: '100m'
          limits:
            memory: '256Mi'
            cpu: '500m'
        env:
        - name: ASPNETCORE_ENVIRONMENT
          value: 'Production'
        - name: ConnectionStrings__Database
          valueFrom:
            secretKeyRef:
              name: myapp-secrets
              key: db-connection
        livenessProbe:
          httpGet:
            path: /health/live
            port: 80
          initialDelaySeconds: 10
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 5
---
# service.yaml
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
");

// Step 4: Deploy to AKS
Console.WriteLine(@"
# Create secret
kubectl create secret generic myapp-secrets \
  --from-literal=db-connection='Server=...'

# Deploy
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Check status
kubectl get pods
kubectl get services
");`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is Helm and how do you use it to manage Kubernetes deployments?",
      answer:
        "Helm is Kubernetes package manager. Charts are packages of pre-configured resources. Values files customize deployments. Releases are deployed instances. Benefits: templating, versioning, rollbacks, dependency management. Helm repos host charts. Common charts: nginx-ingress, cert-manager, prometheus.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Helm - Kubernetes Package Manager

Console.WriteLine("Helm Concepts:");
Console.WriteLine("• Chart: Package of Kubernetes resources");
Console.WriteLine("• Values: Configuration for customization");
Console.WriteLine("• Release: Deployed instance of a chart");
Console.WriteLine("• Repository: Collection of charts");

// Helm Chart Structure
Console.WriteLine(@"
myapp-chart/
├── Chart.yaml          # Chart metadata
├── values.yaml         # Default configuration
├── templates/          # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   └── _helpers.tpl    # Template helpers
└── charts/             # Dependencies
");

// Chart.yaml
Console.WriteLine(@"
# Chart.yaml
apiVersion: v2
name: myapp
description: My .NET Application
version: 1.0.0
appVersion: '1.0.0'
dependencies:
  - name: redis
    version: 17.x.x
    repository: https://charts.bitnami.com/bitnami
");

// values.yaml
Console.WriteLine(@"
# values.yaml
replicaCount: 3

image:
  repository: myacr.azurecr.io/myapp
  tag: latest
  pullPolicy: Always

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  className: nginx
  hosts:
    - host: myapp.example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 500m
    memory: 256Mi
  requests:
    cpu: 100m
    memory: 128Mi

autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilization: 80

env:
  ASPNETCORE_ENVIRONMENT: Production
");

// Templated deployment.yaml
Console.WriteLine(@"
# templates/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include ""myapp.fullname"" . }}
spec:
  replicas: {{ .Values.replicaCount }}
  selector:
    matchLabels:
      app: {{ include ""myapp.name"" . }}
  template:
    spec:
      containers:
      - name: {{ .Chart.Name }}
        image: ""{{ .Values.image.repository }}:{{ .Values.image.tag }}""
        resources:
          {{- toYaml .Values.resources | nindent 12 }}
");

// Helm Commands
Console.WriteLine(@"
# Add repository
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update

# Install chart
helm install myapp ./myapp-chart -f values-prod.yaml

# Upgrade release
helm upgrade myapp ./myapp-chart -f values-prod.yaml

# Rollback
helm rollback myapp 1

# List releases
helm list

# Uninstall
helm uninstall myapp
");`,
        },
      ],
    },
    {
      id: "q4",
      question: "How do you implement auto-scaling in AKS?",
      answer:
        "Two types: Horizontal Pod Autoscaler (HPA) scales pods based on CPU/memory/custom metrics. Cluster Autoscaler scales nodes when pods can't be scheduled. KEDA (Kubernetes Event-Driven Autoscaling) scales based on external metrics (queue length, HTTP requests). Configure HPA with kubectl or YAML manifest.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// AKS Auto-scaling

Console.WriteLine("Auto-scaling Types:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Type               │ What it scales │ Based on          │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ HPA                │ Pods           │ CPU/Memory/Custom │");
Console.WriteLine("│ Cluster Autoscaler │ Nodes          │ Pending pods      │");
Console.WriteLine("│ KEDA               │ Pods           │ External events   │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");

// Horizontal Pod Autoscaler (HPA)
Console.WriteLine(@"
# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 0
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
");

// Enable Cluster Autoscaler
Console.WriteLine(@"
# Enable cluster autoscaler on node pool
az aks nodepool update \
  --resource-group myRG \
  --cluster-name myAKS \
  --name nodepool1 \
  --enable-cluster-autoscaler \
  --min-count 2 \
  --max-count 10
");

// KEDA - Event-driven scaling
Console.WriteLine(@"
# Install KEDA
helm repo add kedacore https://kedacore.github.io/charts
helm install keda kedacore/keda --namespace keda --create-namespace

# ScaledObject for Azure Service Bus
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: myapp-scaler
spec:
  scaleTargetRef:
    name: myapp
  minReplicaCount: 1
  maxReplicaCount: 20
  triggers:
  - type: azure-servicebus
    metadata:
      queueName: orders
      messageCount: '5'
      connectionFromEnv: SERVICEBUS_CONNECTION
  - type: prometheus
    metadata:
      serverAddress: http://prometheus:9090
      metricName: http_requests_total
      threshold: '100'
      query: sum(rate(http_requests_total[2m]))
");

// Check HPA status
Console.WriteLine(@"
kubectl get hpa
kubectl describe hpa myapp-hpa
kubectl top pods
");`,
        },
      ],
    },
    {
      id: "q5",
      question: "How do you configure Ingress in AKS for routing external traffic?",
      answer:
        "Ingress manages external HTTP/HTTPS access to services. Ingress Controller (nginx, Azure Application Gateway) processes rules. Features: path-based routing, host-based routing, TLS termination, URL rewriting. Azure offers Application Gateway Ingress Controller (AGIC) for native integration.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// AKS Ingress Configuration

Console.WriteLine("Ingress Controllers for AKS:");
Console.WriteLine("• NGINX Ingress Controller (most popular)");
Console.WriteLine("• Azure Application Gateway Ingress Controller (AGIC)");
Console.WriteLine("• Traefik");
Console.WriteLine("• HAProxy");

// Install NGINX Ingress Controller
Console.WriteLine(@"
# Install nginx ingress controller
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm install ingress-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx \
  --create-namespace \
  --set controller.service.annotations.""service.beta.kubernetes.io/azure-load-balancer-health-probe-request-path""=/healthz
");

// Basic Ingress with path-based routing
Console.WriteLine(@"
# ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$2
    nginx.ingress.kubernetes.io/ssl-redirect: 'true'
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /api(/|$)(.*)
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 80
      - path: /(.*)
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80
");

// Host-based routing (multiple apps)
Console.WriteLine(@"
# Multi-host ingress
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: multi-app-ingress
spec:
  ingressClassName: nginx
  rules:
  - host: app1.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: app1-service
            port:
              number: 80
  - host: app2.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: app2-service
            port:
              number: 80
");

// TLS with cert-manager (automatic certificates)
Console.WriteLine(@"
# Install cert-manager
helm repo add jetstack https://charts.jetstack.io
helm install cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --set installCRDs=true

# ClusterIssuer for Let's Encrypt
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: admin@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx

# Ingress with automatic TLS
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: nginx
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls-auto  # cert-manager creates this
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp-service
            port:
              number: 80
");`,
        },
      ],
    },
    {
      id: "q6",
      question: "How do you manage secrets and configuration in AKS?",
      answer:
        "ConfigMaps for non-sensitive config (env vars, config files). Secrets for sensitive data (base64 encoded, not encrypted by default). Best practice: use Azure Key Vault with CSI driver for secrets. Secrets Store CSI Driver mounts Key Vault secrets as volumes or env vars. External Secrets Operator syncs from Key Vault.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Secrets & Configuration in AKS

Console.WriteLine("Configuration Options:");
Console.WriteLine("• ConfigMaps - Non-sensitive configuration");
Console.WriteLine("• Secrets - Sensitive data (base64, not encrypted)");
Console.WriteLine("• Azure Key Vault + CSI Driver - Best for production");
Console.WriteLine("• External Secrets Operator - Sync from Key Vault");

// ConfigMap
Console.WriteLine(@"
# configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  ASPNETCORE_ENVIRONMENT: 'Production'
  LOG_LEVEL: 'Information'
  API_URL: 'https://api.example.com'
  appsettings.json: |
    {
      ""Logging"": {
        ""LogLevel"": {
          ""Default"": ""Information""
        }
      },
      ""AllowedHosts"": ""*""
    }
");

// Kubernetes Secret
Console.WriteLine(@"
# Create secret imperatively
kubectl create secret generic myapp-secrets \
  --from-literal=DB_PASSWORD='MyP@ssw0rd' \
  --from-literal=API_KEY='abc123'

# secret.yaml (values must be base64 encoded)
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secrets
type: Opaque
data:
  DB_PASSWORD: TXlQQHNzdzByZA==  # base64 encoded
  API_KEY: YWJjMTIz
");

// Using ConfigMap and Secret in Deployment
Console.WriteLine(@"
spec:
  containers:
  - name: myapp
    image: myapp:latest
    envFrom:
    - configMapRef:
        name: myapp-config
    - secretRef:
        name: myapp-secrets
    volumeMounts:
    - name: config-volume
      mountPath: /app/config
  volumes:
  - name: config-volume
    configMap:
      name: myapp-config
      items:
      - key: appsettings.json
        path: appsettings.json
");

// Azure Key Vault CSI Driver (Recommended for Production)
Console.WriteLine(@"
# Enable Key Vault CSI Driver addon
az aks enable-addons \
  --addons azure-keyvault-secrets-provider \
  --name myAKS \
  --resource-group myRG

# SecretProviderClass
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: azure-keyvault-secrets
spec:
  provider: azure
  parameters:
    usePodIdentity: 'false'
    useVMManagedIdentity: 'true'
    userAssignedIdentityID: '<managed-identity-client-id>'
    keyvaultName: 'mykeyvault'
    objects: |
      array:
        - |
          objectName: db-connection-string
          objectType: secret
        - |
          objectName: api-key
          objectType: secret
    tenantId: '<tenant-id>'
  secretObjects:
  - secretName: myapp-kv-secrets
    type: Opaque
    data:
    - objectName: db-connection-string
      key: DB_CONNECTION
    - objectName: api-key
      key: API_KEY

# Use in Deployment
spec:
  containers:
  - name: myapp
    envFrom:
    - secretRef:
        name: myapp-kv-secrets
    volumeMounts:
    - name: secrets-store
      mountPath: '/mnt/secrets'
      readOnly: true
  volumes:
  - name: secrets-store
    csi:
      driver: secrets-store.csi.k8s.io
      readOnly: true
      volumeAttributes:
        secretProviderClass: azure-keyvault-secrets
");`,
        },
      ],
    },
    {
      id: "q7",
      question: "How do you implement CI/CD for AKS deployments?",
      answer:
        "Options: Azure DevOps Pipelines, GitHub Actions, GitLab CI, Flux (GitOps). Pipeline stages: Build image → Push to ACR → Deploy to AKS. Blue-green or canary deployments with multiple replicas. ArgoCD or Flux for GitOps (pull-based). Use Helm for templated deployments.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// CI/CD for AKS

Console.WriteLine("CI/CD Options:");
Console.WriteLine("• Azure DevOps Pipelines");
Console.WriteLine("• GitHub Actions");
Console.WriteLine("• GitLab CI/CD");
Console.WriteLine("• Flux/ArgoCD (GitOps)");

// GitHub Actions Workflow
Console.WriteLine(@"
# .github/workflows/deploy.yml
name: Build and Deploy to AKS

on:
  push:
    branches: [main]

env:
  AZURE_CONTAINER_REGISTRY: myacr.azurecr.io
  RESOURCE_GROUP: myRG
  CLUSTER_NAME: myAKS
  IMAGE_NAME: myapp

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Azure Login
      uses: azure/login@v1
      with:
        creds: \${{ secrets.AZURE_CREDENTIALS }}
    
    - name: Build and push to ACR
      run: |
        az acr login --name myacr
        docker build -t \${{ env.AZURE_CONTAINER_REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }} .
        docker push \${{ env.AZURE_CONTAINER_REGISTRY }}/\${{ env.IMAGE_NAME }}:\${{ github.sha }}

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Azure Login
      uses: azure/login@v1
      with:
        creds: \${{ secrets.AZURE_CREDENTIALS }}
    
    - name: Get AKS credentials
      run: |
        az aks get-credentials --resource-group \${{ env.RESOURCE_GROUP }} --name \${{ env.CLUSTER_NAME }}
    
    - name: Deploy with Helm
      run: |
        helm upgrade --install myapp ./charts/myapp \
          --set image.tag=\${{ github.sha }} \
          --set image.repository=\${{ env.AZURE_CONTAINER_REGISTRY }}/\${{ env.IMAGE_NAME }} \
          --wait --timeout 5m
");

// Azure DevOps Pipeline
Console.WriteLine(@"
# azure-pipelines.yml
trigger:
  - main

pool:
  vmImage: ubuntu-latest

variables:
  azureSubscription: 'MyAzureSubscription'
  containerRegistry: 'myacr.azurecr.io'
  imageRepository: 'myapp'
  tag: '$(Build.BuildId)'

stages:
- stage: Build
  jobs:
  - job: BuildAndPush
    steps:
    - task: Docker@2
      inputs:
        containerRegistry: 'ACR-Connection'
        repository: '$(imageRepository)'
        command: buildAndPush
        Dockerfile: '**/Dockerfile'
        tags: |
          $(tag)
          latest

- stage: Deploy
  jobs:
  - deployment: DeployToAKS
    environment: 'production'
    strategy:
      runOnce:
        deploy:
          steps:
          - task: KubernetesManifest@0
            inputs:
              action: deploy
              kubernetesServiceConnection: 'AKS-Connection'
              namespace: default
              manifests: |
                $(Pipeline.Workspace)/manifests/*.yml
              containers: |
                $(containerRegistry)/$(imageRepository):$(tag)
");

// GitOps with Flux
Console.WriteLine(@"
# Install Flux
az k8s-extension create \
  --name flux \
  --extension-type microsoft.flux \
  --cluster-type managedClusters \
  --cluster-name myAKS \
  --resource-group myRG

# GitRepository source
apiVersion: source.toolkit.fluxcd.io/v1
kind: GitRepository
metadata:
  name: myapp-repo
  namespace: flux-system
spec:
  interval: 1m
  url: https://github.com/myorg/myapp-k8s
  ref:
    branch: main

# Kustomization (auto-deploy on git push)
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata:
  name: myapp
  namespace: flux-system
spec:
  interval: 5m
  path: ./deploy/production
  prune: true
  sourceRef:
    kind: GitRepository
    name: myapp-repo
  healthChecks:
  - kind: Deployment
    name: myapp
    namespace: default
");`,
        },
      ],
    },
    {
      id: "q8",
      question: "How do you monitor and troubleshoot AKS clusters?",
      answer:
        "Azure Monitor for Containers provides insights. Container Insights shows CPU, memory, network. Log Analytics stores container logs. kubectl logs for pod logs. kubectl describe for events. kubectl exec for interactive debugging. Prometheus/Grafana for custom metrics. Azure Advisor for recommendations.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// AKS Monitoring & Troubleshooting

Console.WriteLine("Monitoring Tools:");
Console.WriteLine("• Azure Monitor for Containers");
Console.WriteLine("• Container Insights");
Console.WriteLine("• Log Analytics");
Console.WriteLine("• Prometheus + Grafana");
Console.WriteLine("• kubectl commands");

// Enable Azure Monitor for Containers
Console.WriteLine(@"
# Enable monitoring addon
az aks enable-addons \
  --addons monitoring \
  --name myAKS \
  --resource-group myRG \
  --workspace-resource-id '/subscriptions/{sub}/resourceGroups/{rg}/providers/Microsoft.OperationalInsights/workspaces/{workspace}'
");

// KQL Queries for Container Insights
Console.WriteLine(@"
// Pod CPU usage
Perf
| where ObjectName == 'K8SContainer'
| where CounterName == 'cpuUsageNanoCores'
| summarize AvgCPU = avg(CounterValue) by bin(TimeGenerated, 5m), InstanceName
| render timechart

// Pod memory usage
Perf
| where ObjectName == 'K8SContainer'
| where CounterName == 'memoryWorkingSetBytes'
| summarize AvgMemory = avg(CounterValue / 1024 / 1024) by bin(TimeGenerated, 5m), InstanceName
| render timechart

// Container logs
ContainerLog
| where LogEntry contains 'error'
| project TimeGenerated, LogEntry, ContainerID
| order by TimeGenerated desc
| take 100

// Pod restart count
KubePodInventory
| where ClusterName == 'myAKS'
| summarize RestartCount = sum(PodRestartCount) by Name, Namespace
| where RestartCount > 0
| order by RestartCount desc

// Node conditions
KubeNodeInventory
| where ClusterName == 'myAKS'
| project Computer, Status, Labels
");

// kubectl troubleshooting commands
Console.WriteLine(@"
# View pod logs
kubectl logs <pod-name>
kubectl logs <pod-name> --previous  # Previous container logs
kubectl logs <pod-name> -f  # Follow logs

# Describe pod (events, status)
kubectl describe pod <pod-name>

# View all pods with status
kubectl get pods -o wide

# Check resource usage
kubectl top pods
kubectl top nodes

# Interactive shell in pod
kubectl exec -it <pod-name> -- /bin/sh

# Port forward for local debugging
kubectl port-forward <pod-name> 8080:80

# View events
kubectl get events --sort-by='.lastTimestamp'

# Check deployment rollout status
kubectl rollout status deployment/myapp
kubectl rollout history deployment/myapp
kubectl rollout undo deployment/myapp
");

// Common Issues & Solutions
Console.WriteLine("Common Issues:");
Console.WriteLine("┌─────────────────────────────────────────────────────────┐");
Console.WriteLine("│ Issue              │ Check                              │");
Console.WriteLine("├─────────────────────────────────────────────────────────┤");
Console.WriteLine("│ ImagePullBackOff   │ ACR credentials, image exists      │");
Console.WriteLine("│ CrashLoopBackOff   │ App logs, health probes            │");
Console.WriteLine("│ Pending pods       │ Node resources, node selector      │");
Console.WriteLine("│ OOMKilled          │ Increase memory limits             │");
Console.WriteLine("│ Service no IP      │ Check service type, annotations    │");
Console.WriteLine("└─────────────────────────────────────────────────────────┘");`,
        },
      ],
    },
  ],
};
