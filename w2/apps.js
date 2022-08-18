//Question to be answered: Which homework should I work on today
//let Mon = 1 tues = 2 wed = 3 thurs = 4 fri = 5

const showOnPage = function (text) {
   let newParagraph = document.createElement("p")
   newParagraph.innerHTML = text
   let outputDiv = document.getElementById("output")
   outputDiv.append(newParagraph)
 }

 showOnPage(cit93workdue)
 showOnPage(cit28workdue)
 showOnPage(cit58workdue)
 
let currentday = 2
let cit93workdue = true
let cit28workdue = true
let cit58workdue = false

if(currentday === 2) {
   showOnPage('Today is a CIT58 Class day from 6pm-10pm. No homework needs to be done')
} else if (cit28workdue && cit58workdue) {
   let cit93workdue = false
    currentday !== 2
    showOnPage('Work on SQL and Ethical Hacking after work')
} else if (cit58workdue && cit93workdue) {
   let cit28workdue = false
    currentday !== 2
    showOnPage('Work on Ethical Hacking and JavaScript after work')
} else if (cit93workdue && cit28workdue) {
    let cit58workdue = false
    currentday !== 2
    showOnPage('Work on JavaScript and SQL after work')
} else if (cit28workdue){ 
    let cit58workdue = false
    let cit93workdue = false
    showOnPage('Work on SQL after work')
 } else if (cit58workdue){
    let cit93workdue = false
    let cit28workdue = false
    showOnPage('Work on Ethical Hacking after work')
 } else if (cit93workdue) {
    let cit28workdue = false
    let cit58workdue = false
    showOnPage('work on Javascript after work')
 }
 else 
   showOnPage('do whatever you want')
