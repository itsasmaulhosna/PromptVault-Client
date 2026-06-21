'use client'

import { signOut, useSession } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaHome,
  FaSignOutAlt,
  FaUsers,
  FaFileAlt,
  FaMoneyBillWave,
  FaFlag,
  FaChartBar,
  FaShieldAlt,
} from 'react-icons/fa'

export default function AdminSidebar() {
  const { data: session } = useSession()

  const handleLogout = async () => {
    await signOut()
  }

  const menuItems = [
    {
      key: 'users',
      label: 'All Users',
      icon: FaUsers,
      href: '/dashboard/admin/all-users',
    },
    {
      key: 'prompts',
      label: 'All Prompts',
      icon: FaFileAlt,
      href: '/dashboard/admin/all-prompts',
    },
    {
      key: 'payments',
      label: 'All Payments',
      icon: FaMoneyBillWave,
      href: '/dashboard/admin/payments',
    },
    {
      key: 'reports',
      label: 'Reported Prompts',
      icon: FaFlag,
      href: '/dashboard/admin/report-prompts',
    },
    {
      key: 'analytics',
      label: 'Analytics',
      icon: FaChartBar,
      href: '/dashboard/admin/analytics',
    },
  ]

  return (
    <aside className="h-screen w-72 border-r border-border bg-background">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="border-b border-border px-6 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="PromptVault"
              width={40}
              height={40}
              priority
            />

            <span className="text-xl font-bold text-foreground">
              Prompt
              <span className="text-violet-600">Vault</span>
            </span>
          </div>
        </div>

        {/* User Info */}
        <div className="border-b border-border px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-violet-500/20">
              <Image
                src={
                  session?.user?.image ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    session?.user?.name || 'Admin'
                  )}`
                }
                alt="Admin"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="font-semibold text-foreground">
                {session?.user?.name}
              </p>

              <span className="text-xs font-semibold uppercase text-red-500">
                Admin
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-3 py-5">
          <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Admin Panel
          </p>

          {menuItems.map(({ key, label, icon: Icon, href }) => (
            <Link
              key={key}
              href={href}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-3
                py-3
                text-sm
                font-medium
                text-muted-foreground
                transition-all
                hover:bg-accent
                hover:text-foreground
              "
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                <Icon size={16} />
              </span>

              {label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-3 space-y-2">
          <Link
            href="/"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-sm
              font-medium
              text-muted-foreground
              hover:bg-accent
              hover:text-foreground
            "
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
              <FaHome size={16} />
            </span>

            Back to Site
          </Link>

          <button
            onClick={handleLogout}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-sm
              font-medium
              text-red-500
              hover:bg-red-500/10
            "
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10">
              <FaSignOutAlt size={16} />
            </span>

            Sign Out
          </button>
        </div>
      </div>
    </aside>
  )
}