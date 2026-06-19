'use client'

import {
  ShieldCheck,
  Sparkles,
  Star,
  Bookmark,
  Lock,
  Rocket,
} from 'lucide-react'

const features = [
  {
    title: 'Curated & Moderated',
    description:
      'Every prompt is reviewed before publication, ensuring quality and reliability.',
    icon: ShieldCheck,
  },
  {
    title: 'Works Across AI Tools',
    description:
      'Compatible with ChatGPT, Claude, Gemini, Midjourney, Grok and more.',
    icon: Sparkles,
  },
  {
    title: 'Community Ratings',
    description:
      'Discover top-performing prompts through authentic user ratings and reviews.',
    icon: Star,
  },
  {
    title: 'Save Your Favorites',
    description:
      'Bookmark prompts and create your personal AI prompt collection.',
    icon: Bookmark,
  },
  {
    title: 'Premium Prompt Library',
    description:
      'Unlock premium prompts and exclusive creator collections.',
    icon: Lock,
  },
  {
    title: 'Built for Creators',
    description:
      'Publish prompts, build an audience and monetize your expertise.',
    icon: Rocket,
  },
]

const stats = [
  {
    number: '10K+',
    label: 'Prompts',
  },
  {
    number: '5K+',
    label: 'Users',
  },
  {
    number: '100+',
    label: 'Categories',
  },
  {
    number: '4.9★',
    label: 'Average Rating',
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span
            className="
              mb-6
              inline-flex
              items-center
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
            Why PromptVault
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Everything you need to
            <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              master AI prompts
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover, create, save and share high-quality AI prompts
            that help you achieve better results faster.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-violet-500/30
                  hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  {/* Icon Box */}
                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-violet-500/20
                      bg-gradient-to-br
                      from-violet-500/10
                      to-blue-500/10
                      text-violet-500
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                border-border
                bg-card/50
                p-8
                text-center
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/30
                hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]
              "
            >
              <h3 className="mb-2 text-4xl font-bold">
                <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {item.number}
                </span>
              </h3>

              <p className="text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}