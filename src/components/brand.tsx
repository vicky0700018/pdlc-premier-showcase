import { Link } from "@tanstack/react-router";

export function Logo({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return <Link to="/" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="PDLC home"><span className="brand-mark"><i>P</i><i>D</i><i>L</i><i>C</i></span>{!compact && <span className="brand-full">PD Learning Curve<small>You trust. We care.</small></span>}</Link>;
}