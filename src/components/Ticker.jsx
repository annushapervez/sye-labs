import "./Ticker.css";

const TickerContent = () => (
  <div className="ticker-content">
    <span>KubeCon</span>
    <span>Home Labs</span>
    <span>Mentorship</span>
    <span>Cloud Native</span>
    <span>Networking</span>
    <span>Conferences</span>
    <span>LinkedIn</span>
  </div>
);

const Ticker = () => {
  return (
    <section className="ticker">
      <div
        className="ticker-track"
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        <TickerContent />
        <TickerContent />
      </div>
    </section>
  );
};

export default Ticker;