'use client'

import { useEffect, useState } from 'react'
import { useSession } from '@/lib/auth-client'
import { Layers3 } from 'lucide-react'
import Link from 'next/link'

export default function MyPromptsPage() {
  const { data: session } = useSession()

  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrompts = async () => {
      if (!session?.user?.email) return

      try {
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
    return (
      <div className="p-6">
        Loading...
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          My Prompt Templates
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage and track all your published prompts.
        </p>
      </div>

      {prompts.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card py-24">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Layers3
                size={40}
                className="text-muted-foreground"
              />
            </div>

            <h3 className="text-3xl font-bold">
              No prompts found
            </h3>

            <p className="mt-4 text-muted-foreground">
              Create your first prompt template and
              share it with the community.
            </p>

            <Link
              href="/dashboard/user/add-prompts"
              className="mt-8 inline-flex rounded-xl bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-700"
            >
              Create Prompt
            </Link>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-border">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="p-4 text-left">
                  Title
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
              {prompts.map(prompt => (
                <tr
                  key={prompt._id}
                  className="border-b border-border"
                >
                  <td className="p-4">
                    {prompt.title}
                  </td>

                  <td className="p-4">
                    <span
                      className={
                        prompt.status === 'approved'
                          ? 'text-green-500'
                          : prompt.status === 'pending'
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }
                    >
                      {prompt.status}
                    </span>
                  </td>

                  <td className="p-4">
                    {prompt.copyCount || 0}
                  </td>

                  <td className="p-4">
                    <Link
                      href={`/prompts/${prompt._id}`}
                      className="text-violet-500 hover:underline"
                    >
                      View
                    </Link>
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