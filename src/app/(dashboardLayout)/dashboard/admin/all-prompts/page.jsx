'use client'
// import { useSession } from '@/lib/auth-client'
import { useEffect, useState } from 'react'
import {
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaTrash,
  FaCrown,
} from 'react-icons/fa'
import Link from 'next/link'
export default function AllPromptsPage() {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)
// const { data: session } = useSession()
//   useEffect(() => {
//   const fetchPrompts = async () => {
//     if (!session?.user?.email) return

//     try {
//       const res = await fetch(
//         'http://localhost:8080/api/prompts'
//       )

//       const data = await res.json()

//       console.log(data)

//       setPrompts(data.data || [])
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   fetchPrompts()
// }, [session])
const fetchPrompts = async () => {
  console.log('FETCH PROMPTS RUNNING')

  try {
    setLoading(true)

    const res = await fetch(
      'http://localhost:8080/api/prompts'
    )

    const data = await res.json()

    console.log('DATA', data)

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

//   const fetchPrompts = async () => {
//     try {
//       setLoading(true)

//       const res = await fetch(
//         'http://localhost:8080/api/prompts'
//       )

//       const data = await res.json()

// console.log(data)

// setPrompts(data.data || [])
      
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setLoading(false)
//     }
//   }
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
const handleAccessType = async (
  id,
  accessType
) => {
  try {
    await fetch(
      `http://localhost:8080/api/prompts/${id}/access`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessType,
        }),
      }
    )

    fetchPrompts()
  } catch (error) {
    console.error(error)
  }
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
console.log('PROMPTS =>', prompts)

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
  <div className="py-10 text-center">
    Loading prompts...
  </div>
) : (
  <>
    {/* Desktop */}
<div className="hidden overflow-x-auto rounded-xl border border-border lg:block">
  <table className="w-full min-w-[1100px]">
    <thead className="bg-muted">
      <tr>
        <th className="p-4 text-left">Title</th>
        <th className="p-4 text-left">Category</th>
        <th className="p-4 text-left">AI Tool</th>
        <th className="p-4 text-left">Visibility</th>
        <th className="p-4 text-left">Access</th>
        <th className="p-4 text-left">Status</th>
        <th className="p-4 text-left">Copies</th>
        <th className="p-4 text-left">Actions</th>
      </tr>
    </thead>

    <tbody>
      {prompts.map((prompt) => (
        <tr
          key={prompt._id}
          className="border-t border-border"
        >
          <td className="p-4 font-medium">
            {prompt.title}
          </td>

          <td className="p-4">
            {prompt.category}
          </td>

          <td className="p-4">
            {prompt.aiTool}
          </td>

          <td className="p-4">
            {prompt.visibility}
          </td>

          <td className="p-4">
            {prompt.accessType || 'free'}
          </td>

          <td className="p-4">
            {prompt.status}
          </td>

          <td className="p-4">
            {prompt.copyCount || 0}
          </td>

          <td className="p-4">
            <div className="flex items-center gap-3">

              <Link
                href={`/prompts/${prompt._id}`}
                className="text-blue-500"
              >
                <FaEye size={18} />
              </Link>

              {prompt.status !== 'approved' && (
                <button
                  onClick={() =>
                    handleApprove(prompt._id)
                  }
                  className="text-green-500"
                >
                  <FaCheckCircle size={18} />
                </button>
              )}

              {prompt.status !== 'rejected' && (
                <button
                  onClick={() =>
                    handleReject(prompt._id)
                  }
                  className="text-yellow-500"
                >
                  <FaTimesCircle size={18} />
                </button>
              )}

              <button
                onClick={() =>
                  handleAccessType(
                    prompt._id,
                    prompt.accessType ===
                      'premium'
                      ? 'free'
                      : 'premium'
                  )
                }
                className="text-yellow-500"
              >
                <FaCrown size={18} />
              </button>

              <button
                onClick={() =>
                  handleDelete(prompt._id)
                }
                className="text-red-500"
              >
                <FaTrash size={18} />
              </button>

            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    {/* Mobile */}
    <div className="space-y-4 lg:hidden">
      {prompts.map(prompt => (
        <div
          key={prompt._id}
          className="rounded-xl border border-border bg-card p-4"
        >
          <h3 className="mb-3 text-lg font-bold">
            {prompt.title}
          </h3>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Category:</strong>{' '}
              {prompt.category}
            </p>

            <p>
              <strong>AI Tool:</strong>{' '}
              {prompt.aiTool}
            </p>

            <p>
              <strong>Visibility:</strong>{' '}
              {prompt.visibility}
            </p>

            <p>
              <strong>Access:</strong>{' '}
              {prompt.accessType || 'free'}
            </p>

            <p>
              <strong>Status:</strong>{' '}
              {prompt.status}
            </p>

            <p>
              <strong>Copies:</strong>{' '}
              {prompt.copyCount || 0}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href={`/prompts/${prompt._id}`}
              className="text-blue-500"
            >
              <FaEye size={18} />
            </Link>

            {prompt.status !==
              'approved' && (
              <button
                onClick={() =>
                  handleApprove(
                    prompt._id
                  )
                }
                className="text-green-500"
              >
                <FaCheckCircle
                  size={18}
                />
              </button>
            )}

            {prompt.status !==
              'rejected' && (
              <button
                onClick={() =>
                  handleReject(
                    prompt._id
                  )
                }
                className="text-yellow-500"
              >
                <FaTimesCircle
                  size={18}
                />
              </button>
            )}

            <button
              onClick={() =>
                handleAccessType(
                  prompt._id,
                  prompt.accessType ===
                    'premium'
                    ? 'free'
                    : 'premium'
                )
              }
              className="text-yellow-500"
            >
              <FaCrown size={18} />
            </button>

            <button
              onClick={() =>
                handleDelete(
                  prompt._id
                )
              }
              className="text-red-500"
            >
              <FaTrash size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
)}
    </div>
  )
}