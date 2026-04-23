import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Final.css";

const Final = () => {
  const [isDarkZone, setIsDarkZone] = useState(false);
  const zoneRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const zone = zoneRef.current;
      if (!zone) return;

      const scrolled = -zone.getBoundingClientRect().top;
      const adjustedScroll = Math.max(0, scrolled - 100);

      const threshold = 100; 
      setIsDarkZone(adjustedScroll > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="final">
      <div className="final-zone" ref={zoneRef}>
        <div className="final-sticky">
          <div className="final-phrase">
<motion.h1
  className={isDarkZone ? "light-text" : "dark-text"}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
>
  <span className="line-1">All the pieces of the journey, brought into one place.</span>{" "}
  <span className="line-2">See how we bring together real experiences,</span>{" "} <br />
  <span className="line-3">practical knowledge, and the people behind it all —</span>{" "} <br/>
  <span className="line-4">turning curiosity into clarity, and interest into something you can actually build.</span> 
</motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Final;