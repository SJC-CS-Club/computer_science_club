import "../styles/staff.scss";
import logo from "/assets/images/compsci-logo.png";

let staff = {
  Nate: {
    role: "President",
    email: "example@stu.sanjac.edu",
    image: "string",
  },
  Derrick: {
    role: "Vice President",
    email: "example@stu.sanjac.edu",
  },
  Sponsor: {
    role: "Sponsor",
    email: "eample@stu.sanjac.edu",
  },
};

export const Staff = () => {
  return (
    <section id="staff-container">
      <div className="staff-image-container">
        <div className="staff">
          <h2>VICE PRESIDENT</h2>
          <figure id="vice-pres">
            <img src={logo} alt="" />
          </figure>
          <a href="#">example@stu.sanjac.edu</a>
        </div>
        <div className="staff president">
          <h2>PRESIDENT</h2>
          <figure id="vice-pres">
            <img src={logo} alt="" />
          </figure>
          <a href="#">example@stu.sanjac.edu</a>
        </div>
        <div className="staff">
          <h2>SPONSOR</h2>
          <figure id="vice-pres">
            <img src={logo} alt="" />
          </figure>
          <a href="#">example@stu.sanjac.edu</a>
        </div>
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
        Vacant · President | Vacant · Vice President | Vacant · SGA | Vacant ·
        Secretary | Vacant · Treasurer | Vacant · Social
      </h3>

      <h3 className="officer-mobile"> President · Vacant</h3>
      <h3 className="officer-mobile"> Vice President · Vacant</h3>
      <h3 className="officer-mobile"> SGA · Vacant</h3>
      <h3 className="officer-mobile"> Treasurer · Vacant</h3>
      <h3 className="officer-mobile"> Social · Vacant</h3>
      <h3 className="officer-mobile"> Secretary · Vacant</h3>
    </div>
  );
};
