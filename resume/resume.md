# Antony Méchin

**Senior Software Engineer at Technis, Former Co-Founder & CTO at Koala Insurance**

Lausanne, Switzerland | Paris, France · French · 38 years old

+33 6 40 12 96 79 · [antony.mechin@gmail.com](mailto:antony.mechin@gmail.com) · [dimrok.github.io/cv](https://dimrok.github.io/cv) · [linkedin.com/in/antony-mechin](https://linkedin.com/in/antony-mechin) · [github.com/dimrok](https://github.com/dimrok)

Software engineer with 13+ years of experience, from C++ distributed systems (Infinit, Docker) to co-founding Koala Insurance and leading its engineering team as CTO. At Technis, I build identity & access management, real-time analytics, reporting and data pipelines for smart buildings, and integrate the E-nno energy-optimisation platform.

## Experience

### Technis — Senior Software Engineer

*February 2025 - Present (1 year, 9 months) · Lausanne, Switzerland*

> Technis provides occupancy and people-counting analytics for buildings, retail and venues. Technis acquired E-nno, a Swiss company optimising the energy consumption of buildings.

#### E-nno Integration (Building Energy Optimisation)

*June 2026 - Present (5 months)*

Integrated the E-nno platform, from the edge boxes installed in buildings to the customer portal.

**Stack:** TypeScript, Vue3, NestJS, PHP, Laravel, TimescaleDB, M-Bus, MQTT, AMQP, Balena, Airflow, Ansible

- Made the edge box M-Bus client plug-and-play and hardened the HVAC emulation client (optimisation loop, state reconciliation, race conditions)
- Built an on-site audit tool (Wi-Fi hotspot with captive portal) that scores box health from structured logs
- Delivered the v3 gateway support in the portal: M-Bus device wizard, emulator replacement wizard and Balena fleets
- Rewrote the daily energy consumption breakdown algorithm of a utility-facing API (Laravel, TimescaleDB), backed by conservation tests
- Added a project health cockpit, Airflow jobs (sensor onboarding, weather data) and an Ansible-provisioned SFTP gateway

#### Data Platform

*March 2026 - June 2026 (3 months)*

Started the next-generation data platform, ingesting third-party data and computing business metrics at scale.

**Stack:** Java, Apache Beam, Dataflow, Python3, FastAPI, Pub/Sub, Terraform

- Bootstrapped a polyglot data platform: Java Apache Beam Flex Templates and Python services, with Terraform and CI/CD that updates running Dataflow jobs
- Built a streaming sales-metrics pipeline correlating store receipts with zone occupancy
- Developed a processing-plan service (materialisation, change detection) driving which pipelines run for which organisations
- Contributed to the third-party ingestion platform: E-nno and retail connectors, cursor watermarking, run control plane and failure alerting

#### Identity & Access Management

*February 2025 - April 2026 (1 year, 2 months)*

Worked on the new Access Management service replacing the legacy authorization model (Keycloak for identity, OPA/OPAL for authorization).

**Stack:** TypeScript, NestJS, Keycloak, OPA, PostgreSQL, Prisma, MongoDB, Pub/Sub, Nx

- Designed and built the Replicator, keeping users, organizations, memberships and access rights in sync between the legacy platform and the new IAM (MongoDB change streams, Pub/Sub, resumable streams)
- Migrated existing organizations, users and access rights to the new IAM while both platforms run side by side
- Introduced organization-scoped service accounts through a shared principal model for humans and machines, keeping OPA, OPAL and event contracts backward compatible
- Added scopes and resources to authorize AI agents (MCP) and product metrics

#### Spaces Platform

*February 2025 - April 2026 (1 year, 2 months)*

Spaces is the new analytics platform of Technis (React frontend and NestJS BFF).

**Stack:** TypeScript, React, NestJS, MongoDB, Redis, SSE, MCP, AI Agents, GCP, Terraform

- Built the real-time pipeline: live metrics from Pub/Sub stored in Redis and streamed to dashboards over Server-Sent Events (single session, heartbeat, reconnection)
- Exposed the platform to AI agents with an MCP server secured by OAuth/OIDC discovery and scope-based authorization
- Shipped an AI assistant (streaming chat using MCP tools) and an AI widget wizard
- Delivered floor plans (upload, preview, save), marketplace and product correlation, and PDF/XLSX report exports
- Raised quality: strict TypeScript, typed i18n, generated API types, integration tests and Dependabot

#### Reports & Notifications

*April 2025 - March 2026 (11 months)*

**Stack:** TypeScript, NestJS, Playwright, MongoDB, GCP, Terraform, GitHub Actions

- Created the Reports API: PDF generation through a headless browser, XLSX exports with merged headers, and scheduled reports sent by email
- Contributed to the Notifications service (email templates, OpenAPI documentation)
- Secured the services on Cloud Run (private ingress, internal load balancer, Secret Manager) and managed their service accounts in the Terraform foundation
- Set up keyless CI/CD with GitHub Actions and Workload Identity Federation

### Koala Insurance — Co-Founder & Chief Technology Officer

*October 2019 - September 2024 (4 years, 11 months) · Paris, France*

> Koala is an insurance broker with the mission to build fair and simple travel insurance products and services for the travel industry.

#### Late stage (up to 8 developers)

*May 2021 - September 2024 (3 years, 4 months)*

**Stack:** Hiring, Management, Processes, Tooling, Design, Turborepo

- Hired 12 and managed up to 8 developers
- Defined internal processes (ownership, studies, batmaning)
- Improved internal tooling for efficiency (Turborepo, Forest Admin)
- Designed some of the key features (Risk Management Service, A/B Testing, ...)

#### Mid stage (3 developers)

*January 2021 - May 2021 (3 months)*

**Stack:** TypeScript, monorepo, NestJS, Prisma, Vue3, AWS, Docker, Jest, GitHub

- Hired 2 senior developers
- Rewrote the PoC using healthier environment (TypeScript, NestJS, Prisma, monorepo, Jest)
- Established code quality and collaboration standards
- Improved delivery (Docker, AWS ECR, AWS ECS, AWS CDK)
- Enhanced and migrated the CI/CD from GitLab to GitHub
- Designed an event-driven architecture (EventBridge, Lambda, SQS)

#### Early stage (solo developer)

*October 2019 - January 2021 (1 year, 3 months)*

**Stack:** JavaScript, Node.js, Express, Jest, AWS, Docker, GitLab

- Designed and implemented the PoC that led to our first fundraising

### Docker, Inc. — Software Engineer

*October 2016 - January 2019 (2 years, 3 months) · Paris, France*

> Docker is an open platform for developing, shipping, and running applications.

#### Modernize Traditional Application

*January 2018 - January 2019 (1 year)*

Developed internal tooling to help clients modernize their applications by containerizing them and preparing cloud environments for Swarm.

**Stack:** Terraform, Ansible, AWS, GCP, Python3, Bash

- Designed and implemented automation scripts to set up Docker Swarm-ready cloud environments

#### Infinit / Elle Open-Source Maintainer

*October 2016 - January 2018 (1 year, 3 months)*

Following Docker’s acquisition of Infinit, maintained and open-sourced core libraries.

**Stack:** C++, Python3, GitHub, Linux, CI/CD, Build Tools, Drake

- Open-sourced our closed stack
- Refactored the codebase for maintainability
- Enhanced documentation
- Managed the community
- Increased the number of targeted platforms
- Optimized the build process

### Infinit — Software Engineer

*October 2012 - October 2016 (4 years) · Paris Area, France*

> Infinit focused on creating decentralized storage solutions and secure file transfer applications.

#### Distributed Filesystem

*April 2015 - October 2016 (1 year, 6 months)*

The Infinit Storage Platform makes it easy to create and access decentralized storage, shared across an unlimited number of nodes, while guaranteeing bank-level cryptography, fine-grained access control, and data high-availability.

**Stack:** C++14, Python3, Node.js

- Contributed to the CLI (C++14)
- Contributed to core libraries (C++14)
- Developed cross-platform GUI (Node.js / React)
- Supported the hub server (REST, Python 3)

#### File Transfer Application

*October 2012 - April 2015 (2 years, 6 months)*

The File Transfer Application was a multi-platform (Win, Mac, Linux, iOS, and Android) application allowing one to securely send files without size restrictions to other Infinit users, thanks to peer-to-peer technology and cloud-based storage.

**Stack:** C++11, Python3, REST, MongoDB, Qt

- Contributed to the core file transfer and file storage libraries
- Created the Windows and Linux GUI applications
- Contributed to the development of the different the servers (authentication, NAT punching)

### Cyanide Studio — Software Engineer (intern)

*February 2012 - August 2012 (6 months) · Nanterre, France*

> Cyanide is a video game development studio known for titles like Pro Cycling Manager, Tour de France, and Blood Bowl.

### Gostai — Roboticist (intern)

*September 2010 - January 2011 (4 months) · Paris, France*

> Gostai is a robot manufacturer and an editor of innovative software for robotics.

## Personal Projects

### Match & Party

*February 2026 - August 2026 (6 months)*

Social matching platform for events: participants register to an event, fill a personality and hobbies profile, and get matched with compatible people.

**Stack:** TypeScript, Next.js, tRPC, Event Sourcing, Clean Architecture, Firebase, Tailwind CSS, Vitest, Playwright, Terraform, GitHub Actions

- Designed an event-sourced domain (Castore, Firestore event store and projections) with clean architecture
- Implemented a matching algorithm based on Big Five personality traits and a 90-hobby taxonomy scored by category and intensity
- Built an accessible, mobile-first UI in English, French and Spanish, checked by Lighthouse CI and Playwright
- Provisioned GCP environments with Terraform and an AI-assisted workflow (agent guidelines, skills, specs)

### Smart Home

*September 2026 - Present (1 month)*

Self-hosted home automation stack on a Raspberry Pi 5 with a fleet of ESP8266 devices.

**Stack:** Balena, Docker, MQTT, Protobuf, NestJS, ESP8266, C++

- Deployed a Balena multi-container fleet: DNS filtering, reverse proxy, MQTT broker, S3-compatible storage and an HDMI kiosk
- Wrote ESP8266 firmware (PlatformIO) exchanging Protobuf messages over MQTT with a NestJS service, with over-the-air updates

## Education

### UTC (Compiègne) — Engineer's degree (Computer Science)

*September 2010 - June 2012*

**Courses:** Software Engineering, Mathematics, Operating Systems, Computer Networks, Databases

### Tecnológico de Monterrey — Engineer's degree (Computer Science)

*August 2011 - December 2011*

Student exchange program between the University of Technology of Compiègne and University of Technology of Monterrey.

**Courses:** Applied Robotics, Modeling and Animation, Programming Languages, Introduction to Computer Graphics, Theory of Computation

### IUT Cachan — Advanced Technician in Electronics and Computer Science

*September 2007 - June 2009*

**Courses:** Electronics, Computer Science, Mathematics, Physics

## Skills

TypeScript, Node.js, NestJS, Project Management, Processes, Docker, Prisma, GCP, AWS*, Terraform, React, People Management*, Hiring*, Tooling

*\* No recent professional use*

## Languages

- **French:** Native
- **English:** Professional
- **Spanish:** Beginner

## Interests

- **Professional:** Software Engineering, Process Optimization, Project Management, Team Management
- **Personal:** Hiking, Role Playing Games, Woodworking, Handcraft
