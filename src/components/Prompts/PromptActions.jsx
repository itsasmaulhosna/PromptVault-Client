import { Bookmark, Flag } from "lucide-react"
import ReportPromptModal from "./ReportPromptModal"
import { useState } from "react"
import toast from "react-hot-toast"

export default function PromptActions({
  bookmarks,
  setBookmarks,
  userEmail,
  promptId,
}) {
  const [reportOpen, setReportOpen] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleBookmark = async () => {
    if (!userEmail || !promptId) return

    if (isBookmarked) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookmarks`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userEmail, promptId }),
        }
      )

      const data = await res.json()

      if (data.success) {
        setBookmarks((p) => Math.max(0, p - 1))
        setIsBookmarked(false)
        toast.success('Bookmark removed')
      }

    } else {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookmarks`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userEmail, promptId }),
        }
      )

      const data = await res.json()

      if (data.success) {
        setBookmarks((p) => p + 1)
        setIsBookmarked(true)
        toast.success('Bookmarked')
      }
    }
  }

  return (
    <>
      <button
        onClick={handleBookmark}
        className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300"
      >
        <Bookmark
          size={18}
          fill={isBookmarked ? 'currentColor' : 'none'}
        />
      </button>

      <button
        onClick={() => setReportOpen(true)}
        className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300"
      >
        <Flag size={18} />
      </button>

      <ReportPromptModal
        open={reportOpen}
        onClose={() => setReportOpen(false)}
      />
    </>
  )
}