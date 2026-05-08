/**
 * Floor-by-floor site plates with per-apartment hotspot rectangles.
 *
 * Coordinates are normalized 0..1 of the plate image. Authored by reading
 * the type labels (`טיפוס X`) directly off the rendered plates in
 * /public/floorplans/plates/. Adjust if plates are re-rendered.
 *
 * The plates are SITE PLANS — every level shows the entire project (tower +
 * 5 boutique buildings). Each typical floor has up to 17 apartments visible.
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
    note: 'דירה אחת ייחודית — מגה־פנטהאוז של 185 מ״ר עם 117 מ״ר מרפסת גג.',
    apartments: [
      { code: 'MEGA', polygon: [
        [0.680, 0.430], [0.680, 0.620], [0.820, 0.620], [0.820, 0.430]
      ]},
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
    note: 'שני פנטהאוזים — מערבי 5 חדרים (155 + 128 גג) ומזרחי 6 חדרים (160 + 178 גג).',
    apartments: [
      { code: 'PH-W', polygon: [
        [0.640, 0.330], [0.640, 0.640], [0.770, 0.640], [0.770, 0.330]
      ]},
      { code: 'PH-E', polygon: [
        [0.770, 0.330], [0.770, 0.640], [0.913, 0.640], [0.913, 0.330]
      ]},
    ],
  },

  // ════════════════════════════════════════════════════
  // FLOOR 14 (mini) — מיני פנטהאוזים + פנטהאוזים בוטיק
  // ════════════════════════════════════════════════════
  {
    id: 'tower-mini-ph',
    label: 'קומה 14 · מיני פנטהאוז',
    short: '14 MP',
    plate: '/floorplans/plates/tower-mini-ph.webp',
    note: 'מיני פנטהאוזים במגדל; בבנייני הבוטיק — דירות 5 חדרים בקצה.',
    apartments: [
      { code: 'PH-W', polygon: [
        [0.640, 0.330], [0.640, 0.640], [0.770, 0.640], [0.770, 0.330]
      ]},
      { code: 'PH-E', polygon: [
        [0.770, 0.330], [0.770, 0.640], [0.913, 0.640], [0.913, 0.330]
      ]},
    ],
  },

  // ════════════════════════════════════════════════════
  // FLOORS 9–13 — קומות גבוהות מגדל
  // ════════════════════════════════════════════════════
  {
    id: 'tower-9-13',
    label: 'קומות 9–13 · קומות גבוהות',
    short: '9–13',
    plate: '/floorplans/plates/tower-9-13.webp',
    note: 'רק המגדל מאוכלס — 4 דירות בקומה: 2× 132 מ״ר באמצע + 2× 150 מ״ר בפינות.',
    apartments: [
      { code: 'T-132', polygon: [
        [0.640, 0.330], [0.640, 0.522], [0.770, 0.522], [0.770, 0.330]
      ]}, // top-left
      { code: 'T-132', polygon: [
        [0.770, 0.330], [0.770, 0.522], [0.913, 0.522], [0.913, 0.330]
      ]}, // top-right
      { code: 'T-150', polygon: [
        [0.620, 0.522], [0.620, 0.755], [0.770, 0.755], [0.770, 0.522]
      ]}, // bottom-left
      { code: 'T-150', polygon: [
        [0.770, 0.522], [0.770, 0.755], [0.913, 0.755], [0.913, 0.522]
      ]}, // bottom-right
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
    note: 'הקומה העליונה של בנייני הבוטיק — פנטהאוזים עם מרפסת גג.',
    apartments: [
      // North boutique penthouses (3 buildings) — same polygon shape as floor 2-6 north strip
      { code: 'BPH-N', polygon: [
        [0.295, 0.165], [0.295, 0.265], [0.448, 0.265], [0.448, 0.158],
        [0.305, 0.155]
      ]},
      { code: 'BPH-N', polygon: [
        [0.468, 0.158], [0.468, 0.265], [0.602, 0.265], [0.602, 0.158]
      ]},
      { code: 'BPH-N', polygon: [
        [0.625, 0.158], [0.625, 0.265], [0.762, 0.265], [0.762, 0.180],
        [0.715, 0.155]
      ]},
      // West boutique penthouses (2 buildings)
      { code: 'BPH-W', polygon: [
        [0.243, 0.302], [0.243, 0.485], [0.358, 0.485], [0.358, 0.302]
      ]},
      { code: 'BPH-W', polygon: [
        [0.243, 0.510], [0.243, 0.695], [0.358, 0.695], [0.358, 0.510]
      ]},
      // Tower at this level — typical high
      { code: 'T-132', polygon: [
        [0.640, 0.330], [0.640, 0.522], [0.770, 0.522], [0.770, 0.330]
      ]},
      { code: 'T-132', polygon: [
        [0.770, 0.330], [0.770, 0.522], [0.913, 0.522], [0.913, 0.330]
      ]},
      { code: 'T-150', polygon: [
        [0.620, 0.522], [0.620, 0.755], [0.770, 0.755], [0.770, 0.522]
      ]},
      { code: 'T-150', polygon: [
        [0.770, 0.522], [0.770, 0.755], [0.913, 0.755], [0.913, 0.522]
      ]},
    ],
  },

  // ════════════════════════════════════════════════════
  // FLOORS 2–6 — קומות טיפוסיות (כל הבניינים)
  // ════════════════════════════════════════════════════
  {
    id: 'tower-2-6',
    label: 'קומות 2–6 · קומות טיפוסיות',
    short: '2–6',
    plate: '/floorplans/plates/tower-2-6.webp',
    note: 'הקומה הטיפוסית — 17 דירות בקומה: 7 במגדל + 4 במערבי + 6 בצפוני.',
    apartments: [
      // ─── North boutique top row — polygons follow the curved-top outline ───
      // North building 1 (left): B-123 + A (under the curve)
      { code: 'B-123', polygon: [
        [0.295, 0.180], [0.295, 0.265], [0.385, 0.265], [0.385, 0.165],
        [0.305, 0.155], [0.298, 0.165]
      ]},
      { code: 'A', polygon: [
        [0.385, 0.165], [0.385, 0.265], [0.448, 0.265], [0.448, 0.158],
        [0.420, 0.150]
      ]},
      // North building 2 (middle): D-b + A
      { code: 'D-b', polygon: [
        [0.468, 0.158], [0.468, 0.265], [0.535, 0.265], [0.535, 0.158]
      ]},
      { code: 'A', polygon: [
        [0.535, 0.158], [0.535, 0.265], [0.602, 0.265], [0.602, 0.158]
      ]},
      // North building 3 (right): A + B-134 (B-134 has the right curve)
      { code: 'A', polygon: [
        [0.625, 0.158], [0.625, 0.265], [0.685, 0.265], [0.685, 0.165],
        [0.655, 0.150]
      ]},
      { code: 'B-134', polygon: [
        [0.685, 0.165], [0.685, 0.265], [0.762, 0.265], [0.762, 0.180],
        [0.755, 0.165], [0.715, 0.155]
      ]},

      // ─── West boutique left column (2 buildings × 2 apts) ───
      // West building 1 (upper)
      { code: 'G', polygon: [
        [0.243, 0.302], [0.243, 0.395], [0.358, 0.395], [0.358, 0.302]
      ]},
      { code: 'H', polygon: [
        [0.243, 0.395], [0.243, 0.485], [0.358, 0.485], [0.358, 0.395]
      ]},
      // West building 2 (lower)
      { code: 'H', polygon: [
        [0.243, 0.510], [0.243, 0.600], [0.358, 0.600], [0.358, 0.510]
      ]},
      { code: 'G', polygon: [
        [0.243, 0.600], [0.243, 0.695], [0.358, 0.695], [0.358, 0.600]
      ]},

      // ─── Tower — irregular cross shape, polygons trace each apartment ───
      // D-82 (top center, north-facing)
      { code: 'D', polygon: [
        [0.677, 0.302], [0.677, 0.395], [0.770, 0.395], [0.770, 0.302]
      ]},
      // C-134 (top-right corner, larger L-shape extending east)
      { code: 'C', polygon: [
        [0.770, 0.302], [0.770, 0.480], [0.913, 0.480], [0.913, 0.330],
        [0.880, 0.302]
      ]},
      // E-67 right-upper
      { code: 'E', polygon: [
        [0.770, 0.480], [0.770, 0.563], [0.870, 0.563], [0.870, 0.480]
      ]},
      // E-67 right-lower
      { code: 'E', polygon: [
        [0.770, 0.563], [0.770, 0.645], [0.870, 0.645], [0.870, 0.563]
      ]},
      // A-82 (left-center, small L near tower core)
      { code: 'A', polygon: [
        [0.595, 0.430], [0.595, 0.515], [0.685, 0.515], [0.685, 0.430]
      ]},
      // E-67 left-lower
      { code: 'E', polygon: [
        [0.595, 0.515], [0.595, 0.620], [0.685, 0.620], [0.685, 0.515]
      ]},
      // F-113 bottom-left (large)
      { code: 'F', polygon: [
        [0.625, 0.660], [0.625, 0.770], [0.770, 0.770], [0.770, 0.660]
      ]},
      // F-113 bottom-right (large, extends east)
      { code: 'F', polygon: [
        [0.770, 0.660], [0.770, 0.770], [0.913, 0.770], [0.913, 0.660]
      ]},
    ],
  },

  // ════════════════════════════════════════════════════
  // GROUND — דירות גן + לובי + מסחר
  // ════════════════════════════════════════════════════
  {
    id: 'tower-ground',
    label: 'קומת קרקע · דירות גן',
    short: 'קרקע',
    plate: '/floorplans/plates/tower-ground.webp',
    note: 'דירות גן בקומה הקרקע, לובי ראשי, חזית מסחרית וגישה לפארק הפנימי.',
    apartments: [
      { code: 'G-128', polygon: [
        [0.595, 0.300], [0.595, 0.490], [0.725, 0.490], [0.725, 0.300]
      ]},
      { code: 'G-66', polygon: [
        [0.725, 0.300], [0.725, 0.490], [0.840, 0.490], [0.840, 0.300]
      ]},
      { code: 'G-59', polygon: [
        [0.840, 0.300], [0.840, 0.490], [0.915, 0.490], [0.915, 0.300]
      ]},
    ],
  },
]

export const floorById = (id) => FLOORS.find((f) => f.id === id)

// Filter floors by building (used by the tabs in CatalogPage).
const ALL_FLOOR_IDS = FLOORS.map((f) => f.id)
export const FLOORS_BY_BUILDING = {
  tower:        ALL_FLOOR_IDS,
  'boutique-w': ['boutique-7-ph', 'tower-2-6', 'tower-ground'],
  'boutique-n': ['boutique-7-ph', 'tower-2-6', 'tower-ground'],
}
