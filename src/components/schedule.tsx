import "../styles/schedule.scss";

export const Schedule = () => {
  return (
    <section id="fall-schedule">
      <aside className="fall-schedule-left">
        <h1>Fall Schedule</h1>
        <p>
          Each section contains information about what we're learning that week
          and what to expect coming to the club. Click on the week you're
          interested in for more information!
        </p>
      </aside>
      <aside className="fall-schedule-right">
        <div className="fall-schedule-right-inner" id="fall-agenda">
          Weekly Agenda
        </div>
        <div id="fs-scroll-wheel" className="fall-schedule-right-inner">
          <button className="fall-info-buttons" id="week1">
            Week 1 | (08/27/24)
            <br />
            Intro to the Club
          </button>
          <button className="fall-info-buttons" id="week2">
            Week 2 | (09/03/24)
            <br />
            Intro to Problem-Solving and Critical Thinking
          </button>
          <button className="fall-info-buttons" id="week3">
            Week 3 | (09/10/24)
            <br />
            Intro to Git and GitHub
          </button>
          <button className="fall-info-buttons" id="week4">
            Week 4 | (09/17/24)
            <br />
            Intro to Cybersecurity
          </button>
          <button className="fall-info-buttons" id="week5">
            Week 5 | (09/24/24)
            <br />
            Python Basics
          </button>
          <button className="fall-info-buttons" id="week6">
            Week 6 | (10/01/24)
            <br />
            Intermediate Python Programming
          </button>
          <button className="fall-info-buttons" id="week7">
            Week 7 | (10/08/24)
            <br />
            Intro to Software Engineering & Best Practices
          </button>
          <button className="fall-info-buttons" id="week8">
            Week 8 | (10/15/24)
            <br />
            Intro to Game Development
          </button>
          <button className="fall-info-buttons" id="week9">
            Week 9 | (10/22/24)
            <br />
            Intro to Web Development
          </button>
          <button className="fall-info-buttons" id="week10">
            Week 10 | (10/29/24)
            <br />
            Intermediate Web Development
          </button>
          <button className="fall-info-buttons" id="week11">
            Week 11 | (11/05/24)
            <br />
            Building a Personal Portfolio (Part 1)
          </button>
          <button className="fall-info-buttons" id="week12">
            Week 12 | (11/12/24)
            <br />
            Building a Personal Portfolio (Part 2)
          </button>
          <button className="fall-info-buttons" id="week13">
            Week 13 | (11/19/24)
            <br />
            Build a final Project / Coding Competition
          </button>
          <button className="fall-info-buttons" id="week14">
            Week 14 | (12/03/24)
            <br />
            Final Presentations & End-of-Year Party
          </button>
        </div>
      </aside>
    </section>
  );
};
