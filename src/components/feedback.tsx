import "../styles/feedback.scss";

export const Feedback = () => {
  return (
    <section id="feedback-section">
      <div className="feedback-left">
        <h1>Feedback</h1>
        <p>
          We'd love to hear about how we can improve our club experience for the
          students!
          <span className="feedback-span">
            (This section is currently under construction and won't work as
            intended. Check back soon!)
          </span>
        </p>
      </div>
      <div className="feedback-right">
        <form
          action="mailto:Paz.n089158@stu.sanjac.edu"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="feedback"></label>
          <br />
          <textarea
            id="feedback"
            name="feedback"
            rows={4}
            cols={50}
            placeholder="Enter feedback for improvements!"
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Send Feedback" />
        </form>
      </div>
    </section>
  );
};
