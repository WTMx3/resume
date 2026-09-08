#set document(
  title: "Thomas Miller - Master Resume",
  author: ("Thomas Miller",),
  description: "Platform-focused engineer with more than 10 years of experience building full-stack products and the systems that keep them reliable: cloud infrastructure, CI/CD, observability, identity and access management, scalable architecture, incident response, and technical leadership.",
)
#set page(
  paper: "us-letter",
  margin: (top: 0.42in, bottom: 0.42in, left: 0.58in, right: 0.58in),
  numbering: "1",
  number-align: center,
)
#let navy = rgb("#152238")
#let ink = rgb("#334155")
#let muted = rgb("#64748b")
#let accent = rgb("#0284c7")
#set text(font: ("Segoe UI", "Arial"), size: 8.75pt, fill: ink)
#set par(leading: 0.62em)
#set list(indent: 10pt, body-indent: 5pt, spacing: 3pt)
#show link: set text(fill: accent)
#let section(title) = {
  v(6pt)
  text(size: 10.8pt, weight: "bold", fill: navy, upper(title))
  v(1pt)
  line(length: 100%, stroke: 0.8pt + accent)
  v(3pt)
}
#align(center)[
  #text(size: 22pt, weight: "bold", fill: navy)[Thomas Miller]
  #v(1pt)
  #text(size: 10pt, weight: "semibold", fill: accent)[Senior Software Engineer]
  #v(1pt)
  #text(size: 8.2pt, fill: muted)[Platform Engineering  |  DevOps  |  Site Reliability  |  Secure Systems]
  #v(3pt)
  #text(size: 8.2pt)[
    #link("mailto:wthomasmiii\@gmail.com")[wthomasmiii\@gmail.com]
    #h(10pt) | #h(10pt)
    #link("tel:+19727959884")[(972) 795-9884]
    #h(10pt) | #h(10pt)
    #link("https://thomasmiller.cv")[thomasmiller.cv]
  ]
]
#section("Professional Summary")
Platform-focused engineer with more than 10 years of experience building full-stack products and the systems that keep them reliable: cloud infrastructure, CI/CD, observability, identity and access management, scalable architecture, incident response, and technical leadership.
#section("Core Expertise")
*Languages:* HTML, CSS, Sass, Less, JavaScript, TypeScript, Java, Go, Python, C\#
#v(0.5pt)
*Web Development:* React, Next.js, Tailwind CSS, Bootstrap, Context API, Redux, Zustand, Jest, Vite, Selenium, Storybook
#v(0.5pt)
*API Development:* Node.js, Express, Fiber, Gin, Django, Spring Boot, GraphQL, Headless CMS
#v(0.5pt)
*App Development:* Flutter, Ionic, .NET, React Native, Three.js, Unity, Unreal Engine
#v(0.5pt)
*Infrastructure:* AWS, Docker, Docker Swarm, Kubernetes, Serverless, Terraform, Layer 4 and 7 Networking, HAProxy, NGINX, Load Balancing
#v(0.5pt)
*Security, Authentication, and Authorization:* IAM, JWT, Session Management, Cookies, CORS, CSRF, RBAC, PBAC, Keycloak, Okta, Active Directory, LDAP
#v(0.5pt)
*DevOps:* CI/CD, GitOps, Git, GitHub, GitLab, ECR, Artifactory, Docker Hub, GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Fleet, Helm, Prometheus, Grafana, ELK, Datadog, Splunk
#v(0.5pt)
*Site Reliability Engineering:* High Availability, Latency Optimization, Auto Scaling, Monitoring, Incident Response, Post-Incident Review
#v(0.5pt)
*Testing:* Unit Testing, Integration Testing, End-to-End Testing, Performance Testing, Security Testing
#v(0.5pt)
*Data and Databases:* Data Modeling, Normalization, ER Diagrams, Data Integrity, PostgreSQL, MySQL, MongoDB, DynamoDB, Cassandra, Redis, RabbitMQ, Kafka
#v(0.5pt)
*Software Architecture:* Monoliths, Microservices, Domain-Driven Design, Test-Driven Development, Event-Driven Architecture, System Design
#v(0.5pt)
*Technical Documentation:* API Documentation, Code Documentation, Architecture, Requirements, System Design, Deployment, User Manuals, Swagger, Postman, UML, Lucidchart, Docusaurus
#v(0.5pt)
*Project Management:* Agile, Scrum, Cross-Functional Collaboration, Mentoring
#v(0.5pt)
#section("Selected Portfolio")
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[EazyHQ]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[Active development]],
)
#text(weight: "semibold")[Lead Software Engineer | June 2026]
A modular workspace operating system for projects, data, automation, content, and team workflows.
*Technologies:* Flutter, Dart, Go, PostgreSQL, Redis, Docker, GitHub Actions, Caddy
- Designed a registry-first add-on architecture with build-time linking and workspace-level enablement.
- Built event-driven automation infrastructure covering subscriptions, queued steps, waits, execution logs, and run histories.
- Developed workspace dashboards with configurable tabs, permission-aware editing, and add-on-provided widgets.
- Implemented platform capabilities for forms, structured data, APIs, sites, email, calendars, storage, reports, directories, and wikis.
- Created a cross-platform Flutter interface backed by a Go service layer, PostgreSQL, Redis, and containerized deployment.
- Established GitHub Actions and Docker-based delivery workflows for the API and web application.
#v(3pt)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[Listings+]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[Portfolio snapshot]],
)
#text(weight: "semibold")[Full-Stack Software Engineer | 2025]
An AI-assisted real-estate discovery experience that turns natural-language preferences into focused property results.
*Technologies:* Next.js, React, TypeScript, Tailwind CSS, Cloudflare, Radix UI
- Created a natural-language property search flow with city autocomplete and structured preference capture.
- Developed responsive listing cards, comparison tables, image carousels, and property-detail experiences.
- Built server-action boundaries for search and lead-submission integrations.
- Composed accessible, reusable interface primitives with Radix UI, Tailwind CSS, and motion libraries.
- Prepared the Next.js application for Cloudflare deployment with OpenNext.
#v(3pt)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[PDF Generator Service]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[Portfolio snapshot]],
)
#text(weight: "semibold")[Backend Software Engineer | 2024]
A TypeScript service that renders structured content into polished PDFs and publishes them to S3-compatible storage.
*Technologies:* TypeScript, Express, Puppeteer, AWS SDK, Docker
- Designed a small Express API for document-generation requests.
- Implemented reusable cover and content-page layouts for structured project data.
- Integrated Puppeteer and Chromium for predictable server-side PDF rendering.
- Added S3-compatible object storage and public file URL responses.
- Containerized the service for repeatable builds and deployment.
- Added temporary-file cleanup and environment-driven configuration.
#v(3pt)
#section("Professional Experience")
#block(breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[BAAS Software]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[June 2022 - Present]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[Senior Software Engineer]],
  [#text(size: 8.4pt, fill: muted)[Remote]],
)
- *End-to-end product ownership:* Lead products from initial idea and concept validation through requirements, planning, architecture, implementation, testing, production launch, monitoring, support, and continuous improvement.
- *Full-stack product delivery:* Design and build customer-facing web applications, mobile applications, backend services, APIs, data models, automation systems, and internal platforms across the complete software development lifecycle.
- *Web and mobile releases:* Prepare and release production web and mobile applications, manage versioning and app-store submissions, issue updates, support users, and operate products after launch.
- *CI/CD and deployment engineering:* Build GitHub Actions pipelines and repeatable release workflows for cloud, containerized, serverless, static, web, and mobile targets across AWS, Cloudflare, Docker-based platforms, and application stores.
- *Production reliability:* Improve deployment pipelines, operational readiness, and site reliability, helping maintain 99.9% uptime while reducing release time by 40%.
- *Observability and incident response:* Implement monitoring, logging, dashboards, alerting, and production diagnostics with Prometheus, Grafana, and Kibana; investigate incidents and carry corrective work through deployment.
- *Cloud architecture and operations:* Design, deploy, and maintain AWS infrastructure, improving application performance and release efficiency while controlling infrastructure costs.
- *Security and identity:* Create least-privilege AWS IAM policies, remediate unauthorized-access risks, and support a 100% security-audit compliance rate; deliver OAuth 2.0, SSO, 2FA, magic links, temporary codes, and secure session workflows.
- *Technical leadership:* Translate ambiguous business ideas into executable roadmaps, architecture decisions, delivery plans, and production systems while coordinating stakeholders across engineering, product, operations, and customers.
#v(3pt)
]
#block(breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[USAA]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[June 2020 - July 2022]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[Software Engineer III]],
  [#text(size: 8.4pt, fill: muted)[Remote]],
)
- *Quality engineering leadership:* Served as Vice President of the Quality Engineering Society and advanced automated, integration, regression, and performance-testing practices across engineering teams.
- *DevOps enablement:* Automated deployment pipelines and repeatable development workflows, improving release consistency, service stability, and recovery from change-related failures.
- *Site reliability engineering:* Partnered across engineering, security, and operations to analyze performance, remediate vulnerabilities, reduce operational risk, and prevent recurring failures.
- *Monitoring and incident response:* Implemented real-time monitoring and alerting, supported production incidents, led post-incident reviews, and converted findings into durable reliability improvements.
- *Scalable systems:* Contributed to resilient application and service designs aligned with availability, capacity, performance, and maintainability requirements.
- *Mentorship and standards:* Guided engineers in SRE, testing, troubleshooting, and quality practices while helping teams adopt stronger engineering standards.
#v(3pt)
]
#block(breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[Web Plant Media]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[July 2018 - May 2020]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[Software Engineer]],
  [#text(size: 8.4pt, fill: muted)[Remote]],
)
- *Cloud migration:* Planned and executed client website migrations to AWS, improving performance, availability, security, scalability, and hosting efficiency.
- *Observability:* Introduced application monitoring, alerting, and actionable logging to accelerate issue detection, troubleshooting, and performance analysis.
- *Business continuity:* Developed and tested backup and disaster-recovery procedures that reduced operational risk and supported faster service restoration.
- *Web performance:* Improved page speed, search visibility, accessibility, and data protection across a portfolio of client websites.
- *Client delivery:* Translated business requirements into practical technical solutions, managed expectations, and supported client systems through launch and ongoing maintenance.
#v(3pt)
]
#block(breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[Caprock Custom Apps]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[February 2017 - July 2018]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[Software Engineer]],
  [#text(size: 8.4pt, fill: muted)[]],
)
- *Product discovery:* Worked directly with clients and cross-functional teams to define requirements, evaluate constraints, shape product scope, and prepare solution plans tied to business outcomes.
- *Full-stack delivery:* Built custom web and mobile applications across front-end interfaces, Node.js and Express services, APIs, integrations, and data workflows.
- *Backend performance:* Optimized service architecture and request handling, reducing response times by up to 30% for key application features.
- *Software lifecycle:* Carried products from discovery and planning through development, testing, deployment, documentation, launch, and post-production support.
- *Mobile releases:* Prepared and released multiple applications through mobile app stores, managed updates, and resolved post-launch technical issues.
- *Maintainable architecture:* Introduced reusable patterns and scalable codebase practices that reduced technical debt and shortened debugging time.
#v(3pt)
]
#block(breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[IT Help Central]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[November 2015 - August 2017]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[IT Support Technician / Supervisor]],
  [#text(size: 8.4pt, fill: muted)[]],
)
- *Technical support:* Diagnosed and resolved software, hardware, account, network, and endpoint issues for students, faculty, and staff through walk-up, phone, and on-site support.
- *Knowledge management:* Created and maintained searchable troubleshooting documentation used by thousands of Texas Tech University users and support technicians.
- *Team leadership:* Earned promotion to Lead Technician, coordinated day-to-day support work, assumed additional operational responsibilities, and led technical projects.
- *Incident ownership:* Triaged requests, investigated root causes, escalated effectively, and collaborated with specialized IT teams through resolution.
- *Customer communication:* Explained technical issues and solutions clearly to people with varied experience while maintaining a service-focused support experience.
#v(3pt)
]
#section("Education")
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[Bachelor of Business Administration (BBA), Information Technology — Emphasis in Application Development]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[Fall 2015 - Spring 2020]],
)
#text(weight: "semibold")[Texas Tech University]
Completed a business and technology curriculum focused on application development, information systems, and practical software delivery.
#v(3pt)
#section("Leadership")
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[Vice President, Quality Engineering Society, USAA]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[November 2020 - July 2022]],
)
Elected to help advance quality engineering practices, testing frameworks, mentorship, and operational excellence.
