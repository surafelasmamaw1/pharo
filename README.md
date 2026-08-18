# Pharo Foundation Website

Official website for **Pharo Foundation** — *Unlocking Africa's potential* — built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** — React framework
- **React 19** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and modals
- **Lucide React** — Icons
- **React Hook Form + Zod** — Contact form with validation
- **Next Themes** — Light/dark mode

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── icon.png                # Favicon (Pharo Foundation logo)
│   ├── layout.tsx              # Root layout + metadata
│   ├── not-found.tsx           # 404 page
│   └── page.tsx                # Home page (section order)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation with active section tracking
│   │   ├── BackToTop.tsx       # Back to top button
│   │   └── ThemeProvider.tsx   # Light/dark theme provider
│   ├── projects/
│   │   └── ProjectCard.tsx     # News/events card with modal
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with school photo, EST. badge, programs pill
│   │   ├── About.tsx           # About section with modal (mission, vision, pillars)
│   │   ├── Services.tsx        # Why Choose Us section
│   │   ├── Skills.tsx          # Academics — 6 program cards with modals
│   │   ├── Facilities.tsx      # Our Learning Environment — bento grid with modals
│   │   ├── StudentLife.tsx     # Life Beyond the Classroom — activity cards
│   │   ├── Projects.tsx        # News & Events — cards with show more/less
│   │   ├── Testimonials.tsx    # Community voices
│   │   ├── Resume.tsx          # Admissions process — 4-step cards
│   │   ├── TimelineSection.tsx # School history timeline
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer with social links
│   └── ui/
│       ├── Button.tsx          # Reusable button
│       ├── Container.tsx       # Layout container
│       ├── SectionHeading.tsx  # Section heading
│       └── Tag.tsx             # Tag/chip component
├── lib/
│   ├── techIcons.ts
│   └── zodSchemas.ts
├── public/
│   ├── certificates/           # Certificate PDFs
│   ├── pharo-logo.png          # Pharo Foundation logo
│   ├── pharo-school.png        # Hero section school photo
│   ├── about-photo.png         # About section photo
│   ├── classrooms.png          # Facilities — classrooms photo
│   ├── library.png             # Facilities — library photo
│   ├── computer-labs.png       # Facilities — computer labs photo
│   ├── ronaldo.jpg             # News — football event photo
│   └── robots.txt / sitemap.xml
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Page Sections (in order)

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | School photo, EST. 2011, programs pill, CTAs |
| About | `#about` | Intro, mission/vision cards, "Learn More" modal |
| Why Choose Us | `#why-choose` | Key differentiators |
| Academics | `#academics` | 6 program cards, each opens a detail modal |
| Learning Environment | `#facilities` | Bento photo grid, click to open facility modal |
| Student Life | `#student-life` | Activities grid + signature experiences strip |
| News & Events | `#news-events` | Cards with real photos, show more/less, read more modal |
| Testimonials | `#testimonials` | Parent, student, teacher voices |
| Admissions | `#admissions` | 4-step process cards |
| Contact | `#contact` | Contact form |

## Key Features

- Pharo Foundation branding (navy blue, gold, clean typography)
- Light and dark mode
- Fully responsive layout
- Smooth animations and page transitions (Framer Motion)
- Interactive modals on cards (Academics, Facilities, News, About)
- News & Events "show more / show less" with hidden count badge
- Real photos for campus, classrooms, library, computer labs, events
- Social media links with per-platform brand color hover effects
- Contact form with validation (React Hook Form + Zod)
- SEO optimized — metadata, sitemap, robots.txt
- Circular favicon from Pharo Foundation logo

## Adding Content

### Add a news/event card
Edit `components/sections/Projects.tsx` — add an item to the `items` array with `title`, `date`, `category`, `description`, `image`, and `link`.

### Add a facility photo
1. Place the image in `public/`
2. Add the `image` field to the matching entry in `components/sections/Facilities.tsx`

### Update social media links
Edit the `socialLinks` array in `components/sections/Footer.tsx`.

### Update admissions steps
Edit the `steps` array in `components/sections/Resume.tsx`.

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run format    # Format with Prettier
```

## Deployment

Deploy instantly with [Vercel](https://vercel.com/):

1. Push to GitHub (`git push`)
2. Import the repo in Vercel
3. Deploy — no environment variables required for the base site

## Repository

[github.com/surafelasmamaw1/pharo](https://github.com/surafelasmamaw1/pharo)

## License

MIT
