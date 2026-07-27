export const SCIENTIFIC_LENS_IDS = [
  'coaching',
  'sport_activity',
  'method_format',
  'performance_skill',
  'mechanics',
  'physiology',
  'body_tissue',
  'work_response_recovery',
] as const

export type ScientificLensId = (typeof SCIENTIFIC_LENS_IDS)[number]

export interface ScientificLensDefinition {
  id: ScientificLensId
  name: string
  question: string
}

export const SCIENTIFIC_LENSES: readonly ScientificLensDefinition[] = [
  {
    id: 'coaching',
    name: 'Coaching',
    question: 'What are we trying to develop or protect today?',
  },
  {
    id: 'sport_activity',
    name: 'Sport & activity',
    question: 'What sport, event, exercise or drill is this?',
  },
  {
    id: 'method_format',
    name: 'Method & format',
    question: 'How is the work performed and organized?',
  },
  {
    id: 'performance_skill',
    name: 'Performance & skill',
    question: 'What task-specific ability or skill might this support?',
  },
  {
    id: 'mechanics',
    name: 'Mechanics',
    question: 'What force, velocity, power or movement quantity is actually known?',
  },
  {
    id: 'physiology',
    name: 'Physiology',
    question: 'What energy, recruitment or adaptation statement is justified?',
  },
  {
    id: 'body_tissue',
    name: 'Body & tissue',
    question: 'Where is the exposure expressed, and what tissue statement is justified?',
  },
  {
    id: 'work_response_recovery',
    name: 'Work, response & recovery',
    question: 'What was done, how did the athlete respond, and what is their current state?',
  },
]

export const SCIENTIFIC_INVARIANTS = [
  'Planned, effective and performed prescriptions remain separate.',
  'A lens projects the same training facts; it does not rewrite them.',
  'Unknown values remain unknown and never silently become zero.',
  'Intent, exposure, response and observed adaptation are not interchangeable.',
  'Activities can support multiple goals without duplicating the performed dose.',
  'Scientific estimates include their source, context, confidence and model version.',
] as const
