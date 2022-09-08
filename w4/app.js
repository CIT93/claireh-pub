const showOnPage = function (text) {
  let newParagraph = document.createElement("p")
  newParagraph.innerHTML = text
  let outputDiv = document.getElementById("output")
  outputDiv.append(newParagraph)
}
 
let freetime = 5
let classDay = 1

let class28 = {
  classTitle: 'SQL',
  homeworkTime: 3,
  inPerson: 'No',
  dayOfWeek: 'Wednesday'
}

let class58f = {
  classTitle: 'Ethical Hacking',
  homeworkTime: 2,
  inPerson: 'Yes',
  dayOfWeek: 'Tuesday'
}

let class93 = {
  classTitle: 'Java Script',
  homeworkTime: 5,
  inPerson: 'No',
  dayOfWeek: 'Monday'
}

let getsummary = function (clairesClasses) {
  return {
      summary: `Todays class is ${clairesClasses.classTitle}`,
      classDaySummary: `Today is ${clairesClasses.dayOfWeek}. You have ${clairesClasses.homeworkTime} hours of homework which leaves you with ${freetime - clairesClasses.homeworkTime} hours
       of freetime left. `
  }
}

let monSummary = getsummary(class93)
let tuesSummary = getsummary(class58f)
let wedSummary = getsummary (class28)

  if (classDay === 2) {
  showOnPage(tuesSummary.summary)
  showOnPage('Today is a tuesday. You have in person class. No homeowork tonight')
   } else if (classDay === 1) {
  showOnPage(monSummary.summary)
  showOnPage(monSummary.classDaySummary)
   } else if (classDay === 3) {
  showOnPage(wedSummary.summary)
  showOnPage(wedSummary.classDaySummary) 
   } else {
  showOnPage('No homework today! It is a free day!')
   }




  
  
  