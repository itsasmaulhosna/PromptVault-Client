'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import UserSidebar from '@/components/UserSidebar'

export default function DashboardLayout({
  children,
}) {
  const [open, setOpen] =
    useState(false)

  return (
    <div className="min-h-screen bg-background">

      {/* Mobile Header */}
      <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:hidden">
        <h2 className="text-lg font-bold">
          Prompt
          <span className="text-violet-600">
            Vault
          </span>
        </h2>

        <button
          onClick={() =>
            setOpen(true)
          }
          className="rounded-lg border border-border p-2"
        >
          <FaBars />
        </button>
      </div>

      <div className="flex">

        {/* Mobile Overlay */}
        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">

            <div
              className="absolute inset-0 bg-black/60"
              onClick={() =>
                setOpen(false)
              }
            />

            <div className="absolute left-0 top-0 h-screen w-[280px] bg-card shadow-xl">

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="absolute right-4 top-4"
              >
                <FaTimes />
              </button>

              <UserSidebar />
            </div>

          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <UserSidebar />
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 overflow-x-hidden p-4 lg:p-8">
          {children}
        </main>

      </div>
    </div>
  )
}