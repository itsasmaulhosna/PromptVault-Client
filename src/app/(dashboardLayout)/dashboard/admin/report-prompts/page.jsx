'use client'

import { useEffect, useState } from 'react'
import {
  Eye,
  CheckCircle,
  AlertTriangle,
  Trash2,
  Calendar,
  User,
} from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function ReportsPage() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReports()
  }, [])

  const fetchReports = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reports`
      )

      const data = await res.json()

      setReports(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDismiss = async (id) => {
    toast.success('Report dismissed')

    setReports((prev) =>
      prev.filter((item) => item._id !== id)
    )
  }

  const handleWarn = async () => {
    toast.success(
      'Creator warning sent'
    )
  }

  const handleRemovePrompt = async (
    report
  ) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts/${report.promptId}`,
        {
          method: 'DELETE',
        }
      )

      toast.success('Prompt removed')

      setReports((prev) =>
        prev.filter(
          (item) => item._id !== report._id
        )
      )
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        Loading reports...
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Reported Prompts Moderation Queue
        </h1>

        <p className="mt-2 text-muted-foreground">
          Review community warnings,
          warn creators, dismiss
          complaints, or remove posts.
        </p>
      </div>

      {reports.length === 0 ? (
        <div className="rounded-3xl border p-10 text-center">
          No reports found.
        </div>
      ) : (
        reports.map((report) => (
          <div
            key={report._id}
            className="
              rounded-3xl
              border
              border-border
              bg-card
              p-6
            "
          >
            {/* Top */}
            <div className="mb-5 flex items-center justify-between">

              <span
                className="
                  rounded-full
                  bg-red-500/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-red-500
                "
              >
                Reason: {report.reason}
              </span>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={16} />

                {new Date(
                  report.createdAt
                ).toLocaleDateString()}
              </div>

            </div>

            {/* Prompt */}
            <h2 className="mb-5 text-2xl font-bold">
              Prompt:{' '}
              {report.promptTitle}
            </h2>

            {/* Details */}
            <div
              className="
                rounded-2xl
                border
                border-border
                bg-muted/20
                p-4
              "
            >
              <span className="font-semibold">
                Report Details:
              </span>{' '}
              {report.details ||
                'No additional details'}
            </div>

            {/* Footer */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
                border-t
                border-border
                pt-5
              "
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <User size={16} />

                Reported by:{' '}
                {report.reportedBy?.email ||
                  'Anonymous User'}
              </div>

              <div className="flex flex-wrap gap-3">

                {/* Inspect */}
                <button
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    px-4
                    py-2
                  "
                >
                  <Eye size={16} />

                  Inspect
                </button>

                {/* Dismiss */}
                <button
                  onClick={() =>
                    handleDismiss(
                      report._id
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-green-500/20
                    bg-green-500/10
                    px-4
                    py-2
                    text-green-500
                  "
                >
                  <CheckCircle size={16} />

                  Dismiss
                </button>

                {/* Warn */}
                <button
                  onClick={handleWarn}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-yellow-500/20
                    bg-yellow-500/10
                    px-4
                    py-2
                    text-yellow-500
                  "
                >
                  <AlertTriangle size={16} />

                  Warn Creator
                </button>

                {/* Remove */}
                <button
                  onClick={() =>
                    handleRemovePrompt(
                      report
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/10
                    px-4
                    py-2
                    text-red-500
                  "
                >
                  <Trash2 size={16} />

                  Remove Prompt
                </button>

              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}