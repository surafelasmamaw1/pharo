# Personal Portfolio

A modern, production-ready personal portfolio website for Surafel Asmamaw built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

### Frontend
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Simple Icons** - Brand/skill icons
- **React Hook Form** - Form handling
- **Zod** - Validation
- **Next Themes** - Light/dark mode

### Contact
- **Web3Forms** - Contact form submission (no backend required)

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

No environment variables are required.

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   ├── globals.css             # Global styles
│   ├── icon.svg                # Favicon
│   ├── layout.tsx              # Root layout
│   ├── not-found.tsx           # 404 page
│   └── page.tsx                # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── BackToTop.tsx       # Back to top button
│   │   └── ThemeProvider.tsx   # Light/dark theme provider
│   ├── projects/
│   │   └── ProjectCard.tsx     # Project card component
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── TimelineSection.tsx # Education, certifications, languages
│   │   ├── Skills.tsx          # Skills section
│   │   ├── Resume.tsx          # Work experience timeline
│   │   ├── Services.tsx        # Services section
│   │   ├── Projects.tsx        # Projects section
│   │   ├── Contact.tsx         # Contact section + form
│   │   └── Footer.tsx          # Footer
│   └── ui/
│       ├── Button.tsx          # Reusable button
│       ├── Container.tsx       # Container component
│       ├── SectionHeading.tsx  # Section heading
│       └── Tag.tsx             # Tag component
├── lib/
│   ├── techIcons.ts            # Tech icon helpers
│   └── zodSchemas.ts           # Zod validation schemas
├── public/
│   ├── certificates/           # Certificate PDFs
│   ├── cv-surafel-asmamaw.pdf  # Resume download
│   └── profile-photo.png       # Profile photo
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Features

- Custom design with calm color palette
- Light and dark mode
- Fully responsive
- Smooth animations with Framer Motion
- Contact form via Web3Forms with validation
- In-browser certificate PDF viewer
- Resume (CV) download button
- Mobile-friendly navigation
- SEO optimized (metadata, sitemap, robots.txt)

## Customization

### Update Content
- Replace placeholder text in components (name, projects, contact info)
- Add custom logo SVG in `Navbar.tsx`
- Update color palette in `tailwind.config.ts`

### Add Projects
Add your projects in `components/sections/Projects.tsx`

### Add Certificates
1. Place the PDF in `public/certificates/`
2. Add a matching entry in `components/sections/TimelineSection.tsx`

### Update CV
Replace `public/cv-surafel-asmamaw.pdf` with the latest version of your CV.

### Update Styles
Modify `tailwind.config.ts` to customize design tokens

## Deployment

### Vercel
The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format files with Prettier
```

## License

MIT