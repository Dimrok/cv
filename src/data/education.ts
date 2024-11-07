import type { Education } from '@/types/education'
import { DateTime } from 'luxon'

export const education: Education[] = [
  {
    institution: 'Université de Technologie de Compiègne (UTC)',
    degree: 'Engineer’s Degree, Computer Science',
    dates: [DateTime.fromISO('2009-09'), DateTime.fromISO('2012-06')],
    activities: [
      'Software Engineering',
      'Mathematics',
      'Operating Systems',
      'Computer Networks',
      'Databases',
    ],
  },
  {
    institution: 'Tecnológico de Monterrey',
    degree: "Engineer's degree, Computer Software Engineering",
    dates: [DateTime.fromISO('2011-08'), DateTime.fromISO('2011-12')],
    activities: [
      'Applied Robotics',
      'Modeling and animation',
      'Programming languages',
      'Introduction to Computer Graphics',
      'Theory of computation',
    ],
    description:
      'Student exchange program between the University of Technology of Compiègne and University of Technology of Monterrey.',
  },
  {
    institution: 'IUT Cachan',
    degree: 'Advanced Technician in Electronics and Computer Science',
    dates: [DateTime.fromISO('2007-09'), DateTime.fromISO('2009-06')],
    logo: 'IUT Cachan',
    activities: ['Electronics', 'Computer Science', 'Mathematics', 'Physics'],
  },
]
