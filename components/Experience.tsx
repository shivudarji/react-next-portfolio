import { PROFILE as P } from "@/data/profile";

export default function Experience() {
  return (
    <section className="block" id="experience" aria-labelledby="exp-h">
      <div className="sec-head">
        <span className="sec-num">04</span>
        <h2 id="exp-h">Experience</h2>
      </div>
      <div className="route">
        {P.experience.map((x) => (
          <div key={`${x.role}-${x.when}`} className="stop reveal">
            <span className="dot" />
            <div className="stop-card">
              <div className="stop-head">
                <h3>{x.role}</h3>
                <span>{x.when}</span>
              </div>
              <p className="stop-org">{x.org}</p>
              <ul>
                {x.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
