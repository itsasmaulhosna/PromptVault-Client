'use client'

import { useState } from 'react'
import DashboardSidebar from '@/components/DashboardSidebar'
import { FaBars } from 'react-icons/fa'

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-card px-4 lg:hidden">
        <h2 className="text-lg font-bold">
          Prompt<span className="text-violet-600">Vault</span>
        </h2>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border p-2"
        >
          <FaBars />
        </button>
      </div>

      <div className="flex">
        {/* Mobile Sidebar */}
        {open && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
            />

            <div className="relative w-72 bg-card min-h-screen">
              <DashboardSidebar />
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <DashboardSidebar />
        </div>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}