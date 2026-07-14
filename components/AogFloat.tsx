"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site";

export default function AogFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`aog-float${open ? " is-open" : ""}`}>
      <div className="aog-float__panel">
        <a className="aog-float__link" href={CONTACT.aogHref}>
          <span className="ic ic--call">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.56 3.5 1 1 0 01-.24 1z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            Call AOG desk
            <small>{CONTACT.aogDisplay}</small>
          </span>
        </a>
        <a
          className="aog-float__link"
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="ic ic--wa">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm0 2a8 8 0 11-4.2 14.8l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0112 4zm4.5 10.9c-.2.6-1.2 1.1-1.7 1.2-.4 0-1 .1-1.6-.1a10.7 10.7 0 01-4.9-4.3c-.4-.6-.6-1.3-.6-1.9 0-.6.3-1.1.5-1.3.2-.2.4-.3.6-.3h.4c.2 0 .3 0 .5.4l.6 1.4c0 .2.1.3 0 .5l-.3.4-.3.3c-.1.1-.2.2-.1.4.2.4.7 1.1 1.3 1.6.7.6 1.3.8 1.6.9.2.1.4.1.5-.1l.5-.6c.2-.2.3-.2.5-.1l1.4.7c.2.1.4.2.4.3.1.2.1.5 0 .8z" />
            </svg>
          </span>
          <span>
            WhatsApp
            <small>Message our team</small>
          </span>
        </a>
      </div>
      <button
        className="aog-float__toggle"
        aria-expanded={open}
        aria-label="Open AOG emergency contact"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="dot" />
        {open ? "CLOSE" : "AOG 24/7"}
      </button>
    </div>
  );
}
