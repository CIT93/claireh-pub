//Question to be answered: Which homework should I work on today
//let Mon = 1 tues = 2 wed = 3 thurs = 4 fri = 5

const showOnPage = function (text) {
   let newParagraph = document.createElement("p")
   newParagraph.innerHTML = text
   let outputDiv = document.getElementById("output")
   outputDiv.append(newParagraph)
 }


let currentday = 3
let cit93workdue = false
let cit28workdue = false
let cit58workdue = false
let cit93timerequirement = 2
let cit28timerequirement = 3
let cit58timerequirement = 2
let timeavailable = 5

showOnPage('This output is based on the following global variable data')
showOnPage('Current Day (Mon = 1 Tues = 2 Wed = 3 Thurs = 4 Fri = 5)----->' + currentday)
showOnPage('Do I have anything due for JavaScript?----->' + cit93workdue)
showOnPage('Do I have anything due for SQL?----->' + cit28workdue)
showOnPage('Do I have anything due for Ethical Hacking?----->' + cit58workdue)


if(currentday === 2) {
   showOnPage('Today is a CIT58 Class day from 6pm-10pm. No homework needs to be done')
} else if (cit28workdue && cit58workdue) {
   let time = cit28timerequirement + cit58timerequirement - timeavailable
    showOnPage('Work on SQL and Ethical Hacking after work')
} else if (cit58workdue && cit93workdue) {
   let time = cit58timerequirement + cit93timerequirement - timeavailable
    showOnPage('Work on Ethical Hacking and JavaScript after work')
} else if (cit93workdue && cit28workdue) {
  let time = cit93timerequirement + cit28timerequirement - timeavailable
    showOnPage('Work on JavaScript and SQL after work')
} else if (cit28workdue){ 
   let time = cit28timerequirement - timeavailable
    showOnPage('Work on SQL after work')
 } else if (cit58workdue){
   let time = cit58timerequirement - timeavailable
    showOnPage('Work on Ethical Hacking after work')
 } else if (cit93workdue) {
   let time = cit93timerequirement - timeavailable
    showOnPage('Work on Javascript after work')
 }
 else {
   showOnPage('Do whatever you want')
 }
