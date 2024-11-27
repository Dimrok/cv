const ACTIVITIES = [
  'software_engineering',
  'mathematics',
  'operating_systems',
  'computer_networks',
  'databases',
  'applied_robotics',
  'modeling_and_animation',
  'programming_languages',
  'introduction_to_computer_graphics',
  'theory_of_computation',
  'electronics',
  'computer_science',
  'mathematics',
  'physics',
] as const

export type Activity = (typeof ACTIVITIES)[number]
