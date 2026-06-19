'use client'

import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-25">
      <div className="container mx-auto px-4">
        <div
          className="
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
          "
        >
          {/* Background */}
          <div
  className={`
    absolute
    inset-0
    bg-[linear-gradient(135deg,#35308A_0%,#3F3A95_5%,#6B4B52_100%)]
  `}
/>

          {/* Glow Effects */}
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div
              className="
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
              "
            >
              <Sparkles size={16} />
              Join 5,000+ creators
            </div>

            {/* Heading */}
            <h2
              className="
                mb-6
                text-2xl
                font-bold
                tracking-tight
                text-white
                md:text-5xl
                lg:text-5xl
              "
            >
              Start sharing your best prompts today
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mb-10
                max-w-3xl
                text-lg
                leading-relaxed
                text-white/80
                md:text-xl
              "
            >
              Create a free account, publish your prompts and
              reach a community that values quality AI work.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="
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
                  hover:scale-105
                  hover:bg-amber-600
                "
              >
                Get Started Free
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/prompts"
                className="
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
                "
              >
                Browse Prompts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}