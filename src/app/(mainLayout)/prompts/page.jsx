'use client'

import { useEffect, useMemo, useState } from 'react'
import PromptCard from '@/components/Prompts/PromptCard'
import PromptFilters from '@/components/Prompts/PromptFilters'
import { useSearchParams } from 'next/navigation'
export default function PromptsPage() {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)

  const [filters, setFilters] = useState({
    aiTool: 'All',
    category: 'All',
  })

  const [sortBy, setSortBy] = useState('latest')

  const searchParams = useSearchParams()

const search =
  searchParams.get('q')?.toLowerCase() || ''

  useEffect(() => {
    fetchPrompts()
  }, [filters])

  const fetchPrompts = async () => {
    try {
      setLoading(true)

      const query = new URLSearchParams()

      if (filters.aiTool !== 'All') {
        query.append('aiTool', filters.aiTool)
      }

      if (filters.category !== 'All') {
        query.append('category', filters.category)
      }

      const res = await fetch(
        `http://localhost:8080/api/prompts?${query}`
      )

      const data = await res.json()

      setPrompts(data.data || data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const sortedPrompts = useMemo(() => {
    const sorted = [...prompts]

    if (sortBy === 'popular') {
      return sorted.sort(
        (a, b) => (b.rating || 0) - (a.rating || 0)
      )
    }

    if (sortBy === 'copied') {
      return sorted.sort(
        (a, b) =>
          (b.copiedCount || 0) -
          (a.copiedCount || 0)
      )
    }

    return sorted.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    )
  }, [prompts, sortBy])

  const filteredPrompts = useMemo(() => {
  if (!search) return sortedPrompts

  return sortedPrompts.filter(prompt => {
    return (
      prompt.title?.toLowerCase().includes(search) ||
      prompt.description?.toLowerCase().includes(search) ||
      prompt.aiTool?.toLowerCase().includes(search) ||
      prompt.tags?.some(tag =>
        tag.toLowerCase().includes(search)
      )
    )
  })
}, [sortedPrompts, search])

  return (
    <section className="bg-[#050816] min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          <PromptFilters
            filters={filters}
            setFilters={setFilters}
          />

          <div>

            {/* Sort */}
            <div className="mb-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1023] p-4">

              <span className="text-white">
                Sort By:
              </span>

              <button
                onClick={() => setSortBy('latest')}
                className={`rounded-lg px-4 py-2 ${
                  sortBy === 'latest'
                    ? 'bg-violet-600 text-white'
                    : 'bg-white/5 text-gray-300'
                }`}
              >
                Latest
              </button>

              <button
                onClick={() => setSortBy('popular')}
                className={`rounded-lg px-4 py-2 ${
                  sortBy === 'popular'
                    ? 'bg-violet-600 text-white'
                    : 'bg-white/5 text-gray-300'
                }`}
              >
                Most Popular
              </button>

              <button
                onClick={() => setSortBy('copied')}
                className={`rounded-lg px-4 py-2 ${
                  sortBy === 'copied'
                    ? 'bg-violet-600 text-white'
                    : 'bg-white/5 text-gray-300'
                }`}
              >
                Most Copied
              </button>

            </div>

            {/* Cards */}
            {loading ? (
              <p className="text-white">
                Loading...
              </p>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPrompts.map((prompt) => (
                  <PromptCard
                    key={prompt._id}
                    prompt={prompt}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}