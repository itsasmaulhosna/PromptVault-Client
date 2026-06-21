'use client'

import { useState } from 'react'
import { Flag, Bookmark } from 'lucide-react'
import ReportPromptModal from './ReportPromptModal'

export default function PromptActions() {
  const [reportOpen, setReportOpen] =
    useState(false)

  return (
    <>
      <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:bg-white/10">
        <Bookmark size={18} />
      </button>

      <button
        onClick={() => setReportOpen(true)}
        className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition hover:bg-white/10"
      >
        <Flag size={18} />
      </button>

      <ReportPromptModal
        open={reportOpen}
        onClose={() =>
          setReportOpen(false)
        }
      />
    </>
  )
}