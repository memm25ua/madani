// CursorFollower.astro
import { useEffect, useState } from "react";
import gsap from "gsap";

import "./CursorFollower.css";

export type CursorFollowerProps = {
  className?: string;
};

export default function CursorFollower() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const cursor = document.querySelector(".cursor-follower");
    function move(e: MouseEvent) {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
        duration: 0.8,
      });
    }

    function showMessage(message: string) {
      setMessage(message);
    }

    function hideMessage() {
      setMessage("");
    }

    function setScale(scale: number) {
      gsap.to(cursor, {
        scale: scale,
        duration: 0.4,
        ease: "power3.out",
      });
    }

    window.addEventListener("mousemove", move);

    const handler = (ev: any) => {
      if (ev.detail.active) {
        showMessage(ev.detail.message || "");
      } else {
        setMessage("");
      }

      setScale(ev.detail.scale || 1);
    };
    window.addEventListener("cursor-hover", handler);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor-hover", handler);
    };
  }, []);

  return <div className={`cursor-follower`}></div>;
}
