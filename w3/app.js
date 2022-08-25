const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }

showOnPage('This output is based on the question which class am I working on, and how much time do I need to invest')
showOnPage('Class today is CIT:' + classnum)
showOnPage('Homework time is:' + homeworktime)
showOnPage('Free time is:'+ freetime)
showOnPage('if freetime is negative. Allocate additonal hours from Friday')

 let homework = function (classnum, homeworktime) {
let freetime = (4 - homeworktime)
if (classnum = 58) {

} else if (classnum = 28){

}else if (classnum = 93){


} 

return `You have to do work for CIT ${classnum} and you have ${homeworktime} hour(s) of homework. This will leave you with ${freetime} hour(s) of freetime.`
 }
 
let homeworkcalc = homework (28,5)
showOnPage(homeworkcalc)