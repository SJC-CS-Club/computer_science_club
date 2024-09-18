const button_descriptions = {
    week1 : "For the first week, we’d start with an introduction about what the club is, and icebreaker activities to get to know each other better. We’d provide an overview of the club and the kind of curriculum we’d be teaching for the semester. Also, get feedback on how long the club should be and introduce officer roles for auditioning the following week.",

    week2 : "We started with Python (while accommodating those using other languages) to teach how to develop a programmer's mindset and approach problems and challenges with critical thinking. We provided simple sample problems to demonstrate how code can be used to solve them, encouraging members to think out loud to enhance their critical thinking skills. During this session, we also held elections for officers and assigned roles accordingly. <br> Here is the link to the <a href='https://docs.google.com/document/d/18TmDfoJ5w91f_QYIKmuBhb-cZP8_UTGaJajzyzX6HSA/edit?usp=sharing' target='_blank'>Google Doc</a> for what we went over in the club.",

    week3 : "We successfully covered the basics of version control with Git, providing a solid foundation for managing and tracking changes in code. During the session, we demonstrated the importance of version control in collaborative projects and individual development work. We introduced GitHub as a popular platform for hosting repositories and walked through the process of setting up an account, creating repositories, and understanding the interface. <br> Here is the link to the Google Doc for more in-depth information about <a href='https://docs.google.com/document/d/12D1IoyO9YTmXUkBRt6tzP0mnx6-6qVmeA4mMhZZvzIU/edit?usp=sharing' target='_blank'>Git & GitHub</a> <br>And Here the is the <a href='https://1drv.ms/p/c/b084cb285fd01924/EUgPd2PWyotKmANPagT-PcQBLjXIYCKUDGAbzlOWdDYgMw?e=ph6oWQ' target='_blankt'>PowerPoint</a> we used",

    week4 : "We had a great session introducing the basics of cybersecurity, covering common threats like phishing, malware, and social engineering, along with tips for protecting personal and professional data. I'm sure you all enjoyed the Kahoot and learning about cybersecurity. We explored cybersecurity fundamentals, the job market, and using virtual machines.<br> I've included a link to a <a href='//docs.google.com/document/d/1gBer5xacCQzuhflBI98yVW1DZyT0-qLIhTXkdfovdD8/edit?usp=sharing' target='_blank'>Linux Tutorial</a> by Nate to help you get started with Linux, so be sure to check it out. Here's the <a href='https://1drv.ms/p/c/b084cb285fd01924/EUgPd2PWyotKmANPagT-PcQBLjXIYCKUDGAbzlOWdDYgMw?e=hiaoxU' target='_blank'>PowerPoint</a> we went over in club! Also, visit our website for next week's topic and good luck with your exams! If you're eager to dive deeper, check out HackTheBox and TryHackMe for more hands-on learning in cybersecurity!",

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

const link = "www.google.com";


// Get the pop-up element
const popup = document.getElementById('popup');

// Get the <span> element that closes the pop-up
const closeButton = document.querySelector('.close-button');

// Function to show the pop-up with a custom message
function showPopup(message) {
    document.getElementById('popup-message').innerHTML = message;
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
