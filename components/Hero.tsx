import { PROFILE as P } from "@/data/profile";
import Icon from "./Icon";

export default function Hero() {
  const socials = Object.entries(P.socials).filter(([, url]) => url);

  return (
    <header className="hero">
      <div>
        {P.available && <p className="badge">Available for work</p>}
        <h1>{P.name}</h1>
        <p className="role">{P.role}</p>
        <p className="intro">{P.intro}</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#projects">
            <Icon name="projects" />
            View projects
          </a>
          {P.resume && (
            <a className="btn btn-ghost" href={P.resume} target="_blank" rel="noopener noreferrer">
              <Icon name="download" />
              Résumé
            </a>
          )}
        </div>
        <ul className="socials" aria-label="Social profiles">
          {socials.map(([label, url]) => (
            <li key={label}>
              <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
            </li>
          ))}
          {P.email && (
            <li>
              <a href={`mailto:${P.email}`}>Email</a>
            </li>
          )}
        </ul>
      </div>

      <aside className="profile-card reveal" aria-label="Profile summary">
        <div className="profile-top">
          <div className="avatar">
            {P.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={P.photo} alt={P.name} />
            ) : (
              P.initials
            )}
          </div>
          <div>
            <b>{P.name}</b>
            <span>{P.location}</span>
          </div>
        </div>
        <dl className="facts">
          {P.facts.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </header>
  );
}
