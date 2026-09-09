#set document(
  title: "Thomas Miller - Master Resume",
  author: ("Thomas Miller",),
  description: "Platform-focused engineer with more than 10 years of experience building full-stack products and the systems that keep them reliable: cloud infrastructure, CI/CD, observability, identity and access management, scalable architecture, incident response, and technical leadership.",
)
#set page(
  paper: "us-letter",
  margin: (top: 0.58in, bottom: 0.58in, left: 0.7in, right: 0.7in),
  numbering: "1",
  number-align: right,
)
#let ink = rgb("#172033")
#let body = rgb("#3f4b5f")
#let muted = rgb("#6b778c")
#let rule = rgb("#dbe3ec")
#let accent = rgb("#0b72b9")
#set text(font: ("Segoe UI", "Arial"), size: 9.8pt, fill: body)
#set par(leading: 0.7em)
#set list(indent: 11pt, body-indent: 5.5pt, spacing: 4pt)
#show link: set text(fill: accent)
#let section(title) = {
  v(11pt)
  grid(columns: (auto, 1fr), gutter: 9pt, align: horizon,
    text(size: 11.2pt, weight: "bold", fill: ink, tracking: 0.45pt, upper(title)),
    line(length: 100%, stroke: 0.55pt + rule),
  )
  v(6.5pt)
}
#grid(columns: (1fr, auto), gutter: 20pt, align: top,
  [#text(size: 25.5pt, weight: "bold", fill: ink)[Thomas Miller]
   #v(2.5pt)
   #text(size: 11.2pt, weight: "semibold", fill: accent)[Senior Software Engineer]
   #v(2.5pt)
   #text(size: 9pt, fill: muted)[Platform Engineering  |  DevOps  |  Site Reliability  |  Secure Systems]],
  [#align(right)[#text(size: 9pt)[
    #link("mailto:wthomasmiii\@gmail.com")[wthomasmiii\@gmail.com] \
    #link("tel:+19727959884")[(972) 795-9884] \
    #link("https://thomasmiller.cv")[thomasmiller.cv]
  ]]],
)
#v(7pt)
#line(length: 100%, stroke: 1.1pt + accent)
#section("Summary")
Platform-focused engineer with more than 10 years of experience building full-stack products and the systems that keep them reliable: cloud infrastructure, CI/CD, observability, identity and access management, scalable architecture, incident response, and technical leadership.
#section("Skills")
#grid(columns: (112pt, 1fr), column-gutter: 10pt, row-gutter: 3.2pt,
  [#text(weight: "semibold", fill: ink)[Languages]],
  [HTML, CSS, Sass, Less, JavaScript, TypeScript, Java, Go, Python, C\#],
  [#text(weight: "semibold", fill: ink)[Web Development]],
  [React, Next.js, Tailwind CSS, Bootstrap, Context API, Redux, Zustand, Jest, Vite, Selenium, Storybook],
  [#text(weight: "semibold", fill: ink)[API Development]],
  [Node.js, Express, Fiber, Gin, Django, Spring Boot, GraphQL, Headless CMS],
  [#text(weight: "semibold", fill: ink)[App Development]],
  [Flutter, Ionic, .NET, React Native, Three.js, Unity, Unreal Engine],
  [#text(weight: "semibold", fill: ink)[Infrastructure]],
  [AWS, Docker, Docker Swarm, Kubernetes, Serverless, Terraform, Layer 4 and 7 Networking, HAProxy, NGINX, Load Balancing],
  [#text(weight: "semibold", fill: ink)[Security, Authentication, and Authorization]],
  [IAM, JWT, Session Management, Cookies, CORS, CSRF, RBAC, PBAC, Keycloak, Okta, Active Directory, LDAP],
  [#text(weight: "semibold", fill: ink)[DevOps]],
  [CI/CD, GitOps, Git, GitHub, GitLab, ECR, Artifactory, Docker Hub, GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Fleet, Helm, Prometheus, Grafana, ELK, Datadog, Splunk],
  [#text(weight: "semibold", fill: ink)[Site Reliability Engineering]],
  [High Availability, Latency Optimization, Auto Scaling, Monitoring, Incident Response, Post-Incident Review],
  [#text(weight: "semibold", fill: ink)[Testing]],
  [Unit Testing, Integration Testing, End-to-End Testing, Performance Testing, Security Testing],
  [#text(weight: "semibold", fill: ink)[Data and Databases]],
  [Data Modeling, Normalization, ER Diagrams, Data Integrity, PostgreSQL, MySQL, MongoDB, DynamoDB, Cassandra, Redis, RabbitMQ, Kafka],
  [#text(weight: "semibold", fill: ink)[Software Architecture]],
  [Monoliths, Microservices, Domain-Driven Design, Test-Driven Development, Event-Driven Architecture, System Design],
  [#text(weight: "semibold", fill: ink)[Technical Documentation]],
  [API Documentation, Code Documentation, Architecture, Requirements, System Design, Deployment, User Manuals, Swagger, Postman, UML, Lucidchart, Docusaurus],
  [#text(weight: "semibold", fill: ink)[Project Management]],
  [Agile, Scrum, Cross-Functional Collaboration, Mentoring],
)
#section("Education")
#grid(columns: (1fr, auto), gutter: 10pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[Bachelor of Business Administration (BBA)]],
  [#text(size: 9.2pt, fill: muted)[Fall 2015 - Spring 2020]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[Texas Tech University]
#h(7pt)#text(size: 9.2pt, fill: muted)[Information Technology - Emphasis in Application Development]
#v(3pt)
Completed a business and technology curriculum focused on application development, information systems, and practical software delivery.
#section("Accolades")
#grid(columns: (1fr, auto), gutter: 10pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[Vice President]],
  [#text(size: 9.2pt, fill: muted)[November 2020 - July 2022]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[Quality Engineering Society, USAA]
#v(3pt)
Elected to help advance quality engineering practices, testing frameworks, mentorship, and operational excellence.
#pagebreak()
#section("Employment History")
#block(above: 3pt, below: 9pt, breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[Senior Software Engineer]],
  [#text(size: 9.2pt, fill: muted)[June 2022 - Present]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[BAAS Software | Remote]
#v(3pt)
- Lead products from initial idea and concept validation through requirements, planning, architecture, implementation, testing, production launch, monitoring, support, and continuous improvement.
- Design and build customer-facing web applications, mobile applications, backend services, APIs, data models, automation systems, and internal platforms across the complete software development lifecycle.
- Prepare and release production web and mobile applications, manage versioning and app-store submissions, issue updates, support users, and operate products after launch.
- Build GitHub Actions pipelines and repeatable release workflows for cloud, containerized, serverless, static, web, and mobile targets across AWS, Cloudflare, Docker-based platforms, and application stores.
- Improve deployment pipelines, operational readiness, and site reliability, helping maintain 99.9% uptime while reducing release time by 40%.
- Implement monitoring, logging, dashboards, alerting, and production diagnostics with Prometheus, Grafana, and Kibana; investigate incidents and carry corrective work through deployment.
- Design, deploy, and maintain AWS infrastructure, improving application performance and release efficiency while controlling infrastructure costs.
- Create least-privilege AWS IAM policies, remediate unauthorized-access risks, and support a 100% security-audit compliance rate; deliver OAuth 2.0, SSO, 2FA, magic links, temporary codes, and secure session workflows.
- Translate ambiguous business ideas into executable roadmaps, architecture decisions, delivery plans, and production systems while coordinating stakeholders across engineering, product, operations, and customers.
]
#block(above: 3pt, below: 9pt, breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[Software Engineer III]],
  [#text(size: 9.2pt, fill: muted)[June 2020 - July 2022]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[USAA | Remote]
#v(3pt)
- Served as Vice President of the Quality Engineering Society and advanced automated, integration, regression, and performance-testing practices across engineering teams.
- Automated deployment pipelines and repeatable development workflows, improving release consistency, service stability, and recovery from change-related failures.
- Partnered across engineering, security, and operations to analyze performance, remediate vulnerabilities, reduce operational risk, and prevent recurring failures.
- Implemented real-time monitoring and alerting, supported production incidents, led post-incident reviews, and converted findings into durable reliability improvements.
- Contributed to resilient application and service designs aligned with availability, capacity, performance, and maintainability requirements.
- Guided engineers in SRE, testing, troubleshooting, and quality practices while helping teams adopt stronger engineering standards.
]
#block(above: 3pt, below: 9pt, breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[Software Engineer]],
  [#text(size: 9.2pt, fill: muted)[July 2018 - May 2020]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[Web Plant Media | Remote]
#v(3pt)
- Developed reusable React component libraries for WordPress themes, giving teams a consistent foundation for navigation, content modules, forms, media, and interactive page experiences.
- Designed and built independent WordPress themes with custom templates, responsive layouts, configurable content patterns, and maintainable front-end architecture.
- Led UI/UX work from information architecture and user flows through wireframes, visual design, responsive implementation, and iterative refinement with clients and stakeholders.
- Created accessible, mobile-first interfaces and reusable design patterns that improved consistency across client sites and reduced repeated implementation work.
- Planned and executed client website migrations to AWS, improving performance, availability, security, scalability, and hosting efficiency.
- Introduced application monitoring, alerting, and actionable logging to accelerate issue detection, troubleshooting, and performance analysis.
- Developed and tested backup and disaster-recovery procedures that reduced operational risk and supported faster service restoration.
- Improved page speed, search visibility, accessibility, and data protection across a portfolio of client websites.
- Translated business requirements into practical technical solutions, managed expectations, and supported client systems through launch and ongoing maintenance.
]
#block(above: 3pt, below: 9pt, breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[Software Engineer]],
  [#text(size: 9.2pt, fill: muted)[February 2017 - July 2018]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[Caprock Custom Apps]
#v(3pt)
- Worked directly with clients and cross-functional teams to define requirements, evaluate constraints, shape product scope, and prepare solution plans tied to business outcomes.
- Built custom web and mobile applications across front-end interfaces, Node.js and Express services, APIs, integrations, and data workflows.
- Optimized service architecture and request handling, reducing response times by up to 30% for key application features.
- Carried products from discovery and planning through development, testing, deployment, documentation, launch, and post-production support.
- Prepared and released multiple applications through mobile app stores, managed updates, and resolved post-launch technical issues.
- Introduced reusable patterns and scalable codebase practices that reduced technical debt and shortened debugging time.
]
#block(above: 3pt, below: 9pt, breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[IT Support Technician / Supervisor]],
  [#text(size: 9.2pt, fill: muted)[November 2015 - August 2017]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[IT Help Central]
#v(3pt)
- Diagnosed and resolved software, hardware, account, network, and endpoint issues for students, faculty, and staff through walk-up, phone, and on-site support.
- Created and maintained searchable troubleshooting documentation used by thousands of Texas Tech University users and support technicians.
- Earned promotion to Lead Technician, coordinated day-to-day support work, assumed additional operational responsibilities, and led technical projects.
- Triaged requests, investigated root causes, escalated effectively, and collaborated with specialized IT teams through resolution.
- Explained technical issues and solutions clearly to people with varied experience while maintaining a service-focused support experience.
]
#pagebreak()
#section("Selected Portfolio")
#block(above: 3pt, below: 10pt, breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[EazyHQ]],
  [#text(size: 9.2pt, fill: muted)[Active development]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[Lead Software Engineer | June 2026]
#v(3pt)
A modular workspace operating system for projects, data, automation, content, and team workflows.
#v(2pt)
#text(size: 9pt, fill: muted)[Tech: Flutter, Dart, Go, PostgreSQL, Redis, Docker, GitHub Actions, Caddy]
- Designed a registry-first add-on architecture with build-time linking and workspace-level enablement.
- Built event-driven automation infrastructure covering subscriptions, queued steps, waits, execution logs, and run histories.
- Developed workspace dashboards with configurable tabs, permission-aware editing, and add-on-provided widgets.
- Implemented platform capabilities for forms, structured data, APIs, sites, email, calendars, storage, reports, directories, and wikis.
- Created a cross-platform Flutter interface backed by a Go service layer, PostgreSQL, Redis, and containerized deployment.
- Established GitHub Actions and Docker-based delivery workflows for the API and web application.
]
#block(above: 3pt, below: 10pt, breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[Listings+]],
  [#text(size: 9.2pt, fill: muted)[Portfolio snapshot]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[Full-Stack Software Engineer | 2025]
#v(3pt)
An AI-assisted real-estate discovery experience that turns natural-language preferences into focused property results.
#v(2pt)
#text(size: 9pt, fill: muted)[Tech: Next.js, React, TypeScript, Tailwind CSS, Cloudflare, Radix UI]
- Created a natural-language property search flow with city autocomplete and structured preference capture.
- Developed responsive listing cards, comparison tables, image carousels, and property-detail experiences.
- Built server-action boundaries for search and lead-submission integrations.
- Composed accessible, reusable interface primitives with Radix UI, Tailwind CSS, and motion libraries.
- Prepared the Next.js application for Cloudflare deployment with OpenNext.
]
#block(above: 3pt, below: 10pt, breakable: false)[
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(size: 11pt, weight: "bold", fill: ink)[PDF Generator Service]],
  [#text(size: 9.2pt, fill: muted)[Portfolio snapshot]],
)
#text(size: 9.4pt, weight: "semibold", fill: accent)[Backend Software Engineer | 2024]
#v(3pt)
A TypeScript service that renders structured content into polished PDFs and publishes them to S3-compatible storage.
#v(2pt)
#text(size: 9pt, fill: muted)[Tech: TypeScript, Express, Puppeteer, AWS SDK, Docker]
- Designed a small Express API for document-generation requests.
- Implemented reusable cover and content-page layouts for structured project data.
- Integrated Puppeteer and Chromium for predictable server-side PDF rendering.
- Added S3-compatible object storage and public file URL responses.
- Containerized the service for repeatable builds and deployment.
- Added temporary-file cleanup and environment-driven configuration.
]
