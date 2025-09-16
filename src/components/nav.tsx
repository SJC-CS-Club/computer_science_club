import { useState, useEffect } from "react";
import "../styles/nav.scss";

export const Nav = () => (
  <nav className="desktop-nav">
    <a href="#stats" className="non-mobile-nav">About Us</a>
    <a href="#staff-container" className="non-mobile-nav">Staff</a>
    <a href="#fall-schedule" className="non-mobile-nav">Schedule</a>
    <a href="#footer" className="non-mobile-nav">Contact Us</a>
  </nav>
);

export const NavMobileMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <div className={`mobile-menu${open ? " open" : ""}`}>
    <button className="close-btn" onClick={onClose} aria-label="Close menu">
      <i className="bx bx-x"></i>
    </button>
    <a href="#stats" id="about" onClick={onClose}>
      <i className="bx bx-info-circle"></i> <span>About Us</span>
    </a>
    <a href="#staff-container" id="staff" onClick={onClose}>
      <i className="bx bx-user"></i> <span>Staff</span>
    </a>
    <a href="#fall-schedule" id="schedule" onClick={onClose}>
      <i className="bx bx-calendar"></i> <span>Schedule</span>
    </a>
    <a href="#footer" id="contact" onClick={onClose}>
      <i className="bx bxs-contact"></i> <span>Contact Us</span>
    </a>
  </div>
);

export const ResponsiveNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 480px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? (
    <>
      <nav className="mobile-nav">
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <i className="bx bx-menu"></i>
        </button>
      </nav>
      <NavMobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
    </>
  ) : (
    <Nav />
  );
};
