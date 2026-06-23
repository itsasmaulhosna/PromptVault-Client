'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
} from 'lucide-react'

const benefits = [
  {
    title: 'Quality First',
    description:
      'Every prompt is carefully reviewed before publication to ensure high quality and practical value.',
    icon: ShieldCheck,
  },
  {
    title: 'Save Time',
    description:
      'Skip trial and error. Use proven prompts that help you get better AI results instantly.',
    icon: Zap,
  },
  {
    title: 'Creator Community',
    description:
      'Connect with talented prompt creators and discover prompts trusted by thousands of users.',
    icon: Users,
  },
  {
    title: 'Boost Productivity',
    description:
      'Increase efficiency with AI workflows designed for marketing, coding, business, education and more.',
    icon: TrendingUp,
  },
]

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

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

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
            Why Choose Us
          </span>

          <h2 className="mb-5 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            More Than Just
            <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              A Prompt Marketplace
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400">
            PromptVault helps creators and businesses discover,
            manage and monetize AI prompts while maintaining
            quality and trust.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {benefits.map(
            (
              { title, description, icon: Icon },
              index
            ) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-violet-500/10
                    text-violet-500
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {title}
                </h3>

                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="
            mt-16
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold text-violet-500">
                10K+
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                AI Prompts
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-violet-500">
                5K+
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-violet-500">
                4.9★
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Community Rating
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}