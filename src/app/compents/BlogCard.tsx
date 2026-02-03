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
        className="group block sketchy-box h-full flex flex-col p-0 transition-transform bg-background/50 border-white/20 hover:border-neon-green"
        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
      >
        {/* Image Container */}
        {post.mainImage?.asset?.url && (
          <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-neon-green/0 group-hover:bg-neon-green/10 transition-colors z-10 pointer-events-none" />
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-1">
          {/* Date */}
          <p className="text-xs font-bold text-neon-green uppercase tracking-wide mb-3">
            {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>

          {/* Title */}
          <h2 className="text-xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors">
            {post.title}
          </h2>

          {/* Description if available */}
          {post.excerpt && (
            <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Footer */}
          <div className="flex items-center text-white font-bold text-sm mt-auto pt-4 group-hover:text-neon-green transition-colors">
            Lire l'article
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 