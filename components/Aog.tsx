import { CONTACT } from "@/lib/site";

export default function Aog() {
  return (
    <section className="aog" id="aog">
      <div className="container aog__grid">
        <div>
          <span className="aog__tag">
            <span className="dot" />
            AOG · 24/7 · 365
          </span>
          <h2 className="reveal">Aircraft on ground? We move now.</h2>
          <p className="reveal">
            One call connects you directly to our AOG support team — engineers,
            parts and dispatch on standby around the clock. Tap once; we take it
            from there.
          </p>
        </div>
        <div className="aog__panel reveal">
          <div className="aog__actions">
            <a className="btn btn--light" href={CONTACT.aogHref}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.56 3.5 1 1 0 01-.24 1z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
              Call AOG support
            </a>
            <a
              className="btn btn--wa"
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 2a8 8 0 11-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0112 4zm4.5 10.9c-.2.6-1.2 1.1-1.7 1.2-.4 0-1 .1-1.6-.1a10.7 10.7 0 01-4.9-4.3c-.4-.6-.6-1.3-.6-1.9 0-.6.3-1.1.5-1.3.2-.2.4-.3.6-.3h.4c.2 0 .3 0 .5.4l.6 1.4c0 .2.1.3 0 .5l-.3.4-.3.3c-.1.1-.2.2-.1.4.2.4.7 1.1 1.3 1.6.7.6 1.3.8 1.6.9.2.1.4.1.5-.1l.5-.6c.2-.2.3-.2.5-.1l1.4.7c.2.1.4.2.4.3.1.2.1.5 0 .8z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <div className="aog__direct">
            <a href={CONTACT.aogHref}>{CONTACT.aogDisplay}</a>
            <span>Direct AOG line · answered around the clock</span>
          </div>
        </div>
      </div>
    </section>
  );
}
