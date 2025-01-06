import "../styles/staff.scss";

export const Staff = () => {
    return(
    <section id="staff-container">
        <div className="staff-image-container">
          <figure id="vice-pres">
            <a href="mailto:martinez.d048432@stu.sanjac.edu"
              >martinez.d048432@stu.sanjac.edu</a
            >
            <h2>VICE PRESIDENT</h2>
          </figure>
          <figure id="pres">
            <a href="mailto:Paz.n089158@stu.sanjac.edu"
              >Paz.n089158@stu.sanjac.edu</a
            >
            <h2>PRESIDENT</h2>
          </figure>
          <figure id="sponsor">
            <a href="mailto:steven.schneider@sjcd.edu"
              >steven.schneider@sjcd.edu</a
            >
            <h2>SPONSOR</h2>
          </figure>
        </div>
        <hr />
        <div className="officer-section">
          <a href="./src/staff/see_more.html" className="see-more" target="_self"
            >See More<i className="bx bxs-chevron-right"></i
          ></a>
          <h1 id="staff-officer-title">Officers</h1>
          <h3 id="staff-officer-names">
            Nathaniel · President | Derrick · Vice President | Daniel · SGA |
            Emmanuel · Secretary | Natalie · Treasurer | Jorge · Social
          </h3>

          <h3 className="officer-mobile">Nathaniel · President</h3>
          <h3 className="officer-mobile">Derrick · Vice President</h3>
          <h3 className="officer-mobile">Emmanuel · Secretary</h3>
          <h3 className="officer-mobile">Daniel · SGA</h3>
          <h3 className="officer-mobile">Natalie · Treasurer</h3>
          <h3 className="officer-mobile">Jorge · Social</h3>
        </div>
      </section>)
}