import type { Self } from '../types/self'
import { DateTime } from 'luxon'

export const self: Self = {
  birth: DateTime.fromISO('1988-09-19'),
  locations: ['Lausanne, Switzerland', 'Paris, France'],
  firstName: 'Antony',
  lastName: 'Méchin',
  headline: 'Senior Software Engineer at Technis, Former Co-Founder & CTO at Koala Insurance',
  summary:
    'Software engineer with 13+ years of experience, from C++ distributed systems (Infinit, Docker) to co-founding Koala Insurance and leading its engineering team as CTO. At Technis, I build identity & access management, real-time analytics, reporting and data pipelines for smart buildings, and integrate the E-nno energy-optimisation platform.',
  countryOfOrigin: 'France',
  phone: { label: '+33 6 40 12 96 79', href: 'tel:+33640129679' },
  email: { label: 'antony.mechin@gmail.com', href: 'mailto:antony.mechin@gmail.com' },
  links: [
    { label: 'dimrok.github.io/cv', href: 'https://dimrok.github.io/cv' },
    { label: 'linkedin.com/in/antony-mechin', href: 'https://linkedin.com/in/antony-mechin' },
    { label: 'github.com/dimrok', href: 'https://github.com/dimrok' },
  ],
  languages: [
    { name: 'French', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'Spanish', level: 'Beginner' },
  ],
  skills: [
    { name: 'TypeScript', level: 4.5 },
    { name: 'Node.js', level: 4 },
    { name: 'NestJS', level: 4 },
    { name: 'Project Management', level: 4 },
    { name: 'Processes', level: 4 },
    { name: 'Docker', level: 4 },
    { name: 'Prisma', level: 4 },
    { name: 'GCP', level: 3.5 },
    { name: 'AWS', level: 3.5, stale: true },
    { name: 'Terraform', level: 3.5 },
    { name: 'React', level: 3.5 },
    { name: 'People Management', level: 3.5, stale: true },
    { name: 'Hiring', level: 3.5, stale: true },
    { name: 'Tooling', level: 3 },
  ],
  professionalInterests: [
    'software_engineering',
    'process_optimization',
    'project_management',
    'team_management',
  ],
  personalInterests: ['hiking', 'role_playing_games', 'woodworking', 'handcraft'],
}
