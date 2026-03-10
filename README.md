# hetisgeland

A minimal Dutch landing page with authentication, built with Next.js, Tailwind CSS, and Supabase.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Auth & DB**: Supabase (email/password authentication)
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Features

- Landing page with Dutch copy
- Email/password sign up
- Email/password login
- Protected dashboard page
- Logout functionality
- Auth callback route for email confirmation

## Deployment

This project is deployed on Vercel. Environment variables must be set in the Vercel project settings.
