import type { Experience } from '@/types/experience'
import { DateTime } from 'luxon'

export const experience: Experience[] = [
  {
    company: 'Technis',
    title: 'Senior Software Engineer',
    location: 'Lausanne, Switzerland',
    dates: [DateTime.fromISO('2025-02'), null],
    about:
      'Technis provides occupancy and people-counting analytics for buildings, retail and venues. Technis acquired E-nno, a Swiss company optimising the energy consumption of buildings.',
    stages: [
      {
        name: 'E-nno Integration (Building Energy Optimisation)',
        dates: [DateTime.fromISO('2026-06'), null],
        skills: [
          'TypeScript',
          'Vue3',
          'NestJS',
          'PHP',
          'Laravel',
          'TimescaleDB',
          'M-Bus',
          'MQTT',
          'AMQP',
          'Balena',
          'Airflow',
          'Ansible',
        ],
        description:
          'Integrated the E-nno platform, from the edge boxes installed in buildings to the customer portal.',
        tasks: [
          'Made the edge box M-Bus client plug-and-play and hardened the HVAC emulation client (optimisation loop, state reconciliation, race conditions)',
          'Built an on-site audit tool (Wi-Fi hotspot with captive portal) that scores box health from structured logs',
          'Delivered the v3 gateway support in the portal: M-Bus device wizard, emulator replacement wizard and Balena fleets',
          'Rewrote the daily energy consumption breakdown algorithm of a utility-facing API (Laravel, TimescaleDB), backed by conservation tests',
          'Added a project health cockpit, Airflow jobs (sensor onboarding, weather data) and an Ansible-provisioned SFTP gateway',
        ],
        hide: false,
      },
      {
        name: 'Data Platform',
        dates: [DateTime.fromISO('2026-03'), DateTime.fromISO('2026-06')],
        skills: ['Java', 'Apache Beam', 'Dataflow', 'Python3', 'FastAPI', 'Pub/Sub', 'Terraform'],
        description:
          'Started the next-generation data platform, ingesting third-party data and computing business metrics at scale.',
        tasks: [
          'Bootstrapped a polyglot data platform: Java Apache Beam Flex Templates and Python services, with Terraform and CI/CD that updates running Dataflow jobs',
          'Built a streaming sales-metrics pipeline correlating store receipts with zone occupancy',
          'Developed a processing-plan service (materialisation, change detection) driving which pipelines run for which organisations',
          'Contributed to the third-party ingestion platform: E-nno and retail connectors, cursor watermarking, run control plane and failure alerting',
        ],
        hide: false,
      },
      {
        name: 'Identity & Access Management',
        dates: [DateTime.fromISO('2025-02'), DateTime.fromISO('2026-04')],
        skills: [
          'TypeScript',
          'NestJS',
          'Keycloak',
          'OPA',
          'PostgreSQL',
          'Prisma',
          'MongoDB',
          'Pub/Sub',
          'Nx',
        ],
        description:
          'Worked on the new Access Management service replacing the legacy authorization model (Keycloak for identity, OPA/OPAL for authorization).',
        tasks: [
          'Designed and built the Replicator, keeping users, organizations, memberships and access rights in sync between the legacy platform and the new IAM (MongoDB change streams, Pub/Sub, resumable streams)',
          'Migrated existing organizations, users and access rights to the new IAM while both platforms run side by side',
          'Introduced organization-scoped service accounts through a shared principal model for humans and machines, keeping OPA, OPAL and event contracts backward compatible',
          'Added scopes and resources to authorize AI agents (MCP) and product metrics',
        ],
        hide: false,
      },
      {
        name: 'Spaces Platform',
        dates: [DateTime.fromISO('2025-02'), DateTime.fromISO('2026-04')],
        skills: [
          'TypeScript',
          'React',
          'NestJS',
          'MongoDB',
          'Redis',
          'SSE',
          'MCP',
          'AI Agents',
          'GCP',
          'Terraform',
        ],
        description:
          'Spaces is the new analytics platform of Technis (React frontend and NestJS BFF).',
        tasks: [
          'Built the real-time pipeline: live metrics from Pub/Sub stored in Redis and streamed to dashboards over Server-Sent Events (single session, heartbeat, reconnection)',
          'Exposed the platform to AI agents with an MCP server secured by OAuth/OIDC discovery and scope-based authorization',
          'Shipped an AI assistant (streaming chat using MCP tools) and an AI widget wizard',
          'Delivered floor plans (upload, preview, save), marketplace and product correlation, and PDF/XLSX report exports',
          'Raised quality: strict TypeScript, typed i18n, generated API types, integration tests and Dependabot',
        ],
        hide: false,
      },
      {
        name: 'Reports & Notifications',
        dates: [DateTime.fromISO('2025-04'), DateTime.fromISO('2026-03')],
        skills: [
          'TypeScript',
          'NestJS',
          'Playwright',
          'MongoDB',
          'GCP',
          'Terraform',
          'GitHub Actions',
        ],
        tasks: [
          'Created the Reports API: PDF generation through a headless browser, XLSX exports with merged headers, and scheduled reports sent by email',
          'Contributed to the Notifications service (email templates, OpenAPI documentation)',
          'Secured the services on Cloud Run (private ingress, internal load balancer, Secret Manager) and managed their service accounts in the Terraform foundation',
          'Set up keyless CI/CD with GitHub Actions and Workload Identity Federation',
        ],
        hide: false,
      },
    ],
  },
  {
    company: 'Koala Insurance',
    title: 'Co-Founder & Chief Technology Officer',
    location: 'Paris, France',
    dates: [DateTime.fromISO('2019-10'), DateTime.fromISO('2024-09')],
    about:
      'Koala is an insurance broker with the mission to build fair and simple travel insurance products and services for the travel industry.',
    stages: [
      {
        name: 'Late stage (up to 8 developers)',
        dates: [DateTime.fromISO('2021-05'), DateTime.fromISO('2024-09')],
        description: undefined,
        skills: ['Hiring', 'Management', 'Processes', 'Tooling', 'Design', 'Turborepo'],
        tasks: [
          'Hired 12 and managed up to 8 developers',
          'Defined internal processes (ownership, studies, batmaning)',
          'Improved internal tooling for efficiency (Turborepo, Forest Admin)',
          'Designed some of the key features (Risk Management Service, A/B Testing, ...)',
        ],
        hide: false,
      },
      {
        name: 'Mid stage (3 developers)',
        dates: [DateTime.fromISO('2021-01'), DateTime.fromISO('2021-05')],
        description: undefined,
        skills: [
          'TypeScript',
          'monorepo',
          'NestJS',
          'Prisma',
          'Vue3',
          'AWS',
          'Docker',
          'Jest',
          'GitHub',
        ],
        tasks: [
          'Hired 2 senior developers',
          'Rewrote the PoC using healthier environment (TypeScript, NestJS, Prisma, monorepo, Jest)',
          'Established code quality and collaboration standards',
          'Improved delivery (Docker, AWS ECR, AWS ECS, AWS CDK)',
          'Enhanced and migrated the CI/CD from GitLab to GitHub',
          'Designed an event-driven architecture (EventBridge, Lambda, SQS)',
        ],
        hide: false,
      },

      {
        name: 'Early stage (solo developer)',
        dates: [DateTime.fromISO('2019-10'), DateTime.fromISO('2021-01')],
        description: undefined,
        skills: ['JavaScript', 'Node.js', 'Express', 'Jest', 'AWS', 'Docker', 'GitLab'],
        tasks: ['Designed and implemented the PoC that led to our first fundraising'],
        hide: false,
      },
    ],
  },
  {
    company: 'Docker, Inc.',
    title: 'Software Engineer',
    location: 'Paris, France',
    dates: [DateTime.fromISO('2016-10'), DateTime.fromISO('2019-01')],
    about: 'Docker is an open platform for developing, shipping, and running applications.',
    stages: [
      {
        name: 'Modernize Traditional Application',
        dates: [DateTime.fromISO('2018-01'), DateTime.fromISO('2019-01')],
        skills: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Python3', 'Bash'],
        description:
          'Developed internal tooling to help clients modernize their applications by containerizing them and preparing cloud environments for Swarm.',
        tasks: [
          'Designed and implemented automation scripts to set up Docker Swarm-ready cloud environments',
        ],
        hide: false,
      },
      {
        name: 'Infinit / Elle Open-Source Maintainer',
        dates: [DateTime.fromISO('2016-10'), DateTime.fromISO('2018-01')],
        description:
          'Following Docker’s acquisition of Infinit, maintained and open-sourced core libraries.',
        skills: ['C++', 'Python3', 'GitHub', 'Linux', 'CI/CD', 'Build Tools', 'Drake'],
        tasks: [
          'Open-sourced our closed stack',
          'Refactored the codebase for maintainability',
          'Enhanced documentation',
          'Managed the community',
          'Increased the number of targeted platforms',
          'Optimized the build process',
        ],
        hide: false,
      },
    ],
  },
  {
    company: 'Infinit',
    title: 'Software Engineer',
    location: 'Paris Area, France',
    dates: [DateTime.fromISO('2012-10'), DateTime.fromISO('2016-10')],
    about:
      'Infinit focused on creating decentralized storage solutions and secure file transfer applications.',
    stages: [
      {
        name: 'Distributed Filesystem',
        dates: [DateTime.fromISO('2015-04'), DateTime.fromISO('2016-10')],
        skills: ['C++14', 'Python3', 'Node.js'],
        description:
          'The Infinit Storage Platform makes it easy to create and access decentralized storage, shared across an unlimited number of nodes, while guaranteeing bank-level cryptography, fine-grained access control, and data high-availability.',
        tasks: [
          'Contributed to the CLI (C++14)',
          'Contributed to core libraries (C++14)',
          'Developed cross-platform GUI (Node.js / React)',
          'Supported the hub server (REST, Python 3)',
        ],
        hide: false,
      },
      {
        name: 'File Transfer Application',
        dates: [DateTime.fromISO('2012-10'), DateTime.fromISO('2015-04')],
        skills: ['C++11', 'Python3', 'REST', 'MongoDB', 'Qt'],
        description:
          'The File Transfer Application was a multi-platform (Win, Mac, Linux, iOS, and Android) application allowing one to securely send files without size restrictions to other Infinit users, thanks to peer-to-peer technology and cloud-based storage.',
        tasks: [
          'Contributed to the core file transfer and file storage libraries',
          'Created the Windows and Linux GUI applications',
          'Contributed to the development of the different the servers (authentication, NAT punching)',
        ],
        hide: false,
      },
    ],
  },
  {
    company: 'Cyanide Studio',
    title: 'Software Engineer (intern)',
    location: 'Nanterre, France',
    dates: [DateTime.fromISO('2012-02'), DateTime.fromISO('2012-08')],
    about:
      'Cyanide is a video game development studio known for titles like Pro Cycling Manager, Tour de France, and Blood Bowl.',
    stages: [
      {
        name: 'Pro Cycling Manager 2012',
        dates: [DateTime.fromISO('2012-02'), DateTime.fromISO('2012-08')],
        description: 'Joined a ~12 members team on Pro Cycling Manager 2012 as an intern.',
        skills: ['C++', 'CyanScript'],
        tasks: ['Developed new features', 'Enhanced the GUI', 'Refactored legacy code'],
        hide: true,
      },
    ],
  },
  {
    company: 'Gostai',
    title: 'Roboticist (intern)',
    location: 'Paris, France',
    dates: [DateTime.fromISO('2010-09'), DateTime.fromISO('2011-01')],
    about: 'Gostai is a robot manufacturer and an editor of innovative software for robotics.',
    stages: [
      {
        name: 'Gostai Jazz Robot',
        dates: [DateTime.fromISO('2010-09'), DateTime.fromISO('2011-01')],
        skills: ['C', 'C++', 'Electronics', 'Signal Analysis', 'KiCad'],
        description:
          'Worked on the Gostai Jazz robot’s docking station, sensor acquisition, and assembly.',
        tasks: [
          'Developed the docking station',
          'Performed sensor acquisition and signal analysis',
          'Assembled the robot',
        ],
        hide: true,
      },
    ],
  },
]
