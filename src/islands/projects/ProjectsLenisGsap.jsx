import { useEffect } from "react";

// Asegúrate de que Lenis, gsap y ScrollTrigger están en tus dependencias
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Island que gestiona el efecto smooth scroll y la animación de project-item para projects
export default function ProjectsLenisGsap() {
  useEffect(() => {
    // 1. Reinicia scroll al top y todos los items a opacity: 1
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.querySelectorAll(".project-item").forEach((el) => {
      el.style.opacity = "1";
    });

    // ------ LENIS ------
    const lenis = new Lenis({
      infinite: true,
    });

    let running = true;
    function raf(time) {
      if (running) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
    }
    requestAnimationFrame(raf);

    // ------ GSAP scrolltrigger ------
    gsap.registerPlugin(ScrollTrigger);

    // Contexto para revert fácil y matar triggers sólo de este island
    const ctx = gsap.context(() => {
      const projects = document.querySelectorAll(".project-item");
      projects.forEach((project) => {
        gsap.to(project, {
          opacity: 0,
          filter: "blur(4px)",
          ease: "none",
          scrollTrigger: {
            trigger: project,
            start: "center center",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Forzar refresh tras el siguiente paint, para asegurar triggers correctos
      setTimeout(() => {
        if (ScrollTrigger && typeof ScrollTrigger.refresh === "function") {
          ScrollTrigger.refresh(true);
        }
      }, 50);
    });

    return () => {
      running = false; // Detén el raf loop Lenis
      lenis.destroy();
      // Limpieza GSAP triggers de este contexto
      try {
        ctx.revert();
      } catch {}
      if (ScrollTrigger && typeof ScrollTrigger.getAll === "function") {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
    };
  }, []);

  return null; // No renderiza nada visible; sólo efectos colaterales.
}
