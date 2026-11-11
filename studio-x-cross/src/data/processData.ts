import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    number: '01',
    phase: 'DISCOVER',
    title: 'Immersion & Lifestyle Brief',
    description: 'We begin with an in-depth conversation to understand your daily routines, aesthetic aspirations, functional must-haves, and budget parameters. We listen deeply to how you inhabit space.',
    deliverables: [
      'Comprehensive lifestyle & spatial questionnaire',
      'Site dimension verification & photographic audit',
      'Aesthetic alignment boards & scope confirmation'
    ],
    duration: '1 – 2 Weeks'
  },
  {
    number: '02',
    phase: 'CONCEPTUALIZE',
    title: 'Space Planning & Visual Direction',
    description: 'Our studio translates the brief into preliminary architectural layouts, circulation paths, and tactile moodboards. We explore proportions, volume relationships, and natural light behavior.',
    deliverables: [
      'Multiple 2D floor plan layout iterations',
      'Volumetric spatial studies & perspective sketches',
      'Curated physical material trays (stone, timber, metals, fabrics)'
    ],
    duration: '2 – 3 Weeks'
  },
  {
    number: '03',
    phase: 'DESIGN',
    title: 'Refined Detailing & 3D Reality',
    description: 'Every joinery joint, lighting fixture, shadow line, and custom furniture piece is meticulously resolved. We produce photorealistic renders and full technical civil drawings for every room.',
    deliverables: [
      'Photorealistic architectural 3D visualizations',
      'Exhaustive civil, electrical, plumbing & reflected ceiling plans (RCP)',
      'Bespoke millwork fabrication details & hardware schedule',
      'Itemized Bill of Quantities (BOQ) with transparent costing'
    ],
    duration: '3 – 4 Weeks'
  },
  {
    number: '04',
    phase: 'EXECUTE',
    title: 'Turnkey Craft & Precision Building',
    description: 'Our project leads oversee craftsmen, civil teams, and artisan fabricators on site. We enforce strict tolerances, quality benchmarks, and schedule milestones with regular weekly photographic progress reports.',
    deliverables: [
      'Dedicated project site manager & weekly client updates',
      'Direct artisan quality verification and sample mockups',
      'Factory millwork dry-fits before final installation',
      'Strict adherence to engineering tolerances'
    ],
    duration: '3 – 6 Months (Per Scale)'
  },
  {
    number: '05',
    phase: 'DELIVER',
    title: 'Styling, Snagging & Handover',
    description: 'The final culmination. We conduct rigorous snag checks, deep professional cleaning, architectural art installation, and delicate styling so you step into a flawless, turnkey home.',
    deliverables: [
      'Comprehensive snagging inspection & zero-defect signoff',
      'Turnkey art curation, soft furnishings & floral styling',
      'Comprehensive care & maintenance manual for all stone & finishes',
      'Post-handover warranty and continuing support'
    ],
    duration: '1 – 2 Weeks'
  }
];
