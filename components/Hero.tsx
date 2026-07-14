"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);

  // hide content while the preloader still covers the hero
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reduced) {
      gsap.set(".hero__anim", { opacity: 0, y: 30 });
      gsap.set(media.current, { opacity: 0 });
    }
  }, []);

  // intro once the preloader is done
  useEffect(() => {
    if (!ready) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(media.current, { opacity: 1, duration: 1.6 })
        .to(
          ".hero__anim",
          { opacity: 1, y: 0, duration: 1.1, stagger: 0.12 },
          "-=1.15"
        )
        .fromTo(
          ".hero__cue, .hero__tags",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.5"
        );
    }, root);
    return () => ctx.revert();
  }, [ready]);

  // subtle parallax as the hero scrolls away (depth without a pin)
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const st = {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      };
      gsap.to(media.current, { yPercent: 16, ease: "none", scrollTrigger: st });
      gsap.to(".hero__content", {
        yPercent: -6,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: st,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__media" ref={media}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__img"
          src="/media/hangar-twilight.jpg"
          alt="Prince Aviation hangar at civil twilight, illuminated signage above the fleet on the apron in Belgrade"
          fetchPriority="high"
        />
        {/*
          To use a background video later, replace the <img> above with:
          <video className="hero__img" autoPlay muted loop playsInline
                 poster="/media/hangar-twilight.jpg">
            <source src="/media/hero.webm" type="video/webm" />
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        */}
      </div>
      <div className="hero__scrim" />

      <div className="hero__content">
        <div className="container">
          <p className="eyebrow hero__anim">Business aviation · Belgrade</p>
          <h1 className="hero__title hero__anim">
            Four disciplines.
            <br />
            <em>One standard.</em>
          </h1>
          <p className="hero__sub hero__anim">
            Private charter, aircraft maintenance, a pilot academy and technical
            training — the full lifecycle of business aviation, under one roof.
          </p>
          <div className="hero__actions hero__anim">
            <a className="btn" href="#charter">
              Explore our world
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
            <a className="btn btn--ghost" href={CONTACT.aogHref}>
              AOG support 24/7
            </a>
          </div>
        </div>
      </div>

      <div className="hero__cue">
        <span>Scroll</span>
        <span className="line" />
      </div>
      <div className="hero__tags">
        <span>EST. BELGRADE</span>
        <span>LYBE · BEG</span>
      </div>
    </section>
  );
}
