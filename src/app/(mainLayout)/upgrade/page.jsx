'use client'

import { useState } from 'react'
import { Diamond, CreditCard } from 'lucide-react'

export default function UpgradePage() {
const [showSaveCard, setShowSaveCard] =
useState(false)

const [processing, setProcessing] =
useState(false)

const handlePayment = () => {
setProcessing(true)

setTimeout(() => {
  setProcessing(false)
}, 2000)


}

return ( <section className="min-h-screen bg-[#050816] py-16"> <div className="mx-auto max-w-5xl px-6">


    {/* Header */}
    <div className="mb-14 text-center">

      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
        <Diamond className="text-cyan-400" />
      </div>

      <h1 className="text-5xl font-bold text-white">
        Upgrade Your Account
      </h1>

      <p className="mt-4 text-gray-400">
        Unlock premium prompt engineering
        templates and advanced assets
      </p>

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Left Card */}
      <div className="rounded-3xl border border-white/10 bg-[#0B1023] p-10">

        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Lifetime Plan
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          PromptVault Pro Access
        </h2>

        <div className="mt-8 flex items-end gap-3">
          <span className="text-7xl font-bold text-white">
            $5.00
          </span>

          <span className="mb-3 text-gray-400">
            / one-time
          </span>
        </div>

        <ul className="mt-10 space-y-5 text-gray-300">

          <li>
            ✓ Unlock all locked Private/Premium prompts
          </li>

          <li>
            ✓ Unlimited copy-to-clipboard actions
          </li>

          <li>
            ✓ Engage with rating and feedback reviews
          </li>

          <li>
            ✓ Priority access to future AI engine
            configurations
          </li>

          <li>
            ✓ One-time payment, lifetime ownership
          </li>

        </ul>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">
          Payments secured and encrypted.
        </div>

      </div>

      {/* Right Card */}
      <div className="rounded-3xl border border-white/10 bg-[#0B1023] p-10">

        <div className="mb-8 flex items-center gap-3">

          <CreditCard
            size={20}
            className="text-white"
          />

          <h3 className="text-2xl font-semibold text-white">
            Card Information
          </h3>

        </div>

        {/* Stripe Style Element */}

        <div className="rounded-2xl border border-white/10 bg-[#121933] px-5 py-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="h-5 w-8 rounded bg-white" />

              <span className="text-gray-500">
                Card number
              </span>

            </div>

            <span className="text-gray-500">
              MM/YY
            </span>

            {!showSaveCard ? (
              <button
                onClick={() =>
                  setShowSaveCard(true)
                }
                className="text-gray-500"
              >
                ZIP
              </button>
            ) : (
              <button
                className="
                  flex items-center gap-2
                  rounded-md
                  border border-green-500/30
                  bg-green-900/30
                  px-3 py-2
                  text-green-300
                "
              >
                <span className="h-3 w-3 rounded bg-green-500" />

                Save with ➜
              </button>
            )}

          </div>

        </div>

        {/* Pay Button */}

        <button
          onClick={handlePayment}
          className="
            mt-8
            h-14
            w-full
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-purple-500
            text-lg
            font-semibold
            text-white
          "
        >
          {processing
            ? 'Processing transaction...'
            : 'Pay One-time $5.00'}
        </button>

        {/* Testing Box */}

        <div className="mt-8 rounded-2xl border border-dashed border-violet-500/20 p-6">

          <h4 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-violet-400">
            Stripe Testing Assist
          </h4>

          <p className="mb-6 text-center text-sm leading-7 text-gray-400">
            No credit card configured?
            Or running locally without keys?
            Use our Sandbox simulation to
            instantly test upgraded views
            and dashboards.
          </p>

          <button
            className="
              w-full
              rounded-xl
              bg-cyan-500
              py-3
              font-semibold
              text-black
            "
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
