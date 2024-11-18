import type { MessageSchema } from './en-EN';

const messages: MessageSchema = {
  print: 'Cette page a été optimisée pour l\'impression',
  interests: {
    software_engineering: 'Génie logiciel',
    process_optimization: 'Optimisation des processus',
    project_management: 'Gestion de projet',
    team_management: 'Gestion d\'équipe',
    hiking: 'Randonnée',
    role_playing_games: 'Jeux de rôle',
    woodworking: 'Menuiserie',
    handcraft: 'Artisanat',
  },
  activities: {
    'software_engineering': 'Génie logiciel',
    'mathematics': 'Mathématiques',
    'operating_systems': 'Systèmes d\'exploitation',
    'computer_networks': 'Réseaux informatiques',
    'databases': 'Bases de données',
    'applied_robotics': 'Robotique appliquée',
    'modeling_and_animation': 'Modélisation et animation',
    'programming_languages': 'Langages de programmation',
    'introduction_to_computer_graphics': 'Introduction à l\'infographie',
    'theory_of_computation': 'Théorie de la computation',
    'electronics': 'Électronique',
    'computer_science': 'Informatique',
    'physics': 'Physique'
  },
  countries: {
    fr: 'France',
    ch: 'Suisse',
  },
  nationality: {
    fr: 'Français',
    ch: 'Suisse'
  }
} as const;

export default messages;
