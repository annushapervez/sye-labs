import "./Footer.css";

const Footer = () => {
  const LINKS = ["LinkedIn", "About", "Contact"];

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-dots">
          <span />
          <span />
        </div>

        <div className="footer-right">
          <ul className="footer-links">
            {LINKS.map((label) => (
              <li key={label}>
                <a href="#" className="footer-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <span className="footer-copy">
            © {new Date().getFullYear()} SyeLabs
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;