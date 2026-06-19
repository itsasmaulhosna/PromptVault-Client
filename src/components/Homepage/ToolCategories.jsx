'use client'

import Link from 'next/link'

const tools = [
  {
    name: 'ChatGPT',
    icon: 'C',
    description: 'Conversational & writing',
    slug: 'chatgpt',
  },
  {
    name: 'Claude',
    icon: 'C',
    description: 'Reasoning & long context',
    slug: 'claude',
  },
  {
    name: 'Gemini',
    icon: 'G',
    description: 'Multimodal & research',
    slug: 'gemini',
  },
  {
    name: 'Midjourney',
    icon: 'M',
    description: 'Image generation',
    slug: 'midjourney',
  },
  {
    name: 'DALL·E',
    icon: 'D',
    description: 'Creative imagery',
    slug: 'dalle',
  },
  {
    name: 'Stable Diffusion',
    icon: 'S',
    description: 'Open image models',
    slug: 'stable-diffusion',
  },
  {
    name: 'Perplexity',
    icon: 'P',
    description: 'Answer engine',
    slug: 'perplexity',
  },
  {
    name: 'GitHub Copilot',
    icon: 'G',
    description: 'Code completion',
    slug: 'github-copilot',
  },
]

export default function ToolCategories() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span
            className="
              mb-5
              inline-flex
              rounded-full
              border
              border-violet-500/20
              bg-gradient-to-r
              from-violet-500/10
              to-blue-500/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-violet-500
            "
          >
            Find Your Fit
          </span>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Browse by{' '}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              AI Tool
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Jump straight to prompts crafted for the tools you
            already use.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {tools.map(tool => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-card
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/30
                hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
              </div>

              <div className="relative">
                {/* Icon */}
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-violet-500/20
                    bg-gradient-to-br
                    from-violet-500/20
                    via-purple-500/10
                    to-orange-400/20
                    text-lg
                    font-bold
                    text-violet-500
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {tool.icon}
                </div>

                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {tool.name}
                </h3>

                <p className="text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}