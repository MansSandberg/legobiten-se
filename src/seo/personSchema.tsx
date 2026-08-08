const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Måns Sandberg",
  "jobTitle": "Systemutvecklare",
  "url": "https://legobiten.se/",
  "image": "https://legobiten.se/images/profilbild.jpg",
  "description": "Systemutvecklare med erfarenhet av frontend, backend, GIS och modern webbutveckling.",
  "worksFor": {
    "@type": "Organization",
    "name": "Jordbruksverket",
    "url": "https://www.jordbruksverket.se/"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nässjö",
    "addressCountry": "SE"
  },
  "sameAs": [
    "https://github.com/MansSandberg",
    "https://www.linkedin.com/in/m%C3%A5ns-sandberg-199294138/"
  ],
  "knowsAbout": [
    "React",
    "TypeScript",
    "Angular",
    "Java",
    "Jakarta EE",
    "Python",
    "PostgreSQL",
    "Kubernetes",
    "GIS",
    "Web development"
  ]
};

export default personSchema;