/**
 * Floor-by-floor site plates with per-apartment hotspots.
 *
 * Each apartment entry has:
 *   code     — apartment-type code (matches APARTMENTS in apartments.js)
 *   polygon  — clickable area, normalized 0..1 of plate image (x,y pairs)
 *   labelPos — [x,y] override for the type-letter label (else uses polygon centroid)
 *
 * Coordinates were measured from the rendered plates in
 * /public/floorplans/plates/ (2800×1980 WebP). The pink "טיפוס X" labels in
 * the original Bar Orian drawings were used as anchor points for labelPos.
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
    note: 'שני פנטהאוזים — מערבי 5 חדרים (155 + 128 גג) ומזרחי 6 חדרים (160 + 178 גג).',
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
    note: 'מיני פנטהאוזים במגדל; בבנייני הבוטיק — דירות 5 חדרים בקצה.',
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
  // FLOORS 9–13 — קומות גבוהות (tower only)
  // ════════════════════════════════════════════════════
  {
    id: 'tower-9-13',
    label: 'קומות 9–13 · קומות גבוהות',
    short: '9–13',
    plate: '/floorplans/plates/tower-9-13.webp',
    note: 'רק המגדל מאוכלס — 4 דירות בקומה: 2× 132 מ״ר באמצע + 2× 150 מ״ר בפינות.',
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
      // North boutique penthouses (3 buildings — 1 each on top of each)
      {
        code: 'BPH-N',
        polygon: [
          [0.295, 0.165], [0.448, 0.165], [0.448, 0.265], [0.295, 0.265],
        ],
        labelPos: [0.371, 0.215],
      },
      {
        code: 'BPH-N',
        polygon: [
          [0.468, 0.165], [0.602, 0.165], [0.602, 0.265], [0.468, 0.265],
        ],
        labelPos: [0.535, 0.215],
      },
      {
        code: 'BPH-N',
        polygon: [
          [0.625, 0.165], [0.762, 0.165], [0.762, 0.265], [0.625, 0.265],
        ],
        labelPos: [0.693, 0.215],
      },
      // West boutique penthouses (2 buildings)
      {
        code: 'BPH-W',
        polygon: [
          [0.245, 0.310], [0.355, 0.310], [0.355, 0.485], [0.245, 0.485],
        ],
        labelPos: [0.300, 0.397],
      },
      {
        code: 'BPH-W',
        polygon: [
          [0.245, 0.515], [0.355, 0.515], [0.355, 0.690], [0.245, 0.690],
        ],
        labelPos: [0.300, 0.602],
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
  // FLOORS 2–6 — קומות טיפוסיות (כל הבניינים, 17 דירות)
  // ════════════════════════════════════════════════════
  {
    id: 'tower-2-6',
    label: 'קומות 2–6 · קומות טיפוסיות',
    short: '2–6',
    plate: '/floorplans/plates/tower-2-6.webp',
    note: 'הקומה הטיפוסית — 17 דירות בקומה: 7 במגדל + 4 במערבי + 6 בצפוני.',
    apartments: [
      // ─── North boutique top strip — 3 buildings × 2 apts each ───
      // Building 1 (leftmost, with curve on left)
      {
        code: 'B-123',
        polygon: [
          [0.295, 0.165], [0.378, 0.165], [0.378, 0.265], [0.295, 0.265],
          [0.295, 0.180],
        ],
        labelPos: [0.336, 0.215],
      },
      {
        code: 'A',
        polygon: [
          [0.378, 0.165], [0.448, 0.165], [0.448, 0.265], [0.378, 0.265],
        ],
        labelPos: [0.413, 0.215],
      },
      // Building 2 (middle)
      {
        code: 'D-b',
        polygon: [
          [0.468, 0.165], [0.535, 0.165], [0.535, 0.265], [0.468, 0.265],
        ],
        labelPos: [0.501, 0.215],
      },
      {
        code: 'A',
        polygon: [
          [0.535, 0.165], [0.602, 0.165], [0.602, 0.265], [0.535, 0.265],
        ],
        labelPos: [0.568, 0.215],
      },
      // Building 3 (rightmost, with curve on right)
      {
        code: 'A',
        polygon: [
          [0.625, 0.165], [0.692, 0.165], [0.692, 0.265], [0.625, 0.265],
        ],
        labelPos: [0.658, 0.215],
      },
      {
        code: 'B-134',
        polygon: [
          [0.692, 0.165], [0.762, 0.165], [0.762, 0.265], [0.692, 0.265],
        ],
        labelPos: [0.727, 0.215],
      },

      // ─── West boutique left column — 2 buildings × 2 apts ───
      // Upper building: G (123m, larger ~60%) on top, H (82m, smaller ~40%) on bottom
      {
        code: 'G',
        polygon: [
          [0.245, 0.310], [0.355, 0.310], [0.355, 0.408], [0.245, 0.408],
        ],
        labelPos: [0.300, 0.345],
      },
      {
        code: 'H',
        polygon: [
          [0.245, 0.408], [0.355, 0.408], [0.355, 0.485], [0.245, 0.485],
        ],
        labelPos: [0.300, 0.448],
      },
      // Lower building: H (82m, smaller) on top, G (123m, larger) on bottom
      {
        code: 'H',
        polygon: [
          [0.245, 0.515], [0.355, 0.515], [0.355, 0.595], [0.245, 0.595],
        ],
        labelPos: [0.300, 0.555],
      },
      {
        code: 'G',
        polygon: [
          [0.245, 0.595], [0.355, 0.595], [0.355, 0.690], [0.245, 0.690],
        ],
        labelPos: [0.300, 0.643],
      },

      // ─── Tower (8 apartments forming irregular cross) ───
      // D 82m — top center (north-facing)
      {
        code: 'D',
        polygon: [
          [0.677, 0.310], [0.770, 0.310], [0.770, 0.395], [0.677, 0.395],
        ],
        labelPos: [0.722, 0.350],
      },
      // C 134m — top-right corner (L-shape, larger)
      {
        code: 'C',
        polygon: [
          [0.770, 0.310], [0.913, 0.310], [0.913, 0.480], [0.770, 0.480],
        ],
        labelPos: [0.842, 0.395],
      },
      // E 67m — right-upper
      {
        code: 'E',
        polygon: [
          [0.770, 0.480], [0.870, 0.480], [0.870, 0.563], [0.770, 0.563],
        ],
        labelPos: [0.820, 0.522],
      },
      // E 67m — right-lower
      {
        code: 'E',
        polygon: [
          [0.770, 0.563], [0.870, 0.563], [0.870, 0.645], [0.770, 0.645],
        ],
        labelPos: [0.820, 0.604],
      },
      // A 82m — left-center near tower core
      {
        code: 'A',
        polygon: [
          [0.595, 0.430], [0.685, 0.430], [0.685, 0.515], [0.595, 0.515],
        ],
        labelPos: [0.640, 0.473],
      },
      // E 67m — left-lower
      {
        code: 'E',
        polygon: [
          [0.595, 0.515], [0.685, 0.515], [0.685, 0.620], [0.595, 0.620],
        ],
        labelPos: [0.640, 0.567],
      },
      // F 113m — bottom-left
      {
        code: 'F',
        polygon: [
          [0.625, 0.660], [0.770, 0.660], [0.770, 0.770], [0.625, 0.770],
        ],
        labelPos: [0.697, 0.715],
      },
      // F 113m — bottom-right
      {
        code: 'F',
        polygon: [
          [0.770, 0.660], [0.913, 0.660], [0.913, 0.770], [0.770, 0.770],
        ],
        labelPos: [0.842, 0.715],
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
          [0.595, 0.300], [0.725, 0.300], [0.725, 0.490], [0.595, 0.490],
        ],
        labelPos: [0.660, 0.395],
      },
      {
        code: 'G-66',
        polygon: [
          [0.725, 0.300], [0.840, 0.300], [0.840, 0.490], [0.725, 0.490],
        ],
        labelPos: [0.782, 0.395],
      },
      {
        code: 'G-59',
        polygon: [
          [0.840, 0.300], [0.915, 0.300], [0.915, 0.490], [0.840, 0.490],
        ],
        labelPos: [0.877, 0.395],
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
