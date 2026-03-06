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
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">
                {post.title}
            </h1>
            <p className="text-emerald-500 mb-10 font-semibold tracking-wider text-sm uppercase">
                Publié le {formatDate(post.publishedAt)}
            </p>

            {post.mainImage && (
                <div className="mb-12 overflow-hidden rounded-2xl border border-white/5 shadow-xl">
                    <img
                        src={post.mainImage}
                        alt={post.title}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                </div>
            )}

            <article className="prose prose-invert max-w-none prose-lg text-gray-300">
                <PortableText
                    value={post.body}
                    components={portableTextComponents}
                />
            </article>

            {post.author && (
                <div className="flex items-center gap-6 mt-16 mb-16 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                    {post.author.image?.asset?.url && (
                        <div className="border border-white/10 rounded-full p-1 flex-shrink-0 bg-background">
                            <Image
                                src={post.author.image.asset.url}
                                alt={post.author.name}
                                width={80}
                                height={80}
                                className="w-[70px] h-[70px] object-cover rounded-full"
                            />
                        </div>
                    )}
                    <div className="flex flex-col justify-center">
                        <p className="font-bold text-white text-xl mb-1">{post.author.name}</p>
                        {post.author.bio ? (
                            <div className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                                <PortableText
                                    value={post.author.bio}
                                    components={portableTextComponents}
                                />
                            </div>
                        ) : (
                            <p className="text-gray-400 text-sm">Auteur de l'article</p>
                        )}
                    </div>
                </div>
            )}

            {relatedPosts.length > 0 && (
                <section className="mt-20 pt-16 border-t border-white/5">
                    <h2 className="text-3xl font-bold mb-10 text-white tracking-tight">
                        Autres articles
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {relatedPosts.map((relatedPost) => (
                            <Link
                                href={`/blog/${relatedPost.slug.current}`}
                                key={relatedPost._id}
                                className="group block p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-300"
                            >
                                {relatedPost.mainImage ? (
                                    <div className="relative h-48 w-full overflow-hidden mb-4 rounded-lg bg-white/5">
                                        <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors z-10 pointer-events-none" />
                                        <img
                                            src={relatedPost.mainImage}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-48 w-full mb-4 rounded-lg bg-white/5 flex items-center justify-center">
                                        <span className="text-gray-500 text-sm font-medium">Article</span>
                                    </div>
                                )}
                                <div className="p-2">
                                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                                        {formatDate(relatedPost.publishedAt)}
                                    </p>
                                    <h3 className="text-lg font-bold mb-4 line-clamp-2 text-white group-hover:text-emerald-400 transition-colors leading-snug">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm font-medium group-hover:text-emerald-400 transition-colors inline-flex items-center">
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