import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: SanityDocument;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <Link
        href={`/blog/${post.slug.current}`}
        className="block relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-[#FF2600] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF2600]/5"
      >
        {/* Image Container */}
        {post.mainImage?.asset?.url && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Category Badge */}
            <div className="absolute top-3 right-3 bg-[#FF2600] text-white px-2 py-1 rounded-full text-xs font-medium">
              Blog
            </div>
            
            {/* Reading Time Badge */}
            <div className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              5 min
            </div>
            
            {/* Hover Arrow */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 rounded-full p-2">
                <ArrowRight className="w-4 h-4 text-[#FF2600]" />
              </div>
            </div>
          </div>
        )}

        {/* Content Container */}
        <div className="p-4">
          {/* Date and Author */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="flex items-center text-gray-500 text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              <span>
                {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <span className="text-gray-500 text-xs">LafiaTech</span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold mb-3 line-clamp-2 text-gray-900 group-hover:text-[#FF2600] transition-colors duration-300 leading-tight">
            {post.title}
          </h2>

          {/* Description if available */}
          {post.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {['Développement', 'Web', 'Tech'].map((tag, index) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-[#FF2600]/10 hover:text-[#FF2600] transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <motion.span
              className="text-[#FF2600] font-semibold group-hover:text-[#FF4500] transition-colors duration-300 flex items-center text-sm"
              whileHover={{ x: 3 }}
            >
              Lire l'article
            </motion.span>
            
            {/* Animated Arrow */}
            <motion.div
              whileHover={{ x: 3 }}
              className="text-[#FF2600] group-hover:text-[#FF4500] transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}