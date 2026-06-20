
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaCloudUploadAlt } from 'react-icons/fa'

export default function AddPromptPage() {
  const router = useRouter()

  const [thumbnail, setThumbnail] = useState('')
const [isUploading, setIsUploading] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: '',
    aiTool: '',
    tags: '',
    difficulty: 'beginner',
    visibility: 'public',
    copyCount: 0,
    status: 'pending',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageChange = async (e) => {
  const file = e.target.files?.[0]

  if (!file) return

  if (file.size > 5 * 1024 * 1024) {
    alert('Image size must be under 5MB')
    return
  }

  try {
    setIsUploading(true)

    const formData = new FormData()
    formData.append('image', file)

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
      {
        method: 'POST',
        body: formData,
      }
    )

    const data = await response.json()

    if (data.success) {
      setThumbnail(data.data.display_url)
    } else {
      alert('Image upload failed')
    }
  } catch (error) {
    console.error(error)
    alert('Image upload failed')
  } finally {
    setIsUploading(false)
  }
}

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const payload = {
  ...formData,

  thumbnail,

  tags: formData.tags
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean),

  copyCount: 0,
  status: 'pending',
}

    const response = await fetch(
      'http://localhost:8080/api/prompts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    const data = await response.json()

    if (data.success) {
      alert('Prompt submitted successfully!')
      router.push('/dashboard/creator/my-prompts')
    }
  } catch (error) {
    console.error(error)
  }
}

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Add New Prompt
        </h1>

        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Create and submit a new prompt for review.
        </p>
      </div>

      {/* Notice */}
      <div className="mb-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 sm:p-5">
        <h3 className="font-semibold text-yellow-500">
          Review Required
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          All newly submitted prompts are automatically marked as
          pending and remain hidden from the marketplace until
          reviewed by an administrator.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl border border-border bg-card p-4 sm:p-6 lg:p-8"
      >
        {/* Title */}
        <div>
          <label className="mb-2 block font-medium">
            Prompt Title *
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter prompt title"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block font-medium">
            Prompt Description *
          </label>

          <textarea
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly describe your prompt..."
            className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="mb-2 block font-medium">
            Prompt Content *
          </label>

          <textarea
            rows={12}
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your full prompt here..."
            className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
            required
          />
        </div>

        {/* Category + Tool */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Category *
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
              required
            >
              <option value="">Select Category</option>
              <option>Content Writing</option>
              <option>Marketing</option>
              <option>SEO</option>
              <option>Programming</option>
              <option>Business</option>
              <option>Productivity</option>
              <option>Education</option>
              <option>Design</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              AI Tool *
            </label>

            <select
              name="aiTool"
              value={formData.aiTool}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-4 py-3"
              required
            >
              <option value="">Select AI Tool</option>
              <option>ChatGPT</option>
              <option>Claude</option>
              <option>Gemini</option>
              <option>Midjourney</option>
              <option>Perplexity</option>
              <option>Grok</option>
              <option>Cursor</option>
              <option>Copilot</option>
            </select>
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="mb-2 block font-medium">
            Tags
          </label>

          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="seo, marketing, ai"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Difficulty */}
        <div>
          <label className="mb-3 block font-medium">
            Difficulty Level
          </label>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {['beginner', 'intermediate', 'pro'].map((level) => (
              <label
                key={level}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4"
              >
                <input
                  type="radio"
                  name="difficulty"
                  value={level}
                  checked={formData.difficulty === level}
                  onChange={handleChange}
                />

                <span className="capitalize">
                  {level}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Upload */}
        <div>
          <label className="mb-3 block font-medium">
            Thumbnail Image
          </label>

          <label
            htmlFor="thumbnail"
            className={`
              flex
              min-h-[220px]
              cursor-pointer
              flex-col
              items-center
              justify-center
              rounded-2xl
              border-2
              border-dashed
              border-border
              p-6
              sm:p-10
              text-center
              transition-all
              hover:border-violet-500
              hover:bg-violet-500/5
            `}
          >
            <FaCloudUploadAlt
              size={50}
              className="mb-4 text-violet-500"
            />

            <h4 className="font-semibold">
              Upload Thumbnail
            </h4>

            <p className="mt-2 text-sm text-muted-foreground">
              Click to upload or drag & drop
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              PNG, JPG, JPEG (Max 5MB)
            </p>

            {isUploading && (
  <p className="mt-4 text-sm text-violet-500">
    Uploading image...
  </p>
)}

{thumbnail && (
  <div className="mt-4">
    <img
      src={thumbnail}
      alt="Thumbnail Preview"
      className="mx-auto h-40 rounded-xl object-cover"
    />
  </div>
)}

            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Visibility */}
        <div>
          <label className="mb-3 block font-medium">
            Visibility
          </label>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4">
              <input
                type="radio"
                name="visibility"
                value="public"
                checked={formData.visibility === 'public'}
                onChange={handleChange}
              />
              Public
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-border p-4">
              <input
                type="radio"
                name="visibility"
                value="private"
                checked={formData.visibility === 'private'}
                onChange={handleChange}
              />
              Private
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
  type="submit"
  disabled={isUploading}
  className={`
    w-full
    rounded-xl
    bg-violet-600
    px-6
    py-4
    text-base
    font-semibold
    text-white
    transition-all
    hover:bg-violet-700
    disabled:cursor-not-allowed
    disabled:opacity-50
    sm:text-lg
    `}
>
  {isUploading ? 'Uploading...' : 'Submit Prompt'}
</button>
      </form>
    </div>
  )
}

