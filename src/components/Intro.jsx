import { useEffect, useRef, useState } from "react";
import "./Intro.css";

const cards = [
  {
    num: "01",
    title: "Problem",
    hoverClass: "hover-brown",
    body: <>Tech can feel like a closed door. Whether it's a complex concept, navigating the job market, or simply figuring out where to start, <strong>the right resources aren't always easy to find.</strong></>,
    image: "/knot1.png"
  },
  {
    num: "02",
    title: "Approach",
    hoverClass: "hover-rust",
    body: <>Clear, digestible content that never overwhelms. We translate enterprise knowledge into <strong>something anyone can follow and build on.</strong></>,
    image: "/knot2.png"
  },
  {
    num: "03",
    title: "Goal",
    hoverClass: "hover-terracotta",
    body: <>We want people to feel confident, informed, and equipped. Access to real industry environments, honest guidance, and the tools to move forward <strong>for everyone trying to get there.</strong></>,
    image: "/knot3.png"
  },
  {
    num: "04",
    title: "Vision",
    hoverClass: "hover-sand",
    body: <>By connecting ideas, people, and opportunities, we're building pathways for the next generation of innovators. Real growth <strong>across the whole community.</strong></>,
    image: "/knot41.png"
  },
];

const Intro = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [reveal, setReveal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setReveal(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="main light-zone">

    <section className={`intro ${reveal ? "reveal" : ""}`} ref={sectionRef}>
      <div className="intro-header">
        <h2 className="intro-headline">
          Our mission, where curiosity meets opportunity
        </h2>
      </div>
<div className="intro-cards-wrapper">

      <div
        className="intro-cards"
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
{cards.map((card, i) => (
  <div key={i} className={`intro-card ${card.hoverClass}`}>
    <h3 className="intro-card-title">{card.title}</h3>
    <p className="intro-card-body">{card.body}</p>
    <div className="intro-card-image-wrap">
      <img
        src={card.image}
        alt={card.title}
        className="intro-card-image"
        draggable="false"
      />
    </div>
  </div>
))}
      </div>
            </div>

    </section>
    </section>
  );
};

export default Intro;