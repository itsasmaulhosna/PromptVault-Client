'use client'

import { useState } from 'react'
import { ShieldAlert, X } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function ReportPromptModal({
  open,
  onClose,
}) {
  const [reason, setReason] = useState(
    'Inappropriate Content'
  )

  const [description, setDescription] =
    useState('')

  if (!open) return null

  const handleSubmit = () => {
    toast.success(
      'Report submitted successfully'
    )

    onClose()
    setDescription('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0B1023] p-8">

        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <ShieldAlert className="text-white" />

            <h2 className="text-2xl font-bold text-white">
              Report Prompt Template
            </h2>

          </div>

          <button
            onClick={onClose}
            className="text-gray-400"
          >
            <X />
          </button>

        </div>

        <div className="mb-6 border-b border-white/10 pb-6">

          <p className="text-gray-400">
            Help us maintain community standards.
            If this prompt contains malicious
            instructions, plagiarized files,
            or spam content, report it below.
          </p>

        </div>

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

            <option>Malicious Prompt</option>
          </select>

          <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-gray-400">
            Additional Description
            (Optional)
          </label>

          <textarea
            rows={6}
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-violet-500 bg-[#111936] p-4 text-white outline-none"
          />

        </div>

        <div className="mt-8 flex justify-end gap-4 border-t border-white/10 pt-6">

          <button
            onClick={onClose}
            className="rounded-xl bg-white/10 px-6 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-red-500/20 px-6 py-3 font-semibold text-red-400"
          >
            Submit Report
          </button>

        </div>

      </div>

    </div>
  )
}