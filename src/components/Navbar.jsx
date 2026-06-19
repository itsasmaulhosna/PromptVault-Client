'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Menu,
  X,
  Sun,
  Moon,
  LayoutDashboard,
  LogOut,
} from 'lucide-react'

import { useSession, signOut } from '@/lib/auth-client'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const { data: session, isPending } = useSession()
  const user = session?.user

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'All Prompts',
      href: '/prompts',
    },
  ]

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() =>
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:bg-accent transition"
              >
                {theme === 'dark' ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            )}

            {isPending ? (
              <div className="h-10 w-24 animate-pulse rounded-lg bg-muted" />
            ) : user ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 hover:bg-accent transition"
                >
                  <LayoutDashboard size={18} />
                  <span>Dashboard</span>
                </Link>

                <Image
                  src={user.image || '/avatar.png'}
                  alt={user.name || 'User'}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border object-cover"
                />

                <button
                  onClick={handleLogout}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="font-medium hover:text-violet-600 transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white hover:bg-violet-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-4 px-4 py-5">
            {/* Navigation */}
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block ${
                  pathname === item.href
                    ? 'font-semibold text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() =>
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }
                className="flex h-10 w-10 items-center justify-center rounded-lg border"
              >
                {theme === 'dark' ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            )}

            {isPending ? (
              <div className="h-16 animate-pulse rounded-lg bg-muted" />
            ) : user ? (
              <div className="space-y-4 border-t pt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={user.image || '/avatar.png'}
                    alt={user.name || 'User'}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border object-cover"
                  />

                  <div>
                    <p className="font-semibold">
                      {user.name}
                    </p>

                    {user.email && (
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    )}
                  </div>
                </div>

                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-lg border px-4 py-3"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-3 text-red-500"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 pt-3">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-lg border px-4 py-2 text-center"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-lg bg-violet-600 px-4 py-2 text-center text-white"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}