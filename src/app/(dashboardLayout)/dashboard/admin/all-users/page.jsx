'use client'

import { useEffect, useState } from 'react'
import {
  Trash2,
  Search,
} from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function AdminUsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] =
    useState(true)
  const [search, setSearch] =
    useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`
      )

      const data = await res.json()

console.log(data)

setUsers(data)
      
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleRoleChange = async (
    id,
    role
  ) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${id}/role`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            role,
          }),
        }
      )

      if (res.ok) {
        setUsers((prev) =>
          prev.map((user) =>
            user._id === id
              ? { ...user, role }
              : user
          )
        )

        toast.success(
          'Role updated successfully'
        )
      }
    } catch (error) {
      toast.error(
        'Failed to update role'
      )
    }
  }

  const handleDelete = async (
    id
  ) => {
    const confirmDelete =
      window.confirm(
        'Are you sure you want to delete this user?'
      )

    if (!confirmDelete) return

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${id}`,
        {
          method: 'DELETE',
        }
      )

      if (res.ok) {
        setUsers((prev) =>
          prev.filter(
            (user) =>
              user._id !== id
          )
        )

        toast.success(
          'User deleted successfully'
        )
      }
    } catch (error) {
      toast.error(
        'Failed to delete user'
      )
    }
  }

  const filteredUsers = Array.isArray(users)
  ? users.filter((user) =>
      `${user.name || ''} ${user.email || ''}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  : []
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">
          All Users
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage all registered users
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="w-full rounded-lg border bg-background pl-10 pr-4 py-2 outline-none"
        />
      </div>

      {/* Table */}
      <>
  {/* Desktop */}
  <div className="hidden overflow-hidden rounded-xl border lg:block">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1000px]">
        <thead className="bg-muted/50">
          <tr>
            <th className="px-5 py-4 text-left">
              Profile Details
            </th>

            <th className="px-5 py-4 text-left">
              Email Address
            </th>

            <th className="px-5 py-4 text-left">
              Subscription
            </th>

            <th className="px-5 py-4 text-left">
              Role Level
            </th>

            <th className="px-5 py-4 text-left">
              Registered Date
            </th>

            <th className="px-5 py-4 text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan="6"
                className="py-10 text-center"
              >
                Loading...
              </td>
            </tr>
          ) : filteredUsers.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="py-10 text-center"
              >
                No users found
              </td>
            </tr>
          ) : (
            filteredUsers.map(user => (
              <tr
                key={user._id}
                className="border-t"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <h4 className="font-medium">
                      {user.name}
                    </h4>
                  </div>
                </td>

                <td className="px-5 py-4">
                  {user.email}
                </td>

                <td className="px-5 py-4">
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    FREE
                  </span>
                </td>

                <td className="px-5 py-4">
                  <select
                    value={
                      user.role || 'user'
                    }
                    onChange={e =>
                      handleRoleChange(
                        user._id,
                        e.target.value
                      )
                    }
                    className="rounded-lg border bg-background px-3 py-2"
                  >
                    <option value="user">
                      User
                    </option>

                    <option value="creator">
                      Creator
                    </option>

                    <option value="admin">
                      Admin
                    </option>
                  </select>
                </td>

                <td className="px-5 py-4">
                  {new Date(
                    user.createdAt
                  ).toLocaleDateString()}
                </td>

                <td className="px-5 py-4">
                  <div className="flex justify-center">
                    <button
                      onClick={() =>
                        handleDelete(
                          user._id
                        )
                      }
                      className="rounded-lg p-2 text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>

  {/* Mobile */}
  <div className="space-y-4 lg:hidden">
    {loading ? (
      <div className="rounded-xl border p-6 text-center">
        Loading...
      </div>
    ) : filteredUsers.length === 0 ? (
      <div className="rounded-xl border p-6 text-center">
        No users found
      </div>
    ) : (
      filteredUsers.map(user => (
        <div
          key={user._id}
          className="rounded-xl border bg-card p-4"
        >
          <div className="mb-4 flex items-center gap-3">
            <img
              src={user.image}
              alt={user.name}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold">
                {user.name}
              </h3>

              <p className="text-xs text-muted-foreground break-all">
                {user.email}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Plan:</strong> FREE
            </p>

            <p>
              <strong>Joined:</strong>{' '}
              {new Date(
                user.createdAt
              ).toLocaleDateString()}
            </p>
          </div>

          <div className="mt-4">
            <select
              value={
                user.role || 'user'
              }
              onChange={e =>
                handleRoleChange(
                  user._id,
                  e.target.value
                )
              }
              className="w-full rounded-lg border bg-background px-3 py-2"
            >
              <option value="user">
                User
              </option>

              <option value="creator">
                Creator
              </option>

              <option value="admin">
                Admin
              </option>
            </select>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() =>
                handleDelete(
                  user._id
                )
              }
              className="rounded-lg p-2 text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))
    )}
  </div>
</>
    </div>
  )
}