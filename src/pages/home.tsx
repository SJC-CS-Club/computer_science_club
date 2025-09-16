import "../styles/homepage.scss";

export const Home = () => {
  return (
    <header>
      <figure></figure>
      <div id="headline">
        <h1>
          Computer Science
          <span className="gradient">
            <br />
            Club
          </span>
        </h1>
      </div>
      <div id="buttons">
        <button id="join-us">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSefU_sunZawCAmDxtfZaxtofQI4sd_2Wn_mGygNKWQ9xHq2_A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="full-button-link"
          >
            Join Us
          </a>
        </button>
        <button id="learn-more">
          <a
            href="https://matias.me/nsfw/"
            target="_blank"
            rel="noopener noreferrer"
            className="full-button-link"
          >
            Learn More
          </a>
        </button>
      </div>
    </header>
  );
};
