"use client"
import { type SanityDocument } from "next-sanity";
import { client } from "@/app/sanity/client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppBar from "./app_bar";
import BlogCard from "./BlogCard";

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

export default function BlogList({ isHome }: { isHome?: boolean }) {
    const [posts, setPosts] = useState<SanityDocument[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des posts :", error);
                setError(error instanceof Error ? error.message : "Une erreur est survenue lors du chargement des articles.");
                setIsLoading(false);
            });
    }, []);

    const displayedPosts = showAll ? posts : posts.slice(0, 6);
    const hasMorePosts = posts.length > 6;

    return (
        <section className="py-2">
            {!isHome && <AppBar fixed={true} logo="/logo.png" menuIcon="/icons/menu.png" />}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                {/* Header Section */}
                <div className="mb-12 md:text-left text-center">
                    <span className="text-emerald-500 font-semibold tracking-wider text-sm uppercase block mb-3">Partage de connaissances</span>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-6">
                        Dernières Publications
                    </motion.h2>
                </div>

                {/* Loading / Error States */}
                {isLoading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"></div>
                    </div>
                ) : error ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400 mb-6 text-lg">{error}</p>
                        <button
                            onClick={() => {
                                setError(null);
                                setIsLoading(true);
                                window.location.reload();
                            }}
                            className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                        >
                            Réessayer
                        </button>
                    </div>
                ) : posts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">Aucun article disponible pour le moment.</p>
                    </div>
                ) : (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {displayedPosts.map((post) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </motion.div>
                )}

                {/* Load More Button */}
                {hasMorePosts && !isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-16"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center px-8 py-3.5 bg-white/5 text-white font-semibold border border-white/10 rounded-lg hover:bg-white/10 transition-colors shadow-sm"
                        >
                            <span>{showAll ? "Voir moins d'articles" : "Charger plus d'articles"}</span>
                            <svg
                                className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
