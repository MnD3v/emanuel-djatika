"use client";

import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { portableTextComponents } from "./portable-text-components";
import FixedAppBar from "./fixed_app_bar";
import { motion } from "framer-motion";

interface BlogContentProps {
    post: {
        title: string;
        publishedAt: string;
        mainImage?: string;
        body: PortableTextBlock[];
        author?: {
            name: string;
            bio?: PortableTextBlock[];
            image?: {
                asset: {
                    url: string;
                };
            };
        };
    };
    relatedPosts: Array<{
        _id: string;
        title: string;
        slug: { current: string };
        publishedAt: string;
        mainImage?: string;
    }>;
}

export default function BlogContent({ post, relatedPosts }: BlogContentProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-3 md:p-8">
            {post.mainImage && (
                <div className="mb-12 relative group">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                        <img
                            src={post.mainImage}
                            alt={post.title}
                            className="w-full h-[450px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-6 left-6">
                            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-[#FF2600] rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-700">Article</span>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-6 right-6">
                            <div className="bg-[#FF2600] text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                LafiaTech
                            </div>
                        </div>
                    </div>
                    
                    {/* Image caption/description */}
                    <div className="mt-4 text-center">
                        <p className="text-gray-500 text-sm font-dm-sans italic">
                            Image principale de l'article
                        </p>
                    </div>
                </div>
            )}

            <motion.h1 
                initial={{ filter: "blur(20px)", opacity: 0 }}
                animate={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black font-dm-sans leading-tight"
            >
                {post.title}
            </motion.h1>
            <p className="text-black mb-12 font-dm-sans text">
                {formatDate(post.publishedAt)}
            </p>

            <article className="text-black  max-w-none font-dm-sans">
                <PortableText 
                    value={post.body} 
                    components={portableTextComponents}
                />
            </article>

            {post.author && (
                <div className="mt-16 mb-16">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-[#FF2600]/5 transition-all duration-300">
                        <div className="flex items-start gap-6">
                            {post.author.image?.asset?.url && (
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#FF2600]/10 to-[#FF2600]/20 rounded-2xl p-1">
                                        <Image
                                            src={post.author.image.asset.url}
                                            alt={post.author.name}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-dm-sans">
                                        {post.author.name}
                                    </h3>
                                    <div className="w-2 h-2 bg-[#FF2600] rounded-full"></div>
                                    <span className="text-sm text-gray-500 font-dm-sans">Auteur</span>
                                </div>
                                {post.author.bio && (
                                    <div className="text-gray-600 leading-relaxed font-dm-sans">
                                        <PortableText 
                                            value={post.author.bio} 
                                            components={portableTextComponents}
                                        />
                                    </div>
                                )}
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-[#FF2600]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                        <span>Expert LafiaTech</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <svg className="w-4 h-4 text-[#FF2600]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        </svg>
                                        <span>Vérifié</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {relatedPosts.length > 0 && (
                <section className="mt-16 pt-8 border-t border-gray-200">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-dm-sans mb-4">
                            Autres <span className="text-[#FF2600]">articles</span>
                        </h2>
                        <p className="text-gray-600 font-dm-sans">
                            Découvrez d'autres articles qui pourraient vous intéresser
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {relatedPosts.map((relatedPost) => (
                            <Link
                                href={`/blog/${relatedPost.slug.current}`}
                                key={relatedPost._id}
                                className="group block rounded-2xl overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:border-[#FF2600] hover:shadow-lg hover:shadow-[#FF2600]/5 hover:-translate-y-1"
                            >
                                {relatedPost.mainImage && (
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <img
                                            src={relatedPost.mainImage}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                )}
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-3 line-clamp-2 text-gray-900 group-hover:text-[#FF2600] transition-colors font-dm-sans">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4 font-dm-sans">
                                        {formatDate(relatedPost.publishedAt)}
                                    </p>
                                    <div className="flex items-center text-[#FF2600] text-sm font-medium group-hover:text-[#FF4500] transition-colors">
                                        <span>Lire l'article</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
} 