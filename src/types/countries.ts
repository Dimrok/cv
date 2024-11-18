const COUNTRIES = ['fr', 'ch'] as const;

export type Country = typeof COUNTRIES[number];
