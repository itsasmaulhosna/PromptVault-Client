'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data || [])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-500">
            Customer Reviews
          </span>

          <h2 className="mb-5 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            What Our Users
            <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400">
            Thousands of creators and professionals use PromptVault
            to get better AI results every day.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-slate-500">
            Loading reviews...
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {reviews.map((review) => (
              <motion.div
                key={review._id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                  "{review.text}"
                </p>

                {/* User */}
                <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {review.userName}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {review.userEmail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}