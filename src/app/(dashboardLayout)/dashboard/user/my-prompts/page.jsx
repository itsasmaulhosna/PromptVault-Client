'use client'

import { useEffect, useState } from 'react'
import { useSession } from '@/lib/auth-client'
import Link from 'next/link'

export default function MyPromptsPage() {
  const { data: session } = useSession()
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrompts = async () => {
      if (!session?.user?.email) return

      try {
        setLoading(true)

        const res = await fetch(
          `http://localhost:8080/api/prompts/user/${session.user.email}`
        )

        const data = await res.json()

        
        setPrompts(data?.data || [])
      } catch (error) {
        console.error(error)
        setPrompts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPrompts()
  }, [session])

  if (loading) {
    return <div className="p-6">Loading...</div>
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        My Prompts
      </h1>

      {prompts.length === 0 ? (
        <p>No prompts found</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b hover:bg-white/5">
              <th className="p-3 text-left align-middle">Title</th>
              <th className="p-3 text-left align-middle">Status</th>
              <th className="p-3 text-left align-middle">Copies</th>
              <th className="p-3 text-left align-middle">Actions</th>
            </tr>
          </thead>

          <tbody>
            {prompts.map((p) => (
              <tr key={p._id} className="border-b">

                <td className="p-3 align-middle">
                  {p.title}
                </td>

                <td className="p-2">
                  <span
                    className={
                      p.status === 'approved'
                        ? 'text-green-500'
                        : p.status === 'pending'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }
                  >
                    {p.status}
                  </span>
                </td>

                <td className="p-2">
                  {p.copyCount || 0}
                </td>

                <td className="p-3 align-middle">
  <div className="flex items-center gap-3">
    <Link
      href={`/prompts/${p._id}`}
      className="text-blue-500"
    >
      View
    </Link>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}