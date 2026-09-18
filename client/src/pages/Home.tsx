import { ArrowRight, Clapperboard, Compass, Play, Sparkles } from "lucide-react";
import { Link } from "wouter";

const featureShows = [
  {
    title: "The Last of Us",
    meta: "Drama · 2023",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/455/1138652.jpg",
  },
  {
    title: "Severance",
    meta: "Mystery · 2022",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/445/1117208.jpg",
  },
  {
    title: "The Bear",
    meta: "Comedy · 2022",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/500/1250703.jpg",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link href="/" className="brand" aria-label="CineScope home">
          <span className="brand-mark"><Clapperboard size={18} strokeWidth={2.5} /></span>
          <span>Cine<span>Scope</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <Link href="/movies">Browse titles</Link>
        </nav>
        <Link href="/movies" className="header-cta">
          Open explorer <ArrowRight size={16} />
        </Link>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow"><span className="eyebrow-dot" /> Your next great watch is closer than you think</div>
            <h1>Find a story<br /><em>worth staying up for.</em></h1>
            <p className="hero-copy">A thoughtful little corner of the internet for exploring shows, following sparks of curiosity, and finding the one that fits tonight.</p>
            <div className="hero-actions">
              <Link href="/movies" className="button button-primary">Explore the library <ArrowRight size={18} /></Link>
              <a href="#how-it-works" className="text-link"><Play size={15} fill="currentColor" /> See how it works</a>
            </div>
          </div>
          <div className="hero-aside" aria-hidden="true">
            <span className="side-label">CINESCOPE / 001</span>
            <span className="side-line" />
            <span className="side-label">CURATED FOR CURIOUS MINDS</span>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="intro-strip" id="how-it-works">
          <div className="intro-number">01</div>
          <div>
            <p className="section-kicker">A better way to browse</p>
            <h2>Less scrolling.<br /><span>More discovering.</span></h2>
          </div>
          <p className="intro-description">CineScope connects you with thousands of TVMaze titles through a clean, quick, and distraction-free experience. Search a mood, a name, or simply wander.</p>
        </section>

        <section className="peek-section">
          <div className="section-heading">
            <div><p className="section-kicker">A few good places to start</p><h2>On our radar</h2></div>
            <Link href="/movies" className="text-link dark-link">View all titles <ArrowRight size={16} /></Link>
          </div>
          <div className="feature-grid">
            {featureShows.map((show, index) => (
              <Link href="/movies" className={`feature-card feature-card-${index + 1}`} key={show.title}>
                <img src={show.image} alt={show.title} />
                <div className="feature-overlay" />
                <div className="feature-copy"><span>{show.meta}</span><h3>{show.title}</h3><span className="feature-arrow"><ArrowRight size={17} /></span></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="promise-section">
          <div className="promise-ornament"><Sparkles size={26} /></div>
          <p className="section-kicker">Made for the in-between moments</p>
          <h2>There is always<br /><em>something worth watching.</em></h2>
          <Link href="/movies" className="button button-dark">Start exploring <Compass size={17} /></Link>
        </section>
      </main>

      <footer className="site-footer">
        <Link href="/" className="brand footer-brand"><span className="brand-mark"><Clapperboard size={18} /></span><span>Cine<span>Scope</span></span></Link>
        <p>Explore well. Watch better.</p>
        <p>© 2026 CineScope</p>
      </footer>
    </div>
  );
}
