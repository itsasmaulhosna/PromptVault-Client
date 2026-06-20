'use client'

import { useSession } from '@/lib/auth-client'
import Image from 'next/image'
import {
  FaEdit,
  FaGlobe,
  FaLinkedin,
  FaFileAlt,
  FaDownload,
  FaDollarSign,
  FaUsers,
  FaCheckCircle,
} from 'react-icons/fa'

export default function CreatorProfilePage() {
  const { data: session } = useSession()

  const stats = [
    {
      title: 'Published Prompts',
      value: '24',
      icon: FaFileAlt,
    },
    {
      title: 'Downloads',
      value: '4.8K',
      icon: FaDownload,
    },
    {
      title: 'Sales',
      value: '$840',
      icon: FaDollarSign,
    },
    {
      title: 'Followers',
      value: '620',
      icon: FaUsers,
    },
  ]

  return (
    <div className="p-4 md:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          My Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your creator profile and marketplace presence.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Image
              src={
                session?.user?.image ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  session?.user?.name || 'Creator'
                )}`
              }
              alt="Creator"
              width={120}
              height={120}
              className="rounded-full border-4 border-violet-500/20"
            />

            <div>
              <h2 className="text-2xl font-bold">
                {session?.user?.name || 'Creator'}
              </h2>

              <p className="mt-1 text-muted-foreground">
                AI Prompt Creator
              </p>

              <p className="text-sm text-muted-foreground">
                {session?.user?.email}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-600">
                  CREATOR
                </span>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700">
            <FaEdit />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ title, value, icon: Icon }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
              <Icon size={20} />
            </div>

            <h3 className="text-3xl font-bold">{value}</h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {title}
            </p>
          </div>
        ))}
      </div>

      {/* About & Account */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* About */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">
            About Creator
          </h3>

          <p className="text-muted-foreground">
            Passionate AI Prompt Creator specializing in
            productivity, automation, content generation,
            marketing workflows, and business solutions.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Website
              </p>

              <div className="mt-1 flex items-center gap-2">
                <FaGlobe className="text-violet-600" />
                <span>promptvault.com</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                LinkedIn
              </p>

              <div className="mt-1 flex items-center gap-2">
                <FaLinkedin className="text-violet-600" />
                <span>linkedin.com/in/creator</span>
              </div>
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Account Status
          </h3>

          <div className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <FaCheckCircle
              size={24}
              className="mt-1 text-emerald-500"
            />

            <div>
              <h4 className="font-semibold text-emerald-600">
                Verified Creator
              </h4>

              <p className="mt-1 text-sm text-muted-foreground">
                Your creator account is verified and eligible
                to publish prompts on PromptVault.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
            <h4 className="font-semibold text-violet-600">
              Creator Level
            </h4>

            <p className="mt-1 text-sm text-muted-foreground">
              Professional Creator
            </p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-5 text-lg font-semibold">
          Recent Activity
        </h3>

        <div className="space-y-4">
          <div className="rounded-xl border border-border p-4">
            Published a new prompt
          </div>

          <div className="rounded-xl border border-border p-4">
            Received 25 new downloads
          </div>

          <div className="rounded-xl border border-border p-4">
            Earned $50 from premium prompts
          </div>
        </div>
      </div>
    </div>
  )
}