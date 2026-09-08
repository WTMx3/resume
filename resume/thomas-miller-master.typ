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
    #link("https://www.millers.wiki")[millers.wiki]
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
#pagebreak()
#section("Professional Experience")
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[BAAS Software]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[June 2022 - Present]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[Senior Software Engineer]],
  [#text(size: 8.4pt, fill: muted)[Remote]],
)
- *DevOps and site reliability:* Collaborated with DevOps and SRE teams to improve deployment pipelines, reliability, and downtime, helping achieve 99.9% uptime and reduce release times by 40%.
- *CI/CD automation:* Implemented GitHub Actions pipelines that streamlined software delivery and reduced deployment time and update-related downtime.
- *Observability:* Improved monitoring and incident response with Prometheus, Grafana, and Kibana.
- *AWS optimization:* Improved application performance and deployment efficiency while reducing infrastructure costs.
- *Security and compliance:* Implemented custom AWS IAM policies that removed unauthorized-access vulnerabilities and supported a 100% security-audit compliance rate.
- *Identity systems:* Delivered SSO for a Web3 mobile crypto wallet and implemented 2FA, OAuth 2.0, temporary codes, magic links, and SSO across other applications.
#v(3pt)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[USAA]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[June 2020 - July 2022]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[Software Engineer III]],
  [#text(size: 8.4pt, fill: muted)[Remote]],
)
- *Quality engineering leadership:* Elected Vice President of the Quality Engineering Society and helped introduce comprehensive testing practices that supported consistent delivery of high-quality software.
- *DevOps adoption:* Automated deployment pipelines, streamlined development workflows, and improved system monitoring to increase stability and reduce downtime.
- *Proactive SRE:* Partnered with cross-functional teams to analyze performance, address vulnerabilities, and prevent failures.
- *Monitoring and incident response:* Deployed real-time monitoring and alerting, led post-incident reviews, and drove long-term reliability improvements.
- *Mentorship:* Guided junior engineers in SRE and quality practices.
- *Scalable architecture:* Contributed to robust systems aligned with SRE practices and designed for growth under demand.
#v(3pt)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[Web Plant Media]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[July 2018 - May 2020]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[Software Engineer]],
  [#text(size: 8.4pt, fill: muted)[Remote]],
)
- *AWS migration:* Migrated client websites to AWS, improving load time, reliability, security, and long-term scalability while reducing hosting costs.
- *Monitoring and logging:* Introduced real-time performance monitoring, alerting, and actionable logging for faster issue detection and data-informed improvements.
- *Disaster recovery:* Developed and tested recovery plans to minimize downtime and protect client operations.
- *Client delivery:* Maintained clear communication across projects and delivered tailored solutions for unique requirements.
- *Performance and security:* Improved website speed, SEO, and data protection across client sites.
#v(3pt)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[Caprock Custom Apps]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[February 2017 - July 2018]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[Software Engineer]],
  [#text(size: 8.4pt, fill: muted)[]],
)
- *Requirements and planning:* Worked with cross-functional teams to define requirements and prepare custom solution plans tied to business value.
- *Backend performance:* Optimized Node.js and Express services, reducing response times by up to 30% for key features.
- *Full development lifecycle:* Contributed from discovery through delivery for scalable applications that met client deadlines.
- *Maintainability:* Applied scalable codebase practices that reduced technical debt and debugging time.
- *Mobile delivery:* Released multiple mobile applications through app stores and provided post-launch technical support.
#v(3pt)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[IT Help Central]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[November 2015 - August 2017]],
)
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "semibold")[IT Support Technician / Supervisor]],
  [#text(size: 8.4pt, fill: muted)[]],
)
- *Technical support:* Resolved software and hardware issues for students, faculty, and staff through walk-up, phone, and on-site channels.
- *Knowledge management:* Created and maintained troubleshooting content used by thousands of Texas Tech University users.
- *Team leadership:* Earned promotion to Lead Technician, assumed additional operational responsibilities, and led projects.
- *Customer communication:* Translated technical information for people with varied levels of expertise.
- *Problem solving:* Diagnosed root causes and collaborated with other IT staff to resolve complex issues efficiently.
#v(3pt)
#section("Leadership")
#grid(columns: (1fr, auto), gutter: 8pt,
  [#text(weight: "bold", fill: navy)[Vice President, Quality Engineering Society, USAA]],
  [#text(size: 8.4pt, style: "italic", fill: muted)[November 2020 - July 2022]],
)
Elected to help advance quality engineering practices, testing frameworks, mentorship, and operational excellence.
