import Link from 'next/link'
import { Copy, Star } from 'lucide-react'
export default function PromptCard({ prompt }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1023]">

      <img
        src={
          prompt.thumbnail ||
          'https://placehold.co/600x400'
        }
        alt={prompt.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">

        <div className="mb-4 flex flex-wrap gap-2">

  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
    {prompt.aiTool}
  </span>

  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300 capitalize">
    {prompt.difficulty}
  </span>

  <span
    className={`rounded-full px-3 py-1 text-xs font-medium ${
      prompt.accessType === 'premium'
        ? 'bg-yellow-500/20 text-yellow-400'
        : 'bg-blue-500/20 text-blue-400'
    }`}
  >
    {prompt.accessType === 'premium'
      ? 'Premium'
      : 'Free'}
  </span>

</div>

        <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-white">
          {prompt.title}
        </h3>

        <p className="mb-5 line-clamp-3 text-gray-400">
          {prompt.description}
        </p>

        <div className="mb-5 text-sm text-violet-400">
          {prompt.category}
        </div>

        <div className="mb-5 flex items-center justify-between">

  <div>
    <p className="text-sm font-medium text-white">
      {prompt.creatorRole || 'Creator'}
    </p>
  </div>

  <div className="flex items-center gap-4">

    <div className="flex items-center gap-1 text-gray-400">
      <Copy size={16} />
      <span>
        {prompt.copyCount || 0}
      </span>
    </div>

    <div className="flex items-center gap-1 text-yellow-500">
      <Star
        size={16}
        fill="currentColor"
      />
      <span>
  {Number(
    prompt.rating || 0
  ).toFixed(1)}
</span>
    </div>

  </div>

</div>

        <Link
          href={`/prompts/${prompt._id}`}
          className="block rounded-xl bg-violet-600 py-3 text-center font-medium text-white transition hover:bg-violet-700"
        >
          View Details
        </Link>

      </div>
    </div>
  )
}