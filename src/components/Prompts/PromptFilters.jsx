export default function PromptFilters({
  filters,
  setFilters,
}) {
  const aiTools = [
    'All',
    'ChatGPT',
    'Claude',
    'Gemini',
    'Midjourney',
    'Perplexity',
    'Cursor',
  ]

  const categories = [
    'All',
    'Marketing',
    'SEO',
    'Programming',
    'Education',
    'Business',
    'Design',
  ]

  return (
    <div className="sticky top-24 rounded-3xl border border-white/10 bg-[#0B1023] p-6">

      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">
          Filters
        </h3>

        <button
          onClick={() =>
            setFilters({
              aiTool: 'All',
              category: 'All',
            })
          }
          className="text-sm text-violet-400"
        >
          Reset
        </button>
      </div>

      <div className="mb-8">
        <h4 className="mb-4 text-white font-medium">
          AI ENGINE
        </h4>

        <div className="space-y-2">
          {aiTools.map((tool) => (
            <button
              key={tool}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  aiTool: tool,
                }))
              }
              className={`w-full rounded-xl p-3 text-left ${
                filters.aiTool === tool
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-white font-medium">
          CATEGORY
        </h4>

        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category,
                }))
              }
              className={`w-full rounded-xl p-3 text-left ${
                filters.category === category
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}