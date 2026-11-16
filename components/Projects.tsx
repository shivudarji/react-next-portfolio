"use client";
import { useState, type CSSProperties } from "react";
import { PROFILE } from "@/data/profile";
import Icon, { type IconName } from "./Icon";

const CAT_COLOR: Record<string, string> = {
  "Work projects": "var(--signal)",
  "Full stack": "var(--kelp)",
  Frontend: "var(--tide)",
};

function LinkBtn({ kind, url, label, primary }: { kind: IconName; url: string; label: string; primary: boolean }) {
  return (
    <a className={`btn ${primary ? "btn-primary" : "btn-ghost"}`} href={url} target="_blank" rel="noopener noreferrer">
      <Icon name={kind} />
      <span>{label}</span>
    </a>
  );
}

export default function Projects() {
  const projects = PROFILE.projects;
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");

  return (
    <section className="block" id="projects" aria-labelledby="projects-h">
      <div className="sec-head">
        <span className="sec-num">03</span>
        <h2 id="projects-h">Projects</h2>
        <p>Apps, APIs and free learning resources.</p>
      </div>

      <div className="filters" role="group" aria-label="Filter projects">
        {cats.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              className="filter"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
            >
              {`${c} (${count})`}
            </button>
          );
        })}
      </div>

      <div className="projects" aria-live="polite">
        {projects.map((p) => {
          const first = p.live ? "live" : p.pdf ? "pdf" : "code";
          return (
            <article
              key={p.title}
              className="project reveal"
              hidden={active !== "All" && p.category !== active}
              style={{ "--accent": CAT_COLOR[p.category] ?? "var(--signal)" } as CSSProperties}
            >
              <div className="project-door">
                <span className="project-kind">
                  {p.category}
                  {p.duration && <span className="project-dur">{p.duration}</span>}
                  {p.featured && <span className="project-star">★ Featured</span>}
                </span>
                <h3>{p.title}</h3>
              </div>
              <div className="project-body">
                <p>{p.blurb}</p>
                {p.points && (
                  <ul className="project-points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                )}
                <ul className="chips">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {(p.live || p.pdf || p.code) && <div className="links">
                  {p.live && <LinkBtn kind="live" url={p.live} label="Live site" primary={first === "live"} />}
                  {p.pdf && <LinkBtn kind="pdf" url={p.pdf} label="PDF" primary={first === "pdf"} />}
                  {p.code && <LinkBtn kind="code" url={p.code} label="Code" primary={first === "code"} />}
                </div>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
