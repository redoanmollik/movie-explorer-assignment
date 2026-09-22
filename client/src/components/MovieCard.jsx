import { CalendarDays, Star, ArrowUpRight } from "lucide-react";

export function imageFor(show) { return show.image?.original || show.image?.medium || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85"; }

export default function MovieCard({ show, onDetails }) {
  const year = show.premiered ? new Date(show.premiered).getFullYear() : "—";
  const score = show.rating?.average ? show.rating.average.toFixed(1) : "N/A";
  return <article className="movie-card"><button className="poster-button" onClick={() => onDetails(show)} aria-label={`Open details for ${show.name}`}><img src={imageFor(show)} alt={`${show.name} poster`} loading="lazy" /><span className="poster-shade" /><span className="poster-badge"><Star size={12} fill="currentColor" /> {score}</span><span className="poster-open"><ArrowUpRight size={19} /></span></button><div className="movie-card-body"><div className="movie-card-title-row"><h3>{show.name}</h3><span className="movie-year">{year}</span></div><div className="movie-card-meta"><span><CalendarDays size={13} /> {year}</span><span>{show.genres?.[0] || "Series"}</span></div><button className="details-button" onClick={() => onDetails(show)}>See details <ArrowUpRight size={15} /></button></div></article>;
}

export function MovieModal({ show, onClose }) {
  const year = show.premiered ? new Date(show.premiered).getFullYear() : "—";
  const score = show.rating?.average ? show.rating.average.toFixed(1) : "N/A";
  const summary = show.summary?.replace(/<[^>]*>/g, "") || "No overview is available for this title yet.";
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="details-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={onClose} aria-label="Close details">×</button><div className="modal-visual"><img src={imageFor(show)} alt="" /><div className="modal-visual-fade" /><div className="modal-stamp">NOW SHOWING / {String(show.id).padStart(3, "0")}</div></div><div className="modal-content"><p className="section-kicker">Title details</p><h2 id="modal-title">{show.name}</h2><div className="modal-facts"><span className="rating-fact"><Star size={15} fill="currentColor" /> {score}</span><span><CalendarDays size={15} /> {year}</span><span>{show.genres?.join(" · ") || "Series"}</span></div><p className="modal-summary">{summary}</p><div className="modal-extra"><span>Network</span><strong>{show.network?.name || "TVMaze catalogue"}</strong><span>Runtime</span><strong>{show.runtime ? `${show.runtime} min` : "Not listed"}</strong></div><button className="button button-dark modal-action" onClick={onClose}>Close details</button></div></section></div>;
}
