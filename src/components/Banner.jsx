'use client'

import { Search, Sparkles, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


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

return ( <section className="relative overflow-hidden bg-white dark:bg-[#020817] py-20 md:py-28 transition-colors duration-300">
{/* Background Glow */} <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_top,#312e81_0%,transparent_45%)]" />


  <div className="relative mx-auto max-w-7xl px-6 text-center">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-slate-100 dark:bg-slate-900/70 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 backdrop-blur">
      <Sparkles className="h-4 w-4 text-amber-400" />
      The marketplace for high-quality AI prompts
    </div>

    {/* Heading */}
    <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
      Discover prompts that make

      <span className="mt-3 block bg-gradient-to-r from-indigo-500 via-violet-400 to-orange-300 bg-clip-text text-transparent">
        AI work for you
      </span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-xl">
      Browse, bookmark and sell battle-tested prompts for ChatGPT,
      Claude, Gemini, Midjourney and more — built by a community of
      creators.
    </p>

    {/* Search */}
    <div className="mx-auto mt-10 flex max-w-4xl items-center rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950/80 p-2 backdrop-blur shadow-lg">
      <Search className="ml-4 h-5 w-5 text-slate-500" />

      <input
  type="text"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      router.push(`/prompts?q=${encodeURIComponent(search)}`)
    }
  }}
  placeholder="Search prompts, tags or AI tools..."
  className="flex-1 bg-transparent px-4 py-3 text-base text-slate-900 dark:text-white outline-none placeholder:text-slate-500"
/>

      <button onClick={() =>
  router.push(`/prompts?q=${encodeURIComponent(search)}`)
} className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-medium text-white transition hover:bg-indigo-700">
        Search
      </button>
    </div>

    {/* Tags */}
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
  <span className="text-slate-500">
    Trending:
  </span>

  {tags.map(tag => (
    <button
      key={tag}
      onClick={() =>
        router.push(`/prompts?q=${encodeURIComponent(tag)}`)
      }
      className="rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/50 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 transition hover:border-indigo-500 hover:text-indigo-500"
    >
      {tag}
    </button>
  ))}
</div>

    {/* CTA Buttons */}
    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button className="group flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-indigo-700">
        Explore Prompts

        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
      </button>

      <button className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950/40 px-8 py-4 text-lg font-medium text-slate-900 dark:text-white transition hover:border-slate-500">
        Become a Creator
      </button>
    </div>
  </div>
</section>


)
}