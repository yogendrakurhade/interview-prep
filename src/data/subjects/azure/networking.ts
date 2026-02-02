import type { Topic } from "../../../types";

export const azureNetworkingTopic: Topic = {
  id: "azure-networking",
  name: "Networking",
  questions: [
    {
      id: "q1",
      question: "What is Azure Virtual Network (VNet) and how do you use it?",
      answer:
        "VNet is isolated network environment in Azure. Contains subnets (subdivisions). Enables: communication between Azure resources, access to on-premises networks via VPN/ExpressRoute, filtering with Network Security Groups (NSG). Supports custom IP address space. Required for VMs, databases, etc.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Virtual Network (VNet)

Console.WriteLine("VNet Components:");
Console.WriteLine("Virtual Network (VNet) - IP address space (e.g., 10.0.0.0/16)");
Console.WriteLine("  └─ Subnet 1 - 10.0.1.0/24");
Console.WriteLine("  └─ Subnet 2 - 10.0.2.0/24");
Console.WriteLine("  └─ Subnet 3 - 10.0.3.0/24");

// VNet Creation
Console.WriteLine("Create VNet:");
Console.WriteLine("az network vnet create \\");
Console.WriteLine("  --name myVNet \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --address-prefix 10.0.0.0/16");

// Create Subnets
Console.WriteLine("Create Subnet:");
Console.WriteLine("az network vnet subnet create \\");
Console.WriteLine("  --vnet-name myVNet \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name frontend \\");
Console.WriteLine("  --address-prefix 10.0.1.0/24");

// Network Security Group (NSG)
Console.WriteLine("NSG - Firewall rules");
Console.WriteLine("Allow HTTP (port 80)");
Console.WriteLine("Allow HTTPS (port 443)");
Console.WriteLine("Allow RDP (port 3389) from admin IP");
Console.WriteLine("Deny all else");

// NSG Creation
Console.WriteLine("Create NSG:");
Console.WriteLine("az network nsg create \\");
Console.WriteLine("  --name myNSG \\");
Console.WriteLine("  --resource-group myRG");

Console.WriteLine("Add inbound rule:");
Console.WriteLine("az network nsg rule create \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --nsg-name myNSG \\");
Console.WriteLine("  --name AllowHTTPS \\");
Console.WriteLine("  --priority 100 \\");
Console.WriteLine("  --direction Inbound \\");
Console.WriteLine("  --access Allow \\");
Console.WriteLine("  --protocol Tcp \\");
Console.WriteLine("  --destination-port-ranges 443");

// VNet Peering (connect VNets)
Console.WriteLine("VNet Peering - Connect two VNets");
Console.WriteLine("az network vnet peering create \\");
Console.WriteLine("  --vnet-name myVNet1 \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myVNet1-to-myVNet2 \\");
Console.WriteLine("  --remote-vnet /subscriptions/.../myVNet2 \\");
Console.WriteLine("  --allow-vnet-access");

// Service Endpoints (access Azure services securely)
Console.WriteLine("Service Endpoints:");
Console.WriteLine("- Azure Storage");
Console.WriteLine("- SQL Database");
Console.WriteLine("- Key Vault");
Console.WriteLine("- Cosmos DB");
Console.WriteLine("- Event Hub");`,
        },
      ],
    },
    {
      id: "q2",
      question: "What is Azure Load Balancer and Application Gateway?",
      answer:
        "Load Balancer: Layer 4 (Transport), distributes traffic across VMs, high performance, lower cost. Application Gateway: Layer 7 (Application), URL-based routing, SSL termination, WAF (Web Application Firewall), better for HTTP/HTTPS. Choose based on: simple round-robin (LB) vs complex routing (AppGW).",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Load Balancer vs Application Gateway

Console.WriteLine("Load Balancer (Layer 4):");
Console.WriteLine("✓ Transport layer (TCP/UDP)");
Console.WriteLine("✓ High performance");
Console.WriteLine("✓ Low latency");
Console.WriteLine("✓ Simple round-robin or session affinity");
Console.WriteLine("✓ Lower cost");
Console.WriteLine("✗ No URL-based routing");

Console.WriteLine("");
Console.WriteLine("Application Gateway (Layer 7):");
Console.WriteLine("✓ Application layer (HTTP/HTTPS)");
Console.WriteLine("✓ URL-based routing");
Console.WriteLine("✓ Hostname-based routing");
Console.WriteLine("✓ SSL termination");
Console.WriteLine("✓ WAF (Web Application Firewall)");
Console.WriteLine("✓ Cookie-based session affinity");
Console.WriteLine("✗ Slightly higher latency");
Console.WriteLine("✗ Higher cost");

// Load Balancer Configuration
Console.WriteLine("Load Balancer Setup:");
Console.WriteLine("az network lb create \\");
Console.WriteLine("  --name myLB \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --sku Standard \\");
Console.WriteLine("  --public-ip-address myPublicIP");

Console.WriteLine("Add backend pool:");
Console.WriteLine("az network lb address-pool create \\");
Console.WriteLine("  --lb-name myLB \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myBackendPool");

Console.WriteLine("Add health probe:");
Console.WriteLine("az network lb probe create \\");
Console.WriteLine("  --lb-name myLB \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myHealthProbe \\");
Console.WriteLine("  --protocol http \\");
Console.WriteLine("  --path /health \\");
Console.WriteLine("  --port 80");

Console.WriteLine("Add load rule:");
Console.WriteLine("az network lb rule create \\");
Console.WriteLine("  --lb-name myLB \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --name myLBRule \\");
Console.WriteLine("  --protocol tcp \\");
Console.WriteLine("  --frontend-port 80 \\");
Console.WriteLine("  --backend-port 80 \\");
Console.WriteLine("  --backend-pool-name myBackendPool \\");
Console.WriteLine("  --probe-name myHealthProbe");

// Application Gateway Configuration
Console.WriteLine("Application Gateway Setup:");
Console.WriteLine("az network application-gateway create \\");
Console.WriteLine("  --name myAppGW \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --vnet-name myVNet \\");
Console.WriteLine("  --subnet mySubnet \\");
Console.WriteLine("  --capacity 2 \\");
Console.WriteLine("  --sku Standard_v2");

Console.WriteLine("URL-based routing:");
Console.WriteLine("Frontend: myappgw.com");
Console.WriteLine("  ├─ /api/* → Backend API Pool");
Console.WriteLine("  ├─ /images/* → Static Storage Account");
Console.WriteLine("  └─ /* → Web App Pool");

Console.WriteLine("WAF (Web Application Firewall):");
Console.WriteLine("✓ DDoS protection");
Console.WriteLine("✓ SQL injection prevention");
Console.WriteLine("✓ XSS protection");
Console.WriteLine("✓ Cookie protection");
Console.WriteLine("✓ Attack signature detection");`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is ExpressRoute and VPN Gateway for hybrid connectivity?",
      answer:
        "VPN Gateway: IPSec VPN over internet, lower cost, variable bandwidth. ExpressRoute: dedicated private connection, consistent performance, higher cost, supports large data transfers. Choose: VPN for cost-sensitive, ExpressRoute for performance-critical, consistent bandwidth.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure VPN Gateway vs ExpressRoute

Console.WriteLine("VPN Gateway:");
Console.WriteLine("✓ IPSec VPN tunnels");
Console.WriteLine("✓ Over public internet");
Console.WriteLine("✓ Lower cost");
Console.WriteLine("✓ Variable bandwidth");
Console.WriteLine("✓ Encrypted traffic");
Console.WriteLine("✗ Latency variance");

Console.WriteLine("");
Console.WriteLine("ExpressRoute:");
Console.WriteLine("✓ Dedicated private connection");
Console.WriteLine("✓ Consistent, low latency");
Console.WriteLine("✓ High bandwidth (10 Gbps+)");
Console.WriteLine("✓ Direct connection to Microsoft backbone");
Console.WriteLine("✗ Higher cost");
Console.WriteLine("✗ Longer setup time");

// VPN Gateway Setup
Console.WriteLine("VPN Gateway Configuration:");
Console.WriteLine("az network vnet-gateway create \\");
Console.WriteLine("  --name myVPNGateway \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --vnet myVNet \\");
Console.WriteLine("  --gateway-type Vpn \\");
Console.WriteLine("  --vpn-type RouteBased \\");
Console.WriteLine("  --sku VpnGw1");

Console.WriteLine("Create local gateway (on-premises):");
Console.WriteLine("az network local-gateway create \\");
Console.WriteLine("  --name myOnPremisesGateway \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --gateway-ip-address 203.0.113.12 \\");
Console.WriteLine("  --address-prefix 192.168.0.0/16");

Console.WriteLine("Create connection:");
Console.WriteLine("az network vpn-connection create \\");
Console.WriteLine("  --name myConnection \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --vnet-gateway1 myVPNGateway \\");
Console.WriteLine("  --local-gateway2 myOnPremisesGateway \\");
Console.WriteLine("  --shared-key MySharedSecret");

// ExpressRoute
Console.WriteLine("ExpressRoute Connectivity Models:");
Console.WriteLine("1. Colocation facility");
Console.WriteLine("2. Point-to-point Ethernet");
Console.WriteLine("3. Any-to-any (IPVPN)");

Console.WriteLine("Peering Types:");
Console.WriteLine("- Private Peering (to Azure VNets)");
Console.WriteLine("- Public Peering (Azure services)");
Console.WriteLine("- Microsoft Peering (Office 365, Dynamics 365)");

Console.WriteLine("Setup (requires provider):");
Console.WriteLine("1. Contact ExpressRoute provider");
Console.WriteLine("2. Provision circuit");
Console.WriteLine("3. Create connection");
Console.WriteLine("4. Configure BGP peering");`,
        },
      ],
    },
  ],
};
