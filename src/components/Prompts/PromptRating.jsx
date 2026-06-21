'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

export default function PromptRating({
  initialRating = 0,
  onRate,
}) {
  const [rating, setRating] =
    useState(initialRating)

  const [hover, setHover] =
    useState(0)

  const handleClick = (
    value
  ) => {
    setRating(value)

    if (onRate) {
      onRate(value)
    }
  }

  return (
    <div className="flex items-center gap-2">

      <div className="flex gap-1">

        {[1, 2, 3, 4, 5].map(
          star => (
            <button
              key={star}
              onClick={() =>
                handleClick(star)
              }
              onMouseEnter={() =>
                setHover(star)
              }
              onMouseLeave={() =>
                setHover(0)
              }
              className="transition hover:scale-110"
            >
              <Star
                size={18}
                fill={
                  star <=
                  (hover ||
                    rating)
                    ? 'currentColor'
                    : 'none'
                }
                className="text-yellow-400"
              />
            </button>
          )
        )}

      </div>

      <span className="text-sm text-gray-400">
        {rating.toFixed(1)}
      </span>

    </div>
  )
}