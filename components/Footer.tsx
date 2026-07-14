import BrandMark from "./BrandMark";
import { CONTACT, PILLARS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <BrandMark />
            <div className="word">Prince Aviation</div>
            <p>
              Private charter, aircraft maintenance, pilot academy and technical
              training — one uncompromising standard, based in Belgrade.
            </p>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <h4>Services</h4>
              {PILLARS.map((p) => (
                <a key={p.id} href={`#${p.id}`}>
                  {p.eyebrow.replace(" · ", " / ")}
                </a>
              ))}
            </div>
            <div className="footer__col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#fleet">Fleet</a>
              <a href="#aog">AOG support</a>
              <a href="#top">Careers</a>
            </div>
            <div className="footer__col">
              <h4>Contact</h4>
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <p>{CONTACT.base}</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Prince Aviation. All rights reserved.</span>
          <span>Belgrade · Serbia · LYBE / BEG</span>
        </div>
      </div>
    </footer>
  );
}
