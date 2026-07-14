export default function Intro() {
  return (
    <section className="intro" id="about">
      <div className="container intro__grid">
        <h2 className="intro__statement reveal">
          One operator. The whole of business aviation, <b>owned end to end.</b>
        </h2>
        <div className="intro__body">
          <p className="reveal">
            Most of the industry hands your aircraft between brokers, hangars and
            schools. Prince Aviation keeps it together — we fly the missions,
            maintain the jets, and train the pilots and engineers who make it
            possible. Nothing is outsourced, so nothing gets lost between hands.
          </p>
          <p className="reveal">
            From our base at Belgrade Nikola Tesla Airport, that single line of
            accountability is what a high-profile client, an aircraft owner, or a
            future captain is really buying.
          </p>
          <div className="intro__stats reveal">
            <div className="intro__stat">
              <div className="n">04</div>
              <div className="l">Disciplines, one roof</div>
            </div>
            <div className="intro__stat">
              <div className="n">24/7</div>
              <div className="l">AOG response</div>
            </div>
            <div className="intro__stat">
              <div className="n">BEG</div>
              <div className="l">Belgrade home base</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
