'use client'

import Link from 'next/link'
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaChartBar,
  FaPlus,
  FaStar,
} from 'react-icons/fa'

export default function MyPromptsPage() {
  const prompts = [
    {
      id: 1,
      title: 'SEO Blog Writer',
      category: 'Marketing',
      aiTool: 'ChatGPT',
      visibility: 'Public',
      status: 'pending',
      copies: 0,
      rating: 0,
    },
    {
      id: 2,
      title: 'YouTube Script Creator',
      category: 'Content Writing',
      aiTool: 'Claude',
      visibility: 'Public',
      status: 'approved',
      copies: 124,
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Facebook Ad Generator',
      category: 'Marketing',
      aiTool: 'Gemini',
      visibility: 'Private',
      status: 'rejected',
      copies: 0,
      rating: 0,
    },
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-emerald-500/10 text-emerald-500'
      case 'rejected':
        return 'bg-red-500/10 text-red-500'
      default:
        return 'bg-yellow-500/10 text-yellow-500'
    }
  }

  return (
    <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            My Prompts
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage your published and pending prompts.
          </p>
        </div>

        <Link
          href="/dashboard/creator/add-prompt"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-violet-600
            px-5
            py-3
            font-medium
            text-white
            hover:bg-violet-700
          "
        >
          <FaPlus />
          Create New Prompt
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card lg:block">
        <table className="w-full">
          <thead className="border-b border-border">
            <tr className="text-left">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">AI Tool</th>
              <th className="px-6 py-4">Visibility</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Copies</th>
              <th className="px-6 py-4">Rating</th>
              <th className="px-6 py-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {prompts.map((prompt) => (
              <tr
                key={prompt.id}
                className="border-b border-border"
              >
                <td className="px-6 py-5">
                  <h3 className="font-semibold">
                    {prompt.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Category: {prompt.category}
                  </p>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500">
                    {prompt.aiTool}
                  </span>
                </td>

                <td className="px-6 py-5">
                  {prompt.visibility}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClass(
                      prompt.status
                    )}`}
                  >
                    {prompt.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  {prompt.copies}
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    {prompt.rating}
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
                    <button className="rounded-lg border p-2 hover:bg-accent">
                      <FaEye />
                    </button>

                    <button className="rounded-lg border p-2 hover:bg-accent">
                      <FaEdit />
                    </button>

                    <button className="rounded-lg border p-2 hover:bg-accent">
                      <FaChartBar />
                    </button>

                    <button className="rounded-lg border border-red-500/20 p-2 text-red-500 hover:bg-red-500/10">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 lg:hidden">
        {prompts.map((prompt) => (
          <div
            key={prompt.id}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">
                  {prompt.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {prompt.category}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClass(
                  prompt.status
                )}`}
              >
                {prompt.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">
                  Tool:
                </span>{' '}
                {prompt.aiTool}
              </div>

              <div>
                <span className="text-muted-foreground">
                  Visibility:
                </span>{' '}
                {prompt.visibility}
              </div>

              <div>
                <span className="text-muted-foreground">
                  Copies:
                </span>{' '}
                {prompt.copies}
              </div>

              <div>
                <span className="text-muted-foreground">
                  Rating:
                </span>{' '}
                ⭐ {prompt.rating}
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <button className="flex-1 rounded-lg border p-3">
                <FaEye className="mx-auto" />
              </button>

              <button className="flex-1 rounded-lg border p-3">
                <FaEdit className="mx-auto" />
              </button>

              <button className="flex-1 rounded-lg border p-3">
                <FaChartBar className="mx-auto" />
              </button>

              <button className="flex-1 rounded-lg border border-red-500/20 p-3 text-red-500">
                <FaTrash className="mx-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}