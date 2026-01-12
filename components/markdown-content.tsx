'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function MarkdownContent({ content }: { content: string }) {
  if (!content) {
    return <p className="text-muted-foreground">Content not available.</p>;
  }

  return (
    <div className="space-y-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6 pb-4 border-b-4 border-border" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mt-12 mb-4 flex items-center gap-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="font-display text-2xl font-black uppercase tracking-tight text-foreground mt-8 mb-3" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-lg font-medium text-muted-foreground leading-relaxed mb-4" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-black text-foreground" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="space-y-2 mb-6" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="flex items-start gap-3 text-lg font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 border-2 border-border"></span>
              <span className="flex-1">{props.children}</span>
            </li>
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-2 border-border shadow-neo-md" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-foreground text-background" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="text-left p-4 font-black uppercase tracking-wide border-2 border-border text-base" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody {...props} />
          ),
          tr: ({ node, className, ...props }) => (
            <tr className="border-b-2 border-border even:bg-muted/10 hover:bg-muted/20 transition-colors" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="p-4 border-r-2 border-border last:border-r-0 text-base font-medium text-foreground" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className="my-8 border-0 h-1 bg-muted border-2 border-border" {...props} />
          ),
          code: ({ node, inline, ...props }: any) =>
            inline ? (
              <code className="px-2 py-1 bg-muted border-2 border-border font-mono text-sm font-bold text-primary" {...props} />
            ) : (
              <code className="block p-4 bg-muted border-2 border-border font-mono text-sm font-bold overflow-x-auto" {...props} />
            ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
