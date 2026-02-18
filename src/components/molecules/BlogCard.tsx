import { ExternalLink } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="group relative flex flex-col rounded-lg border border-dashed border-primary/20 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md h-full">
      {/* Component label */}
      <div className="absolute -top-2.5 left-4 bg-background px-2">
        <span className="font-mono text-[9px] text-primary/50 tracking-wider uppercase">
          {"<"}Post {"/>"}
        </span>
      </div>

      <div className="space-y-3 pt-1 flex-1">
        <div className="flex items-center gap-2">
          <time className="font-mono text-[10px] text-muted-foreground">{formattedDate}</time>
        </div>
        <h3 className="font-heading text-lg font-semibold leading-snug">{post.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-dashed border-border">
        <a
          href={post.readMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink className="h-3 w-3" /> read_on_medium
        </a>
      </div>
    </div>
  );
}
