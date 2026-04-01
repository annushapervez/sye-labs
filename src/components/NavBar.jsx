import {useState} from 'react';
import './NavBar.css';

const NavBar = () => {
    const [hovered, setHovered] = useState(null); 
    const NAV_LINKS = ["Mentorship", "Conferences", "Home Lab", "About"];
    const SOCIAL_LINKS = ["LinkedIn", "Instagram"];

    return (
<nav className='navbar'>
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
        )
    )}

    <div className='sye-divider' />

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

    

</ul>
</nav>


    );
};



export default NavBar;
