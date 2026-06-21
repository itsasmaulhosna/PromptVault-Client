'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'

import {
  Flag,
  Bookmark,
} from 'lucide-react'

import ReportPromptModal from './ReportPromptModal'

export default function PromptActions({
  bookmarks,
  setBookmarks,
}) {
  const [reportOpen, setReportOpen] =
    useState(false)

  const [isBookmarked, setIsBookmarked] =
    useState(false)

  const handleBookmark = () => {
    if (isBookmarked) {
      setBookmarks(prev => prev - 1)

      toast('Bookmark removed')
    } else {
      setBookmarks(prev => prev + 1)

      toast.success(
        'Prompt bookmarked'
      )
    }

    setIsBookmarked(!isBookmarked)
  }

  return (
    <>
      <button
        onClick={handleBookmark}
        className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300"
      >
        <Bookmark
          size={18}
          fill={
            isBookmarked
              ? 'currentColor'
              : 'none'
          }
        />
      </button>

      <button
        onClick={() =>
          setReportOpen(true)
        }
        className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300"
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