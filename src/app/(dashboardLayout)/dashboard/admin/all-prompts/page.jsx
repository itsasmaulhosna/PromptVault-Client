'use client'

import { useEffect, useState } from 'react'
import {
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaTrash,
} from 'react-icons/fa'
export default function AllPromptsPage() {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPrompts()
  }, [])

  const fetchPrompts = async () => {
    try {
      setLoading(true)

      const res = await fetch(
        'http://localhost:8080/api/prompts'
      )

      const data = await res.json()

      console.log(data)

      setPrompts(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  const handleApprove = async (id) => {
  await fetch(
    `http://localhost:8080/api/prompts/${id}/approve`,
    {
      method: 'PATCH',
    }
  )

  fetchPrompts()
}

const handleReject = async (id) => {
  await fetch(
    `http://localhost:8080/api/prompts/${id}/reject`,
    {
      method: 'PATCH',
    }
  )

  fetchPrompts()
}

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    'Delete this prompt?'
  )

  if (!confirmDelete) return

  await fetch(
    `http://localhost:8080/api/prompts/${id}`,
    {
      method: 'DELETE',
    }
  )

  fetchPrompts()
}

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          All Prompts
        </h1>

        <p className="text-muted-foreground mt-2">
          Manage all prompts submitted by creators.
        </p>
      </div>

      {loading ? (
        <div className="text-center py-10">
          Loading prompts...
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  AI Tool
                </th>

                <th className="p-4 text-left">
                  Visibility
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Copies
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {prompts.length > 0 ? (
                prompts.map((prompt) => (
                  <tr
                    key={prompt._id}
                    className="border-t border-border"
                  >
                    <td className="p-4">
                      <div className="font-medium">
                        {prompt.title}
                      </div>
                    </td>

                    <td className="p-4">
                      {prompt.category}
                    </td>

                    <td className="p-4">
                      {prompt.aiTool}
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          prompt.visibility ===
                          'public'
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-yellow-500/10 text-yellow-500'
                        }`}
                      >
                        {prompt.visibility}
                      </span>
                    </td>

                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${
                          prompt.status ===
                          'approved'
                            ? 'bg-green-500/10 text-green-500'
                            : prompt.status ===
                                'rejected'
                              ? 'bg-red-500/10 text-red-500'
                              : 'bg-yellow-500/10 text-yellow-500'
                        }`}
                      >
                        {prompt.status}
                      </span>
                    </td>

                    <td className="p-4">
                      {prompt.copyCount || 0}
                    </td>

                    <td className="p-4">
  <div className="flex items-center gap-3">

    {/* View */}
    <button
      className="text-blue-300 hover:scale-110 transition"
    >
      <FaEye size={18} />
    </button>

    {/* Approve */}
    <button
      onClick={() =>
        handleApprove(prompt._id)
      }
      className="text-green-300 hover:scale-110 transition"
    >
      <FaCheckCircle size={18} />
    </button>

    {/* Reject */}
    <button
      onClick={() =>
        handleReject(prompt._id)
      }
      className="text-yellow-200 hover:scale-110 transition"
    >
      <FaTimesCircle size={18} />
    </button>

    {/* Delete */}
    <button
      onClick={() =>
        handleDelete(prompt._id)
      }
      className="text-red-400 hover:scale-110 transition"
    >
      <FaTrash size={18} />
    </button>

  </div>
</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="p-8 text-center text-muted-foreground"
                  >
                    No prompts found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}