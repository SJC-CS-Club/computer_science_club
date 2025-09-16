import "../styles/schedule.scss";

const ScheduleMaps = [
  ["Week 1 | (09/24/25)", "First Comp Sci Meeting!"],
  ["Week 2 | (10/01/25)", "These are placeholder text"],
  ["Week 3 | (10/08/25)", "These are placeholder text"],
  ["Week 4 | (10/15/25)", "These are placeholder text"],
];

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
        <div className="fs-scroll-wheel">
          {ScheduleMaps.map((element, index) => {
            return (
              <button className="fall-info-buttons" key={index}>
                {element[0]}
                <br />
                {element[1]}
              </button>
            );
          })}
        </div>
      </aside>
    </section>
  );
};
