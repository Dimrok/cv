import { DateTime } from 'luxon';

const INTEREST = [
  'software_engineering',
  'process_optimization',
  'project_management',
  'team_management',
  'hiking',
  'role_playing_games',
  'woodworking',
  'handcraft',
] as const;
export type Interrest = typeof INTEREST[number];

export type Self = {
  firstName: string;
  lastName: string;
  locations: string[];
  birth: DateTime;
  countryOfOrigin: 'France';
  professionalInterests: Interrest[];
  personalInterests: Interrest[];
}
