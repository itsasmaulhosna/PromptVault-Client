'use client'

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

const copiesData = [
  { month: 'Jan', copies: 120 },
  { month: 'Feb', copies: 210 },
  { month: 'Mar', copies: 320 },
  { month: 'Apr', copies: 280 },
  { month: 'May', copies: 450 },
  { month: 'Jun', copies: 520 },
]

const growthData = [
  { month: 'Jan', prompts: 2 },
  { month: 'Feb', prompts: 5 },
  { month: 'Mar', prompts: 8 },
  { month: 'Apr', prompts: 12 },
  { month: 'May', prompts: 18 },
  { month: 'Jun', prompts: 24 },
]

export default function CreatorDashboardPage() {
  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Creator Dashboard
        </h1>

        <p className="text-muted-foreground mt-2">
          Monitor your prompt performance and growth.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border p-6">
          <h3 className="text-muted-foreground text-sm">
            Total Prompts
          </h3>

          <p className="mt-2 text-4xl font-bold">
            24
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-muted-foreground text-sm">
            Total Copies
          </h3>

          <p className="mt-2 text-4xl font-bold">
            4,820
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-muted-foreground text-sm">
            Total Bookmarks
          </h3>

          <p className="mt-2 text-4xl font-bold">
            1,285
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-muted-foreground text-sm">
            Total Views
          </h3>

          <p className="mt-2 text-4xl font-bold">
            12.4K
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Total Copies
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={copiesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="copies"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Prompt Growth
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
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

        <div className="space-y-3">
          <div className="rounded-xl border p-4">
            AI Blog Writer Prompt
          </div>

          <div className="rounded-xl border p-4">
            SEO Content Generator
          </div>

          <div className="rounded-xl border p-4">
            YouTube Script Creator
          </div>
        </div>
      </div>
    </div>
  )
}