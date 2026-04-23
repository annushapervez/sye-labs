import { useEffect, useState, useRef } from "react";
import './NavBar.css';

const NavBar = () => {
    const [hovered, setHovered] = useState(null);
    const [show, setShow] = useState(true);
    const [pastHero, setPastHero] = useState(false);
    const NAV_LINKS = ["Mentorship", "Conferences", "Home Lab", "About"];
    let lastScroll = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll.current) {
                setShow(false);
            } else {
                setShow(true);
            }

            lastScroll.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const hero = document.querySelector(".hero"); // make sure Hero.jsx root has className="hero"

        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setPastHero(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1, 
            }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <nav className={`navbar ${show ? "nav-show" : "nav-hide"} ${pastHero ? "navbar--dark" : ""}`}>
            <a href='/' className="sye-logo">
                SYELABS
                <div className="sye-logo-dots">
                    <span />
                    <span />
                </div>
            </a>

            <ul className="sye-links">
                {NAV_LINKS.map((label) => (
                    <li key={label}>
                        <a
                            href="#"
                            className={`sye-link${hovered === label ? " active" : ""}`}
                            onMouseEnter={() => setHovered(label)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {label}
                        </a>
                    </li>
                ))}

                <div className='sye-divider' />

                <div className='socials'>
                    <li>
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="sye-social-icon">
                            <img src="/linkedin.png" alt="LinkedIn" className="social-icon-img" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="sye-social-icon">
                            <img src="/instagram.png" alt="Instagram" className="social-icon-img" />
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;