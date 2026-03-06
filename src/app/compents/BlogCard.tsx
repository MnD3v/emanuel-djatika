import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: SanityDocument;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link
        href={`/blog/${post.slug.current}`}
        className="group block h-full flex flex-col rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 overflow-hidden transition-all duration-300"
      >
        {/* Image Container */}
        {post.mainImage?.asset?.url ? (
          <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors z-10 pointer-events-none" />
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-white/5 border-b border-white/5 flex items-center justify-center">
            <span className="text-gray-500 text-sm font-medium">Article</span>
          </div>
        )}

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-1">
          {/* Date */}
          <p className="text-xs font-semibold text-emerald-500 uppercase tracking-widest mb-3">
            {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>

          {/* Title */}
          <h2 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
            {post.title}
          </h2>

          {/* Description if available */}
          {post.excerpt && (
            <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center text-gray-300 font-medium text-sm mt-auto pt-4 group-hover:text-emerald-400 transition-colors">
            Lire l'article
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 