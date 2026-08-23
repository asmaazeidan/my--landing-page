# AMALY COMMUNITY — Landing Page

صفحة هبوط احترافية لـ **AMALY COMMUNITY** (صالون تجميل وكافيه) — مبنية بـ React + TypeScript + Tailwind CSS.

---

## 🧩 محتوى المشروع

- Navbar
- Hero
- About Us
- Features (خدماتنا)
- Our Location (خريطة جوجل)
- Contact Us (بطاقات تواصل بدون فورم)
- Last Welcoming Section
- Footer

مبني بـ Vite + React + TypeScript + Tailwind CSS + React Helmet (SEO). بدون Backend — لاندينغ بيج فقط.

---

## 🚀 خطوات التشغيل والنشر من A إلى Z

### الخطوة 1: افتح المشروع بالكمبيوتر
فك ضغط الملف (Extract) بمكان بتحبه، وافتح مجلد المشروع بالترمينال (Terminal).

### الخطوة 2: نصّب الاعتماديات (Dependencies)
بالترمينال، جوا مجلد المشروع، اكتب:

```bash
npm install
```

هاد الأمر بيحمّل كل المكتبات يلي المشروع محتاجها (React, Tailwind, أيقونات...). خد شوي وقت (دقيقة أو دقيقتين).

### الخطوة 3: شغّل المشروع لتجربه على جهازك
```bash
npm run dev
```

رح يطلعلك رابط متل `http://localhost:5173` — افتحه بالمتصفح وشوف الموقع شغال.

### الخطوة 4: ارفع المشروع على GitHub

1. اعمل حساب على [github.com](https://github.com) إذا ما عندك
2. جوا مجلد المشروع بالترمينال، اكتب الأوامر التالية وحدة وحدة:

```bash
git init
git add .
git commit -m "AMALY COMMUNITY landing page"
```

3. روح على GitHub، دوس على زر "+" فوق يمين → "New repository" → اكتب اسم (مثلاً `amaly-community`) → Create
4. GitHub رح يعطيك أوامر، انسخ اللي شكلها هيك واكتبها بالترمينال:

```bash
git remote add origin https://github.com/USERNAME/amaly-community.git
git branch -M main
git push -u origin main
```

(بدّل `USERNAME` باسم المستخدم تبعك على GitHub)

### الخطوة 5: انشر الموقع على Vercel

1. روح على [vercel.com](https://vercel.com) واعمل حساب (تقدر تسجل دخول مباشرة بحساب GitHub تبعك)
2. دوس "Add New" → "Project"
3. اختار المستودع (repository) يلي رفعته على GitHub
4. Vercel رح يتعرف تلقائياً إنو المشروع React + Vite — بس دوس "Deploy"
5. بعد دقيقة أو دقيقتين، رح يعطيك رابط حقيقي (مثلاً `amaly-community.vercel.app`) — هاد رابط موقعك اللايف يلي تقدر ترسله لأي حدا!

### 🔄 كل مرة بدك تحدث الموقع
عدّل الكود، وبالترمينال اكتب:
```bash
git add .
git commit -m "وصف التعديل"
git push
```
Vercel رح يحدث الموقع اللايف تلقائياً بعد كل push.

---

## 🗺️ الخريطة

خريطة "موقعنا" حقيقية وتفاعلية (تقدرين تزوّمي وتسحبيها)، ومبنية بمكتبة **Leaflet** المجانية مع خلفية خرائط نظيفة من **CARTO** — **ما بتحتاج أي مفتاح API ولا أي حساب ولا إعداد إضافي**. بتشتغل تلقائياً فور ما تعملي `npm install`.

---



حالياً الموقع بيستخدم اللوغو وصورة من الإعلان الترويجي المرفق. **لو عندك صور حقيقية من الصالون نفسه (الديكور، الاستقبال، الكافيه)**، الأفضل تستبدلها بالصور يلي بمجلد `src/assets/` — هيك الموقع بيصير يعكس الهوية الحقيقية للمكان أكتر.

---

## 🎨 نظام الألوان المستخدم (مأخوذ من الشعار)

- **Rose (وردي):** `#C48A93`
- **Gold (ذهبي):** `#B08D57`
- **Cream (كريمي/رخامي):** `#FAF5EC`
- **Charcoal (نص داكن):** `#352822`

تقدر تعدلهم بملف `tailwind.config.js`.
