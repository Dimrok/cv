import type { Project } from '@/types/project'
import { DateTime } from 'luxon'

export const projects: Project[] = [
  {
    name: 'Match & Party',
    dates: [DateTime.fromISO('2026-02'), DateTime.fromISO('2026-08')],
    about:
      'Social matching platform for events: participants register to an event, fill a personality and hobbies profile, and get matched with compatible people.',
    skills: [
      'TypeScript',
      'Next.js',
      'tRPC',
      'Event Sourcing',
      'Clean Architecture',
      'Firebase',
      'Tailwind CSS',
      'Vitest',
      'Playwright',
      'Terraform',
      'GitHub Actions',
    ],
    tasks: [
      'Designed an event-sourced domain (Castore, Firestore event store and projections) with clean architecture',
      'Implemented a matching algorithm based on Big Five personality traits and a 90-hobby taxonomy scored by category and intensity',
      'Built an accessible, mobile-first UI in English, French and Spanish, checked by Lighthouse CI and Playwright',
      'Provisioned GCP environments with Terraform and an AI-assisted workflow (agent guidelines, skills, specs)',
    ],
  },
  {
    name: 'Smart Home',
    dates: [DateTime.fromISO('2026-09'), null],
    about: 'Self-hosted home automation stack on a Raspberry Pi 5 with a fleet of ESP8266 devices.',
    skills: ['Balena', 'Docker', 'MQTT', 'Protobuf', 'NestJS', 'ESP8266', 'C++'],
    tasks: [
      'Deployed a Balena multi-container fleet: DNS filtering, reverse proxy, MQTT broker, S3-compatible storage and an HDMI kiosk',
      'Wrote ESP8266 firmware (PlatformIO) exchanging Protobuf messages over MQTT with a NestJS service, with over-the-air updates',
    ],
  },
]
