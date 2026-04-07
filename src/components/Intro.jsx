import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        {/* LEFT SIDE */}
        <div className="intro-left">
          <span className="intro-eyebrow">About Us</span>

          <h1>
            Bridging the gap between discovery, access, and growth in tech.
          </h1>

          <p className="intro-lead">
            At SyeLabs, we help make tech feel more accessible, digestible, and
            inviting for people trying to move forward.
          </p>

          <div className="intro-copy">
            <p>
              Whether it’s understanding a complex concept, gaining exposure to
              real industry environments, or simply figuring out how to navigate
              the tech world, we believe the right knowledge should be easier to
              access.
            </p>

            <p>
              We break things down in a way that feels clear, approachable, and
              never overwhelming, so people can feel more confident, informed,
              and equipped in their journey.
            </p>

            <p>
              By connecting ideas, people, and opportunities, we aim to spark
              real growth and help create pathways for the next generation of
              innovators.
            </p>
          </div>

          <button className="intro-btn">Meet the Team</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="intro-right">
          <img src="/syelabs-node-animated.svg" alt="SyeLabs visual" />
        </div>
      </div>
    </section>
  );
};

export default Intro;