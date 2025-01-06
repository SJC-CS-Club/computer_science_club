import "../styles/nav.scss";

export const Nav = () => {
  return (
    <nav>
      <a href="#stats" className="non-mobile-nav">
        About Us
      </a>
      <a href="#staff-container" className="non-mobile-nav">
        Staff
      </a>
      <a href="#fall-schedule" className="non-mobile-nav">
        Schedule
      </a>
      <a href="#footer" className="non-mobile-nav">
        Contact Us
      </a>
    </nav>
  );
};

export const NavMobile = () => {
  return (
    <nav>
      <a href="#stats" id="about">
        <i className="bx bx-info-circle"></i>
      </a>
      <a href="#staff-container" id="staff">
        <i className="bx bx-user"></i>
      </a>
      <a href="#fall-schedule" id="schedule">
        <i className="bx bx-calendar"></i>
      </a>
      <a href="#footer" id="contact">
        <i className="bx bxs-contact"></i>
      </a>
    </nav>
  );
};
