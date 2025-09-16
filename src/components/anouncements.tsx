import "../styles/anouncements.scss";

export const Messages = [
  "The first official meeting will take place on Wednesday, September 24, from 3:00 p.m. to 4:30 p.m. in Building 2, Room 207.",
  "This website is created and maintained by the SJC Computer Science community. Special thanks to Derrick, Nate, Natalie, Jorge, Emmanuel, Prof. Schneider and Prof. White for their valuable contributions.",
  "This website is open source. If you’d like to contribute, clone the repository from our GitHub, create a new branch for your feature, and submit a pull request.",
];

export const Announce = () => {
  return (
    <section id="info">
      <div className="info-left">
        <h1>Announcements</h1>
        <p>
          This is where you'll find all the latest updates and important news
          related to the Computer Science Club and our website. We regularly
          post updates to keep you in the loop about what's happening in the
          club, so be sure to check back often to stay up-to-date!
        </p>
      </div>
      <div className="info-right">
        <div className="info-box">
          {Messages.map((element, index) => {
            return (
              <h3 className="info-item" key={index}>
                {element}
              </h3>
            );
          })}
        </div>
      </div>
    </section>
  );
};
