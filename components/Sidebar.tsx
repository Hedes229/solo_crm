'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, UserSquare2, FolderKanban, Settings, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Prospects', href: '/dashboard/prospects', icon: Users },
  { name: 'Clients', href: '/dashboard/clients', icon: UserSquare2 },
  { name: 'Projets', href: '/dashboard/projects', icon: FolderKanban },
  { name: 'Propositions IA', href: '/dashboard/proposals', icon: Sparkles },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-neutral-950 border-r border-neutral-800 shrink-0">
      <div className="flex h-16 items-center px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SoloCRM</span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto pt-6 px-4">
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/dashboard')
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-400 hover:bg-neutral-900/50 hover:text-white',
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors'
                )}
              >
                <item.icon
                  className={cn(
                    isActive ? 'text-blue-500' : 'text-neutral-500 group-hover:text-neutral-300',
                    'mr-3 h-5 w-5 flex-shrink-0 transition-colors'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
        
        <div className="mt-auto pb-6">
          <Link
            href="/dashboard/settings"
            className={cn(
              pathname === '/dashboard/settings'
                ? 'bg-neutral-900 text-white'
                : 'text-neutral-400 hover:bg-neutral-900/50 hover:text-white',
              'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors'
            )}
          >
            <Settings className="mr-3 h-5 w-5 text-neutral-500 group-hover:text-neutral-300" />
            Paramètres
          </Link>
        </div>
      </div>
    </div>
  )
}
