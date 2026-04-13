import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      {/* Header */}
      <header className="border-b border-[var(--color-stone)] py-6">
        <div className="container-editorial flex items-center justify-between">
          <Link to="/">
            <img
              src="/logo.svg"
              alt="G Park Wellness Living"
              style={{ height: 36, width: 'auto' }}
              className="block"
            />
          </Link>
          <Link
            to="/"
            className="text-sm font-light text-[var(--color-mist)] hover:text-[var(--color-ink)] transition-colors"
          >
            חזרה לאתר הראשי
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-narrow py-16 md:py-24">
        <h1 className="display-sm mb-4">מדיניות פרטיות</h1>
        <p className="text-sm text-[var(--color-mist)] mb-12">עודכן לאחרונה: אפריל 2026</p>

        <div className="space-y-10 text-[var(--color-ink)] font-light leading-relaxed text-base">

          <section>
            <h2 className="text-lg font-medium mb-3">1. כללי</h2>
            <p>
              ברוכים הבאים לאתר האינטרנט של G Park Wellness Living (להלן: &quot;האתר&quot;, &quot;אנחנו&quot; או &quot;החברה&quot;).
              אנו מכבדים את פרטיותך ומחויבים להגן על המידע האישי שלך בהתאם להוראות חוק הגנת הפרטיות, התשמ&quot;א-1981
              ותקנות הגנת הפרטיות (אבטחת מידע), התשע&quot;ז-2017.
            </p>
            <p className="mt-3">
              מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, שומרים ומגנים על מידע אישי שנאסף באמצעות האתר.
              השימוש באתר מהווה הסכמה לתנאי מדיניות זו.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">2. המידע שאנו אוספים</h2>
            <p>אנו עשויים לאסוף את סוגי המידע הבאים:</p>
            <ul className="mt-3 space-y-2 pr-5 list-disc">
              <li><strong>מידע שנמסר על ידך באופן יזום:</strong> שם מלא, מספר טלפון, כתובת דוא&quot;ל, וכל מידע נוסף שתבחר למסור לנו דרך טופס יצירת הקשר באתר.</li>
              <li><strong>מידע טכני הנאסף באופן אוטומטי:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, עמודים שנצפו, משך הביקור, מקור ההפניה ונתוני שימוש נוספים.</li>
              <li><strong>קובצי עוגיות (Cookies):</strong> קבצים קטנים הנשמרים במכשירך לצורך שיפור חוויית השימוש וניתוח סטטיסטי.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">3. מטרות השימוש במידע</h2>
            <p>המידע שנאסף ישמש אותנו למטרות הבאות בלבד:</p>
            <ul className="mt-3 space-y-2 pr-5 list-disc">
              <li>טיפול בפניות ובבקשות שנשלחו דרך טופס יצירת הקשר.</li>
              <li>שליחת מידע שיווקי ופרסומי בנוגע לפרויקט G Park (בכפוף להסכמתך).</li>
              <li>שיפור וייעול האתר והשירותים שלנו.</li>
              <li>ניתוח סטטיסטי ומחקר שוק.</li>
              <li>עמידה בדרישות חוק ורגולציה.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">4. שיתוף מידע עם צדדים שלישיים</h2>
            <p>
              לא נמכור, נשכיר או נעביר את המידע האישי שלך לצדדים שלישיים, למעט במקרים הבאים:
            </p>
            <ul className="mt-3 space-y-2 pr-5 list-disc">
              <li>לספקי שירות הפועלים מטעמנו (כגון שירותי אחסון, ניתוח נתונים ושיווק), המחויבים לשמירה על סודיות המידע.</li>
              <li>כאשר נדרש על פי חוק, צו שיפוטי או דרישה מרשות מוסמכת.</li>
              <li>להגנה על זכויותינו, רכושנו או ביטחוננו, או על אלה של משתמשים אחרים.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">5. אבטחת מידע</h2>
            <p>
              אנו נוקטים באמצעי אבטחה סבירים ומקובלים בהתאם לתקנות הגנת הפרטיות (אבטחת מידע), התשע&quot;ז-2017,
              על מנת להגן על המידע האישי שלך מפני גישה בלתי מורשית, שימוש לרעה, אובדן או שינוי.
              עם זאת, אין באפשרותנו להבטיח אבטחה מוחלטת של העברת מידע באינטרנט.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">6. עוגיות (Cookies)</h2>
            <p>
              האתר עשוי להשתמש בקובצי עוגיות לצרכים הבאים:
            </p>
            <ul className="mt-3 space-y-2 pr-5 list-disc">
              <li><strong>עוגיות הכרחיות:</strong> לתפקוד תקין של האתר.</li>
              <li><strong>עוגיות אנליטיות:</strong> לניתוח דפוסי שימוש ושיפור חוויית המשתמש (לדוגמה, Google Analytics).</li>
              <li><strong>עוגיות שיווקיות:</strong> להתאמת תוכן פרסומי להעדפותיך.</li>
            </ul>
            <p className="mt-3">
              ניתן להגדיר את הדפדפן שלך לסירוב קבלת עוגיות או להתראה על שליחתן. יש לקחת בחשבון שחסימת עוגיות
              עלולה לפגוע בחוויית השימוש באתר.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">7. זכויותיך בהתאם לחוק הגנת הפרטיות</h2>
            <p>
              בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, עומדות לך הזכויות הבאות:
            </p>
            <ul className="mt-3 space-y-2 pr-5 list-disc">
              <li><strong>זכות עיון:</strong> הנך רשאי/ת לעיין במידע האישי שלך המוחזק אצלנו.</li>
              <li><strong>זכות תיקון:</strong> הנך רשאי/ת לבקש לתקן מידע שגוי או לא מדויק.</li>
              <li><strong>זכות מחיקה:</strong> הנך רשאי/ת לבקש מחיקת המידע האישי שלך ממאגרינו.</li>
              <li><strong>זכות התנגדות:</strong> הנך רשאי/ת להתנגד לשימוש במידע שלך למטרות שיווק ישיר.</li>
            </ul>
            <p className="mt-3">
              לצורך מימוש זכויותיך, ניתן לפנות אלינו באמצעות פרטי הקשר המפורטים בסעיף 10 למטה.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">8. שמירת מידע</h2>
            <p>
              אנו שומרים את המידע האישי שלך למשך הזמן הדרוש למימוש המטרות המפורטות במדיניות זו,
              או כנדרש על פי חוק. לאחר תום תקופה זו, המידע יימחק או יעבור אנונימיזציה.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">9. שינויים במדיניות</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר
              ויהיו בתוקף מרגע פרסומם. המשך השימוש באתר לאחר עדכון המדיניות מהווה הסכמה לשינויים.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">10. יצירת קשר</h2>
            <p>
              לכל שאלה, בקשה או תלונה בנוגע למדיניות פרטיות זו או לטיפול במידע האישי שלך, ניתן לפנות אלינו:
            </p>
            <div className="mt-4 p-6 bg-[var(--color-cream)] text-sm space-y-2">
              <p><strong>G Park Wellness Living</strong></p>
              <p>נווה גן, רמת השרון</p>
              <p>טלפון: 072-XXX-XXXX</p>
              <p>דוא&quot;ל: privacy@g-park.life</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium mb-3">11. הדין החל וסמכות שיפוט</h2>
            <p>
              על מדיניות פרטיות זו יחולו דיני מדינת ישראל בלבד. סמכות השיפוט הבלעדית בכל עניין הנוגע
              למדיניות זו מוקנית לבתי המשפט המוסמכים במחוז תל אביב-יפו.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-stone)] py-8">
        <div className="container-editorial text-center">
          <p className="text-sm text-[var(--color-mist)] font-light">
            &copy; {new Date().getFullYear()} G Park Wellness Living. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  )
}
