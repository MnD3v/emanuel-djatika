import { client } from "../../sanity/client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { PortableTextBlock } from "@portabletext/react";
import BlogContent from "../../compents/BlogContent";
import FixedAppBar from "@/app/compents/fixed_app_bar";

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
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
}

interface RelatedPost {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage?: string;
}

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  "mainImage": mainImage.asset->url,
  body,
  author->{
    name,
    image { asset->{ url } },
    bio
  }
}`;

const RELATED_POSTS_QUERY = groq`*[_type == "post" && slug.current != $slug && defined(slug.current)]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  publishedAt,
  "mainImage": mainImage.asset->url
}`;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    try {
        const resolvedParams = await params;
        const { slug } = resolvedParams;

        const [post, relatedPosts] = await Promise.all([
            client.fetch<Post | null>(POST_QUERY, { slug }),
            client.fetch<RelatedPost[]>(RELATED_POSTS_QUERY, { slug })
        ]);

        if (!post) {
            return notFound();
        }

        return (
            <div className="font-dm-sans">
            <FixedAppBar fixed={true} />

                <main className="min-h-screen pt-16 pb-16">

                    <BlogContent post={post} relatedPosts={relatedPosts} />
                </main>
            </div>
        );
    } catch (error) {
        console.error('Error fetching post:', error);
        return notFound();
    }
}


