import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    slug: 'the-travertine-sanctuary',
    title: 'The Travertine Sanctuary',
    category: 'Residential Interiors',
    location: 'Greater Kailash, New Delhi',
    year: '2025',
    area: '4,850 sq.ft',
    timeline: '7 Months',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    excerpt: 'An expansive modern residence defined by Roman travertine stone, hand-plastered lime wash walls, and bespoke low-profile walnut joinery.',
    overview: 'Conceived as a calm urban refuge in South Delhi, this 4,850 sq.ft residence balances monolithic architectural masses with warm, tactile residential living. The spatial sequence prioritizes uninterrupted daylight, natural cross-ventilation, and quiet materiality that matures gracefully with age.',
    designConcept: 'The central thesis was "Subtractive Elegance" — removing ornamental distraction in favor of monumental materials, shadow play, and seamless transitions between shared living salons and private inner sanctuaries.',
    spatialFeatures: [
      'Monolithic Roman Travertine fireplace and low seating plinth',
      'Continuous micro-cement flooring unifying interior and landscaped deck',
      'Concealed architectural cove lighting with circadian dimming',
      'Fluted smoked walnut partitions concealing smart storage systems'
    ],
    materialsPalette: [
      { name: 'Navona Roman Travertine', category: 'Natural Stone', colorCode: '#D8CEBF', textureNote: 'Honed, un-filled porous texture with earthy tactile warmth' },
      { name: 'Smoked European Walnut', category: 'Joinery & Millwork', colorCode: '#4A3B32', textureNote: 'Matte polyurethane finish with pronounced organic grain' },
      { name: 'Mineral Lime Plaster', category: 'Wall Finish', colorCode: '#F4EFE6', textureNote: 'Hand-troweled breathable mineral coat with subtle tonal variations' },
      { name: 'Aged Brushed Bronze', category: 'Hardware & Fixtures', colorCode: '#877051', textureNote: 'Unlacquered artisan brass developing natural patina over time' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        caption: 'Formal salon anchored by monolithic Roman Travertine plinths and bespoke low-slung linen seating.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Architectural transition from double-height living volume into private library corridor.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        caption: 'Informal morning lounge featuring bespoke bouclé armchairs and cast-bronze side tables.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Dining gallery centered around a 10-seater cantilevered quartzite table with sculptural brass pendants.',
        aspectRatio: 'wide'
      }
    ]
  },
  {
    id: 'proj-2',
    slug: 'the-fluted-oak-atelier',
    title: 'The Minimalist Salon & Courtyard',
    category: 'Living Spaces',
    location: 'Worli Sea Face, Mumbai',
    year: '2024',
    area: '2,600 sq.ft',
    timeline: '5 Months',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    excerpt: 'An airy oceanfront salon celebrating daylight, sculpted plaster volumes, and bespoke linen upholstery.',
    overview: 'Designed for a collector who hosts intimate salon gatherings, this living volume re-imagines coastal living through grounded earthy neutrals, tactile stone reliefs, and custom curved furniture geometries that facilitate fluid conversation.',
    designConcept: 'Framing the horizon while creating visual warmth inside. We replaced heavy window jambs with razor-thin bronze profiles and layered Belgian linen, bouclé, and soft travertine.',
    spatialFeatures: [
      'Sculptural curved sofa tailored to acoustic living dynamics',
      'Handmade terracotta vessel niches integrated into structural pillars',
      'Concealed audio system integrated flush into micro-rendered ceiling',
      'Dual-orientation seating connecting sea view with indoor botanical patio'
    ],
    materialsPalette: [
      { name: 'Bleached White Oak', category: 'Flooring & Slats', colorCode: '#D2C3B0', textureNote: 'Wire-brushed matte oil treatment' },
      { name: 'Belgian Ecru Linen', category: 'Upholstery', colorCode: '#EAE5DB', textureNote: 'Heavyweight unbleached woven flax' },
      { name: 'Chambolle Limestone', category: 'Accent Masonry', colorCode: '#DDD5C7', textureNote: 'Bush-hammered finish with delicate fossil inclusions' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
        caption: 'Primary salon arrangement with curved bespoke seating framing diffused daylight.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        caption: 'Detail of hand-plastered display niche and monolithic side tables.',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'proj-3',
    slug: 'sculptural-granite-modular-kitchen',
    title: 'Monolithic Granite & Smoked Walnut Kitchen',
    category: 'Modular Kitchens',
    location: 'Jubilee Hills, Hyderabad',
    year: '2025',
    area: '920 sq.ft',
    timeline: '4 Months',
    coverImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    excerpt: 'A seamless culinary atelier pairing fluted smoked timber, continuous Calacatta quartzite island, and concealed German hardware.',
    overview: 'A high-performance culinary architecture created for both gourmet entertaining and effortless daily rituals. All heavy appliances, prep zones, and dry pantries are tucked behind pocket doors, leaving an immaculate sculptural monolith centered in the room.',
    designConcept: 'Transforming the kitchen from a utilitarian work space into a dramatic centerpiece of architectural sculpture, using continuous grain matching and flush invisible transitions.',
    spatialFeatures: [
      '14-foot monolithic cantilevered breakfast bar with waterfall edges',
      'Zero-hardware touch-to-open pocket cabinets with soft-close dampers',
      'Integrated induction cooktop directly flush-mounted into solid surface stone',
      'Dual-temperature wine presentation cellar with UV-filtered fluted glass'
    ],
    materialsPalette: [
      { name: 'Calacatta Paonazzo Quartzite', category: 'Countertops & Island', colorCode: '#ECE7DC', textureNote: 'Satin leathered finish with golden caramel veining' },
      { name: 'Smoked Thermo-Ash Wood', category: 'Cabinetry Fronts', colorCode: '#3D342E', textureNote: 'Vertical micro-fluting with ultra-matte anti-fingerprint seal' },
      { name: 'Gunmetal Anodized Aluminum', category: 'Profiles & Recesses', colorCode: '#2B2A29', textureNote: 'Architectural shadow gaps and integrated LED tracks' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
        caption: 'The monolithic kitchen island with fluted timber base and integrated bar seating.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
        caption: 'Full-height wall storage with integrated German appliances and hidden prep pantry.',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'proj-4',
    slug: 'the-monolithic-linen-suite',
    title: 'The Wabi-Sabi Master Suite & Spa',
    category: 'Bedroom Interiors',
    location: 'Vasant Vihar, New Delhi',
    year: '2024',
    area: '1,450 sq.ft',
    timeline: '4.5 Months',
    coverImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    excerpt: 'A cocoon-like personal retreat centered on restorative acoustics, raw silk textures, and open-plan limestone ensuite.',
    overview: 'A sanctuary dedicated to rest, decompression, and quiet morning rituals. The master suite merges a low platform sleeping bed, a backlit fluted dressing pavilion, and a private wet room clad in warm Jura limestone.',
    designConcept: 'Sensory grounding: every tactile touchpoint is calibrated for softness underfoot, glare-free optical comfort, and natural acoustic dampening.',
    spatialFeatures: [
      'Cantilevered low-profile oak platform bed with integrated floating nightstands',
      'Walk-in dressing atelier with tinted bronze mirrors and concealed pull-outs',
      'Monolithic freestanding limestone soaking tub placed adjacent to private green lightwell',
      'Dual-circuit low-voltage lighting designed for relaxation rhythms'
    ],
    materialsPalette: [
      { name: 'Raw Handloom Tussar Silk', category: 'Wall Paneling', colorCode: '#E5DDCF', textureNote: 'Textured acoustic padding behind artisan spun silk' },
      { name: 'Jura Beige Limestone', category: 'Wet Area Stone', colorCode: '#D1C6B4', textureNote: 'Flint-honed slip-resistant finish' },
      { name: 'Warm European Oak', category: 'Custom Headboard', colorCode: '#B8A082', textureNote: 'Velvet-smooth natural wax coating' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1600&q=85',
        caption: 'Master bedroom platform bed with integrated architectural headboard and reading sconces.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Morning perspective showing diffused light filtering across warm lime-wash wall panels.',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: 'proj-5',
    slug: 'the-linear-design-atelier',
    title: 'The Cross Atelier & Executive Suite',
    category: 'Commercial Spaces',
    location: 'Indiranagar, Bengaluru',
    year: '2025',
    area: '3,800 sq.ft',
    timeline: '6 Months',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    excerpt: 'An architectural studio and executive boardroom balancing raw concrete ceilings with precision brass detailing.',
    overview: 'Commissioned for a boutique architecture and venture advisory firm, this commercial workspace blends the rigor of a design library with the hospitality of a private members club.',
    designConcept: 'Structured transparency: glass partitions clad in blackened steel mullions maintain openness across the floor plate while acoustic oak ribs isolate sensitive board discussions.',
    spatialFeatures: [
      '18-seater continuous oak boardroom table with flush data & power wells',
      'Curated sample library with full-height brass display bays',
      'Barista coffee and gathering bar clad in fluted dark granite',
      'Circadian lighting system mimicking daylight spectrum for high productivity'
    ],
    materialsPalette: [
      { name: 'Blackened Architectural Steel', category: 'Glazing Mullions', colorCode: '#1C1C1B', textureNote: 'Satin matte powder coating' },
      { name: 'Quarter-Sawn White Oak', category: 'Millwork', colorCode: '#C4B29A', textureNote: 'Straight linear architectural grain' },
      { name: 'Polished Terrazzo Aggregates', category: 'High-Traffic Floors', colorCode: '#E4DDD3', textureNote: 'River stone aggregates set in ivory cement matrix' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
        caption: 'The main executive conference atelier with custom acoustic slatted ceiling and panoramic glazing.',
        aspectRatio: 'wide'
      }
    ]
  },
  {
    id: 'proj-6',
    slug: 'the-alibaug-courtyard-villa',
    title: 'The Courtyard Villa at Alibaug',
    category: 'Residential Interiors',
    location: 'Awas, Alibaug',
    year: '2024',
    area: '6,200 sq.ft',
    timeline: '9 Months',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2400&q=90',
    thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    excerpt: 'A tropical brutalist weekend retreat where interior living rooms dissolve effortlessly into shaded reflection pools.',
    overview: 'Set amidst dense chikoo and mango groves, this weekend villa celebrates barefoot luxury. Wide sliding glass walls pocket into structural columns to create an open breezeway that keeps the interiors naturally cool year-round.',
    designConcept: 'Blurring the threshold between the interior living rooms and nature, utilizing regional Kota stone, reclaimed teakwood rafters, and woven cane textures.',
    spatialFeatures: [
      'Indoor-outdoor transition with zero-threshold pocket doors',
      'Central water courtyard reflecting changing sky and daylight angles',
      'Custom dining pavilion seating 14 guests around a reclaimed suar wood slab',
      'Integrated passive cooling wind catchers within the roof architecture'
    ],
    materialsPalette: [
      { name: 'Honed Green Kota Stone', category: 'Flooring & Plinths', colorCode: '#879483', textureNote: 'Natural mineral cooling texture, slip resistant' },
      { name: 'Reclaimed Burma Teak', category: 'Beams & Joinery', colorCode: '#694F39', textureNote: 'Aged weathered warm grain' },
      { name: 'Hand-woven Cane Weave', category: 'Screens & Shading', colorCode: '#D5BE9B', textureNote: 'Traditional octagonal weave crafted by regional artisans' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        caption: 'Open-air living pavilion overlooking reflecting pools and landscaped grove.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        caption: 'Al fresco dining gallery surrounded by tropical foliage and natural stone walls.',
        aspectRatio: 'landscape'
      }
    ]
  }
];

export const samplePortfolioNotice = {
  label: "DEMONSTRATION PORTFOLIO NOTE",
  text: "These curated sample projects showcase the architectural precision, bespoke material palettes, and spatial sophistication delivered by STUDIO X CROSS. Project descriptions, dimensions, and specifications are illustrative demonstration records."
};
