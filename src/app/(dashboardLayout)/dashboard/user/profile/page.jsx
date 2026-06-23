'use client'

import { useSession } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaFileAlt,
  FaCheckCircle,
  FaCrown,
} from 'react-icons/fa'

export default function ProfilePage() {
  const { data: session } = useSession()
const [isPremium, setIsPremium] =
  useState(false)
  const [promptCount, setPromptCount] = useState(0)

  useEffect(() => {
  const checkPremium = async () => {
    if (!session?.user?.email) return

    try {
      const res = await fetch(
        `http://localhost:8080/api/users/premium/${session.user.email}`
      )

      const data = await res.json()

      setIsPremium(data.isPremium)
    } catch (error) {
      console.log(error)
    }
  }

  checkPremium()
}, [session])
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          User Account Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your plan, credentials and prompt details.
        </p>
      </div>

      {/* Main Card */}
      <div className="rounded-3xl border border-border bg-card p-8">
        {/* Top User Info */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <Image
            src={
              session?.user?.image ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(
                session?.user?.name || 'User'
              )}`
            }
            alt="User"
            width={120}
            height={120}
            className="h-28 w-28 rounded-full border-4 border-violet-500/30"
          />

          <div>
            <h2 className="text-4xl font-bold">
              {session?.user?.name || 'User'}
            </h2>

            <p className="mt-2 text-muted-foreground">
              {session?.user?.email}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-violet-500/20 px-4 py-1 text-sm font-semibold text-violet-500">
                ROLE:{' '}
                {session?.user?.role?.toUpperCase() ||
                  'USER'}
              </span>

              <span
  className={`rounded-full px-4 py-1 text-sm font-semibold ${
    isPremium
      ? 'bg-emerald-500/20 text-emerald-500'
      : 'bg-amber-500/20 text-amber-500'
  }`}
>
  PLAN: {isPremium ? 'LIFETIME PRO' : 'FREE'}
</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Published Prompt */}
          <div className="rounded-2xl border border-border p-6">
            <FaFileAlt
              size={26}
              className="mb-4 text-violet-500"
            />

            <p className="text-sm font-semibold uppercase text-muted-foreground">
              Prompts Published
            </p>

            <h3 className="mt-2 text-5xl font-bold">
              {promptCount}
            </h3>
          </div>

          {/* Account Status */}
          <div className="rounded-2xl border border-border p-6">
            <FaCheckCircle
              size={26}
              className="mb-4 text-emerald-500"
            />

            <p className="text-sm font-semibold uppercase text-muted-foreground">
              Account Status
            </p>

            <h3 className="mt-2 text-3xl font-bold text-emerald-500">
              Verified Member
            </h3>
          </div>
        </div>

        {/* Upgrade Box */}
        {isPremium ? (
  <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8">

    <div className="flex items-center gap-4">

      <FaCheckCircle
        size={28}
        className="text-emerald-500"
      />

      <div>
        <h3 className="text-2xl font-bold text-emerald-400">
          Lifetime Premium Active
        </h3>

        <p className="mt-2 text-gray-400">
          You have lifetime access to all premium prompts,
          private collections, reviews, unlimited copies
          and future premium releases.
        </p>
      </div>

    </div>

  </div>
) : (
  <div className="mt-8 rounded-3xl bg-gradient-to-r from-violet-600/20 to-cyan-500/20 p-8">

    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <div className="mb-3 flex items-center gap-3">
          <FaCrown className="text-yellow-500" />

          <h3 className="text-2xl font-bold">
            Upgrade to Pro Lifetime
          </h3>
        </div>

        <p className="max-w-2xl text-muted-foreground">
          Unlock access to premium prompt templates,
          advanced AI workflows, private collections
          and exclusive creator resources.
        </p>

      </div>

      <Link
        href={`/upgrade?redirect=${encodeURIComponent(
    '/dashboard/user/profile'
  )}`}

        className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black"
      >
        Upgrade Now ($5)
      </Link>

    </div>

  </div>
)}
      </div>
    </div>
  )
}