'use client'

import { useEffect, useState } from 'react'
import { Pencil, BarChart3 } from 'lucide-react'
import { FaEye, FaTrash } from 'react-icons/fa'
import Link from 'next/link'
import { useSession } from '@/lib/auth-client'

export default function MyPromptsPage() {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)

  const { data: session } = useSession()

  const fetchPrompts = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts`
      )

      const data = await res.json()

      setPrompts(data.data || [])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrompts()
  }, [])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Delete this prompt?'
    )

    if (!confirmDelete) return

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/prompts/${id}`,
        {
          method: 'DELETE',
        }
      )

      const data = await res.json()

      console.log(data)

      if (data.success) {
        setPrompts((prev) =>
          prev.filter(
            (prompt) => prompt._id !== id
          )
        )

        alert('Prompt deleted successfully')
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    )
  }
  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            My Prompt Templates
          </h1>

          <p className="text-muted-foreground">
            Review approval statuses, change details and
            check analytics.
          </p>
        </div>
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border border-border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="p-5">TITLE</th>
                <th className="p-5">AI TOOL</th>
                <th className="p-5">VISIBILITY</th>
                <th className="p-5">STATUS</th>
                <th className="p-5">COPIES</th>
                <th className="p-5">RATING</th>
                <th className="p-5">ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {prompts.map((prompt) => (
                <tr
                  key={prompt._id}
                  className="border-b border-border"
                >
                  {/* Title */}

                  <td className="p-5">
                    <div className="flex gap-4">
                      <img
                        src={
                          prompt.thumbnail ||
                          '/placeholder.jpg'
                        }
                        alt={prompt.title}
                        className="h-14 w-14 rounded-lg object-cover"
                      />

                      <div>
                        <h4 className="font-semibold">
                          {prompt.title}
                        </h4>

                        <p className="text-sm text-muted-foreground">
                          Category: {prompt.category}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* AI Tool */}

                  <td className="p-5">
                    <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm">
                      {prompt.aiTool}
                    </span>
                  </td>

                  {/* Visibility */}

                  <td className="p-5 capitalize">
                    {prompt.visibility}
                  </td>

                  {/* Status */}

                  <td className="p-5">
                    <span
                      className={`
                        rounded-full px-3 py-1 text-sm
                        ${
                          prompt.status === 'approved'
                            ? 'bg-green-500/20 text-green-500'
                            : ''
                        }
                        ${
                          prompt.status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : ''
                        }
                        ${
                          prompt.status === 'rejected'
                            ? 'bg-red-500/20 text-red-500'
                            : ''
                        }
                      `}
                    >
                      {prompt.status}
                    </span>
                  </td>

                  {/* Copies */}

                  <td className="p-5">
                    {prompt.copyCount || 0}
                  </td>

                  {/* Rating */}

                  <td className="p-5">
                    ⭐ {prompt.rating || 0}
                  </td>

                  {/* Actions */}

                  <td className="p-5">
                    <div className="flex gap-2">
                      <Link
                        href={`/prompts/${prompt._id}`}
                        className="text-blue-300 transition hover:scale-110"
                      >
                        <FaEye size={18} />
                      </Link>

                      <button className="rounded-lg border p-2">
                        <Pencil size={18} />
                      </button>

                      <button className="rounded-lg border p-2">
                        <BarChart3 size={18} />
                      </button>

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
              ))}
            </tbody>
          </table>

          {prompts.length === 0 && (
            <div className="p-10 text-center">
              No prompts found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}