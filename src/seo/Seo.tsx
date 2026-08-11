import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
  image?: string;
  type?: string;
}

export default function Seo({
  title,
  description,
  canonical,
  schema,
  image = "/favicon.png",
  type = "website",
}: SeoProps) {
  const fullTitle = title.includes("Legobiten")
    ? title
    : `${title} | Legobiten`;
  const canonicalUrl = canonical ?? "https://legobiten.se";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#4d9683" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Måns Sandberg | Legobiten" />
      <meta property="og:locale" content="sv_SE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
