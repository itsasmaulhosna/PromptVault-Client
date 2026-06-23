'use client'

import { useEffect, useState } from 'react'
import { useSession } from '@/lib/auth-client'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts'

export default function CreatorDashboardPage() {
  const { data: session } = useSession()

  const [analytics, setAnalytics] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
  fetch(
    'http://localhost:8080/api/creator/analytics'
  )
    .then(res => res.json())
    .then(data => {
      setAnalytics(data)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
      setLoading(false)
    })
}, [])
  if (loading) {
    return (
      <div className="p-6">
        Loading...
      </div>
    )
  }

  return (
    <div className="space-y-8 p-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Creator Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Monitor your prompt
          performance and growth.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h3 className="text-sm text-muted-foreground">
            Total Prompts
          </h3>

          <p className="mt-2 text-4xl font-bold">
            {
              analytics?.totalPrompts
            }
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-sm text-muted-foreground">
            Total Copies
          </h3>

          <p className="mt-2 text-4xl font-bold">
            {
              analytics?.totalCopies
            }
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-sm text-muted-foreground">
            Total Bookmarks
          </h3>

          <p className="mt-2 text-4xl font-bold">
            {
              analytics?.totalBookmarks
            }
          </p>
        </div>
      </div>

      {/* Charts */}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Copies Chart */}

        <div className="rounded-2xl border p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Total Copies
          </h2>

          <div className="h-80">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={
                  analytics?.copiesData ||
                  []
                }
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="copies"
                  radius={[
                    8, 8, 0, 0,
                  ]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Growth Chart */}

        <div className="rounded-2xl border p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Prompt Growth
          </h2>

          <div className="h-80">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart
                data={
                  analytics?.growthData ||
                  []
                }
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="prompts"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Prompts */}

      <div className="rounded-2xl border p-6">
        <h2 className="mb-5 text-xl font-semibold">
          Recent Prompts
        </h2>

        {analytics
          ?.recentPrompts
          ?.length === 0 ? (
          <div className="text-muted-foreground">
            No prompts found.
          </div>
        ) : (
          <div className="space-y-3">
            {analytics?.recentPrompts?.map(
              prompt => (
                <div
                  key={
                    prompt._id
                  }
                  className="rounded-xl border p-4"
                >
                  <div className="font-medium">
                    {
                      prompt.title
                    }
                  </div>

                  <div className="mt-1 text-sm text-muted-foreground">
                    Copies:{' '}
                    {prompt.copyCount ||
                      0}
                    {' • '}
                    Status:{' '}
                    {
                      prompt.status
                    }
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  )
}