'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="font-body text-xs tracking-widest uppercase text-[#e8e4d9]/40 hover:text-[#c9a84c] transition-colors duration-300"
    >
      Uitloggen
    </button>
  )
}
