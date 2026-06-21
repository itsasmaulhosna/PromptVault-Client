import { notFound } from 'next/navigation'
import PromptDetailsClient from '@/components/Prompts/PromptDetailsClient'

export default async function PromptDetailsPage({
  params,
}) {
  const { id } = await params

  const res = await fetch(
    `http://localhost:8080/api/prompts/${id}`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    notFound()
  }

  const data = await res.json()

  return (
    <PromptDetailsClient
      prompt={data.data}
    />
  )
}