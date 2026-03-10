import Link from 'next/link'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <main className="relative min-h-screen overflow-hidden grain">
      {/* Background decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent" />
      </div>

      {/* Top navigation bar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-[#c9a84c]/15">
        <span className="font-display text-xl tracking-widest text-[#c9a84c] uppercase opacity-80">
          hetisgeland
        </span>
        <div className="flex gap-6 font-body text-sm tracking-wider text-[#e8e4d9]/60">
          <Link href="/login" className="hover:text-[#c9a84c] transition-colors duration-300">
            Inloggen
          </Link>
          <Link href="/signup" className="hover:text-[#c9a84c] transition-colors duration-300">
            Registreren
          </Link>
        </div>
      </nav>

      {/* Hero section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-8 text-center">
        {/* Decorative element */}
        <div className="animate-fade-up mb-8 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/60" />
          <span className="font-body text-xs tracking-[0.3em] text-[#c9a84c]/70 uppercase">
            Welkom
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/60" />
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up-delay-1 font-display font-light text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tight mb-8 text-[#e8e4d9]">
          het is
          <br />
          <span className="italic text-[#c9a84c]">geland</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-2 font-body text-lg text-[#e8e4d9]/50 max-w-md leading-relaxed mb-12 font-light tracking-wide">
          Een plek om te landen. Simpel. Rustig. Van jou.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
          <Link
            href="/login"
            className="group relative px-10 py-4 border border-[#c9a84c]/60 font-body text-sm tracking-widest uppercase text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a08] transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Inloggen</span>
          </Link>
          <Link
            href="/signup"
            className="px-10 py-4 font-body text-sm tracking-widest uppercase text-[#e8e4d9]/50 hover:text-[#e8e4d9] transition-colors duration-300"
          >
            Account aanmaken →
          </Link>
        </div>
      </section>

      {/* Bottom ornament */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-shimmer font-display text-[#c9a84c]/30 text-xs tracking-[0.5em] uppercase">
          ✦ hetisgeland ✦
        </div>
      </div>
    </main>
  )
}
