import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/atoms/AnimatedSection";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { BlogCard } from "@/components/molecules/BlogCard";
import { blogPosts } from "@/data/blog-posts";

export function BlogPreviewSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <AnimatedSection id="blog" className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <SectionHeading title="Latest Posts" label="// blog.latest(3)" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://medium.com/@ricmor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
        >
          view_all() <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </AnimatedSection>
  );
}