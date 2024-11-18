import type { Self } from '../types/self';
import { DateTime } from 'luxon';

export const self: Self = {
  birth: DateTime.fromISO('1988-09-19'),
  locations: ['Lausanne, Switzerland', 'Paris, France'],
  firstName: 'Antony',
  lastName: 'Méchin',
  countryOfOrigin: 'France',
  professionalInterests: [
    'software_engineering',
    'process_optimization',
    'project_management',
    'team_management',
  ],
  personalInterests: [
    'hiking',
    'role_playing_games',
    'woodworking',
    'handcraft',
  ]
}
