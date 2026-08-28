# Pharo Foundation Website & Admin Backend

Official website and administrative portal for **Pharo Foundation** — *Unlocking Africa's potential* — built with Next.js, Prisma ORM, SQLite, Tailwind CSS, and Framer Motion.

---

## 🚀 Tech Stack & Infrastructure

- **Next.js 16 (App Router & Turbopack)** — Fullstack React framework
- **React 19** — UI library
- **Prisma ORM (v5.22.0)** — Database ORM & schema management
- **SQLite (`prisma/dev.db`)** — Local lightweight database engine
- **TypeScript** — End-to-end type safety
- **Tailwind CSS** — Utility-first responsive design
- **Framer Motion** — Smooth animations and modal transitions
- **Lucide React** — Modern UI icons
- **Next Themes** — Light/dark theme provider

---

## 🔒 Admin Portal & Backend Architecture

| Route / Feature | Method | Description |
|---|---|---|
| **`/admin`** | `GET` | Administrative portal to manage student applications, read contact form inquiries, and publish news announcements. |
| **`/api/admin/login`** | `POST`, `GET`, `DELETE` | Passcode authentication gate (`pharo2026`) with HTTP-only session cookies and logout functionality. |
| **`/api/admissions`** | `POST`, `GET`, `PATCH`, `DELETE` | Online admissions API: receives applications, updates status (`PENDING`, `REVIEWED`, `ACCEPTED`, `REJECTED`), and handles record deletion. |
| **`/api/contact`** | `POST`, `GET` | Receives contact form submissions, stores them in SQLite DB, and falls back to Web3Forms. |
| **`/api/news`** | `POST`, `GET`, `DELETE` | Dynamic news publishing API with image support and 1-click deletion. |

---

## 🛠️ Key Features

- **🔒 Passcode-Protected Admin Portal (`/admin`)**:
  - Protected with a passcode lock screen (`ADMIN_PASSWORD` in `.env.local`).
  - Session cookie handling and logout button.
- **📝 Comprehensive Student Admissions Form (`/admissions`)**:
  - Accepts Student Name, Parent Name, Email, Phone Number, Emergency Contact Phone, Age, Gender (Male/Female), City/Region, Previous School Attended, Grade Level, and Notes.
  - Interactive status review in Admin Portal.
- **🖼️ Drag & Drop News & Event Publisher**:
  - Interactive Drag & Drop image file picker or local computer file browser.
  - Instant live image preview, quick preset buttons, and 1-click article removal.
  - Live dynamic news feed on the main website (`/api/news`).
- **🌙 Theme Switcher**: Full Light / Dark mode support.

---

## 💻 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Database Sync & Client Generation

```bash
npx prisma db push
npx prisma generate
```

### 3. Launch Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
Access the Admin Portal at [http://localhost:3000/admin](http://localhost:3000/admin) *(Passcode: `pharo2026`)*.

---

## 📁 Project Structure

```text
.
├── app/
│   ├── (standalone)/
│   │   └── admissions/page.tsx   # Interactive Online Admissions Form
│   ├── admin/
│   │   └── page.tsx              # Passcode-Protected Admin Dashboard
│   ├── api/
│   │   ├── admin/login/route.ts  # Admin session authentication API
│   │   ├── admissions/route.ts   # Student admissions CRUD API
│   │   ├── contact/route.ts      # Contact form submission API
│   │   └── news/route.ts         # Announcement publishing & deletion API
│   ├── layout.tsx                # Root layout + metadata
│   ├── not-found.tsx             # 404 page
│   └── page.tsx                  # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Responsive navigation bar
│   │   ├── BackToTop.tsx         # Scroll to top button
│   │   └── ThemeProvider.tsx     # Next-themes provider
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section
│   │   ├── About.tsx             # Mission & vision
│   │   ├── Academics.tsx         # Educational programs
│   │   ├── Facilities.tsx        # Campus facilities grid
│   │   ├── StudentLife.tsx       # Student activities
│   │   ├── NewsEvents.tsx        # Dynamic news & announcements list
│   │   ├── Admissions.tsx        # Admissions overview
│   │   ├── Contact.tsx           # Contact form
│   │   └── Footer.tsx            # Footer navigation & social links
│   └── ui/                       # Reusable UI components
├── lib/
│   └── prisma.ts                 # Global Prisma Client instance
├── prisma/
│   ├── dev.db                    # SQLite database file
│   └── schema.prisma             # Database models (Application, Inquiry, NewsEvent)
├── .env.local                    # Local environment secrets (ADMIN_PASSWORD, WEB3FORMS_KEY)
└── README.md
```

---

## 📦 Scripts

```bash
npm run dev       # Start development server on localhost:3000
npm run build     # Build production bundle & verify TypeScript types
npm run start     # Run production build server
npm run lint      # Run ESLint validation
```

---

## 🌐 Deployment to Production

1. **Database**: To connect to a cloud database (PostgreSQL, Supabase, Neon), update `provider = "postgresql"` and `url = env("DATABASE_URL")` in `prisma/schema.prisma`.
2. **Environment Variables**: Set `ADMIN_PASSWORD` and `DATABASE_URL` in your hosting dashboard (e.g. Vercel, Railway, Render).
3. **Repository**: [github.com/surafelasmamaw1/pharo](https://github.com/surafelasmamaw1/pharo)

---

## 📄 License

MIT © Pharo Foundation
