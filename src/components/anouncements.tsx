import "../styles/anouncements.scss";


export const Messages = [
  "There will be a change of officers for the 2025 Spring Club semester, election's will take place on February 13th, 2025 | 8:33 PM (01/24/25)",

  "This is the new Announcements Section for the new website reform. The build system used is vite, the UI is done with SparkCSS, SASS, TypeScript, and React. The site also uses PostCSS to improve the bundle size of the CSS when sent to the client | 8:19 PM (01/24/25)",
  
  "lorem dhsakjdhsahdjsahdjsahdsjahj"
]


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
          {Messages.map((element) => {
            return(<h3 className="info-item">{element}</h3>)
          })}
        </div>
      </div>
    </section>
  );
};
