import "../styles/staff.scss";
import logo from "/assets/images/compsci-logo.png";

export const Staff = () => {
  return (
    <section className="staff-container">
      <div className="staff-image-container">
        <div className="staff">
          <h2>VICE PRESIDENT</h2>
          <figure id="officers" className="vice-pres officer">
            <img src={logo} alt="" />
          </figure>
          <a href="#">example@stu.sanjac.edu</a>
        </div>
        <div className="staff president" id="pres">
          <h2>PRESIDENT</h2>
          <figure id="officers" className="officer">
            <img src={logo} alt="" />
          </figure>
          <a href="#">example@stu.sanjac.edu</a>
        </div>
        <div className="staff sponsor">
          <h2>SPONSOR</h2>
          <figure id="officers" className="officer">
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
      <h1 id="staff-officer-title">Officers</h1>
      <h3 className="staff-officer-names">
        President · Vacant | Vice President · Vacant | SGA · Vacant | Secretary ·
        Vacant | Treasurer · Vacant | Social · Vacant
      </h3>

      <div className="officer-mobile">
        <h3 className="left">President</h3>
        <h3 className="right">Vacant</h3>
      </div>
      <div className="officer-mobile">
        <h3 className="left">Vice President</h3>
        <h3 className="right">Vacant</h3>
      </div>
      <div className="officer-mobile">
        <h3 className="left">Secretary</h3>
        <h3 className="right">Vacant</h3>
      </div>
      <div className="officer-mobile">
        <h3 className="left">Treasurer</h3>
        <h3 className="right">Vacant</h3>
      </div>
      <div className="officer-mobile">
        <h3 className="left">SGA</h3>
        <h3 className="right">Vacant</h3>
      </div>
      <div className="officer-mobile">
        <h3 className="left">Social</h3>
        <h3 className="right">Vacant</h3>
      </div>
    </div>
  );
};
