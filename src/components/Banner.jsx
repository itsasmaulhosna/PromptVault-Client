'use client'

import { Search, Sparkles, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Banner() {
  const tags = [
    'Claude',
    'Design',
    'Coding',
    'ChatGPT',
    'Perplexity',
    'Image Generation',
  ]

  const router = useRouter()

  const [search, setSearch] = useState('')

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 transition-colors duration-300 dark:bg-[#020817] md:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_top,#312e81_0%,transparent_45%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-7xl px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-slate-100 px-4 py-2 text-sm text-slate-600 backdrop-blur dark:bg-slate-900/70 dark:text-slate-300"
        >
          <Sparkles className="h-4 w-4 text-amber-400" />
          The marketplace for high-quality AI prompts
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl"
        >
          Discover prompts that make

          <span className="mt-3 block bg-gradient-to-r from-indigo-500 via-violet-400 to-orange-300 bg-clip-text text-transparent">
            AI work for you
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-xl"
        >
          Browse, bookmark and sell battle-tested prompts
          for ChatGPT, Claude, Gemini, Midjourney and more
          — built by a community of creators.
        </motion.p>

        {/* Search */}
        <motion.div
          variants={item}
          className="mx-auto mt-10 flex max-w-4xl items-center rounded-2xl border border-slate-300 bg-white p-2 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"
        >
          <Search className="ml-4 h-5 w-5 text-slate-500" />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                router.push(
                  `/prompts?q=${encodeURIComponent(
                    search
                  )}`
                )
              }
            }}
            placeholder="Search prompts, tags or AI tools..."
            className="flex-1 bg-transparent px-4 py-3 text-base text-slate-900 outline-none placeholder:text-slate-500 dark:text-white"
          />

          <button
            onClick={() =>
              router.push(
                `/prompts?q=${encodeURIComponent(
                  search
                )}`
              )
            }
            className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-medium text-white transition hover:bg-indigo-700"
          >
            Search
          </button>
        </motion.div>

        {/* Tags */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-slate-500">
            Trending:
          </span>

          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                router.push(
                  `/prompts?q=${encodeURIComponent(
                    tag
                  )}`
                )
              }
              className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300"
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() =>
              router.push('/prompts')
            }
            className="group flex items-center gap-3 rounded-xl bg-indigo-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700"
          >
            Call-to-Action

            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}