

import { notFound } from 'next/navigation'
import {
  Copy,
  Star,
  Bookmark,
  Flag,
  User,
  ArrowLeft,
} from 'lucide-react'
import Link from 'next/link'
import PromptRating from '@/components/Prompts/PromptRating'
import CreatorInfo from '@/components/CreatorInfo'

import ReportPromptModal from '@/components/Prompts/ReportPromptModal'
import PromptActions from '@/components/Prompts/PromptActions'

export default async function PromptDetailsPage({
  params,
}) {
  const { id } = await params

  const res = await fetch(
    `http://localhost:8080/api/prompts/${id}`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    notFound()
  }

  const data = await res.json()
  const prompt = data.data

  return (
    <section className="min-h-screen bg-[#050816] py-10">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Back Button */}

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-gray-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to previous page
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

          {/* Main Content */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-[#0B1023] p-8 shadow-xl">

              <div className="mb-6 flex items-start justify-between">

                <div>

                  <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                    {prompt.title}
                  </h1>

                  <p className="max-w-3xl text-lg text-gray-400">
                    {prompt.description}
                  </p>

                </div>

                <div className="flex gap-3">
  <PromptActions />
</div>

              </div>

              {/* Tags */}

              <div className="mb-8 flex flex-wrap gap-3">

                <span className="rounded-full bg-violet-500/20 px-4 py-1 text-sm text-violet-300">
                  {prompt.aiTool}
                </span>

                <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-sm capitalize text-cyan-300">
                  {prompt.category}
                </span>

                <span className="rounded-full bg-white/10 px-4 py-1 text-sm capitalize text-white">
                  {prompt.difficulty}
                </span>

              </div>

              {/* Prompt Template */}

              <div className="rounded-2xl border border-white/10 bg-[#060B1A] p-6">

                <div className="mb-5 flex items-center justify-between">

                  <h2 className="text-xl font-semibold text-white">
                    Prompt Template
                  </h2>

                  <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10">
                    <Copy size={16} />
                    Copy
                  </button>

                </div>

                <pre className="overflow-auto whitespace-pre-wrap rounded-xl border border-white/5 bg-black/20 p-5 text-sm leading-7 text-purple-300">
                  {prompt.content}
                </pre>

              </div>

              {/* Usage Instructions */}

              <div className="mt-8 rounded-2xl border border-white/10 bg-[#060B1A] p-6">

                <h2 className="mb-4 text-xl font-semibold text-white">
                  Usage Instructions
                </h2>

                <p className="leading-8 text-gray-400">
                  {prompt.instructions ||
                    'For best results, replace placeholders with your own values before using the prompt. Adjust context, tone, and output format according to your specific requirements.'}
                </p>

              </div>

            </div>

          </div>

          {/* Sidebar */}

           <aside>

            <div className="sticky top-24 rounded-3xl border border-white/10 bg-[#0B1023] p-6 shadow-xl">

              <h3 className="mb-6 text-2xl font-semibold text-white">
                Prompt Details
              </h3>

              <div className="space-y-5">

                <DetailItem
                  label="AI Engine"
                  value={prompt.aiTool}
                />

                <DetailItem
                  label="Category"
                  value={prompt.category}
                />

                <DetailItem
                  label="Difficulty"
                  value={prompt.difficulty}
                />

                <DetailItem
                  label="Visibility"
                  value={prompt.visibility}
                />

              </div>

              <div className="my-6 border-t border-white/10" />

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Copies Made
                  </span>

                  <span className="font-semibold text-white">
                    {prompt.copyCount || 0}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">
                    Bookmarks
                  </span>

                  <span className="font-semibold text-white">
                    {prompt.bookmarks || 0}
                  </span>
                </div>

                
<div className="flex items-center justify-between">
  <span className="text-gray-400">
    Community Rating
  </span>

  <PromptRating
    initialRating={4}
  />
</div>
              </div>

              <div className="my-6 border-t border-white/10" />

              {/* Creator */}

 <div>
  <h4 className="mb-4 text-lg font-semibold text-white">
    Creator Information
  </h4>

  <CreatorInfo />
</div>

              

            </div>

          </aside> 
          

<div className="my-6 border-t border-white/10" />



        </div> 

        {/* Reviews Section */}

        <div className="mt-16">

          <h2 className="mb-8 text-4xl font-bold text-white">
            Community Reviews
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Review Form */}

            <div className="rounded-3xl border border-white/10 bg-[#0B1023] p-6">

              <h3 className="mb-6 text-2xl font-semibold text-white">
                Submit a Review
              </h3>

              <div className="mb-4 flex gap-2">

                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={24}
                    fill="currentColor"
                    className="cursor-pointer text-yellow-400"
                  />
                ))}

              </div>

              <textarea
                rows={5}
                placeholder="Write your feedback..."
                className="mb-4 w-full rounded-xl border border-white/10 bg-[#060B1A] p-4 text-white outline-none"
              />

              <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 py-3 font-semibold text-white">
                Submit Review
              </button>

            </div>

            {/* Reviews List */}

            <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-white/10 bg-[#0B1023]">

              <div className="text-center">

                <Star
                  size={40}
                  className="mx-auto mb-4 text-gray-500"
                />

                <p className="text-gray-400">
                  No reviews submitted yet.
                  <br />
                  Be the first to share your thoughts!
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function DetailItem({
  label,
  value,
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-gray-400">
        {label}
      </span>

      <span className="font-medium capitalize text-white">
        {value}
      </span>

    </div>
  )
}