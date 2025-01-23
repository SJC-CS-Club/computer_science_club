import "../styles/staff.scss";


let staff = {
  Nate: {
    role: "President",
    email: "example@stu.sanjac.edu"
  },
  Derrick: {
    role: "Vice President",
    email: "example@stu.sanjac.edu"
  },
  Sponsor: {
    role: "Sponsor",
    email: "eample@stu.sanjac.edu"
  }
}

export const Staff = () => {
  return (
    <section id="staff-container">
      <div className="staff-image-container">
        <figure id="vice-pres">
          <a href="#">example@stu.sanjac.edu</a>
          <h2>VICE PRESIDENT</h2>
        </figure>
        <figure id="pres">
          <a href="#">example@stu.sanjac.edu</a>
          <h2>PRESIDENT</h2>
        </figure>
        <figure id="sponsor">
          <a href="#">example@stu.sanjac.edu</a>
          <h2>SPONSOR</h2>
        </figure>
      </div>
      <hr />
      <StaffOfficers />
    </section>
  );
};

export const StaffOfficers = () => {
  return (
    <div className="officer-section">
      <a href="./src/staff/see_more.html" className="see-more" target="_self">
        See More<i className="bx bxs-chevron-right"></i>
      </a>
      <h1 id="staff-officer-title">Officers</h1>
      <h3 id="staff-officer-names">
        "Vacant" · President | "Vacant" · Vice President | "Vacant" · SGA |
        "Vacant" · Secretary | "Vacant" · Treasurer | "Vacant" · Social
      </h3>

      <h3 className="officer-mobile">"Vacant" · President</h3>
      <h3 className="officer-mobile">"Vacant" · Vice President</h3>
      <h3 className="officer-mobile">"Vacant" · Secretary</h3>
      <h3 className="officer-mobile">"Vacant" · SGA</h3>
      <h3 className="officer-mobile">"Vacant" · Treasurer</h3>
      <h3 className="officer-mobile">"Vacant" · Social</h3>
    </div>
  );
};
