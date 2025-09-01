// CursorFollower.astro
import { useEffect, useState } from "react";
import gsap from "gsap";

import "./CursorFollower.css";

export type CursorFollowerProps = {
  className?: string;
};

export default function CursorFollower() {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector(".cursor-follower");
    function move(e: MouseEvent) {
      gsap.to(cursor, {
        x: e.clientX + 30 ,
        y: e.clientY + 30 ,
        ease: "power3.out",
        duration: 0.8,
      });
    }
    window.addEventListener("mousemove", move);

    const handler = (ev: any) => {
      console.log(ev);
      if (ev.type === "cursor-hover") {
        setIsHover(true);
      } else if (ev.type === "gsap-animate") {
        setIsHover(false);
      }
      gsap.to(cursor, {
        ...ev.gsapProps,
      });
    };
    window.addEventListener("cursor-hover", handler);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor-hover", handler);
    };
  }, []);

  return (
    <div className={`cursor-follower${isHover ? " cursor-link-hover" : ""}`} />
  );
}
