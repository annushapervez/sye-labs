import { useState, useEffect } from 'react';
import './Hero.css';

const CYCLING_WORDS = ["Home Labs", "Mentorship", "Conferences"];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
        setAnimating(false);
      }, 500);

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = CYCLING_WORDS[currentIndex];

  return (
    <section className="hero">

      <h1 className="hero-title">
        <span className="hero-title-static">Designed around</span>

        <span className={`hero-title-word ${animating ? 'fade-out' : 'fade-in'}`}>
          {current}
        </span>

         <span className="hero-title-static">to help curious minds grow</span>


      </h1>

      <button className="hero-btn">learn more</button>

    </section>
  );
};

export default Hero;