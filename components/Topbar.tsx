import { createClient } from '@/utils/supabase/server'
import { Bell } from 'lucide-react'
import Link from 'next/link'

export async function Topbar() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-neutral-800 bg-neutral-950 px-6">
      <div className="flex flex-1 items-center gap-4">
        {/* Placeholder for Search or Breadcrumbs */}
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-neutral-400 hover:text-white transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-neutral-950" />
        </button>
        
        <div className="h-8 w-px bg-neutral-800" />
        
        <div className="flex items-center gap-3">
          <div className="text-sm text-right hidden sm:block">
            <p className="text-sm font-medium text-white truncate max-w-[150px]">
              {user?.email || 'User'}
            </p>
          </div>
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium shadow-sm">
            {(user?.email || 'U').charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </header>
  )
}
