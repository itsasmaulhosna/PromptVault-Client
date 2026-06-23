
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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

        console.log('Featured API:', data)

        if (data.success) {
          setPrompts(data.data)
        }
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

  return (
    <section className="py-20">
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
            duration: 0.6,
          }}
          className="mb-12 text-center"
        >
          <motion.span
            whileHover={{
              scale: 1.05,
            }}
            className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400"
          >
            Featured Collection
          </motion.span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Featured Prompts
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Discover hand-picked AI prompts loved by
            creators, marketers, developers, and
            productivity enthusiasts.
          </p>
        </motion.div>

        {/* Loading */}
        {loading ? (
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-center text-gray-400"
          >
            Loading featured prompts...
          </motion.div>
        ) : prompts.length === 0 ? (
          <div className="text-center text-red-400">
            No featured prompts found.
          </div>
        ) : (
          <>
            
            

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {prompts.map(prompt => (
                <motion.div
                  key={prompt._id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  whileHover={{
                    y: -6,
                  }}
                >
                  <PromptCard
                    prompt={prompt}
                  />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
