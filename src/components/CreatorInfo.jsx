'use client'

import { useSession } from '@/lib/auth-client'

export default function CreatorInfo() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center gap-3">
      <img
        src={session?.user?.image}
        alt={session?.user?.name}
        className="h-12 w-12 rounded-full object-cover"
      />

      <div>
        <p className="font-medium text-white">
          {session?.user?.name}
        </p>

        <p className="text-sm text-gray-400">
          {session?.user?.email}
        </p>
      </div>
    </div>
  )
}