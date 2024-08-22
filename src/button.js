

const button_descriptions = {
    week1 : 'For the first week, we’d start with an introduction about what the club is, and icebreaker activities to get to know each other better. We’d provide an overview of the club and the kind of curriculum we’d be teaching for the semester. Also, get feedback on how long the club should be and introduce officer roles for auditioning the following week.',

    week2 : "We’d use Python to start (and accommodate to those who use other languages) with how to how have a programmers mind and how to think critically when looking at problems/challenges. We’d have simple sample problems to showcase how to use code to solve them and encourage thinking-out-loud behavior to improve critical thought.This week we’d elect officers and assign roles accordingly",

    week3 : "Learn the basics of version control with Git, and showcase what Github is and how to use it. Learn how to create and share repositories on GitHub. We’d build a sample repository for the members to fork and commit a welcome message for themselves.",

    week4 : "Introduce the basics of cybersecurity, including common threats (phishing, malware, and social engineering), and how to protect personal and professional data. This can go hand-in-hand with Web Security/protection which would help students when building their own personal portfolio Sites",

    week5 : "Introduction to problem-solving with Python (assuming they know at least the fundamentals of Python). Here they’d write simple programs and work on group projects to help strengthen their problem-solving skills.",

    week6 : "Dive deeper into Python to see more advanced concepts like functions, modules, and error handling. They’d use these skills to practice more difficult, but manageable, problems and build their problem-solving skills further.",

    week7 : "Discuss the software development lifecycle (SDLC), agile methodologies, version control, and best practices in software engineering. Engage in a small-scale software development project. Understand the process of developing, testing, and maintaining software. Have students participate in a group project that follows an agile development process.",

    week8 : "Explore the basics of game development, including an introduction to game engines like Unity or Godot. Discuss game design principles and create a simple 2D game. Derrick can assist greatly with this portion.",

    week9 : "Introduction to HTML & CSS. The goal is to use this information to create a personal portfolio that they can host on GitHub pages down the road for potential recruiters and internships.",

    week10 : "Here we’d learn more intermediate HTML and CSS concepts to help strengthen the students' knowledge. We’d demonstrate this further with sample projects that are guided by Staff and students alike.",

    week11 : "The students will use their knowledge of HTML, & CSS to start working on building a personal portfolio that will be hosted on Github pages. It would be peer-reviewed by other students and think about how to design it. Students are encouraged to work on it outside of the club.",

    week12 : "Have the students continue working on their personal portfolios and advance their HTML & CSS skills further while doing so.",

    week13 : "Similar to last semester, We’d have students pair up in 2’s and build some projects to be displayed and judged by judges.",

    week14 : "The members will present their final portfolio / personal projects. We’d have an end-of-year party.",
};

// Get the pop-up element
const popup = document.getElementById('popup');

// Get the <span> element that closes the pop-up
const closeButton = document.querySelector('.close-button');

// Function to show the pop-up with a custom message
function showPopup(message) {
    document.getElementById('popup-message').textContent = message;
    popup.style.display = 'block';
}

// Function to hide the pop-up
function closePopup() {
    popup.style.display = 'none';
}

// Event listener to close the pop-up when the close button is clicked
closeButton.addEventListener('click', closePopup);

// Add event listeners to each button to show the pop-up with a specific message
document.querySelectorAll('.fall-info-buttons').forEach(button => {
    button.addEventListener('click', (event) => {
      const weekId = event.target.id;
      const message = button_descriptions[weekId];
      showPopup(message);
    });
  });
