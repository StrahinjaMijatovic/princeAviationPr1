"use client";

import { useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Pillars from "@/components/Pillars";
import Fleet from "@/components/Fleet";
import Aog from "@/components/Aog";
import Footer from "@/components/Footer";
import AogFloat from "@/components/AogFloat";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  // smooth scroll + scrolltrigger sync
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    (window as unknown as { lenis?: Lenis }).lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, []);

  // reveal on scroll
  useEffect(() => {
    const els = gsap.utils.toArray<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // recalc pins once fonts/layout settle and after preloader
  useEffect(() => {
    if (!ready) return;
    const r = () => ScrollTrigger.refresh();
    r();
    const t = window.setTimeout(r, 400);
    window.addEventListener("load", r);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", r);
    };
  }, [ready]);

  return (
    <>
      <Preloader onDone={onDone} />
      <Nav />
      <main>
        <Hero ready={ready} />
        <Intro />
        <Pillars />
        <Fleet />
        <Aog />
      </main>
      <Footer />
      <AogFloat />
    </>
  );
}
