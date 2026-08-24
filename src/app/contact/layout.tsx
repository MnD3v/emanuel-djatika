import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Emanuel DJATIKA pour discuter de vos projets, d'une collaboration ou de services en développement web et mobile.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
