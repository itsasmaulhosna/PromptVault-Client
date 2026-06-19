'use client'

import { motion } from 'framer-motion'

const fadeUp = {
hidden: {
opacity: 0,
y: 50,
},
visible: delay => ({
opacity: 1,
y: 0,
transition: {
duration: 0.8,
delay,
ease: 'easeOut',
},
}),
}

export default function AuthShowcase() {
return ( <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-slate-50 dark:bg-gradient-to-br dark:from-indigo-900 dark:via-indigo-950 dark:to-slate-950 p-16 transition-colors duration-300">


  <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_bottom_right,rgba(255,165,0,0.15),transparent_35%)]" />

  <motion.div
    custom={0}
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    className="relative z-10"
  >
    <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
      Prompt
      <span className="text-amber-400">Vault</span>
    </h2>
  </motion.div>

  <div className="relative z-10 max-w-xl">
    <motion.div
      custom={0.2}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="inline-flex items-center rounded-full bg-slate-200 dark:bg-white/10 px-4 py-2 text-sm text-slate-700 dark:text-slate-200"
    >
      ✨ 5,000+ curated AI prompts
    </motion.div>

    <motion.h1
      custom={0.4}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="mt-8 text-6xl font-bold leading-tight text-slate-900 dark:text-white"
    >
      The marketplace where great prompts find their people.
    </motion.h1>

    <motion.p
      custom={0.6}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="mt-6 text-xl leading-9 text-slate-600 dark:text-slate-300"
    >
      Discover, share and sell battle-tested prompts for
      ChatGPT, Claude, Gemini, Midjourney and every AI tool
      you love.
    </motion.p>
  </div>

  <motion.div
    custom={0.8}
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    className="relative z-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 backdrop-blur"
  >
    <p className="text-lg text-slate-700 dark:text-slate-200">
      "PromptVault cut my content workflow in half.
      The quality of prompts here is unmatched."
    </p>

    <p className="mt-4 font-semibold text-slate-900 dark:text-white">
      — Maya Lin, Top Creator
    </p>
  </motion.div>
</div>


)
}
