'use client'

import { useState } from 'react'
import { ShieldAlert, X } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function ReportPromptModal({
  open,
  onClose,
  prompt,
}) {
  const [reason, setReason] = useState(
    'Inappropriate Content'
  )

  const [description, setDescription] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  if (!open) return null

  const handleSubmit = async () => {
    try {
      setLoading(true)

      const reportData = {
        promptId: prompt?._id,
        promptTitle: prompt?.title,

        reason,
        details: description,

        status: 'pending',

        createdAt: new Date(),
      }

      const res = await fetch(
        'http://localhost:8080/api/reports',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify(reportData),
        }
      )

      const data = await res.json()

      if (data.success) {
        toast.success(
          'Report submitted successfully'
        )

        setDescription('')
        setReason(
          'Inappropriate Content'
        )

        onClose()
      } else {
        toast.error(
          'Failed to submit report'
        )
      }
    } catch (error) {
      console.log(error)

      toast.error(
        'Failed to submit report'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0B1023] p-8">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <ShieldAlert
              size={24}
              className="text-red-400"
            />

            <h2 className="text-2xl font-bold text-white">
              Report Prompt Template
            </h2>

          </div>

          <button
            onClick={onClose}
            className="text-gray-400 transition hover:text-white"
          >
            <X size={24} />
          </button>

        </div>

        {/* Prompt Info */}
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4">

          <p className="text-sm text-gray-400">
            Reporting Prompt
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {prompt?.title}
          </h3>

        </div>

        {/* Description */}
        <div className="mb-6 border-b border-white/10 pb-6">

          <p className="text-gray-400">
            Help us maintain community
            standards. Report prompts that
            contain harmful, misleading,
            copyrighted, or spam content.
          </p>

        </div>

        {/* Form */}
        <div>

          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-400">
            Reason
          </label>

          <select
            value={reason}
            onChange={(e) =>
              setReason(e.target.value)
            }
            className="mb-6 w-full rounded-xl border border-white/10 bg-[#111936] p-4 text-white outline-none"
          >
            <option>
              Inappropriate Content
            </option>

            <option>
              Copyright Violation
            </option>

            <option>Spam</option>

            <option>
              Malicious Prompt
            </option>

            <option>
              Misleading Information
            </option>
          </select>

          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-400">
            Additional Details
          </label>

          <textarea
            rows={6}
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            placeholder="Explain why you are reporting this prompt..."
            className="w-full rounded-2xl border border-violet-500/30 bg-[#111936] p-4 text-white outline-none"
          />

        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-end gap-4 border-t border-white/10 pt-6">

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl bg-white/10 px-6 py-3 text-white transition hover:bg-white/20"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-red-500/20 px-6 py-3 font-semibold text-red-400 transition hover:bg-red-500/30 disabled:opacity-50"
          >
            {loading
              ? 'Submitting...'
              : 'Submit Report'}
          </button>

        </div>

      </div>

    </div>
  )
}