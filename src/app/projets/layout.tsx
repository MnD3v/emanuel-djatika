import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projets",
  description: "Explorez le portfolio de projets d'Emanuel DJATIKA, allant de la conception de sites vitrines aux applications SaaS complexes.",
};

export default function ProjetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
