interface ScheduleMapsProps {
  title: string;
  subtitle: string;
  content: JSX.Element;
}

export const ScheduleMaps: ScheduleMapsProps[] = [
  {
    title: "Week 1 | (09/24/25)",
    subtitle: "First Comp Sci Meeting!",
    content: (
      <div>
        <p>
          🚀{" "}
          <strong>
            Thank you to everyone who joined us for our first official meeting
            of the semester!
          </strong>{" "}
          It was amazing to see both familiar and new faces coming together to
          kick off the Computer Science Club.
          <br />
          <br />
          For those who couldn't make it, here's a quick recap:
          <br />
          <br />
          The goal of the Computer Science Club is to create a space where like-minded individuals can grow in their careers and prepare for real-world programming. We want to help you build skills that extend beyond the classroom while also connecting you with peers of all experience levels. This club is meant to be a safe and welcoming environment where you can practice, write, and learn code together. It's also a place to explore your creativity through projects that interest you and inspire collaboration.
        </p>
      </div>
    ),
  },
];
