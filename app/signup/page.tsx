'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  if (success) {
    return (
      <main className="min-h-screen grain flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="font-display text-[#c9a84c] text-6xl mb-6">✦</div>
          <h2 className="font-display font-light text-4xl text-[#e8e4d9] mb-4">
            Bijna<br />
            <span className="italic text-[#c9a84c]">klaar</span>
          </h2>
          <p className="font-body text-sm text-[#e8e4d9]/50 leading-relaxed mb-8">
            We hebben een bevestigingsmail gestuurd naar <strong className="text-[#e8e4d9]/80">{email}</strong>.
            Klik op de link in de mail om je account te activeren.
          </p>
          <Link href="/login" className="font-body text-xs tracking-widest uppercase text-[#c9a84c] hover:text-[#d4b563] transition-colors">
            Naar inloggen →
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen grain flex items-center justify-center px-6">
      <div className="relative w-full max-w-sm">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-xs tracking-wider text-[#e8e4d9]/40 hover:text-[#c9a84c] transition-colors mb-12 uppercase"
        >
          ← Terug
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="font-display text-[#c9a84c]/60 text-xs tracking-[0.4em] uppercase mb-3">
            hetisgeland
          </div>
          <h1 className="font-display font-light text-5xl text-[#e8e4d9] leading-tight">
            Land<br />
            <span className="italic text-[#c9a84c]">hier</span>
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div className="space-y-1">
            <label className="font-body text-xs tracking-widest uppercase text-[#e8e4d9]/40">
              E-mailadres
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#141410] border border-[#e8e4d9]/10 px-4 py-3.5 font-body text-sm text-[#e8e4d9] placeholder-[#e8e4d9]/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-300"
              placeholder="naam@voorbeeld.nl"
            />
          </div>

          <div className="space-y-1">
            <label className="font-body text-xs tracking-widest uppercase text-[#e8e4d9]/40">
              Wachtwoord
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full bg-[#141410] border border-[#e8e4d9]/10 px-4 py-3.5 font-body text-sm text-[#e8e4d9] placeholder-[#e8e4d9]/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors duration-300"
              placeholder="minimaal 6 tekens"
            />
          </div>

          {error && (
            <p className="font-body text-xs text-[#8b3a2a] tracking-wide border border-[#8b3a2a]/30 px-3 py-2 bg-[#8b3a2a]/10">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-4 bg-[#c9a84c] text-[#0a0a08] font-body text-sm tracking-widest uppercase font-medium hover:bg-[#d4b563] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
          >
            {loading ? 'Bezig...' : 'Account aanmaken'}
          </button>
        </form>

        {/* Login link */}
        <p className="mt-8 text-center font-body text-xs text-[#e8e4d9]/30 tracking-wider">
          Al een account?{' '}
          <Link href="/login" className="text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors">
            Log hier in
          </Link>
        </p>
      </div>
    </main>
  )
}
