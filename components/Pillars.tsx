import Image from "next/image";
import { PILLARS } from "@/lib/site";
import FlightPath from "./FlightPath";

export default function Pillars() {
  return (
    <div className="pillars" id="services">
      <FlightPath trigger=".pillars" />
      {PILLARS.map((p) => (
        <section
          key={p.id}
          id={p.id}
          className={`pillar pillar--${p.side}`}
          aria-labelledby={`${p.id}-title`}
        >
          <div className="pillar__media">
            <Image
              src={p.image}
              alt={p.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="pillar__scrim" />
          <div className="pillar__inner container">
            <div className="pillar__box">
              <span className="pillar__index reveal">
                {p.index} — {p.eyebrow}
              </span>
              <h2 id={`${p.id}-title`} className="pillar__title reveal">
                {p.title}
              </h2>
              <p className="pillar__desc reveal">{p.desc}</p>
              <ul className="pillar__list reveal">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="pillar__actions reveal">
                <a className="btn btn--ghost" href="#contact">
                  Enquire
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
