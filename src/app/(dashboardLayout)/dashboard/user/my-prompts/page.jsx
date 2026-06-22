'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
FileText,
Trash2,
Eye,
Plus,
} from 'lucide-react'

export default function MyPromptsPage() {
const [prompts, setPrompts] = useState([])
const [loading, setLoading] = useState(true)

const fetchPrompts = async () => {
try {
const res = await fetch(
'http://localhost:8080/api/prompts'
)


  const data = await res.json()

  setPrompts(data)
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
    `http://localhost:8080/api/prompts/${id}`,
    {
      method: 'DELETE',
    }
  )

  const data = await res.json()

  if (data.success) {
    setPrompts((prev) =>
      prev.filter(
        (prompt) => prompt._id !== id
      )
    )
  }
} catch (error) {
  console.error(error)
}


}

if (loading) {
return ( <div className="p-8">
Loading prompts... </div>
)
}

const approved = prompts.filter(
(p) => p.status === 'approved'
).length

const pending = prompts.filter(
(p) => p.status === 'pending'
).length

const totalCopies = prompts.reduce(
(acc, item) =>
acc + (item.copyCount || 0),
0
)

return ( <div className="space-y-8">
{/* Header */}

```
  <div>
    <h1 className="text-3xl font-bold">
      My Prompts
    </h1>

    <p className="mt-2 text-muted-foreground">
      Manage your created prompts and track
      their performance.
    </p>
  </div>

  {/* Stats */}

  <div className="grid gap-4 md:grid-cols-4">
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-sm text-muted-foreground">
        Total Prompts
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        {prompts.length}
      </h3>
    </div>

    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-sm text-muted-foreground">
        Approved
      </p>

      <h3 className="mt-2 text-3xl font-bold text-green-500">
        {approved}
      </h3>
    </div>

    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-sm text-muted-foreground">
        Pending
      </p>

      <h3 className="mt-2 text-3xl font-bold text-yellow-500">
        {pending}
      </h3>
    </div>

    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-sm text-muted-foreground">
        Total Copies
      </p>

      <h3 className="mt-2 text-3xl font-bold text-violet-600">
        {totalCopies}
      </h3>
    </div>
  </div>

  {/* Empty State */}

  {prompts.length === 0 && (
    <div className="rounded-3xl border border-border bg-card px-6 py-20 text-center">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <FileText
          size={40}
          className="text-muted-foreground"
        />
      </div>

      <h2 className="text-2xl font-bold">
        No Prompts Found
      </h2>

      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        You haven't created any prompts yet.
        Start sharing your AI prompts with
        the community.
      </p>

      <Link
        href="/dashboard/user/add-prompt"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
      >
        <Plus size={18} />
        Create First Prompt
      </Link>
    </div>
  )}

  {/* Prompt Cards */}

  {prompts.length > 0 && (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {prompts.map((prompt) => (
        <div
          key={prompt._id}
          className="overflow-hidden rounded-3xl border border-border bg-card"
        >
          <img
            src={
              prompt.thumbnail ||
              '/placeholder.jpg'
            }
            alt={prompt.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600">
                {prompt.aiTool}
              </span>

              <span
                className={`
                  rounded-full px-3 py-1 text-xs font-medium
                  ${
                    prompt.status ===
                    'approved'
                      ? 'bg-green-500/10 text-green-500'
                      : ''
                  }
                  ${
                    prompt.status ===
                    'pending'
                      ? 'bg-yellow-500/10 text-yellow-500'
                      : ''
                  }
                  ${
                    prompt.status ===
                    'rejected'
                      ? 'bg-red-500/10 text-red-500'
                      : ''
                  }
                `}
              >
                {prompt.status}
              </span>
            </div>

            <h3 className="line-clamp-1 text-lg font-bold">
              {prompt.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {prompt.description}
            </p>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span>
                Copies:{' '}
                {prompt.copyCount || 0}
              </span>

              <span>
                ⭐ {prompt.rating || 0}
              </span>
            </div>

            <div className="mt-5 flex gap-2">
              <Link
                href={`/prompts/${prompt._id}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
              >
                <Eye size={16} />
                View
              </Link>

              <button
                onClick={() =>
                  handleDelete(prompt._id)
                }
                className="rounded-xl border border-red-500/20 px-3 py-2 text-red-500 hover:bg-red-500/10"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>


)
}
