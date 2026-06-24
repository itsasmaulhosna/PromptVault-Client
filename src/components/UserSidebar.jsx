'use client'

import { signOut, useSession } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaHome,
  FaSignOutAlt,
  FaUserCircle,
  FaPlus,
  FaFileAlt,
  FaBookmark,
  FaStar,
} from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export default function UserSidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  const handleLogout = async () => {
    await signOut()
  }

  const menuItems = [
    {
      key: 'add-prompt',
      label: 'Add Prompt',
      icon: FaPlus,
      href: '/dashboard/user/add-prompts',
    },
    {
      key: 'my-prompts',
      label: 'My Prompts',
      icon: FaFileAlt,
      href: '/dashboard/user/my-prompts',
    },
    {
      key: 'saved-prompts',
      label: 'Saved Prompts',
      icon: FaBookmark,
      href: '/dashboard/user/saved-prompts',
    },
    {
      key: 'my-reviews',
      label: 'My Reviews',
      icon: FaStar,
      href: '/dashboard/user/my-reviews',
    },
    {
      key: 'profile',
      label: 'Profile',
      icon: FaUserCircle,
      href: '/dashboard/user/profile',
    },
  ]

  return (
    <aside className="h-full min-h-screen w-[280px] border-r border-border bg-background">

      <div className="flex h-full flex-col">

        {/* Logo */}
        <div className="border-b border-border px-5 py-5">
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
              <span className="text-violet-600">
                Vault
              </span>
            </span>
          </div>
        </div>

        {/* User Info */}
        <div className="border-b border-border px-5 py-5">
          <div className="flex items-center gap-3">

            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-violet-500/20">
              <Image
                src={
                  session?.user?.image ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    session?.user?.name || 'User'
                  )}`
                }
                alt="User"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate font-semibold text-foreground">
                {session?.user?.name || 'User'}
              </p>

              <span className="text-xs font-semibold uppercase text-violet-600">
                User
              </span>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">

          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            User Panel
          </p>

          <div className="space-y-2">

            {menuItems.map(
              ({
                key,
                label,
                icon: Icon,
                href,
              }) => {
                const isActive =
                  pathname === href

                return (
                  <Link
                    key={key}
                    href={href}
                    className={`
                      flex items-center gap-3 rounded-xl px-3 py-3
                      text-sm font-medium transition-all
                      ${
                        isActive
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                      }
                    `}
                  >
                    <span
                      className={`
                        flex h-10 w-10 items-center justify-center rounded-lg
                        ${
                          isActive
                            ? 'bg-white/20'
                            : 'bg-muted'
                        }
                      `}
                    >
                      <Icon size={16} />
                    </span>

                    <span>
                      {label}
                    </span>
                  </Link>
                )
              }
            )}

          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-3">

          <div className="space-y-2">

            <Link
              href="/"
              className="
                flex items-center gap-3 rounded-xl
                px-3 py-3 text-sm font-medium
                text-muted-foreground
                hover:bg-accent hover:text-foreground
              "
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <FaHome size={16} />
              </span>

              Back to Site
            </Link>

            <button
              onClick={handleLogout}
              className="
                flex w-full items-center gap-3 rounded-xl
                px-3 py-3 text-sm font-medium
                text-red-500 hover:bg-red-500/10
              "
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                <FaSignOutAlt size={16} />
              </span>

              Sign Out
            </button>

          </div>

        </div>

      </div>
    </aside>
  )
}