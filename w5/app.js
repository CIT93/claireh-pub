const showOnPage = function (text) {
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
  }
   
 

const fall22 = [
  {
      classTitle: 'SQL',
      homeworkTime: 3,
      inPerson: 'No',
      dayOfWeek: 'Wednesday'
  },
  {
      classTitle: 'Ethical Hacking',
      homeworkTime: 2,
      inPerson: 'Yes',
      dayOfWeek: 'Tuesday'
  },
  {
      classTitle: 'Java Script',
      homeworkTime: 5,
      inPerson: 'No',
      dayOfWeek: 'Monday'
  },]
  
  
  
  const dailyHomework =  function (fall22) {
  classDay  = 1
  if (classDay === 2) {
      showOnPage('Today is Tuesday. You have in person class. Leave your house by 5:15pm.')
  } else if (classDay === 1) {
      showOnPage(`Today is ${fall22.dayOfWeek}.You have ${fall22.classTitle} You have ${fall22.homeworkTime} hours of homework.`)
  } else if (classDay === 3) {
      showOnPage(`Today is ${fall22.dayOfWeek}.You have ${fall22.classTitle} You have ${fall22.homeworkTime} hours of homework.`)
  } else {
      showOnPage = 'No homework today! It is a free day!'
  }
  }
  
  showOnPage(dailyHomework(fall22))
  
  
  
  const loopOverWeekly = function() {
      fall22.forEach (function(obj) {
          dailyHomework(obj);
      })
  }
  
  loopOverWeekly()
  showOnPage(`Amount of days reviewed was ${fall22.length}`)
  
  
  
  
  
  
  
  
  
  
  