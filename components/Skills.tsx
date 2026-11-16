import type { CSSProperties } from "react";
import { PROFILE as P } from "@/data/profile";

const ACCENTS = ["var(--tide)", "var(--kelp)", "var(--signal)", "var(--rust)"];

export default function Skills() {
  return (
    <section className="block" id="skills" aria-labelledby="skills-h">
      <div className="sec-head">
        <span className="sec-num">02</span>
        <h2 id="skills-h">Skills</h2>
        <p>Tools I use to ship, front to back.</p>
      </div>
      <div className="skills">
        {P.skills.map((g, i) => (
          <div
            key={g.group}
            className="skill reveal"
            style={{ "--accent": ACCENTS[i % ACCENTS.length] } as CSSProperties}
          >
            <h3>
              {g.group}
              <span>{String(g.items.length).padStart(2, "0")}</span>
            </h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
