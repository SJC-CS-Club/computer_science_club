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
            href="https://docs.google.com/forms/d/e/1FAIpQLSc832C9yhhzRTrZr0gqI0PCqrXks_wdle7MvauBNCPiUORg2w/viewform?usp=sf_link"
            target="_blank"
          >
            Join Us
          </a>
        </button>
        <button id="learn-more">
          <a href="https://matias.me/nsfw/" target="_blank">
            Learn More
          </a>
        </button>
      </div>
    </header>
  );
};
