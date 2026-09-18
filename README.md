# CineScope — Movie Explorer

CineScope is a responsive React movie and TV show explorer built for the Movie Explorer assignment. It uses the free [TVMaze API](https://www.tvmaze.com/api) to load titles, supports live search, and opens a detail modal for each result.

## Assignment features

- Home page with branded navigation, hero banner, call-to-action, feature picks, and footer.
- Dedicated movie listing page with responsive CSS Grid layout.
- Live title search using `GET /search/shows?q=:query`.
- All-show catalogue using `GET /shows`.
- Reusable `MovieCard` component with poster, title, year, rating, genre, and See Details button.
- Responsive details modal with poster, title, overview, rating, release year, genre, network, and runtime.
- Modal closes through the close button or by clicking the backdrop.
- Loading skeletons, empty search state, API fallback content, keyboard-friendly controls, and reduced-motion support.
- Mobile-first layout with two columns on small screens and four columns on desktop.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open the local URL shown by Vite. To create a production build:

```bash
pnpm build
```

## Tech stack

React 19, TypeScript, Vite, Tailwind CSS, Wouter, Lucide React, and the public TVMaze API.

## Project structure

- `client/src/pages/Home.tsx` — landing page.
- `client/src/pages/Movies.tsx` — search and listing page.
- `client/src/components/MovieCard.tsx` — reusable card and details modal.
- `client/src/index.css` — visual system and responsive styles.

## Credits

Show data is provided by the TVMaze public API. The interface and implementation were created for this assignment.
