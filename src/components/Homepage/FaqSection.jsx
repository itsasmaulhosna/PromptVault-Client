'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is PromptVault?',
    answer:
      'PromptVault is an AI prompt marketplace where users can discover, save, share and purchase high-quality prompts for ChatGPT, Claude, Gemini, Midjourney and more.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'PromptVault offers both free and premium prompts. Premium prompts can be unlocked through one-time purchases or subscriptions.',
  },
  {
    question: 'Can I publish my own prompts?',
    answer:
      'Yes. Anyone can become a creator and publish prompts after following our submission guidelines.',
  },
  {
    question: 'How are prompts moderated?',
    answer:
      'Every new prompt starts as pending and remains hidden until an admin reviews and approves it, ensuring quality and safety.',
  },
  {
    question: 'Which AI tools are supported?',
    answer:
      'We support ChatGPT, Claude, Gemini, Midjourney, DALL·E, Stable Diffusion, Perplexity, GitHub Copilot and more.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(3)

  const toggleFaq = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
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
            FAQ
          </span>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Frequently asked{' '}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              questions
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about using PromptVault.
          </p>
        </div>

        {/* FAQ List */}
        <div className="rounded-3xl border border-border bg-card/30 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border last:border-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-6
                  py-6
                  text-left
                  transition-colors
                  hover:text-violet-500
                  md:px-8
                "
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-base leading-8 text-muted-foreground md:px-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}