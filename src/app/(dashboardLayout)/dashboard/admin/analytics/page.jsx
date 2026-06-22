'use client'

import { useEffect, useState } from 'react'
import {
  FileText,
  MessageSquare,
  Copy,
  DollarSign,
} from 'lucide-react'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

export default function AnalyticsPage() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [])

  const fetchAnalytics = async () => {
    try {
      const res = await fetch(
        'http://localhost:8080/api/admin/analytics'
      )

      const data = await res.json()

      setStats(data.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        Loading analytics...
      </div>
    )
  }

  const barData = [
    {
      name: 'Prompts',
      value: stats.totalPrompts,
    },
    {
      name: 'Reviews',
      value: stats.totalReviews,
    },
    {
      name: 'Copies',
      value: stats.totalCopies,
    },
    {
      name: 'Revenue',
      value: stats.totalRevenue,
    },
  ]

  const pieData = [
    {
      name: 'Prompts',
      value: stats.totalPrompts,
    },
    {
      name: 'Reviews',
      value: stats.totalReviews,
    },
    {
      name: 'Copies',
      value: stats.totalCopies,
    },
  ]

  const COLORS = [
    '#06B6D4',
    '#8B5CF6',
    '#10B981',
  ]

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Administrative System Analytics
        </h1>

        <p className="mt-2 text-muted-foreground">
          Aggregate metrics and platform insights.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-white/10 bg-[#0B1023] p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
            <FileText className="text-cyan-400" />
          </div>

          <p className="text-sm text-gray-400">
            TOTAL PROMPTS
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {stats.totalPrompts}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0B1023] p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
            <MessageSquare className="text-green-400" />
          </div>

          <p className="text-sm text-gray-400">
            TOTAL REVIEWS
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {stats.totalReviews}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0B1023] p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
            <Copy className="text-yellow-400" />
          </div>

          <p className="text-sm text-gray-400">
            TOTAL COPIES
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {stats.totalCopies}
          </h3>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0B1023] p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
            <DollarSign className="text-red-400" />
          </div>

          <p className="text-sm text-gray-400">
            TOTAL REVENUE
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            ${stats.totalRevenue}
          </h3>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-2">

        {/* Bar Chart */}
        <div className="rounded-2xl border border-white/10 bg-[#0B1023] p-6">
          <h3 className="mb-6 text-xl font-semibold">
            Platform Metrics
          </h3>

          <ResponsiveContainer
            width="100%"
            height={320}
          >
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="rounded-2xl border border-white/10 bg-[#0B1023] p-6">
          <h3 className="mb-6 text-xl font-semibold">
            Distribution Share
          </h3>

          <ResponsiveContainer
            width="100%"
            height={320}
          >
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
                label
              >
                {pieData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}