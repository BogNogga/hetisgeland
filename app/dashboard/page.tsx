import { createServerSupabaseClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import LogoutButton from '@/components/LogoutButton'

export default async function DashboardPage() {
  const supabase = createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const createdAt = new Date(user.created_at).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="min-h-screen grain">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-[#c9a84c]/15">
        <span className="font-display text-xl tracking-widest text-[#c9a84c] uppercase opacity-80">
          hetisgeland
        </span>
        <LogoutButton />
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
        <div className="animate-fade-up mb-6 flex items-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
          <span className="font-body text-xs tracking-[0.3em] text-[#c9a84c]/60 uppercase">
            Geland
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
        </div>

        <h1 className="animate-fade-up-delay-1 font-display font-light text-[clamp(3rem,8vw,6rem)] leading-[0.95] mb-6">
          Je bent<br />
          <span className="italic text-[#c9a84c]">er</span>
        </h1>

        <div className="animate-fade-up-delay-2 mt-4 max-w-sm space-y-6">
          <div className="border border-[#c9a84c]/20 p-6 bg-[#141410]/80">
            <p className="font-body text-xs tracking-widest uppercase text-[#e8e4d9]/40 mb-3">
              Ingelogd als
            </p>
            <p className="font-body text-sm text-[#e8e4d9]/80 truncate">
              {user.email}
            </p>
          </div>

          <div className="border border-[#e8e4d9]/8 p-6 bg-[#141410]/40">
            <p className="font-body text-xs tracking-widest uppercase text-[#e8e4d9]/30 mb-3">
              Lid sinds
            </p>
            <p className="font-body text-sm text-[#e8e4d9]/60">
              {createdAt}
            </p>
          </div>
        </div>

        <p className="animate-fade-up-delay-3 mt-10 font-display italic text-[#e8e4d9]/20 text-xl">
          Welkom thuis.
        </p>
      </div>
    </main>
  )
}
