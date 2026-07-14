"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import BrandMark from "./BrandMark";

const WORD = "PRINCE AVIATION";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finish = () => {
      document.body.classList.remove("is-loading");
      setHidden(true);
      onDone();
    };

    if (prefersReduced) {
      const t = window.setTimeout(finish, 500);
      return () => window.clearTimeout(t);
    }

    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>(".preloader__word span");
      const count = { v: 0 };
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".preloader__mark", {
        scale: 0.4,
        opacity: 0,
        rotate: -120,
        duration: 0.9,
        ease: "power4.out",
      })
        .from(
          letters,
          { yPercent: 110, opacity: 0, duration: 0.7, stagger: 0.03 },
          "-=0.45"
        )
        .from(
          ".preloader__meta",
          { opacity: 0, y: 8, duration: 0.5 },
          "-=0.3"
        )
        .to(
          bar.current,
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: function () {
              const p = Math.round(this.progress() * 100);
              if (counter.current)
                counter.current.textContent = String(p).padStart(3, "0");
            },
          },
          "-=0.2"
        )
        .to(".preloader__inner", { opacity: 0, duration: 0.4 }, "+=0.15")
        .to(
          root.current,
          {
            yPercent: -100,
            duration: 1.05,
            ease: "expo.inOut",
            onComplete: finish,
          },
          "-=0.1"
        );
    }, root);

    return () => ctx.revert();
  }, [onDone]);

  if (hidden) return null;

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="preloader__inner">
        <div className="preloader__lockup">
          <BrandMark className="preloader__mark" />
          <span className="preloader__word" aria-label={WORD}>
            {WORD.split("").map((c, i) => (
              <span key={i}>{c === " " ? " " : c}</span>
            ))}
          </span>
        </div>
        <div className="preloader__meta">
          <span>BEG · BELGRADE</span>
          <span>CLEARED FOR DEPARTURE</span>
        </div>
        <div className="preloader__bar">
          <i ref={bar} />
        </div>
        <div className="preloader__meta" style={{ justifyContent: "center" }}>
          <span>
            SYSTEMS <span ref={counter}>000</span>%
          </span>
        </div>
      </div>
    </div>
  );
}
