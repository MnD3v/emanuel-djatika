import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog",
  description: "Découvrez les articles, tutoriels et réflexions d'Emanuel DJATIKA sur le développement web, l'architecture logicielle et la technologie.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
