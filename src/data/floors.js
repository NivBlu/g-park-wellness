/**
 * Floor-by-floor site plates with per-apartment hotspots.
 *
 * Each apartment has:
 *   code     — apartment-type code (matches APARTMENTS in apartments.js)
 *   polygon  — clickable area, normalized 0..1 of plate image (x,y pairs)
 *   labelPos — [x,y] override for the type-letter label
 *
 * Coordinates measured from rendered plates in /public/floorplans/plates/
 * (2800×1980 WebP). Polygons tile tightly within each building so every
 * click lands on the right apartment.
 *
 * Directions (G Park site convention):
 *   מערב = ים (West, sea-facing)
 *   צפון = פארק (North, park-facing)
 *   דרום = תל ברוך / תל אביב (South)
 *   מזרח = ירושלים (East)
 */

export const FLOORS = [
  // ════════════════════════════════════════════════════
  // FLOOR 15 — מגה־פנטהאוז (tower only)
  // ════════════════════════════════════════════════════
  {
    id: 'tower-15-setback',
    label: 'קומה 15 · מגה־פנטהאוז',
    short: '15',
    plate: '/floorplans/plates/tower-15-setback.webp',
    note: 'דירה אחת ייחודית — מגה־פנטהאוז של 185 מ״ר עם מרפסת גג של 117 מ״ר.',
    apartments: [
      {
        code: 'MEGA',
        polygon: [
          [0.685, 0.430], [0.685, 0.625], [0.825, 0.625], [0.825, 0.430],
        ],
        labelPos: [0.755, 0.527],
      },
    ],
  },

  // ════════════════════════════════════════════════════
  // FLOOR 14 — שני פנטהאוזים (tower)
  // ════════════════════════════════════════════════════
  {
    id: 'tower-14-ph',
    label: 'קומה 14 · פנטהאוזים',
    short: '14 PH',
    plate: '/floorplans/plates/tower-14-ph.webp',
    note: 'שני פנטהאוזים במגדל — מערבי 5 חדרים (155 + 128 גג) ומזרחי 6 חדרים (160 + 178 גג).',
    apartments: [
      {
        code: 'PH-W',
        polygon: [
          [0.640, 0.330], [0.640, 0.640], [0.770, 0.640], [0.770, 0.330],
        ],
        labelPos: [0.705, 0.485],
      },
      {
        code: 'PH-E',
        polygon: [
          [0.770, 0.330], [0.770, 0.640], [0.913, 0.640], [0.913, 0.330],
        ],
        labelPos: [0.842, 0.485],
      },
    ],
  },

  // ════════════════════════════════════════════════════
  // FLOOR 14 (mini) — מיני פנטהאוזים
  // ════════════════════════════════════════════════════
  {
    id: 'tower-mini-ph',
    label: 'קומה 14 · מיני פנטהאוז',
    short: '14 MP',
    plate: '/floorplans/plates/tower-mini-ph.webp',
    note: 'מיני פנטהאוזים במגדל. בבנייני הבוטיק — דירות 5 חדרים בקצה.',
    apartments: [
      {
        code: 'PH-W',
        polygon: [
          [0.640, 0.330], [0.640, 0.640], [0.770, 0.640], [0.770, 0.330],
        ],
        labelPos: [0.705, 0.485],
      },
      {
        code: 'PH-E',
        polygon: [
          [0.770, 0.330], [0.770, 0.640], [0.913, 0.640], [0.913, 0.330],
        ],
        labelPos: [0.842, 0.485],
      },
    ],
  },

  // ════════════════════════════════════════════════════
  // FLOORS 9–13 — קומות גבוהות (tower only, 4 apts/floor)
  // ════════════════════════════════════════════════════
  {
    id: 'tower-9-13',
    label: 'קומות 9–13 · קומות גבוהות',
    short: '9–13',
    plate: '/floorplans/plates/tower-9-13.webp',
    note: '4 דירות בקומה במגדל — 2× 132 מ״ר באמצע + 2× 150 מ״ר בפינות.',
    apartments: [
      {
        code: 'T-132',
        polygon: [
          [0.640, 0.330], [0.640, 0.522], [0.770, 0.522], [0.770, 0.330],
        ],
        labelPos: [0.705, 0.420],
      },
      {
        code: 'T-132',
        polygon: [
          [0.770, 0.330], [0.770, 0.522], [0.913, 0.522], [0.913, 0.330],
        ],
        labelPos: [0.842, 0.420],
      },
      {
        code: 'T-150',
        polygon: [
          [0.620, 0.522], [0.620, 0.755], [0.770, 0.755], [0.770, 0.522],
        ],
        labelPos: [0.705, 0.640],
      },
      {
        code: 'T-150',
        polygon: [
          [0.770, 0.522], [0.770, 0.755], [0.913, 0.755], [0.913, 0.522],
        ],
        labelPos: [0.842, 0.640],
      },
    ],
  },

  // ════════════════════════════════════════════════════
  // FLOOR 7 — פנטהאוזים בוטיק (top of all 5 boutique buildings)
  // ════════════════════════════════════════════════════
  {
    id: 'boutique-7-ph',
    label: 'קומה 7 · פנטהאוזים בוטיק',
    short: '7 PH',
    plate: '/floorplans/plates/boutique-7-ph.webp',
    note: 'הקומה העליונה של בנייני הבוטיק — פנטהאוזים עם מרפסת גג. במגדל: קומות גבוהות.',
    apartments: [
      // North strip — 3 boutique-N penthouses (one per building)
      {
        code: 'BPH-N',
        polygon: [
          [0.257, 0.140], [0.422, 0.140], [0.422, 0.275], [0.257, 0.275],
        ],
        labelPos: [0.339, 0.207],
      },
      {
        code: 'BPH-N',
        polygon: [
          [0.450, 0.140], [0.610, 0.140], [0.610, 0.275], [0.450, 0.275],
        ],
        labelPos: [0.530, 0.207],
      },
      {
        code: 'BPH-N',
        polygon: [
          [0.640, 0.140], [0.910, 0.140], [0.910, 0.275], [0.640, 0.275],
        ],
        labelPos: [0.775, 0.207],
      },
      // West cluster — 2 boutique-W penthouses (one per building)
      {
        code: 'BPH-W',
        polygon: [
          [0.255, 0.305], [0.420, 0.305], [0.420, 0.510], [0.255, 0.510],
        ],
        labelPos: [0.337, 0.407],
      },
      {
        code: 'BPH-W',
        polygon: [
          [0.255, 0.545], [0.420, 0.545], [0.420, 0.745], [0.255, 0.745],
        ],
        labelPos: [0.337, 0.645],
      },
      // Tower at this level — typical-high mix
      {
        code: 'T-132',
        polygon: [
          [0.640, 0.330], [0.640, 0.522], [0.770, 0.522], [0.770, 0.330],
        ],
        labelPos: [0.705, 0.420],
      },
      {
        code: 'T-132',
        polygon: [
          [0.770, 0.330], [0.770, 0.522], [0.913, 0.522], [0.913, 0.330],
        ],
        labelPos: [0.842, 0.420],
      },
      {
        code: 'T-150',
        polygon: [
          [0.620, 0.522], [0.620, 0.755], [0.770, 0.755], [0.770, 0.522],
        ],
        labelPos: [0.705, 0.640],
      },
      {
        code: 'T-150',
        polygon: [
          [0.770, 0.522], [0.770, 0.755], [0.913, 0.755], [0.913, 0.522],
        ],
        labelPos: [0.842, 0.640],
      },
    ],
  },

  // ════════════════════════════════════════════════════
  // FLOORS 2–6 — קומות טיפוסיות (כל הבניינים, 17 דירות בקומה)
  // ════════════════════════════════════════════════════
  {
    id: 'tower-2-6',
    label: 'קומות 2–6 · קומות טיפוסיות',
    short: '2–6',
    plate: '/floorplans/plates/tower-2-6.webp',
    note: '17 דירות בקומה — 7 במגדל + 4 במרקמי מערבי + 6 במרקמי צפוני.',
    apartments: [
      // ─── מרקמי צפוני · 6 דירות בקומה ──────────────────
      // Left → right per developer spec: B-123, A, A, A, A, B-134
      // Building 1 (left, curved corner) — B-123 + A
      {
        code: 'B-123',
        polygon: [
          [0.257, 0.165], [0.357, 0.165], [0.357, 0.275], [0.257, 0.275],
        ],
        labelPos: [0.305, 0.220],
      },
      {
        code: 'A',
        polygon: [
          [0.357, 0.165], [0.422, 0.165], [0.422, 0.275], [0.357, 0.275],
        ],
        labelPos: [0.390, 0.220],
      },
      // Building 2 (middle) — A + A
      {
        code: 'A',
        polygon: [
          [0.450, 0.165], [0.530, 0.165], [0.530, 0.275], [0.450, 0.275],
        ],
        labelPos: [0.490, 0.220],
      },
      {
        code: 'A',
        polygon: [
          [0.530, 0.165], [0.610, 0.165], [0.610, 0.275], [0.530, 0.275],
        ],
        labelPos: [0.570, 0.220],
      },
      // Building 3 (right, curved corner) — A + B-134
      {
        code: 'A',
        polygon: [
          [0.640, 0.165], [0.770, 0.165], [0.770, 0.275], [0.640, 0.275],
        ],
        labelPos: [0.705, 0.220],
      },
      {
        code: 'B-134',
        polygon: [
          [0.770, 0.165], [0.910, 0.165], [0.910, 0.275], [0.770, 0.275],
        ],
        labelPos: [0.840, 0.220],
      },

      // ─── מרקמי מערבי · 4 דירות בקומה ──────────────────
      // 2 buildings stacked. Pattern (top→bottom): G, H, H, G
      // Upper building
      {
        code: 'G',
        polygon: [
          [0.255, 0.305], [0.420, 0.305], [0.420, 0.435], [0.255, 0.435],
        ],
        labelPos: [0.337, 0.370],
      },
      {
        code: 'H',
        polygon: [
          [0.255, 0.435], [0.420, 0.435], [0.420, 0.510], [0.255, 0.510],
        ],
        labelPos: [0.337, 0.473],
      },
      // Lower building
      {
        code: 'H',
        polygon: [
          [0.255, 0.545], [0.420, 0.545], [0.420, 0.620], [0.255, 0.620],
        ],
        labelPos: [0.337, 0.583],
      },
      {
        code: 'G',
        polygon: [
          [0.255, 0.620], [0.420, 0.620], [0.420, 0.745], [0.255, 0.745],
        ],
        labelPos: [0.337, 0.683],
      },

      // ─── מגדל הפארק · 7 דירות בקומה ───────────────────
      // North row: D (82m, north-facing) at the very top
      {
        code: 'D',
        polygon: [
          [0.685, 0.305], [0.785, 0.305], [0.785, 0.395], [0.685, 0.395],
        ],
        labelPos: [0.735, 0.350],
      },
      // C (134m) — north-east corner, L-shape
      {
        code: 'C',
        polygon: [
          [0.785, 0.305], [0.918, 0.305], [0.918, 0.485], [0.785, 0.485],
        ],
        labelPos: [0.851, 0.395],
      },
      // East column: E (67m) upper + lower
      {
        code: 'E',
        polygon: [
          [0.785, 0.485], [0.875, 0.485], [0.875, 0.572], [0.785, 0.572],
        ],
        labelPos: [0.830, 0.528],
      },
      {
        code: 'E',
        polygon: [
          [0.785, 0.572], [0.875, 0.572], [0.875, 0.658], [0.785, 0.658],
        ],
        labelPos: [0.830, 0.615],
      },
      // West column: E (67m) — only one west-side small apt
      {
        code: 'E',
        polygon: [
          [0.640, 0.430], [0.730, 0.430], [0.730, 0.660], [0.640, 0.660],
        ],
        labelPos: [0.685, 0.545],
      },
      // South row: F (113m) west | F (113m) east
      {
        code: 'F',
        polygon: [
          [0.640, 0.660], [0.785, 0.660], [0.785, 0.762], [0.640, 0.762],
        ],
        labelPos: [0.712, 0.711],
      },
      {
        code: 'F',
        polygon: [
          [0.785, 0.660], [0.918, 0.660], [0.918, 0.762], [0.785, 0.762],
        ],
        labelPos: [0.851, 0.711],
      },
    ],
  },

  // ════════════════════════════════════════════════════
  // GROUND — דירות גן + לובי
  // ════════════════════════════════════════════════════
  {
    id: 'tower-ground',
    label: 'קומת קרקע · דירות גן',
    short: 'קרקע',
    plate: '/floorplans/plates/tower-ground.webp',
    note: 'דירות גן בקומה הקרקע, לובי ראשי, חזית מסחרית וגישה לפארק הפנימי.',
    apartments: [
      {
        code: 'G-128',
        polygon: [
          [0.640, 0.300], [0.770, 0.300], [0.770, 0.490], [0.640, 0.490],
        ],
        labelPos: [0.705, 0.395],
      },
      {
        code: 'G-66',
        polygon: [
          [0.770, 0.300], [0.840, 0.300], [0.840, 0.490], [0.770, 0.490],
        ],
        labelPos: [0.805, 0.395],
      },
      {
        code: 'G-59',
        polygon: [
          [0.840, 0.300], [0.918, 0.300], [0.918, 0.490], [0.840, 0.490],
        ],
        labelPos: [0.879, 0.395],
      },
    ],
  },
]

export const floorById = (id) => FLOORS.find((f) => f.id === id)

// Filter floors by building (used by the building tabs).
const ALL_FLOOR_IDS = FLOORS.map((f) => f.id)
export const FLOORS_BY_BUILDING = {
  tower:        ALL_FLOOR_IDS,
  'boutique-w': ['boutique-7-ph', 'tower-2-6', 'tower-ground'],
  'boutique-n': ['boutique-7-ph', 'tower-2-6', 'tower-ground'],
}
