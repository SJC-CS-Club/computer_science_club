import "../styles/location.scss";

export const Location = () => {
  return (
    <section id="location">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6939.633098337566!2d-95.20599982500754!3d29.57994054043032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409a3d1006ab8f%3A0x392d12b89cc394b3!2sSan%20Jacinto%20College%20South!5e0!3m2!1sen!2sus!4v1721014873686!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{
            border: "none",
            borderRadius: "10px",
            boxShadow: "-2px 2px 6px gray",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h1>Our Location</h1>
    </section>
  );
};
