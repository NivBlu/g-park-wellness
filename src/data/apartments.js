/**
 * G Park apartment catalog — type-based codes.
 *
 * Data from Bar Orian floor plates + the developer's apartment-mix
 * Excel ("טבלת דירות לניקוד"). Directions follow the G Park site convention:
 *
 *   מערב = ים            (West, Mediterranean sea)
 *   צפון = פארק          (North, the ecological park)
 *   דרום = תל אביב צפון   (South, Tel Aviv north — Tel Baruch)
 *   מזרח = ירושלים        (East, Jerusalem direction)
 *
 * Building IDs:
 *   tower      — מגדל הפארק (15 floors, 38 apts)
 *   boutique-w — מרקמי מערבי (2 buildings × 11 apts = 22)
 *   boutique-n — מרקמי צפוני (3 buildings × 11 apts = 33)
 *
 * NO PRICES — sales-qualified leads only.
 */

export const APARTMENTS = [
  // ────── A · 82 m² · 3 rooms ──────
  {
    code: 'A',
    title: 'טיפוס A · 82 מ״ר',
    categoryLabel: '3 חדרים',
    category: 'apartment',
    rooms: 3,
    builtSqm: 82,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['boutique-n'],
    description:
      'דירת 3 חדרים במרקמי צפוני (קומות 2–6) — חזיתות צפון–דרום, מרפסת לכיוון הפארק או לכיוון תל אביב, חלון אחורי לכיוון ההפוך.',
    orientation: 'צפון · דרום',
    planImage: '/floorplans/units/A.webp',
    planPdf:   '/floorplans/units/A.pdf',
    planAvailable: true,
  },

  // ────── D · 82 m² · 3 rooms (tower only) ──────
  {
    code: 'D',
    title: 'טיפוס D · 82 מ״ר',
    categoryLabel: '3 חדרים',
    category: 'apartment',
    rooms: 3,
    builtSqm: 82,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['tower'],
    description:
      'דירת 3 חדרים במגדל הפארק (קומות 2–6) — מיקום צפוני בקומה, חזית פנים אל הפארק האקולוגי, חזית מערב אל הים.',
    orientation: 'מערב · צפון',
    planImage: '/floorplans/units/D.webp',
    planPdf:   '/floorplans/units/D.pdf',
    planAvailable: true,
  },

  // ────── H · 82 m² · 3 rooms (west boutique) ──────
  {
    code: 'H',
    title: 'טיפוס H · 82 מ״ר',
    categoryLabel: '3 חדרים',
    category: 'apartment',
    rooms: 3,
    builtSqm: 82,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['boutique-w'],
    description:
      'דירת 3 חדרים במרקמי מערבי (קומות 2–6) — חלון מערבי אל הים, חלון מזרחי אל החצר הפנימית של המתחם.',
    orientation: 'מערב · מזרח',
    planImage: '/floorplans/units/H.webp',
    planPdf:   '/floorplans/units/H.pdf',
    planAvailable: true,
  },

  // ────── E · 67 m² · 3 rooms (tower only) ──────
  {
    code: 'E',
    title: 'טיפוס E · 67 מ״ר',
    categoryLabel: '3 חדרים קומפקטית',
    category: 'apartment',
    rooms: 3,
    builtSqm: 67,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['tower'],
    description:
      'דירת 3 חדרים קומפקטית במגדל. הוריאנטים: מערב·צפון (לפארק וים), מערב·דרום (לים ולתל אביב), או מזרח·צפון/דרום (לירושלים והפארק).',
    orientation: 'מערב או מזרח · צפון או דרום',
    planImage: '/floorplans/units/E.webp',
    planPdf:   '/floorplans/units/E.pdf',
    planAvailable: true,
  },

  // ────── F · 113 m² · 4 rooms (tower only) ──────
  {
    code: 'F',
    title: 'טיפוס F · 113 מ״ר',
    categoryLabel: '4 חדרים',
    category: 'apartment',
    rooms: 4,
    builtSqm: 113,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['tower'],
    description:
      'דירת 4 חדרים במגדל — דירת פינה דרומית עם 3 חזיתות (מערב·דרום·מזרח). נוף לים, לתל אביב ולפארק.',
    orientation: 'מערב · דרום · מזרח',
    planImage: '/floorplans/units/F.webp',
    planPdf:   '/floorplans/units/F.pdf',
    planAvailable: true,
  },

  // ────── G · 123 m² · 5 rooms (west boutique) ──────
  {
    code: 'G',
    title: 'טיפוס G · 123 מ״ר',
    categoryLabel: '5 חדרים',
    category: 'apartment',
    rooms: 5,
    builtSqm: 123,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['boutique-w'],
    description:
      'דירת 5 חדרים במרקמי מערבי — דירת פינה עם 3 חזיתות. בקצה הצפוני: מערב·צפון·מזרח. בקצה הדרומי: מערב·דרום·מזרח. נוף לים ולפארק/תל אביב.',
    orientation: 'מערב · צפון או דרום · מזרח',
    planImage: '/floorplans/units/G.webp',
    planPdf:   '/floorplans/units/G.pdf',
    planAvailable: true,
  },

  // ────── B-123 · 123 m² · 5 rooms (north boutique, west corner) ──────
  {
    code: 'B-123',
    title: 'טיפוס B · 123 מ״ר',
    categoryLabel: '5 חדרים בפינה',
    category: 'apartment',
    rooms: 5,
    builtSqm: 123,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['boutique-n'],
    description:
      'דירת 5 חדרים בפינה המערבית של מרקמי צפוני — 3 חזיתות (צפון·מערב·דרום). חלונות לפארק, לים ולתל אביב.',
    orientation: 'צפון · מערב · דרום',
    planImage: '/floorplans/units/B-123.webp',
    planPdf:   '/floorplans/units/B-123.pdf',
    planAvailable: true,
  },

  // ────── B-134 · 134 m² · 5 rooms (north boutique, east corner) ──────
  {
    code: 'B-134',
    title: 'טיפוס B · 134 מ״ר',
    categoryLabel: '5 חדרים גדולה בפינה',
    category: 'apartment',
    rooms: 5,
    builtSqm: 134,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['boutique-n'],
    description:
      'דירת 5 חדרים גדולה בפינה המזרחית של מרקמי צפוני — 3 חזיתות (צפון·מזרח·דרום). חלונות לפארק, לירושלים ולתל אביב.',
    orientation: 'צפון · מזרח · דרום',
    planImage: '/floorplans/units/B-134.webp',
    planPdf:   '/floorplans/units/B-134.pdf',
    planAvailable: true,
  },

  // ────── C · 134 m² · 5 rooms (tower only) ──────
  {
    code: 'C',
    title: 'טיפוס C · 134 מ״ר',
    categoryLabel: '5 חדרים גדולה',
    category: 'apartment',
    rooms: 5,
    builtSqm: 134,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['tower'],
    description:
      'דירת 5 חדרים מרווחת במגדל — דירת פינה עם 3 חזיתות (מערב·מזרח·דרום). נוף פנורמי לים, לתל אביב ולירושלים.',
    orientation: 'מערב · מזרח · דרום',
    planImage: '/floorplans/units/C.webp',
    planPdf:   '/floorplans/units/C.pdf',
    planAvailable: true,
  },

  // ────── High-tower 9-13 ──────
  {
    code: 'T-132',
    title: 'דירת קומה גבוהה · 132 מ״ר',
    categoryLabel: '5 חדרים בקומה גבוהה',
    category: 'apartment',
    rooms: 5,
    builtSqm: 132,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['tower'],
    description:
      'דירה במגדל בקומות 9–13 — נוף פנורמי. התוכנית המפורטת תפורסם בקרוב.',
    orientation: 'נוף פנורמי',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },
  {
    code: 'T-150',
    title: 'דירת פינה גבוהה · 150 מ״ר',
    categoryLabel: '5 חדרים פינה גבוהה',
    category: 'apartment',
    rooms: 5,
    builtSqm: 150,
    outdoorKind: 'מרפסת',
    outdoorSqm: 12,
    buildings: ['tower'],
    description:
      'דירת פינה רחבה במגדל בקומות 9–13 — 3 חזיתות, נוף פנורמי 270°. התוכנית המפורטת תפורסם בקרוב.',
    orientation: '3 חזיתות',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },

  // ────── Penthouses ──────
  {
    code: 'PH-W',
    title: 'פנטהאוז המגדל · 155 מ״ר',
    categoryLabel: 'פנטהאוז',
    category: 'penthouse',
    rooms: 5,
    builtSqm: 155,
    outdoorKind: 'מרפסת גג',
    outdoorSqm: 128,
    buildings: ['tower'],
    description:
      'פנטהאוז בקומה 14 של המגדל עם מרפסת גג של 128 מ״ר — נוף פנורמי לכל הכיוונים. התוכנית המפורטת תפורסם בקרוב.',
    orientation: 'נוף פנורמי',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },
  {
    code: 'PH-E',
    title: 'פנטהאוז יוקרה · 160 מ״ר',
    categoryLabel: 'פנטהאוז יוקרה',
    category: 'penthouse',
    rooms: 6,
    builtSqm: 160,
    outdoorKind: 'מרפסת גג',
    outdoorSqm: 178,
    buildings: ['tower'],
    description:
      'פנטהאוז יוקרה בקומה 14 של המגדל — 160 מ״ר עם מרפסת גג ענקית של 178 מ״ר. נוף ל־4 הכיוונים.',
    orientation: 'נוף פנורמי',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },
  {
    code: 'MEGA',
    title: 'מגה־פנטהאוז · 185 מ״ר',
    categoryLabel: 'מגה־פנטהאוז',
    category: 'penthouse',
    rooms: 6,
    builtSqm: 185,
    outdoorKind: 'מרפסת גג',
    outdoorSqm: 117,
    buildings: ['tower'],
    description:
      'מגה־פנטהאוז יחיד במינו בקומה 15 של המגדל — דירה אחת בלבד עם נוף 360°: ים, פארק, תל אביב וירושלים.',
    orientation: 'נוף 360°',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },

  // ────── Boutique penthouses ──────
  {
    code: 'BPH-W',
    title: 'פנטהאוז מרקמי מערבי · 5 חדרים',
    categoryLabel: 'פנטהאוז בוטיק מערבי',
    category: 'penthouse',
    rooms: 5,
    builtSqm: 150,
    outdoorKind: 'מרפסת גג',
    outdoorSqm: 66,
    buildings: ['boutique-w'],
    description:
      'פנטהאוז בקומה 7 של מרקמי מערבי — דירה אחת לבדה על הגג של כל בניין. חזיתות מערב·דרום·מזרח (או מערב·צפון·מזרח), מרפסת גג של 66 מ״ר. התוכנית המפורטת תפורסם בקרוב.',
    orientation: 'מערב · דרום או צפון · מזרח',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },
  {
    code: 'BPH-N',
    title: 'פנטהאוז מרקמי צפוני · 5 חדרים',
    categoryLabel: 'פנטהאוז בוטיק צפוני',
    category: 'penthouse',
    rooms: 5,
    builtSqm: 150,
    outdoorKind: 'מרפסת גג',
    outdoorSqm: 68,
    buildings: ['boutique-n'],
    description:
      'פנטהאוז בקומה 7 של מרקמי צפוני — דירה אחת לבדה על הגג של כל בניין. חזיתות צפון·מערב·דרום / צפון·דרום / צפון·מזרח·דרום, מרפסת גג של 37–80 מ״ר. התוכנית המפורטת תפורסם בקרוב.',
    orientation: 'צפון · מזרח/מערב · דרום',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },

  // ────── Garden apartments (tower ground floor) ──────
  {
    code: 'G-128',
    title: 'דירת גן · 110 מ״ר + 128 גינה',
    categoryLabel: 'דירת גן 5 חדרים',
    category: 'garden',
    rooms: 5,
    builtSqm: 110,
    outdoorKind: 'גינה',
    outdoorSqm: 128,
    buildings: ['tower'],
    description:
      'דירת גן בקומת קרקע של המגדל עם גינה פרטית של 128 מ״ר — חזיתות מערב·דרום·מזרח, גישה ישירה לפארק הפנימי. התוכנית המפורטת תפורסם בקרוב.',
    orientation: 'מערב · דרום · מזרח',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },
  {
    code: 'G-66',
    title: 'דירת גן · 130 מ״ר + 66 גינה',
    categoryLabel: 'דירת גן 5 חדרים',
    category: 'garden',
    rooms: 5,
    builtSqm: 130,
    outdoorKind: 'גינה',
    outdoorSqm: 66,
    buildings: ['tower'],
    description:
      'דירת גן 5 חדרים בקרקע המגדל עם גינה פרטית של 66 מ״ר — חזיתות מזרח·מערב·צפון. התוכנית המפורטת תפורסם בקרוב.',
    orientation: 'מזרח · מערב · צפון',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },
  {
    code: 'G-59',
    title: 'דירת גן · 69 מ״ר + 59 גינה',
    categoryLabel: 'דירת גן 3 חדרים',
    category: 'garden',
    rooms: 3,
    builtSqm: 69,
    outdoorKind: 'גינה',
    outdoorSqm: 59,
    buildings: ['tower'],
    description:
      'דירת גן 3 חדרים קומפקטית בקרקע המגדל עם גינה פרטית של 59 מ״ר — חזיתות מערב·דרום. התוכנית המפורטת תפורסם בקרוב.',
    orientation: 'מערב · דרום',
    planImage: null,
    planPdf:   null,
    planAvailable: false,
  },
]

export const BUILDINGS = {
  tower: {
    id: 'tower',
    label: 'The Tower',
    he: 'מגדל הפארק',
    summary: 'מגדל בוטיק של 15 קומות עם 38 דירות.',
    floors: 15,
    units: 38,
    orientation:
      'נוף פנורמי לכל הכיוונים — מערב לים, צפון לפארק, דרום לתל אביב, מזרח לירושלים.',
    description:
      'הבניין הראשי בפרויקט — מגדל בוטיק של 15 קומות עם 38 דירות בלבד. הפנים לארבעת הכיוונים: מערב אל הים, צפון אל הפארק האקולוגי, דרום אל תל ברוך וצפון תל אביב, ומזרח אל הר ירושלים. בקומה 14 — 2 פנטהאוזים. בקומה 15 — מגה־פנטהאוז יחיד של 185 מ״ר עם מרפסת גג של 117 מ״ר.',
    mix: [
      'קרקע: לובי, חזית מסחרית, ו־3 דירות גן',
      'קומות 2–7: 7 דירות בקומה (2× F-113, 3× E-67, 1× D-82, 1× C-134)',
      'קומה 8 (נסיגה): 4 דירות עם מרפסות מורחבות',
      'קומות 9–13: 4 דירות בקומה (132 מ״ר באמצע, 150 מ״ר בפינות)',
      'קומה 14: 2 פנטהאוזים — 5 ו־6 חדרים',
      'קומה 15: מגה־פנטהאוז יחיד — 185 מ״ר + 117 מ״ר גג',
    ],
  },
  'boutique-w': {
    id: 'boutique-w',
    label: 'Boutique · West',
    he: 'מרקמי מערבי',
    summary: '2 בניינים בני 7 קומות, 22 דירות סך הכל.',
    floors: 7,
    units: 22,
    orientation:
      'הבניין הדרומי פונה דרום–מערב–מזרח. הבניין הצפוני (צמוד) פונה מערב–צפון–מזרח.',
    description:
      'מתחם בוטיק של שני בניינים אינטימיים בני 7 קומות, מחוברים זה לזה. הבניין הדרומי פונה דרום, מערב ומזרח — אור שמש מקסימלי ונוף לים ולתל אביב. הבניין הצפוני (הצמוד) פונה מערב, צפון ומזרח — חלונות אל הים, אל הפארק האקולוגי ואל הר ירושלים. בכל בניין 4 דירות בקומה (2× G-119 + 2× H-80); בקומה ה־7 — פנטהאוז יחיד על הגג של כל בניין.',
    mix: [
      'קרקע: לובי + דירת גן 5 חדרים (130 מ״ר + 65 גן)',
      'קומות 2–6: 4 דירות בקומה — G-123 בפינות (5 חד׳), H-82 באמצע (3 חד׳)',
      'קומה 7: 2 פנטהאוזים — 1 בכל בניין, 150 מ״ר + מרפסת גג של 66 מ״ר',
    ],
  },
  'boutique-n': {
    id: 'boutique-n',
    label: 'Boutique · North',
    he: 'מרקמי צפוני',
    summary: '3 בניינים בני 7 קומות, 33 דירות סך הכל.',
    floors: 7,
    units: 33,
    orientation:
      'הבניינים פונים בעיקר צפון אל הפארק ודרום אל תל אביב. בניין מערבי: צפון–מערב–דרום. בניין מזרחי: צפון–מזרח–דרום.',
    description:
      'שלושה בניינים מחוברים של 7 קומות. כל הדירות בעלות חזית כפולה צפון אל הפארק האקולוגי + דרום אל תל ברוך וצפון תל אביב. דירות הפינה במערב הוסיפו חזית מערבית אל הים, ודירות הפינה במזרח הוסיפו חזית מזרחית אל הר ירושלים. בכל קומה 6 דירות (2× B-119/130 בפינות + 4× A-80 באמצע); בקומה ה־7 — פנטהאוז יחיד על הגג של כל בניין.',
    mix: [
      'קרקע: לובי + 3 חנויות (155, 83, 122 מ״ר)',
      'קומות 2–6: 6 דירות בקומה — B-123 בקצה מערבי (5 חד׳), 4× A-82 באמצע (3 חד׳), B-134 בקצה מזרחי (5 חד׳)',
      'קומה 7: 3 פנטהאוזים — 1 בכל בניין, 150 מ״ר + מרפסת גג של 37–80 מ״ר',
    ],
  },
}

export const apartmentByCode = (code) => APARTMENTS.find((a) => a.code === code)
