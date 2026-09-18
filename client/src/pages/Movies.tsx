import { useEffect, useState } from "react";
import { ArrowLeft, Clapperboard, Search, SlidersHorizontal, X } from "lucide-react";
import { Link } from "wouter";
import MovieCard, { MovieModal, type Show } from "../components/MovieCard";

const API = "https://api.tvmaze.com";
const fallbackShows: Show[] = [
  { id: 1, name: "The Last of Us", premiered: "2023-01-15", rating: { average: 8.8 }, genres: ["Drama", "Action"], image: { medium: "https://static.tvmaze.com/uploads/images/medium_portrait/455/1138652.jpg" }, summary: "Twenty years after modern civilization has been destroyed, a hardened survivor is tasked with transporting a teenager across the United States." },
  { id: 2, name: "Severance", premiered: "2022-02-18", rating: { average: 8.7 }, genres: ["Drama", "Mystery"], image: { medium: "https://static.tvmaze.com/uploads/images/medium_portrait/445/1117208.jpg" }, summary: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives." },
  { id: 3, name: "The Bear", premiered: "2022-06-23", rating: { average: 8.5 }, genres: ["Comedy", "Drama"], image: { medium: "https://static.tvmaze.com/uploads/images/medium_portrait/500/1250703.jpg" }, summary: "A young chef from the fine dining world returns to Chicago to run his family sandwich shop." },
  { id: 4, name: "Dark", premiered: "2017-12-01", rating: { average: 8.7 }, genres: ["Drama", "Mystery"], image: { medium: "https://static.tvmaze.com/uploads/images/medium_portrait/453/1132942.jpg" }, summary: "A missing child sets four families on a frantic hunt for answers as they uncover a mind-bending mystery." },
];

export default function Movies() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState<Show[]>([]);
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      setError(false);
      try {
        const endpoint = query.trim().length > 1 ? `${API}/search/shows?q=${encodeURIComponent(query.trim())}` : `${API}/shows`;
        const response = await fetch(endpoint, { signal: controller.signal });
        if (!response.ok) throw new Error("Unable to load titles");
        const data = await response.json();
        const results = query.trim().length > 1 ? data.map((item: { show: Show }) => item.show) : data;
        setShows(results.slice(0, 24));
      } catch (requestError) {
        if ((requestError as Error).name !== "AbortError") { setError(true); setShows(fallbackShows); }
      } finally { setLoading(false); }
    }, query.trim().length > 1 ? 350 : 0);
    return () => { controller.abort(); window.clearTimeout(timer); };
  }, [query]);

  return (
    <div className="site-shell explorer-shell">
      <header className="site-header explorer-header">
        <Link href="/" className="brand" aria-label="CineScope home"><span className="brand-mark"><Clapperboard size={18} strokeWidth={2.5} /></span><span>Cine<span>Scope</span></span></Link>
        <nav className="desktop-nav"><Link href="/">Home</Link><span className="nav-current">Explorer</span></nav>
        <Link href="/" className="header-back"><ArrowLeft size={16} /> Back home</Link>
      </header>

      <main className="explorer-main">
        <section className="explorer-intro"><div><p className="section-kicker">The library / 2026</p><h1>Find your<br /><em>next obsession.</em></h1></div><p className="explorer-note">Search the TVMaze catalogue and open any title for the full story.</p></section>
        <section className="search-zone" aria-label="Movie search">
          <div className="search-field"><Search size={21} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by movie or show title..." aria-label="Search by movie or show title" />{query && <button onClick={() => setQuery("")} aria-label="Clear search"><X size={17} /></button>}</div>
          <div className="search-tools"><span>{loading ? "Updating library..." : `${shows.length} titles found`}</span><span className="tool-divider" /><span><SlidersHorizontal size={14} /> TVMaze catalogue</span></div>
        </section>

        {error && <div className="api-note">The live catalogue is taking a moment. Showing a few saved picks while we reconnect.</div>}
        {loading ? <div className="movie-grid">{Array.from({ length: 8 }).map((_, index) => <div className="skeleton-card" key={index}><div className="skeleton-poster" /><div className="skeleton-line" /><div className="skeleton-line short" /></div>)}</div> : shows.length ? <div className="movie-grid">{shows.map((show) => <MovieCard key={show.id} show={show} onDetails={setSelectedShow} />)}</div> : <div className="empty-state"><span>∅</span><h2>No titles found</h2><p>Try a different search term and keep exploring.</p></div>}
      </main>

      <footer className="site-footer"><Link href="/" className="brand footer-brand"><span className="brand-mark"><Clapperboard size={18} /></span><span>Cine<span>Scope</span></span></Link><p>Powered by the TVMaze public API</p><p>© 2026 CineScope</p></footer>
      {selectedShow && <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />}
    </div>
  );
}
