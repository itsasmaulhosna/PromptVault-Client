'use client'

// import Logo from '@/components/Logo'
import { useSession, signOut } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaHome,
  FaSignOutAlt,
  FaUserShield,
  FaUsers,
  FaBookmark,
  FaHeart,
  FaPlus,
  FaChartBar,
  FaTags,
  FaFileAlt,
  FaCog,
  FaUserCircle,
  FaShoppingBag,
} from 'react-icons/fa'

export default function DashboardSidebar() {
  const { data: session } = useSession()

  const role = session?.user?.role || 'user'

  const handleLogout = async () => {
    await signOut()
  }

  const adminMenu = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: FaUserShield,
      href: '/dashboard/admin',
    },
    {
      key: 'users',
      label: 'Users',
      icon: FaUsers,
      href: '/dashboard/admin/users',
    },
    {
      key: 'prompts',
      label: 'Manage Prompts',
      icon: FaFileAlt,
      href: '/dashboard/admin/prompts',
    },
    {
      key: 'categories',
      label: 'Categories',
      icon: FaTags,
      href: '/dashboard/admin/categories',
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: FaCog,
      href: '/dashboard/admin/settings',
    },
  ]

  const creatorMenu = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: FaChartBar,
      href: '/dashboard/creator',
    },
    {
      key: 'create',
      label: 'Create Prompt',
      icon: FaPlus,
      href: '/dashboard/creator/create-prompt',
    },
    {
      key: 'prompts',
      label: 'My Prompts',
      icon: FaFileAlt,
      href: '/dashboard/creator/prompts',
    },
    {
      key: 'sales',
      label: 'Sales',
      icon: FaShoppingBag,
      href: '/dashboard/creator/sales',
    },
    {
      key: 'analytics',
      label: 'Analytics',
      icon: FaChartBar,
      href: '/dashboard/creator/analytics',
    },
  ]

  const userMenu = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: FaUserCircle,
      href: '/dashboard/user',
    },
    {
      key: 'saved',
      label: 'Saved Prompts',
      icon: FaBookmark,
      href: '/dashboard/user/saved',
    },
    {
      key: 'favorites',
      label: 'Favorites',
      icon: FaHeart,
      href: '/dashboard/user/favorites',
    },
    {
      key: 'purchased',
      label: 'Purchased',
      icon: FaShoppingBag,
      href: '/dashboard/user/purchased',
    },
  ]

  const menuItems =
    role === 'admin'
      ? adminMenu
      : role === 'creator'
      ? creatorMenu
      : userMenu

  return (
    <aside className="w-72 h-screen border-r border-border bg-background">
      <div className="flex h-full flex-col">
        {/* Logo */}
        {/* <div className="border-b border-border px-6 py-5">
          <Logo />
        </div> */}

        {/* User */}
        <div className="border-b border-border px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-primary/30">
              <Image
                src={
                  session?.user?.image ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    session?.user?.name || 'User'
                  )}`
                }
                alt="User"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden">
              <p className="truncate font-semibold text-foreground">
                {session?.user?.name}
              </p>

              <span
                className={`
                  text-xs uppercase font-semibold
                  ${
                    role === 'admin'
                      ? 'text-yellow-500'
                      : role === 'creator'
                      ? 'text-violet-500'
                      : 'text-blue-500'
                  }
                `}
              >
                {role}
              </span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-3 py-5">
          <p className="px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Navigation
          </p>

          {menuItems.map(
            ({ key, label, icon: Icon, href }) => (
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
            )
          )}
        </nav>

        {/* Footer */}
        <div className="space-y-2 border-t border-border p-3">
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
              transition-all
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