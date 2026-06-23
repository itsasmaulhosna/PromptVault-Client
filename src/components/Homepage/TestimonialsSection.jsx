
'use client'

import { motion } from 'framer-motion'
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span
            className={`
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
            `}
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
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-card
                p-8
                shadow-sm
              `}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
              </div>

              <div className="relative">
                {/* Quote */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Quote
                    size={34}
                    className="mb-6 text-violet-500"
                  />
                </motion.div>

                {/* Review */}
                <p className="mb-6 min-h-[90px] text-lg leading-relaxed text-foreground">
                  "{item.review}"
                </p>

                {/* Rating */}
                <div className="mb-6 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.25,
                      }}
                    >
                      <Star
                        size={18}
                        className={
                          i < item.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }
                      />
                    </motion.div>
                  ))}

                  <span className="ml-2 text-lg text-muted-foreground">
                    {item.rating}.0
                  </span>
                </div>

                {/* Divider */}
                <div className="mb-6 h-px bg-border" />

                {/* User */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className={`
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
                    `}
                  >
                    {item.avatar}
                  </motion.div>

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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

