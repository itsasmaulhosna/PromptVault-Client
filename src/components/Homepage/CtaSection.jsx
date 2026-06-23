
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-25">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            px-6
            py-16
            md:px-12
            lg:px-20
            lg:py-24
          `}
        >
          {/* Background */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(135deg,#35308A_0%,#3F3A95_5%,#6B4B52_100%)]
            "
          />

          {/* Animated Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"
          />

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
              }}
              className={`
                mb-8
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/10
                px-5
                py-2
                text-sm
                font-medium
                text-white
                backdrop-blur-md
              `}
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={16} />
              </motion.div>

              Join 5,000+ creators
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className={`
                mb-6
                text-2xl
                font-bold
                tracking-tight
                text-white
                md:text-5xl
                lg:text-5xl
              `}
            >
              Start sharing your best prompts today
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`
                mx-auto
                mb-10
                max-w-3xl
                text-lg
                leading-relaxed
                text-white/80
                md:text-xl
              `}
            >
              Create a free account, publish your prompts and
              reach a community that values quality AI work.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className={`
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              `}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  href="/register"
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-amber-500
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-amber-600
                  `}
                >
                  Get Started Free

                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  href="/prompts"
                  className={`
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/5
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white/10
                  `}
                >
                  Browse Prompts
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

