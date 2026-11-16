"use client";
import { useEffect, useState } from "react";

const LINKS = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["contact", "Contact"],
] as const;

export default function Nav({ name, resume }: { name: string; resume: string }) {
  const [active, setActive] = useState("");

  // Highlight the current section in the nav
  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section.block").forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <a href="#top" className="nav-name">
          <i aria-hidden="true">
            <b style={{ background: "#f5b942" }} />
            <b style={{ background: "#5bb4f5" }} />
            <b style={{ background: "#6fd3a8" }} />
          </i>
          <span>{name}</span>
        </a>
        <ul className="nav-links">
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "is-on" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        {resume && (
          <a className="nav-cta" href={resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        )}
      </div>
    </nav>
  );
}
