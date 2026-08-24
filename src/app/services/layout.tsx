import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services",
  description: "Services en développement web, création de sites vitrines, applications sur-mesure et architecture logicielle par Emanuel DJATIKA.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
