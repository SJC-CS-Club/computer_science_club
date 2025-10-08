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
          The goal of the Computer Science Club is to create a space where
          like-minded individuals can grow in their careers and prepare for
          real-world programming. We want to help you build skills that extend
          beyond the classroom while also connecting you with peers of all
          experience levels. This club is meant to be a safe and welcoming
          environment where you can practice, write, and learn code together.
          It's also a place to explore your creativity through projects that
          interest you and inspire collaboration.
          <br />
          <br />
          🎉 A big shoutout to Elian for winning the Kahoot we played today! 🏆
          <br />
          <br />
          We're also opening up leadership positions for those interested in
          taking a more active role in the club:
        </p>
        <ul style={{ marginTop: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            President - Oversee club activities
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Vice President - Assist the president in overseeing club activities
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Secretary - Manage communication and student engagement
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Treasurer - Handle finances and organize fundraising events
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            SGA Representative - Ensure the club follows San Jac standards
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Social Chair - Manage the club's Instagram, take pictures/videos,
            and help with marketing
          </li>
        </ul>
        <p>
          If you'd like to be considered for one of these positions, please
          email me at{" "}
          <a href="mailto:Paz.n089158@stu.sanjac.edu">
            Paz.n089158@stu.sanjac.edu
          </a>{" "}
          or talk to me in class. We'll go over these roles more in detail next
          Wednesday. This is a great chance to develop leadership skills while
          making an impact in computer science!
          <br />
          <br />
          Looking ahead, next week w'ell dive into Git and GitHub to get members
          ready for collaborating on projects. We'll start with a simple Python
          project to practice version control and teamwork. Thank you again for
          your interest in making computer science more accessible to students.
          If you have any questions, comments, or concerns, feel free to reach
          out to me (Nate) or Professor Schnieder.
          <br />
          <br />✨ Have a great week, and we can't wait to see you at the next
          meeting!
        </p>
      </div>
    ),
  },
  {
    title: "Week 2 | (10/01/25)",
    subtitle: "Git and GitHub pt.1",
    content: (
      <div>
        <p>
          Thank you so much to everyone who came out to today's Computer Science
          Club meeting! It was great seeing such an engaged group of students
          ready to learn and grow together.
          <br />
          <br />
          📚 Today, we focused on Git and GitHub, two essential tools for
          version control and collaboration that every software engineer uses in
          the real world. Whether you're working on solo projects or
          contributing to a team, these tools will help you manage code, track
          changes, and work more efficiently.
          <br />
          <br />
          To help you keep learning, I've included resources below:
          <br />
          <a
            href="https://git-scm.com/docs"
            style={{ marginTop: "1rem" }}
            target="_blank"
          >
            Git Command Documentation
          </a>
          <br />
          PowerPoint Slides from today's session
          <br />
          <br />
          🧑‍💻 We also announced officer positions for anyone interested in taking
          on a leadership role in the club. If this interests you, simply reply
          to this email with your name and the position you'd like to be
          considered for. We'll be announcing officer selections during next
          week's meeting on <strong>Wednesday, October 8th (10/8/25)</strong>.
          <br />
          <br />
          ⚡Next week, we'll be taking the next big step, starting work on a
          real-world coding project together! This will be a hands-on
          opportunity to build something meaningful, strengthen your technical
          skills, and collaborate with other members.
          <br />
          <br />
          We're excited to see what we can create as a team and to keep pushing
          our programming skills to the next level.
          <br />
          <br />
          Have a great week, and keep coding! 💻✨
          <br />
          <br />
          Club Website:{" "}
          <a href="sjcsouthcompsci.netlify.app" target="_blank">
            sjcsouthcompsci.netlify.app
          </a>
          <br />
          Instagram:{" "}
          <a href="instagram.com/sjcsouthcompsci" target="_blank">
            @sjcsouthcompsci
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Week 3 | (10/08/25)",
    subtitle: "Git and GitHub pt.2",
    content: (
      <div>
        <p>Recap information will be posted here after the club!</p>
      </div>
    ),
  },
  {
    title: "Week 4 | (10/15/25)",
    subtitle: "Personal Portfolio",
    content: (
      <div>
        <p>Recap information will be posted here after the club!</p>
      </div>
    ),
  },
];
