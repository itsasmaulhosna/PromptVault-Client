'use client'

import { useEffect, useState } from 'react'
import { useSession } from '@/lib/auth-client'
import Link from 'next/link'
import { Trash2, Eye } from 'lucide-react'
import toast from 'react-hot-toast'

export default function SavedPromptsPage() {
  const { data: session } = useSession()

  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!session?.user?.email) return

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookmarks/${session.user.email}`)
      .then(res => res.json())
      .then(data => {
        setPrompts(data.data || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [session])

  
  const handleRemove = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookmarks`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: session?.user?.email,
          promptId: id,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setPrompts(prev => prev.filter(p => p._id !== id))
        toast.success('Removed from saved prompts')
      }
    } catch (err) {
      toast.error('Failed to remove')
    }
  }

  // 🔵 LOADING SPINNER UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816]">
        <div className="flex flex-col items-center gap-4">

          <div className="h-12 w-12 rounded-full border-4 border-white/20 border-t-violet-500 animate-spin" />

          <p className="text-gray-400">
            Loading saved prompts...
          </p>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">
        Saved Prompts
      </h1>

      {/* EMPTY STATE CARD */}
      {prompts.length === 0 ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center border border-white/10 bg-white/5 p-10 rounded-3xl max-w-md">

            <div className="text-5xl mb-4">📌</div>

            <h2 className="text-2xl font-bold mb-2">
              No Saved Prompts
            </h2>

            <p className="text-gray-400">
              You haven’t bookmarked any prompts yet.
            </p>

            <Link
              href="/prompts"
              className="inline-block mt-5 px-5 py-2 bg-violet-600 rounded-xl"
            >
              Explore Prompts
            </Link>

          </div>
        </div>
      ) : (
        /* TABLE */
        <div className="overflow-x-auto">
          <table className="w-full border border-white/10 rounded-xl overflow-hidden">

            <thead className="bg-white/5">
              <tr className="text-left text-gray-300">
                <th className="p-4">Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">AI Tool</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {prompts.map((p) => (
                <tr
                  key={p._id}
                  className="border-t border-white/10 hover:bg-white/5 transition"
                >
                  <td className="p-4 font-medium">
                    {p.title}
                  </td>

                  <td className="p-4 text-gray-300">
                    {p.category}
                  </td>

                  <td className="p-4 text-gray-300">
                    {p.aiTool}
                  </td>

                  <td className="p-4 flex gap-3">

                    {/* VIEW */}
                    <Link
                      href={`/prompts/${p._id}`}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Eye size={18} />
                    </Link>

                    {/* DELETE BOOKMARK */}
                    <button
                      onClick={() => handleRemove(p._id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  )
}