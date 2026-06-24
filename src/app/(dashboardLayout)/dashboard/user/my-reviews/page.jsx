'use client'

import { useEffect, useState } from 'react'
import { useSession } from '@/lib/auth-client'
import { Layers3 } from 'lucide-react'
import Link from 'next/link'

export default function MyReviewsPage() {
  const { data: session } = useSession()
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!session?.user?.email) return

    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reviews/user/${session.user.email}`
    )
      .then(res => res.json())
      .then(data => setReviews(data.data || []))
      .finally(() => setLoading(false))
  }, [session])

  if (loading) {
    return (
      <div className="p-6">
        Loading...
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          My Reviews
        </h1>

        <p className="mt-2 text-muted-foreground">
          View all reviews you've submitted.
        </p>
      </div>

      {reviews.length === 0 ? (
        <div className="rounded-3xl border border-border bg-card py-24">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Layers3
                size={40}
                className="text-muted-foreground"
              />
            </div>

            <h3 className="text-3xl font-bold">
              No reviews yet
            </h3>

            <p className="mt-4 text-muted-foreground">
              Start exploring prompts and leave reviews
              to help the community.
            </p>

            <Link
              href="/prompts"
              className="mt-8 inline-flex rounded-xl bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-700"
            >
              Browse Prompts
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map(review => (
            <div
              key={review._id}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-sm text-muted-foreground">
                Prompt ID: {review.promptId}
              </p>

              <p className="mt-2">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}