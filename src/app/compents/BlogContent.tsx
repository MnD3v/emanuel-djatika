"use client";

import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { portableTextComponents } from "./portable-text-components";

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
                <div className="mb-10 overflow-hidden rounded-sm border border-white/10 sketchy-box border-neon-blue">
                    <img
                        src={post.mainImage}
                        alt={post.title}
                        className="w-full h-[400px] md:h-[500px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight font-handwritten">
                {post.title}
            </h1>
            <p className="text-neon-blue mb-12 font-bold tracking-widest text-sm uppercase">
                {formatDate(post.publishedAt)}
            </p>

            <article className="prose prose-invert max-w-none prose-lg text-gray-300">
                <PortableText
                    value={post.body}
                    components={portableTextComponents}
                />
            </article>

            {post.author && (
                <div className="flex items-center gap-4 mt-16 mb-16 p-6 rounded-sm bg-white/5 border border-white/10">
                    {post.author.image?.asset?.url && (
                        <div className="border border-white/20 rounded-full p-1 flex-shrink-0">
                            <Image
                                src={post.author.image.asset.url}
                                alt={post.author.name}
                                width={70}
                                height={70}
                                className="w-[60px] h-[60px] object-cover rounded-full"
                            />
                        </div>
                    )}
                    <div className="flex flex-col justify-center">
                        <p className="font-bold text-white text-lg">{post.author.name}</p>
                        {post.author.bio && (
                            <div className="text-gray-400 text-sm">
                                <PortableText
                                    value={post.author.bio}
                                    components={portableTextComponents}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {relatedPosts.length > 0 && (
                <section className="mt-20 pt-12 border-t border-white/10">
                    <h2 className="text-3xl font-bold mb-10 text-center text-white font-handwritten transform -rotate-1">
                        Autres articles
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {relatedPosts.map((relatedPost) => (
                            <Link
                                href={`/blog/${relatedPost.slug.current}`}
                                key={relatedPost._id}
                                className="group block sketchy-box p-4 bg-background/50 border-white/20 hover:border-neon-green transition-all"
                                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                            >
                                {relatedPost.mainImage && (
                                    <div className="relative h-48 w-full overflow-hidden mb-4 border-b border-white/10">
                                        <div className="absolute inset-0 bg-neon-green/0 group-hover:bg-neon-green/10 transition-colors z-10 pointer-events-none" />
                                        <img
                                            src={relatedPost.mainImage}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                )}
                                <div className="p-2">
                                    <h3 className="text-lg font-bold mb-2 line-clamp-2 text-white group-hover:text-neon-green transition-colors leading-tight">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">
                                        {formatDate(relatedPost.publishedAt)}
                                    </p>
                                    <p className="text-white text-sm font-bold group-hover:text-neon-green transition-colors inline-flex items-center">
                                        Lire l'article <span className="ml-2">→</span>
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
} 