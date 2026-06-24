
'use client'
import { useSession } from '@/lib/auth-client'

import { useState } from 'react'
import { Diamond, CreditCard } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'
export default function UpgradePage() {
  const [showSaveCard, setShowSaveCard] =useState(false)
const router = useRouter()
const searchParams = useSearchParams()
const { data: session } = useSession()

const redirectTo =
  searchParams.get('redirect') ||
  '/dashboard/user/profile'
  const [processing, setProcessing] =
    useState(false)

  const handlePayment = async () => {
  setProcessing(true)

  try {
    await fetch(
  'http://localhost:8080/api/users/upgrade',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: session?.user?.email,
    }),
  }
)

    toast.success(
      'Premium activated successfully'
    )

    router.push(redirectTo)
  } catch (error) {
    console.error(error)

    toast.error('Payment failed')
  } finally {
    setProcessing(false)
  }
}
  return (
    <section className="min-h-screen bg-[#050816] py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 md:h-16 md:w-16">
            <Diamond className="text-cyan-400" />
          </div>

          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Upgrade Your Account
          </h1>

          <p className="mt-4 text-sm text-gray-400 sm:text-base">
            Unlock premium prompt engineering
            templates and advanced assets
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left Card */}
          <div className="rounded-3xl border border-white/10 bg-[#0B1023] p-6 md:p-10">
            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Lifetime Plan
            </span>

            <h2 className="mt-6 text-2xl font-bold text-white md:text-4xl">
              PromptVault Pro Access
            </h2>

            <div className="mt-8 flex items-end gap-2 md:gap-3">
              <span className="text-5xl font-bold text-white md:text-7xl">
                $5.00
              </span>

              <span className="mb-2 text-sm text-gray-400 md:mb-3">
                / one-time
              </span>
            </div>

            <ul className="mt-8 space-y-4 text-sm text-gray-300 md:mt-10 md:text-base">
              <li>
                ✓ Unlock all locked Private/Premium
                prompts
              </li>

              <li>
                ✓ Unlimited copy-to-clipboard
                actions
              </li>

              <li>
                ✓ Engage with rating and feedback
                reviews
              </li>

              <li>
                ✓ Priority access to future AI
                engine configurations
              </li>

              <li>
                ✓ One-time payment, lifetime
                ownership
              </li>
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-gray-500">
              Payments secured and encrypted.
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-white/10 bg-[#0B1023] p-6 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <CreditCard
                size={20}
                className="text-white"
              />

              <h3 className="text-xl font-semibold text-white md:text-2xl">
                Card Information
              </h3>
            </div>

            {/* Card Box */}
            <div className="rounded-2xl border border-white/10 bg-[#121933] px-4 py-4 md:px-5">
              {!showSaveCard ? (
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-5 w-8 rounded bg-white" />

                    <span className="text-sm text-gray-500 md:text-base">
                      Card number
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 md:text-base">
                      MM/YY
                    </span>

                    <button
                      onClick={() =>
                        setShowSaveCard(true)
                      }
                      className="text-sm text-gray-500 transition hover:text-white"
                    >
                      ZIP
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className={`
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-green-500/30
                    bg-green-900/30
                    px-4
                    py-3
                    text-sm
                    text-green-300
                  `}
                >
                  <span className="h-3 w-3 rounded-full bg-green-500" />

                  Save with ➜
                </button>
              )}
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={processing}
              className={`
                mt-8
                h-12
                w-full
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-purple-500
                px-4
                text-base
                font-semibold
                text-white
                transition
                hover:opacity-90
                disabled:cursor-not-allowed
                disabled:opacity-70
                md:h-14
                md:text-lg
              `}
            >
              {processing
                ? 'Processing transaction...'
                : 'Pay One-time $5.00'}
            </button>

            {/* Testing Box */}
            <div className="mt-8 rounded-2xl border border-dashed border-violet-500/20 p-4 md:p-6">
              <h4 className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-violet-400 md:text-sm">
                Stripe Testing Assist
              </h4>

              <p className="mb-6 text-center text-sm leading-7 text-gray-400">
                No credit card configured? Or
                running locally without keys? Use
                our Sandbox simulation to instantly
                test upgraded views and dashboards.
              </p>

              <button
                onClick={handlePayment}
                className={`
                  w-full
                  rounded-xl
                  bg-cyan-500
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-cyan-400
                  md:text-base
                `}
              >
                Simulate $5 Test Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

