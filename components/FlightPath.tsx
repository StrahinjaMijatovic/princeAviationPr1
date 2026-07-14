"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NODES = [0.125, 0.375, 0.625, 0.875];

export default function FlightPath({ trigger }: { trigger: string }) {
  const route = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const jet = useRef<HTMLDivElement>(null);
  const nodes = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const triggerEl = document.querySelector(trigger) as HTMLElement | null;
    if (!triggerEl || !route.current) return;

    let routeH = route.current.offsetHeight;
    const jetH = 40;

    const paint = (p: number) => {
      if (progress.current) progress.current.style.transform = `scaleY(${p})`;
      if (jet.current) {
        const y = p * (routeH - jetH);
        const weave = Math.sin(p * Math.PI * 4) * 9;
        const rot = Math.cos(p * Math.PI * 4) * 5;
        jet.current.style.transform = `translate(calc(-50% + ${weave}px), ${y}px) rotate(${rot}deg)`;
      }
      nodes.current.forEach((n, i) => {
        if (!n) return;
        n.classList.toggle("is-active", p >= NODES[i] - 0.01);
      });
    };

    if (reduced) {
      paint(1);
      return;
    }

    const st = ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom bottom",
      scrub: 1,
      onRefresh: () => {
        if (route.current) routeH = route.current.offsetHeight;
      },
      onUpdate: (self) => paint(self.progress),
    });

    paint(0);
    return () => st.kill();
  }, [trigger]);

  return (
    <div className="route" ref={route} aria-hidden="true">
      <div className="route__track" />
      <div className="route__progress" ref={progress} />
      {NODES.map((_, i) => (
        <div
          key={i}
          className="route__node"
          style={{ top: `${NODES[i] * 100}%` }}
          ref={(el) => {
            if (el) nodes.current[i] = el;
          }}
        >
          <span className="route__code">
            {["WP01", "WP02", "WP03", "WP04"][i]}
          </span>
        </div>
      ))}
      <div className="route__jet" ref={jet}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2c.9 0 1.6 1.7 1.6 4.3v3.1l7.4 4.4v2.1l-7.4-2.2v4.4l2.2 1.5v1.6L12 20.4l-3.4 1.3v-1.6l2.2-1.5v-4.4L3.4 15.9v-2.1l7.4-4.4V6.3C10.8 3.7 11.1 2 12 2z" />
        </svg>
      </div>
    </div>
  );
}
