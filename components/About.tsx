import { PROFILE as P } from "@/data/profile";

export default function About() {
  return (
    <section className="block" id="about" aria-labelledby="about-h">
      <div className="sec-head">
        <span className="sec-num">01</span>
        <h2 id="about-h">About me</h2>
      </div>
      <div className="about">
        <div className="reveal">
          {P.about.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <h3 className="sub-h">Achievements</h3>
          <ul className="plain-list">
            {P.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h3 className="sub-h">Interests</h3>
          <ul className="chips chips-flat">
            {P.hobbies.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div className="reveal side-stack">
          <div className="edu">
            <h3>Education</h3>
            <div style={{ padding: 0, border: 0 }}>
              {P.education.map(([title, sub]) => (
                <div key={title}>
                  <b>{title}</b>
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="edu">
            <h3>Certifications</h3>
            <div style={{ padding: 0, border: 0 }}>
              {P.certifications.map(([title, sub]) => (
                <div key={title}>
                  <b>{title}</b>
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
