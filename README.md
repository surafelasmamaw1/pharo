# Pharo School Assosa — Official Website

The official website for **Pharo School Assosa**, located in Assosa, BGRS, Ethiopia. Built with Next.js 16, Prisma, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: SQLite via Prisma (switch to PostgreSQL for production)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed the database (optional)
node scripts/seed.js

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file with:

```env
# Web3Forms API key for contact/admissions email notifications
WEB3FORMS_ACCESS_KEY=your_key_here

# Admin dashboard password
ADMIN_PASSWORD=your_secure_password_here

# Session signing secret (use a long random string in production)
SESSION_SECRET=your_very_long_random_secret_here
```

## Admin Dashboard

Navigate to `/admin` to access the admin dashboard. The default password is set via `ADMIN_PASSWORD` in `.env.local`.

## OG Image

The file `public/og-image.svg` is a placeholder. Replace it with a proper 1200×630 PNG for best social sharing results.

## Deployment

For production deployment:
1. Switch from SQLite to PostgreSQL (Neon, Supabase, or Railway)
2. Update `prisma/schema.prisma` datasource to `postgresql`
3. Set all environment variables in your hosting provider
4. Run `npx prisma migrate deploy`
