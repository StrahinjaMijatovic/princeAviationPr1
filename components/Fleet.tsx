/* eslint-disable @next/next/no-img-element */
const FLEET = [
  {
    tail: "YU-FVJ",
    name: "Dassault Falcon 2000",
    klass: "Super-midsize · long range",
    img: "/media/hero-jet.png",
    imgFront: "/media/falcon-front.png",
    specs: [
      { l: "Passengers", v: "up to 10" },
      { l: "Range", v: "~3,350 nm" },
    ],
  },
  {
    tail: "YU-SPC",
    name: "Cessna Citation XLS",
    klass: "Midsize · short-field capable",
    img: "/media/jet-citation.png",
    imgFront: "/media/citation-front.png",
    specs: [
      { l: "Passengers", v: "up to 9" },
      { l: "Range", v: "~1,850 nm" },
    ],
  },
];

export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="container">
        <div className="fleet__head">
          <div>
            <p className="eyebrow reveal">The fleet</p>
            <h2 className="reveal">Aircraft chosen to match the mission.</h2>
          </div>
          <p className="lead reveal">
            A managed line-up of business jets — sized for the route, ready when
            you are. Published type figures shown; exact cabin and range depend
            on configuration.
          </p>
        </div>
        <div className="fleet__grid">
          {FLEET.map((f) => (
            <article
              className={`fleet__card reveal${f.imgFront ? " fleet__card--flip" : ""}`}
              key={f.tail}
            >
              <div className="fleet__plane">
                <img
                  className="is-side"
                  src={f.img}
                  alt={`${f.name}, registration ${f.tail}, side profile`}
                />
                {f.imgFront && (
                  <img
                    className="is-front"
                    src={f.imgFront}
                    alt={`${f.name} front elevation`}
                    loading="lazy"
                  />
                )}
                {f.imgFront && (
                  <span className="fleet__flip">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M3 12a9 9 0 0115.5-6.3M21 12a9 9 0 01-15.5 6.3M18 3v4h-4M6 21v-4h4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Hover · front view
                  </span>
                )}
              </div>
              <span className="fleet__tail">{f.tail}</span>
              <h3>{f.name}</h3>
              <p style={{ color: "var(--ink-muted)", marginTop: ".3rem" }}>
                {f.klass}
              </p>
              <div className="fleet__spec">
                {f.specs.map((s) => (
                  <div key={s.l}>
                    <span>{s.l}</span>
                    <b>{s.v}</b>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
