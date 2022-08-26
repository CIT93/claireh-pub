const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
  showOnPage('This output is based on the question which class am I working on, and how much time do I need to invest')

let homework = function (classnum, homeworktime) {
let freetime = (4 - homeworktime)

if (classnum = 58) {

} else if (classnum = 28){

}else if (classnum = 93){


} 

return `<b> You have to do work for CIT ${classnum} and you have ${homeworktime} hour(s) of homework. This will leave you with ${freetime} hour(s) of freetime.`

}

let homeworkcalc = homework(58,3)
showOnPage(homeworkcalc)

showOnPage('If freetime is negative. Allocate additonal hours from Friday')

//Function2

let currentday = 3
let cit93workdue = true
let cit28workdue = true
let cit58workdue = false

if (currentday = 2) {
  return 'Today is tuesday. You have CIT58 tonight at 6pm. No homework'
  
}