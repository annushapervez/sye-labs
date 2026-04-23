import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const words = ["Conferences", "Mentorship", "Home Labs"];

const phrases = [
  { main: "Designed around", highlight: true },
  { main: "We're focused on bridging the gap between discovery, access, and growth in tech." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { y: "120%", opacity: 0, filter: "blur(4px)" },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedText = ({ text, visible }) => (
  <motion.span
    className="animated-text"
    variants={containerVariants}
    initial="hidden"
    animate={visible ? "visible" : "hidden"}
  >
    {text.split(" ").map((word, i) => (
      <span key={i} className="word-clip">
        <motion.span className="word-inner" variants={wordVariants}>
          {word}
        </motion.span>
      </span>
    ))}
  </motion.span>
);

const Hero = () => {
  const [step, setStep] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const zoneRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const zone = zoneRef.current;
          if (!zone) return;
          const scrolled = -zone.getBoundingClientRect().top;
          const adjustedScroll = Math.max(0, scrolled - 100);

const idx = Math.min(
  Math.max(Math.floor(adjustedScroll / 300), 0),
  phrases.length - 1
);
          setStep(idx);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
    <div className="hero-zone" ref={zoneRef}>
      <div className="hero-sticky">
        {phrases.map((phrase, i) => {
          const isVisible = i === step;
          return (
            <div
              key={i}
              className={`hero-phrase ${i === 1 ? "second-phrase" : ""} ${
                i === step ? "visible" : i < step ? "exiting" : "hidden"
              }`}
            >
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
{i === 0 && (
  <>
    <AnimatedText text="Designed around" visible={isVisible} />

    <span className="word-clip cycling-word-clip">
      <motion.span
        className={`word-inner cycling-word ${animating ? "fade-out" : "fade-in"}`}
        variants={wordVariants}
      >
        {words[wordIndex]}
      </motion.span>
    </span>

    <AnimatedText text="to help curious minds grow." visible={isVisible} />
  </>
)}

                {i === 1 && (
                  <AnimatedText text={phrase.main} visible={isVisible} />
                )}
              </motion.h1>

             </div>
          );
        })}
<button className={`hero-btn ${step === 1 ? "second-btn" : ""}`}>
  Learn More
</button>
      </div>
    </div>
    </section>
  );
};

export default Hero;