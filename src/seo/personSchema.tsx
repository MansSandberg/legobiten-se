const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Måns Sandberg",
  "jobTitle": "Systemutvecklare",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SE",
    "addressLocality": "Nässjö"
  },
  "birthDate": "1997-08-24",
  "gender": "Male",
  "workLocation": {
    "@type": "Place",
    "name": "Jordbruksverket",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SE",
      "addressLocality": "Jönköping"
    }
  }
};

export default personSchema;
