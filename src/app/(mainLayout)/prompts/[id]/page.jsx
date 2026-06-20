import { notFound } from 'next/navigation'
import { Copy, Star } from 'lucide-react'

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
      <div className="container mx-auto px-4">

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

          {/* Left Content */}

          <div>

            {prompt.thumbnail && (
              <img
                src={prompt.thumbnail}
                alt={prompt.title}
                className="mb-8 h-[400px] w-full rounded-3xl object-cover"
              />
            )}

            <div className="mb-6 flex flex-wrap gap-2">

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                {prompt.aiTool}
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white capitalize">
                {prompt.difficulty}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm ${
                  prompt.accessType === 'premium'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}
              >
                {prompt.accessType === 'premium'
                  ? 'Premium'
                  : 'Free'}
              </span>

            </div>

            <h1 className="mb-4 text-4xl font-bold text-white">
              {prompt.title}
            </h1>

            <p className="mb-8 text-lg text-gray-400">
              {prompt.description}
            </p>

            {/* Prompt Content */}

            <div className="rounded-3xl border border-white/10 bg-[#0B1023] p-6">

              <h2 className="mb-5 text-xl font-semibold text-white">
                Prompt Template
              </h2>

              <pre className="whitespace-pre-wrap text-gray-300">
                {prompt.content}
              </pre>

            </div>

          </div>

          {/* Sidebar */}

          <div>

            <div className="sticky top-24 rounded-3xl border border-white/10 bg-[#0B1023] p-6">

              <h3 className="mb-6 text-xl font-semibold text-white">
                Prompt Details
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="text-sm text-gray-500">
                    Category
                  </p>

                  <p className="text-white">
                    {prompt.category}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    AI Tool
                  </p>

                  <p className="text-white">
                    {prompt.aiTool}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Difficulty
                  </p>

                  <p className="capitalize text-white">
                    {prompt.difficulty}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Access Type
                  </p>

                  <p className="capitalize text-white">
                    {prompt.accessType || 'free'}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Visibility
                  </p>

                  <p className="capitalize text-white">
                    {prompt.visibility}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">

                  <div className="mb-4 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-gray-300">
                      <Copy size={18} />
                      <span>
                        {prompt.copyCount || 0}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-yellow-500">
                      <Star
                        size={18}
                        fill="currentColor"
                      />
                      <span>
                        {prompt.rating || 0}
                      </span>
                    </div>

                  </div>

                  <button
                    className="w-full rounded-xl bg-violet-600 px-4 py-3 font-medium text-white transition hover:bg-violet-700"
                  >
                    Copy Prompt
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}