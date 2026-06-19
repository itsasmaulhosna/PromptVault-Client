'use client'

import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Avery Stone',
    email: 'admin@promptvault.dev',
    review:
      'Saved me hours — the output was exactly what I needed.',
    rating: 4,
    avatar: 'A',
  },
  {
    name: 'Maya Lin',
    email: 'creator@promptvault.dev',
    review:
      'Great structure. Tweaked one line and it was perfect.',
    rating: 5,
    avatar: 'M',
  },
  {
    name: 'Sam Rivera',
    email: 'user@promptvault.dev',
    review:
      'Reliable results across different tools. Highly recommend.',
    rating: 4,
    avatar: 'S',
  },
  {
    name: 'Chris Walker',
    email: 'designer@promptvault.dev',
    review:
      'The prompt quality is outstanding and saves significant time.',
    rating: 5,
    avatar: 'C',
  },
  {
    name: 'Jade Okafor',
    email: 'jade@promptvault.dev',
    review:
      'Clear instructions and the example helped a lot.',
    rating: 5,
    avatar: 'J',
  },
  {
    name: 'Leo Park',
    email: 'leo@promptvault.dev',
    review:
      'Solid prompt, would love a few more variations.',
    rating: 4,
    avatar: 'L',
  },
]

export default function TestimonialsSection() {
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
            Loved By The Community
          </span>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            What our users{' '}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              say
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Thousands of creators and teams rely on PromptVault
            every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
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
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
              </div>

              <div className="relative">
                {/* Quote Icon */}
                <Quote
                  size={34}
                  className="mb-6 text-violet-500"
                />

                {/* Review */}
                <p className="mb-6 min-h-[90px] text-lg leading-relaxed text-foreground">
                  "{item.review}"
                </p>

                {/* Rating */}
                <div className="mb-6 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < item.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }
                    />
                  ))}

                  <span className="ml-2 text-lg text-muted-foreground">
                    {item.rating}.0
                  </span>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px bg-border" />

                {/* User */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-violet-500/20
                      bg-gradient-to-br
                      from-violet-500/20
                      to-blue-500/20
                      font-bold
                      text-violet-500
                    "
                  >
                    {item.avatar}
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.name}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {item.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}