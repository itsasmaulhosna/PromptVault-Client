'use client'

import { useEffect, useState } from 'react'
import PromptCard from '@/components/Prompts/PromptCard'

export default function FeaturedPrompts() {
  const [prompts, setPrompts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedPrompts = async () => {
      try {
        const res = await fetch(
          'http://localhost:8080/api/prompts/featured'
        )

        const data = await res.json()

        console.log('API Response:', data)

        // যদি API { success, data } return করে
        setPrompts(data.data || [])

        // যদি API সরাসরি array return করে তাহলে এটা use করো
        // setPrompts(data)
      } catch (error) {
        console.error(
          'Featured Prompt Error:',
          error
        )
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedPrompts()
  }, [])

  useEffect(() => {
    console.log(
      'Prompts State:',
      prompts
    )
  }, [prompts])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">

        <div className="mb-12 text-center">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            Featured Collection
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Featured Prompts
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Discover hand-picked AI prompts
            loved by creators, marketers,
            developers, and productivity
            enthusiasts.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-gray-400">
            Loading featured prompts...
          </div>
        ) : prompts.length === 0 ? (
          <div className="text-center text-red-400">
            No featured prompts found.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {prompts.map(prompt => (
              <PromptCard
                key={prompt._id}
                prompt={prompt}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}