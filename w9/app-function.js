const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };



  //Reading notes from local storage
  const getSelectedClass = function () {
    const fall22JSON = localStorage.getItem('fall22')
    if (fall22JSON !== null) {
      return JSON.parse(fall22JSON)
    } else {
        return []
    }
    }

    


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



 

