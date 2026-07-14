"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import { NAV_LINKS, CONTACT } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <a className="nav__brand" href="#top" aria-label="Prince Aviation home">
          <BrandMark />
          <span>
            Prince Aviation
            <small>Business Aviation · Belgrade</small>
          </span>
        </a>

        <nav aria-label="Primary">
          <ul className="nav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__cta">
          <a className="nav__aog" href={CONTACT.aogHref}>
            <span className="dot" />
            AOG 24/7
          </a>
          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <small>{l.index}</small>
            {l.label}
          </a>
        ))}
        <a href={CONTACT.aogHref} onClick={() => setOpen(false)}>
          <small>SOS</small>AOG 24/7
        </a>
      </div>
    </>
  );
}
