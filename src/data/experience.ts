import type { Experience } from '@/types/experience'
import { DateTime } from 'luxon'

export const experience: Experience[] = [
  {
    company: 'Koala Insurance',
    title: 'Co-Founder & Chief Technology Officer',
    location: 'Paris, France',
    dates: [DateTime.fromISO('2019-10'), DateTime.fromISO('2024-09')],
    about:
      'Koala is a insurance broker with the mission to build fair and simple travel insurance products and services for the travel industry.',
    stages: [
      {
        name: 'Late stage (up to 8 developers)',
        dates: [DateTime.fromISO('2021-05'), DateTime.fromISO('2024-09')],
        description: undefined,
        tags: ['Hiring', 'Management', 'Processes', 'Tooling', 'Design', 'Turborepo'],
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
        tags: [
          'TypeScript',
          'monorepo',
          'NestJS',
          'Prisma',
          'Vue',
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
          'Enhanced and migrated the CI/CD from GitLab to GitHub)',
          'Designed an event-driven architecture (EventBridge, Lambda, SQS)',
        ],
        hide: false,
      },

      {
        name: 'Early stage (solo developer)',
        dates: [DateTime.fromISO('2019-10'), DateTime.fromISO('2021-01')],
        description: undefined,
        tags: ['JavaScript', 'Node.js', 'Express', 'Jest', 'AWS', 'Docker', 'GitLab'],
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
        tags: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Python3', 'Bash'],
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
        tags: ['C++', 'Python 3', 'GitHub', 'Linux', 'CI/CD', 'Build Tools', 'Drake'],
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
        tags: ['C++14', 'Python3', 'Node.js'],
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
        tags: ['C++11', 'Python3', 'REST', 'MongoDB', 'Qt'],
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
        tags: ['C++', 'CyanScript'],
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
        tags: ['C', 'C++', 'Electronics', 'Signal Analysis', 'KiCad'],
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
