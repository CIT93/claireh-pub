const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
 
  showOnPage('Which class should I focus on today?')

  let classday = function (classT) {
  classT = 2
return ('<b>Today is Tuesday. You have class at 6pm. Leave your house by 5:15pm')
    }



let homework = function (classnum, homeworktime) {
let freetime = (4 - homeworktime)

if (classnum) {

} 
return `<b> You have to do work for CIT ${classnum} and you have ${homeworktime} hour(s) of homework. This will leave you with ${freetime} hour(s) of freetime.`


}
let homeworkcalc = homework (58,2)
showOnPage(homeworkcalc)

showOnPage('If freetime is negative. Allocate additonal hours from Friday')




