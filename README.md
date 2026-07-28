# Legobiten

En personlig portfolio för Måns Sandberg. Webbplatsen berättar om vägen från
LEGO-intresset och de första egna webbsidorna till dagens arbete som
systemutvecklare, och samlar utvalda projekt.

## Innehåll

- **Hem** – startsida.
- **Om** – en tidslinje över utvecklarresan, med bilder från tidigare
  webbplatser.
- **Projekt** – utvalda hobby- och webbutvecklingsprojekt.
- **CV** och **Kontakt** – separata sidor som kan byggas ut med mer innehåll.

## Teknik

- React 19 och TypeScript
- Vite
- React Router
- `react-vertical-timeline-component`
- ESLint

## Kom igång

Förutsätter en aktuell LTS-version av Node.js (Node 20 eller senare) och npm.

```bash
npm install
npm run dev
```

Vite skriver ut den lokala adressen i terminalen, normalt
<http://localhost:5173>.

## Kommandon

| Kommando | Beskrivning |
| --- | --- |
| `npm run dev` | Startar utvecklingsservern. |
| `npm run build` | Typkontrollerar och bygger en produktionsversion i `dist/`. |
| `npm run lint` | Kör ESLint. |
| `npm run preview` | Förhandsvisar den byggda produktionsversionen. |

## Struktur

```text
src/
  App.tsx          Navigation och routing
  Hem.tsx          Startsida
  Om.tsx           Presentation och tidslinje
  Projekt.tsx      Projektöversikt
  ProjektItem.tsx  Återanvändbart projektkort
  CV.tsx           CV-sida
  Kontakt.tsx      Kontaktsida
public/bilder/     Bilder som används på webbplatsen
```

## Utveckling

Sidor och routes definieras i `src/App.tsx`. Lägg projekt i `src/Projekt.tsx`
med komponenten `ProjektItem`. Statiska bilder placeras i `public/bilder/` och
refereras sedan med sökvägar som `/bilder/filnamn.png`.
