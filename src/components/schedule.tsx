import { useEffect, useState, useRef } from "react";

const ScheduleMaps: [string, string][] = [
  ["Week 1 | (09/24/25)", "First Comp Sci Meeting!"],
  ["Week 2 | (10/01/25)", "These are placeholder text"],
  ["Week 3 | (10/08/25)", "These are placeholder text"],
  ["Week 4 | (10/15/25)", "These are placeholder text"],
];

type ModalProps = {
  open: boolean;
  title?: string;
  body?: string;
  onClose: () => void;
};

function Modal({ open, title, body, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Basic focus management: focus the dialog when opened
  useEffect(() => {
    if (open && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(e) => {
        // Close only if backdrop (outside the dialog) was clicked
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-body"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          className="modal-close"
          aria-label="Close"
          onClick={onClose}
          type="button"
        >
          x
        </button>
        {title && (
          <h2 id="modal-title" className="modal-title">
            {title}
          </h2>
        )}
        <div id="modal-body" className="modal-body">
          {body}
        </div>
      </div>
    </div>
  );
}

export const Schedule = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const current = isOpen ? ScheduleMaps[openIndex!] : null;

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
          {ScheduleMaps.map(([label, details], index) => (
            <button
              className="fall-info-buttons"
              key={index}
              type="button"
              aria-haspopup="dialog"
              aria-controls="week-modal"
              onClick={() => setOpenIndex(index)}
            >
              {label}
              <br />
              {details}
            </button>
          ))}
        </div>
      </aside>

      <Modal
        open={isOpen}
        title={current?.[0]}
        body={current?.[1]}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
};
