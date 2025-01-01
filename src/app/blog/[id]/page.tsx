import { notFound } from "next/navigation"
import { blogPosts } from "../../../../lib/types/blog"
import BlogContent from "@/app/components/BlogContent"

interface BlogPostPageProps {
  params: { id: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Ensure params are correctly typed here
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <BlogContent
        title={post.title}
        content={post.content}
        image={post.image}
        author={post.author}
        date={post.date}
        readTime={post.readTime}
        category="Travel"
        stats={post.stats}
      />
    </main>
  )
}
