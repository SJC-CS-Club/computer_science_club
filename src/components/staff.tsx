import "../styles/staff.scss";
import logo from "/assets/images/compsci-logo.png";

interface OfficerProps {
  officerName: string;
  title: string;
  image: string;
  alt: string;
  email: string;
  id: string;
}

const Officers: OfficerProps[] = [
  {
    officerName: "Nathaniel Paz",
    title: "PRESIDENT",
    image: logo,
    alt: "a picture of the president",
    email: "Paz.n089158@stu.sanjac.edu",
    id: "president",
  },
  {
    officerName: "Nick Hinojosa",
    title: "VICE PRESIDENT",
    image: logo,
    alt: "a picture of the vice president",
    email: "Hinojosa.N204794@stu.sanjac.edu",
    id: "vp",
  },
  {
    officerName: "Emilye Hollins",
    title: "SGA",
    image: logo,
    alt: "a picture of the sga representative",
    email: "hollins.e949016@stu.sanjac.edu",
    id: "sga",
  },
  {
    officerName: "Andrew Brown",
    title: "Social Chair",
    image: logo,
    alt: "a picture of the social chair",
    email: "brown.a147159@stu.sanjac.edu",
    id: "social",
  },
];

export const Staff = () => {
  return (
    <section className="staff-container">
      <div className="staff-image-container">
        {Officers.map((elem) => (
          <div className="staff" id={elem.id} key={elem.id}>
            <h2>{elem.title}</h2>
            <figure className="officer" id="officer">
              <img src={elem.image} alt={elem.alt} />
            </figure>
            <a href={`mailto:${elem.email}`}>{elem.email}</a>
          </div>
        ))}
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
        President · Vacant | Vice President · Vacant | SGA · Vacant | Secretary
        · Vacant | Treasurer · Vacant | Social · Vacant
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
