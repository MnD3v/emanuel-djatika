"use client"
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../compents/BlogCard";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage{
    asset->{url}
  }
}`;

const options = { next: { revalidate: 30 } };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Blog() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
      .then((data: SanityDocument[]) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error: unknown) => {
        console.error("Erreur lors du chargement des posts :", error);
        setError(error instanceof Error ? error.message : "Une erreur est survenue lors du chargement des articles.");
        setIsLoading(false);
      });
  }, []);

  const displayedPosts = showAll ? posts : posts.slice(0, 6);
  const hasMorePosts = posts.length > 6;

  return (
    <section id="blog" className="py-20 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header - Style épuré et moderne */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="flex items-center space-x-2 bg-[#FF2600]/10 px-6 py-3 rounded-full">
              <svg className="w-6 h-6 text-[#FF2600]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <span className="text-black text-sm font-medium">
                Notre <span className="font-bold">Blog</span>
              </span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight heading-primary"
          >
            Articles & 
            <br />
            <span className="text-[#FF2600]">Conseils</span>
          </motion.h1>
          
          <motion.p
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Découvrez nos derniers articles, conseils et actualités pour rester à la pointe de la technologie.
          </motion.p>
        </div>

        {/* Loading State - Style moderne */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF2600]"></div>
              <p className="text-gray-600 font-medium">Chargement des articles...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Erreur de chargement</h3>
              <p className="text-gray-600 mb-6">Une erreur est survenue lors du chargement des articles.</p>
              <button
                onClick={() => {
                  setError(null);
                  setIsLoading(true);
                  client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
                    .then((data: SanityDocument[]) => {
                      setPosts(data);
                      setIsLoading(false);
                    })
                    .catch((error: unknown) => {
                      console.error("Erreur lors du chargement des posts :", error);
                      setError(error instanceof Error ? error.message : "Une erreur est survenue lors du chargement des articles.");
                      setIsLoading(false);
                    });
                }}
                className="bg-[#FF2600] hover:bg-[#FF4500] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Réessayer</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aucun article</h3>
              <p className="text-gray-600">Aucun article disponible pour le moment.</p>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </motion.div>
        )}

        {/* Load More Button - Style moderne */}
        {hasMorePosts && !isLoading && (
          <motion.div 
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF2600] transition-colors duration-300 group"
            >
              {showAll ? "Voir moins d'articles" : "Charger plus d'articles"}
              <svg
                className={`ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}