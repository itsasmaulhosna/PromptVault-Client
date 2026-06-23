'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Image from 'next/image'

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

export default function TopCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/api/top-creators')
      .then((res) => res.json())
      .then((data) => {
        setCreators(data.data || [])
      })
      .catch((err) => console.log(err))
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
            Top Creators
          </span>

          <h2 className="mb-5 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Meet Our
            <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Featured Creators
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400">
            Discover creators who consistently publish
            high-quality prompts used by thousands of users.
          </p>
        </motion.div>

        {/* Loading */}
        {loading ? (
          <div className="text-center text-slate-500">
            Loading creators...
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {creators.map((creator) => (
              <motion.div
                key={creator.email}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={
                      creator.image ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        creator.name
                      )}`
                    }
                    alt={creator.name}
                    width={90}
                    height={90}
                    className="mb-5 rounded-full object-cover"
                  />

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {creator.name}
                  </h3>

                  <p className="mb-6 text-sm text-slate-500">
                    {creator.email}
                  </p>

                  <div className="flex items-center gap-2 rounded-xl bg-violet-500/10 px-4 py-3 text-violet-600">
                    <FileText size={18} />

                    <span className="font-semibold">
                      {creator.totalPrompts} Prompts
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}