import { ArrowLeft, Clapperboard } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <div className="site-shell" style={{ minHeight: "100vh" }}><header className="site-header"><Link href="/" className="brand"><span className="brand-mark"><Clapperboard size={18} /></span><span>Cine<span>Scope</span></span></Link></header><main className="empty-state"><span>404</span><h2>Page not found</h2><p>The page you are looking for does not exist.</p><Link href="/" className="button button-dark" style={{ marginTop: "24px" }}><ArrowLeft size={16} /> Go home</Link></main></div>;
}
