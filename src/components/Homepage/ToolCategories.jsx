
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function ToolCategories() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            whileHover={{
              scale: 1.05,
            }}
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
            Find Your Fit
          </motion.span>

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
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {tools.map(tool => (
            <motion.div
              key={tool.slug}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <Link
                href={`/tools/${tool.slug}`}
                className={`
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-3xl
                  border
                  border-border
                  bg-card
                  p-7
                  transition-all
                  duration-300
                  hover:border-violet-500/30
                  hover:shadow-[0_20px_50px_rgba(139,92,246,0.15)]
                `}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`
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
                    `}
                  >
                    {tool.icon}
                  </motion.div>

                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    {tool.name}
                  </h3>

                  <p className="text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

