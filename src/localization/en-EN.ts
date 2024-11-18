import type { Activity } from "@/types/activities";
import type { Country } from "@/types/countries";
import type { Interrest } from "@/types/self";

const messages = {
  print: 'This page has been optimized for printing.',
  interests: {
    software_engineering: 'Software Engineering',
    process_optimization: 'Process Optimization',
    project_management: 'Project Management',
    team_management: 'Team Management',
    hiking: 'Hiking',
    role_playing_games: 'Role Playing Games',
    woodworking: 'Woodworking',
    handcraft: 'Handcraft',
  } satisfies Record<Interrest, string>,
  activities: {
    'software_engineering': 'Software Engineering',
    'mathematics': 'Mathematics',
    'operating_systems': 'Operating Systems',
    'computer_networks': 'Computer Networks',
    'databases': 'Databases',
    'applied_robotics': 'Applied Robotics',
    'modeling_and_animation': 'Modeling and Animation',
    'programming_languages': 'Programming Languages',
    'introduction_to_computer_graphics': 'Introduction to Computer Graphics',
    'theory_of_computation': 'Theory of Computation',
    'electronics': 'Electronics',
    'computer_science': 'Computer Science',
    'physics': 'Physics'
  } satisfies Record<Activity, string>,
  countries: {
    fr: 'France',
    ch: 'Switzerland',
  } satisfies Record<Country, string>,
  nationality: {
    fr: 'French',
    ch: 'Swiss',
  } satisfies Record<Country, string>,
};

export type MessageSchema = typeof messages;

type DeepKeyOf<T> = T extends object
  ? {
    [K in keyof T]: K extends string ? `${K}` | `${K}.${DeepKeyOf<T[K]>}` : never;
  }[keyof T]
  : never;

export type TranslationKeys = DeepKeyOf<MessageSchema>;

export default messages;
