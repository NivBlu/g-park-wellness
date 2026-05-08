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
      { code: 'MEGA', rect: { x: 0.685, y: 0.435, w: 0.130, h: 0.180 } },
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
      { code: 'PH-W', rect: { x: 0.660, y: 0.330, w: 0.130, h: 0.300 } },
      { code: 'PH-E', rect: { x: 0.790, y: 0.330, w: 0.130, h: 0.300 } },
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
      { code: 'PH-W',  rect: { x: 0.660, y: 0.330, w: 0.130, h: 0.300 } },
      { code: 'PH-E',  rect: { x: 0.790, y: 0.330, w: 0.130, h: 0.300 } },
      // Boutique penthouses on north (top row 3 buildings)
      { code: 'BPH-N', rect: { x: 0.245, y: 0.135, w: 0.110, h: 0.080 } },
      { code: 'BPH-N', rect: { x: 0.380, y: 0.135, w: 0.115, h: 0.080 } },
      { code: 'BPH-N', rect: { x: 0.530, y: 0.135, w: 0.130, h: 0.080 } },
      // Boutique penthouse west (lower-left building)
      { code: 'BPH-W', rect: { x: 0.235, y: 0.510, w: 0.115, h: 0.170 } },
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
      { code: 'T-132', rect: { x: 0.660, y: 0.330, w: 0.115, h: 0.190 } }, // top-left
      { code: 'T-132', rect: { x: 0.795, y: 0.330, w: 0.115, h: 0.190 } }, // top-right
      { code: 'T-150', rect: { x: 0.660, y: 0.520, w: 0.115, h: 0.230 } }, // bottom-left
      { code: 'T-150', rect: { x: 0.795, y: 0.520, w: 0.115, h: 0.230 } }, // bottom-right
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
      // North boutique penthouses (3 buildings)
      { code: 'BPH-N', rect: { x: 0.245, y: 0.135, w: 0.110, h: 0.080 } },
      { code: 'BPH-N', rect: { x: 0.380, y: 0.135, w: 0.115, h: 0.080 } },
      { code: 'BPH-N', rect: { x: 0.530, y: 0.135, w: 0.130, h: 0.080 } },
      // West boutique penthouses (2 buildings)
      { code: 'BPH-W', rect: { x: 0.235, y: 0.305, w: 0.115, h: 0.165 } },
      { code: 'BPH-W', rect: { x: 0.235, y: 0.510, w: 0.115, h: 0.170 } },
      // Tower at this level — typical high
      { code: 'T-132', rect: { x: 0.660, y: 0.330, w: 0.115, h: 0.190 } },
      { code: 'T-132', rect: { x: 0.795, y: 0.330, w: 0.115, h: 0.190 } },
      { code: 'T-150', rect: { x: 0.660, y: 0.520, w: 0.115, h: 0.230 } },
      { code: 'T-150', rect: { x: 0.795, y: 0.520, w: 0.115, h: 0.230 } },
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
      // ─── North boutique top row (3 buildings × 2 apts) ───
      // North building 1 (left)
      { code: 'B-123', rect: { x: 0.293, y: 0.162, w: 0.091, h: 0.111 } },
      { code: 'A',     rect: { x: 0.384, y: 0.162, w: 0.061, h: 0.111 } },
      // North building 2 (middle, two 3-room)
      { code: 'D-b',   rect: { x: 0.468, y: 0.162, w: 0.068, h: 0.111 } },
      { code: 'A',     rect: { x: 0.536, y: 0.162, w: 0.066, h: 0.111 } },
      // North building 3 (right)
      { code: 'A',     rect: { x: 0.624, y: 0.162, w: 0.055, h: 0.111 } },
      { code: 'B-134', rect: { x: 0.679, y: 0.162, w: 0.080, h: 0.111 } },

      // ─── West boutique left column (2 buildings × 2 apts) ───
      // West building 1 (upper)
      { code: 'G',     rect: { x: 0.241, y: 0.300, w: 0.114, h: 0.091 } },
      { code: 'H',     rect: { x: 0.241, y: 0.391, w: 0.114, h: 0.091 } },
      // West building 2 (lower)
      { code: 'H',     rect: { x: 0.241, y: 0.510, w: 0.114, h: 0.091 } },
      { code: 'G',     rect: { x: 0.241, y: 0.601, w: 0.114, h: 0.091 } },

      // ─── Tower (8 visible apartments) ───
      { code: 'D',     rect: { x: 0.677, y: 0.300, w: 0.084, h: 0.090 } }, // top center
      { code: 'C',     rect: { x: 0.761, y: 0.300, w: 0.155, h: 0.180 } }, // top-right corner (134)
      { code: 'E',     rect: { x: 0.761, y: 0.480, w: 0.084, h: 0.085 } }, // right-upper (67)
      { code: 'E',     rect: { x: 0.761, y: 0.565, w: 0.084, h: 0.090 } }, // right-lower (67)
      { code: 'A',     rect: { x: 0.591, y: 0.430, w: 0.090, h: 0.130 } }, // left-center A 82
      { code: 'E',     rect: { x: 0.591, y: 0.560, w: 0.090, h: 0.095 } }, // left-lower (67)
      { code: 'F',     rect: { x: 0.620, y: 0.655, w: 0.141, h: 0.105 } }, // bottom-left (113)
      { code: 'F',     rect: { x: 0.761, y: 0.655, w: 0.155, h: 0.105 } }, // bottom-right (113)
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
      { code: 'G-128', rect: { x: 0.595, y: 0.305, w: 0.130, h: 0.180 } },
      { code: 'G-66',  rect: { x: 0.725, y: 0.305, w: 0.115, h: 0.180 } },
      { code: 'G-59',  rect: { x: 0.840, y: 0.305, w: 0.080, h: 0.180 } },
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
