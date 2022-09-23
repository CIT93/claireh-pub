const fall22 = [
  {
    classTitle: "SQL",
    homeworkTime: 3,
    inPerson: "No",
    dayOfWeek: "Wednesday",
  },
  {
    classTitle: "Ethical Hacking",
    homeworkTime: 2,
    inPerson: "Yes",
    dayOfWeek: "Tuesday",
  },
  {
    classTitle: "Java Script",
    homeworkTime: 5,
    inPerson: "No",
    dayOfWeek: "Monday",
  },
];

outputTitle = "Fall 2022 Class Schedule";

const newTitle = document.createElement("h1");
newTitle.textContent = outputTitle;
document.querySelector("body").appendChild(newTitle);

const dailyHomework = function (fall22) {
  classDay = 2;
  if (classDay === 2) {
    return `Day of Week: ${fall22[1].dayOfWeek}. Todays Class: ${fall22[1].classTitle}. Leave your house by 5:15pm.`;
  } else if (classDay === 1) {
    return `Day of Week: ${fall22[2].dayOfWeek}.  Todays Class: ${fall22[2].classTitle}.   Hours of Homework ${fall22[2].homeworkTime} hours`;
  } else if (classDay === 3) {
    return `Day of Week: ${fall22[0].dayOfWeek}.   Todays Class: ${fall22[0].classTitle}.   Hours of Homework ${fall22[0].homeworkTime} hours`;
  } else {
    return "No homework today! It is a free day!";
  }
};

dailyHomework(fall22);

const newParagraph = document.createElement("h2");
newParagraph.textContent = dailyHomework(fall22);
document.querySelector("body").appendChild(newParagraph);

document
  .querySelector("#class-complete")
  .addEventListener("click", function (e) {
    e.target.textContent = "This Weeks Class is Complete";
  });
