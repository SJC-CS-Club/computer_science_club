import "../styles/footer.scss";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-section" id="footer-card-one">
          <h3>Meeting Times & Directions</h3>
          <div>Tuesday's | 4:00 - 6:00 pm</div>
          <div>Building 2 (STEM Building) Room 207</div>
          <div>Duration: 8/27/24 - 12/3/24</div>
        </div>
        <div className="footer-section" id="footer-card-two">
          <h3>Legal</h3>
          <a href="./src/privacy_policy.html" target="_blank">
            Privacy Policy
          </a>
          <a href="./src/terms_of_service.html" target="_blank">
            Terms of Service
          </a>
          <a href="#">Disclaimer</a>
          <a href="#">Accessibility Statement</a>
        </div>
        <div className="footer-section" id="footer-card-three">
          <h3>Newsletter</h3>
          <p>
            Sign up for our newsletter to stay updated on the latest news and
            events.
          </p>
          <form action="https://formspree.io/f/xovqayrr" method="POST">
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              autoComplete="email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section" id="footer-card-four">
          <h3>Contact</h3>
          <div className="contact-socials">
            <a
              href="https://github.com/SJC-CS-Club"
              target="_blank"
              className="footer-item"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://discord.gg/Zph8JzGgkU"
              target="_blank"
              className="footer-item"
            >
              <i className="bx bxl-discord"></i>
            </a>
            <a
              href="https://www.instagram.com/sjcsouthcompsci/"
              target="_blank"
              className="footer-item"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="mailto:Paz.n089158@stu.sanjac.edu" className="footer-item">
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <p id="footer-ending">
        &copy; 2024 San Jacinto South Computer Science Club Copyright | All
        Rights Reserved
      </p>
    </footer>
  );
};
