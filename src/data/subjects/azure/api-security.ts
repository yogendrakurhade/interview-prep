import type { Topic } from "../../../types";

export const azureApiSecurityTopic: Topic = {
  id: "azure-api-security",
  name: "API Security & API Management",
  questions: [
    {
      id: "q1",
      question: "What is Azure API Management (APIM) and its key features?",
      answer:
        "APIM is gateway for APIs: publish, manage, secure, monitor. Key features: API versioning, rate limiting, authentication (OAuth, API Key), request/response transformation, analytics, developer portal, policy engine. Sits between clients and backend services.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure API Management (APIM)

Console.WriteLine("APIM Components:");
Console.WriteLine("┌─ Gateway");
Console.WriteLine("│  ├─ Request/response policies");
Console.WriteLine("│  ├─ Authentication & authorization");
Console.WriteLine("│  ├─ Rate limiting & throttling");
Console.WriteLine("│  └─ Request/response transformation");
Console.WriteLine("├─ Admin Portal (management)");
Console.WriteLine("├─ Developer Portal (API discovery)");
Console.WriteLine("└─ Service (metadata & configuration)");

// Create APIM Instance
Console.WriteLine("Create APIM:");
Console.WriteLine("az apim create \\");
Console.WriteLine("  --name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --publisher-name 'My Company' \\");
Console.WriteLine("  --publisher-email admin@company.com \\");
Console.WriteLine("  --sku-name Developer");

// Add API
Console.WriteLine("Add API:");
Console.WriteLine("az apim api create \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --api-id myapi \\");
Console.WriteLine("  --display-name 'My API' \\");
Console.WriteLine("  --path /api \\");
Console.WriteLine("  --service-url https://api.backend.com");

// Add Operation
Console.WriteLine("Add Operation (GET /products):");
Console.WriteLine("az apim api operation create \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --api-id myapi \\");
Console.WriteLine("  --operation-id getProducts \\");
Console.WriteLine("  --display-name 'Get Products' \\");
Console.WriteLine("  --method GET \\");
Console.WriteLine("  --url-template /products");

// API Versions & Revisions
Console.WriteLine("Versioning Schemes:");
Console.WriteLine("1. Query parameter: /api?api-version=1.0");
Console.WriteLine("2. Header: API-Version: 1.0");
Console.WriteLine("3. URL path: /api/v1/products");
Console.WriteLine("4. Custom header: Custom-Version: 1.0");

// Products (access control)
Console.WriteLine("Products (group APIs):");
Console.WriteLine("- Starter");
Console.WriteLine("- Basic");
Console.WriteLine("- Premium");

Console.WriteLine("Configure Product:");
Console.WriteLine("az apim product create \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --product-name Starter \\");
Console.WriteLine("  --display-name 'Starter' \\");
Console.WriteLine("  --published true");

// Add API to Product
Console.WriteLine("Add API to Product:");
Console.WriteLine("az apim product api add \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --product-name Starter \\");
Console.WriteLine("  --api-id myapi");

// Subscriptions (API keys)
Console.WriteLine("Create Subscription (API key):");
Console.WriteLine("az apim subscription create \\");
Console.WriteLine("  --service-name myAPIM \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --subscription-name myapp-sub \\");
Console.WriteLine("  --product-id Starter");

// Policies
Console.WriteLine("APIM Policies (XML-based):");
Console.WriteLine("- Inbound: Authentication, rate limit, validate");
Console.WriteLine("- Outbound: Cache, transform response");
Console.WriteLine("- Backend: Forward request, set backend");
Console.WriteLine("- On-error: Error handling");`,
        },
      ],
    },
    {
      id: "q2",
      question: "How do you secure APIs with APIM? Authentication & authorization?",
      answer:
        "APIM supports: API Key (subscription key), OAuth 2.0 (delegated auth), JWT tokens, Basic auth. Implement via inbound policies. Use AAD (Azure AD) for enterprise. Rate limiting via policies. SSL/TLS encryption. API consumers authenticated via subscriptions.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure APIM Security - Authentication & Authorization

Console.WriteLine("Authentication Methods:");

Console.WriteLine("1. API Key (Subscription Key)");
Console.WriteLine("   - Client sends key in header: Ocp-Apim-Subscription-Key");
Console.WriteLine("   - Easy, not for sensitive data");

Console.WriteLine("2. OAuth 2.0");
Console.WriteLine("   - Token-based authentication");
Console.WriteLine("   - Delegated authorization");
Console.WriteLine("   - User grants permission to app");

Console.WriteLine("3. Azure AD (Entra ID)");
Console.WriteLine("   - Enterprise SSO");
Console.WriteLine("   - SAML, OpenID Connect");

Console.WriteLine("4. JWT Tokens");
Console.WriteLine("   - Self-contained claims");
Console.WriteLine("   - Signature verification");

Console.WriteLine("5. Basic Authentication");
Console.WriteLine("   - Username:password in Authorization header");
Console.WriteLine("   - Always use HTTPS");

// APIM Policy - Validate JWT
Console.WriteLine("Validate JWT Token Policy:");
Console.WriteLine(@"
<policies>
  <inbound>
    <validate-jwt header-name=""Authorization"" 
                   failed-validation-httpcode=""401"" 
                   failed-validation-error-message=""Unauthorized"">
      <openid-config url=""https://login.microsoftonline.com/{tenant-id}/.well-known/openid-configuration"" />
      <audiences>
        <audience>https://api.example.com</audience>
      </audiences>
      <claim name=""iss"" match=""any"">
        <value>https://sts.windows.net/{tenant-id}/</value>
      </claim>
    </validate-jwt>
  </inbound>
</policies>");

// APIM Policy - Rate Limiting
Console.WriteLine("Rate Limiting Policy:");
Console.WriteLine(@"
<policies>
  <inbound>
    <rate-limit-by-key calls=""100"" 
                        renewal-period=""60"" 
                        counter-key=""@(context.Request.Headers.GetValueOrDefault("Authorization", "").AsJwt()?.Subject)"" />
  </inbound>
</policies>");

// APIM Policy - API Key Validation
Console.WriteLine("Validate Subscription Key:");
Console.WriteLine(@"
<policies>
  <inbound>
    <check-header name=""Ocp-Apim-Subscription-Key"" failed-check-httpcode=""401"" failed-check-error-message=""Missing or invalid subscription key"" />
  </inbound>
</policies>");

// APIM Policy - Transform Response
Console.WriteLine("Transform Response (add headers):");
Console.WriteLine(@"
<policies>
  <outbound>
    <set-header name=""X-API-Version"" exists-action=""override"">
      <value>1.0</value>
    </set-header>
    <set-header name=""X-Powered-By"" exists-action=""override"">
      <value>Azure API Management</value>
    </set-header>
  </outbound>
</policies>");

// Mock Response
Console.WriteLine("Mock Response (for testing):");
Console.WriteLine(@"
<policies>
  <inbound>
    <mock-response status-code=""200"" content-type=""application/json"">
      <payload>{ ""message"": ""mocked response"" }</payload>
    </mock-response>
  </inbound>
</policies>");

// Redirect Secure
Console.WriteLine("Redirect to HTTPS:");
Console.WriteLine(@"
<policies>
  <inbound>
    <redirect-content-urls />
  </inbound>
</policies>");`,
        },
      ],
    },
    {
      id: "q3",
      question: "What is Azure Application Gateway WAF and how to use it?",
      answer:
        "WAF (Web Application Firewall) on Application Gateway: protects against web vulnerabilities (SQL injection, XSS, DDoS). Rules: OWASP Core Rule Set. Modes: Detection (log), Prevention (block). Custom rules possible. Prevents malicious requests reaching backend.",
      codeSnippets: [
        {
          language: "csharp",
          code: `// Azure Application Gateway WAF (Web Application Firewall)

Console.WriteLine("WAF Protection:");
Console.WriteLine("✓ SQL Injection");
Console.WriteLine("✓ Cross-Site Scripting (XSS)");
Console.WriteLine("✓ Cross-Site Request Forgery (CSRF)");
Console.WriteLine("✓ Local File Inclusion (LFI)");
Console.WriteLine("✓ Remote File Inclusion (RFI)");
Console.WriteLine("✓ PHP Injection");
Console.WriteLine("✓ Session Fixation");

// Create App Gateway with WAF
Console.WriteLine("Create App Gateway with WAF:");
Console.WriteLine("az network application-gateway create \\");
Console.WriteLine("  --name myAppGW \\");
Console.WriteLine("  --location eastus \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --vnet-name myVNet \\");
Console.WriteLine("  --subnet mySubnet \\");
Console.WriteLine("  --capacity 2 \\");
Console.WriteLine("  --sku WAF_v2 \\");
Console.WriteLine("  --http-settings-cookie-based-affinity Disabled \\");
Console.WriteLine("  --frontend-port 443 \\");
Console.WriteLine("  --http-settings-port 443 \\");
Console.WriteLine("  --http-settings-protocol Https");

// Create WAF Policy
Console.WriteLine("Create WAF Policy:");
Console.WriteLine("az network application-gateway waf-policy create \\");
Console.WriteLine("  --name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --type OWASP \\");
Console.WriteLine("  --version 3.0");

// WAF Modes
Console.WriteLine("WAF Modes:");
Console.WriteLine("1. Detection - Log threats, don't block");
Console.WriteLine("2. Prevention - Log threats, block requests");

Console.WriteLine("Set WAF Mode:");
Console.WriteLine("az network application-gateway waf-policy policy-settings update \\");
Console.WriteLine("  --name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --mode Prevention");

// Rule Sets
Console.WriteLine("OWASP Core Rule Set (CRS):");
Console.WriteLine("- CRS 3.1 (latest)");
Console.WriteLine("- CRS 3.0");
Console.WriteLine("- CRS 2.2.9");

// Custom Rules
Console.WriteLine("Custom WAF Rule (block pattern):");
Console.WriteLine("az network application-gateway waf-policy custom-rule create \\");
Console.WriteLine("  --name BlockSuspiciousUserAgent \\");
Console.WriteLine("  --policy-name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --priority 1 \\");
Console.WriteLine("  --rule-type MatchRule \\");
Console.WriteLine("  --action Block");

// Rate Limiting Rule
Console.WriteLine("Rate Limiting Custom Rule:");
Console.WriteLine("az network application-gateway waf-policy custom-rule create \\");
Console.WriteLine("  --name RateLimitPerIP \\");
Console.WriteLine("  --policy-name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --priority 2 \\");
Console.WriteLine("  --rule-type RateLimitRule \\");
Console.WriteLine("  --action Block \\");
Console.WriteLine("  --rate-limit-duration 1m \\");
Console.WriteLine("  --rate-limit-threshold 100");

// Geo-blocking Rule
Console.WriteLine("Geo-blocking Rule:");
Console.WriteLine("az network application-gateway waf-policy custom-rule create \\");
Console.WriteLine("  --name AllowUSOnly \\");
Console.WriteLine("  --policy-name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --priority 3 \\");
Console.WriteLine("  --rule-type MatchRule \\");
Console.WriteLine("  --action Allow");

// Exclusions
Console.WriteLine("WAF Exclusions (bypass rules):");
Console.WriteLine("- Exclude certain users");
Console.WriteLine("- Exclude parameters");
Console.WriteLine("- Exclude patterns");

Console.WriteLine("Add Exclusion:");
Console.WriteLine("az network application-gateway waf-policy managed-rule exclusion create \\");
Console.WriteLine("  --policy-name myWAFPolicy \\");
Console.WriteLine("  --resource-group myRG \\");
Console.WriteLine("  --exclusion-rule-set OWASP \\");
Console.WriteLine("  --exclusion-rule-group SQLi \\");
Console.WriteLine("  --selector-match-operator Contains \\");
Console.WriteLine("  --selector admin");

// Monitoring WAF
Console.WriteLine("Monitor WAF:");
Console.WriteLine("- Application Gateway Logs");
Console.WriteLine("- Application Gateway Metrics");
Console.WriteLine("- Log Analytics Workspace");`,
        },
      ],
    },
  ],
};
