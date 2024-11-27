import type { Activity } from '@/types/activities'
import type { Education } from '@/types/education'
import { DateTime } from 'luxon'

export const education: Education[] = [
  {
    institution: 'UTC (Compiègne)',
    degree: "Engineer's degree (Computer Science)",
    dates: [DateTime.fromISO('2010-09'), DateTime.fromISO('2012-06')],
    activities: [
      'software_engineering',
      'mathematics',
      'operating_systems',
      'computer_networks',
      'databases',
    ] satisfies Activity[],
  },
  {
    institution: 'Tecnológico de Monterrey',
    degree: "Engineer's degree (Computer Science)",
    dates: [DateTime.fromISO('2011-08'), DateTime.fromISO('2011-12')],
    activities: [
      'applied_robotics',
      'modeling_and_animation',
      'programming_languages',
      'introduction_to_computer_graphics',
      'theory_of_computation',
    ],
    description:
      'Student exchange program between the University of Technology of Compiègne and University of Technology of Monterrey.',
  },
  {
    institution: 'IUT Cachan',
    degree: 'Advanced Technician in Electronics and Computer Science',
    dates: [DateTime.fromISO('2007-09'), DateTime.fromISO('2009-06')],
    activities: ['electronics', 'computer_science', 'mathematics', 'physics'] satisfies Activity[],
    logo: 'IUT Cachan',
  },
]
