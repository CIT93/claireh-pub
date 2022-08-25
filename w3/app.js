const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
  

 let homework = function (classnum, homeworktime) {
let freetime = (4 - homeworktime)
if (classnum = 58) {
 
}if (classnum = 28){

}if (classnum = 93)

return `You have to do work for CIT ${classnum} and you have ${homeworktime} hour(s) of homework. This will leave you with ${freetime} hour(s) of freetime.`
 }
let homeworkcalc = homework (28,5)
showOnPage(homeworkcalc)