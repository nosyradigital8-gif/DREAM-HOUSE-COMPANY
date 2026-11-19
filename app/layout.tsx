import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dream-house-company.example"),
  title: "Dream House Company | Construction, Renovation & Interior Finishing Ghana",
  description: "Dream House Company provides construction, renovation, custom furniture, roofing, tiling and interior finishing services in Ghana and beyond.",
  keywords: ["construction company in Ghana", "home renovation Ghana", "custom furniture Ghana", "roofing services Ghana", "interior finishing Ghana", "Assin Foso construction"],
  openGraph: {
    title: "Dream House Company | Building. Renovating. Finishing to Perfection.",
    description: "Quality construction, custom furniture, roofing, tiling and interior finishing in Ghana and beyond.",
    type: "website",
    images: ["/images/furniture/tv-unit.jpg"],
  },
  icons: { icon: "/images/branding/dream-house-favicon.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DREAM HOUSE COMPANY",
    description: "Construction, renovation, custom furniture, roofing, tiling and interior finishing services.",
    telephone: "+233245373859",
    address: { "@type": "PostalAddress", addressLocality: "Assin Foso Central", addressCountry: "GH" },
    areaServed: ["Ghana", "Global"],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
