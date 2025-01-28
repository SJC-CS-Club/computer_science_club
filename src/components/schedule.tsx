import "../styles/schedule.scss";

const ScheduleMaps = [
  ["Week 1 | (mm/dd/yy)", "The title of what we're learning"],
  ["Week 2 | (mm/dd/yy)", "These are placeholder text"],
  ["Week 3 | (mm/dd/yy)", "These are placeholder text"],
  ["Week 4 | (mm/dd/yy)", "These are placeholder text"],
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
