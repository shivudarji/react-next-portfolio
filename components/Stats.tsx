import { PROFILE as P } from "@/data/profile";

export default function Stats() {
  return (
    <ul className="stats reveal" aria-label="Highlights">
      {P.stats.map(([n, l]) => (
        <li key={l}>
          <b>{n}</b>
          <span>{l}</span>
        </li>
      ))}
    </ul>
  );
}
