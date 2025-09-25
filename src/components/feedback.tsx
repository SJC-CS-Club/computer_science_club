import "../styles/feedback.scss";

export const Feedback = () => {
  return (
    <section className="feedback-section">
      <div className="feedback-left">
        <h1>Feedback</h1>
        <p>
          We'd love to hear your thoughts on how we can make the club experience
          even better! Your feedback will remain anonymous unless you choose to
          include your name and email.
        </p>
      </div>
      <div className="feedback-right">
        <form action="https://formspree.io/f/mqayapab" method="POST">
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={50}
            placeholder="Enter feedback for improvements!"
            required
          ></textarea>
          <br />
          <br />

          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </section>
  );
};
