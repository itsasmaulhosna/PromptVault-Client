'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import AdminSidebar from '@/components/AdminSidebar'

export default function DashboardLayout({
  children,
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-card px-4 lg:hidden">
        <h2 className="text-lg font-bold">
          Prompt
          <span className="text-violet-600">
            Vault
          </span>
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border p-2"
        >
          <FaBars />
        </button>
      </div>

      <div className="flex">
        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 z-50 lg:hidden ${
            open
              ? 'visible'
              : 'invisible'
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity ${
              open
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            onClick={() => setOpen(false)}
          />

          <div
            className={`absolute left-0 top-0 h-screen w-[280px] bg-background transition-transform duration-300 ${
              open
                ? 'translate-x-0'
                : '-translate-x-full'
            }`}
          >
            <div className="flex items-center justify-end border-b p-4">
              <button
                onClick={() =>
                  setOpen(false)
                }
                className="rounded-lg border p-2"
              >
                <FaTimes />
              </button>
            </div>

            <AdminSidebar />
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <AdminSidebar />
        </div>

        {/* Content */}
        <main className="min-w-0 flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}