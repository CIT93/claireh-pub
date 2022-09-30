const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

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

const filters = {
  searchText: "",
};
const renderClass = function (fall22, filters) {
  const filteredClass = fall22.filter(function (fall) {
    return fall.dayOfWeek.includes(filters.searchText);
  });
  document.querySelector("#output").innerHTML = "";

  filteredClass.forEach(function (fall) {
    const classElement = document.createElement("p");
    classElement.textContent = fall.classDay;
    document.querySelector("#output").appendChild(classElement);
  });
};
renderClass(fall22, filters);

document
  .querySelector("#classDropDown")
  .addEventListener("change", function (e) {
    e.preventDefault();
    classOutput = e.target.value;
    if (classOutput === "monday") {
      showOnPage(
        `Day of Week: ${fall22[2].dayOfWeek}.  Todays Class: ${fall22[2].classTitle}.   Hours of Homework ${fall22[2].homeworkTime} hours`
      );
    } else if (classOutput === "tuesday") {
      showOnPage(
        `Day of Week: ${fall22[1].dayOfWeek}. Todays Class: ${fall22[1].classTitle}. Leave your house by 5:15pm.`
      );
    } else if (classOutput === "wednesday") {
      showOnPage(
        `Day of Week: ${fall22[0].dayOfWeek}.   Todays Class: ${fall22[0].classTitle}.   Hours of Homework ${fall22[0].homeworkTime} hours`
      );
    } else {
      showOnPage("No homework today! It is a free day!");
    }
  });
