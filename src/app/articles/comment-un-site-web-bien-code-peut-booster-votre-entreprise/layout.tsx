import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Comment un site web bien codé peut booster votre entreprise",
  description: "Découvrez comment un code propre, optimisé et une bonne architecture web peuvent transformer votre site en un véritable atout pour votre entreprise.",
  openGraph: {
    title: "Comment un site web bien codé peut booster votre entreprise",
    description: "Découvrez comment un code propre, optimisé et une bonne architecture web peuvent transformer votre site en un véritable atout pour votre entreprise.",
    type: "article",
    authors: ["Emanuel DJATIKA"],
  }
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
