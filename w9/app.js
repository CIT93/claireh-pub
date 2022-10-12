  
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


  

  
  document.querySelector('#classDropDown').addEventListener('change', function (e) {
    e.preventDefault()
    fall22.push({
     id: uuidv4(),
     classTitle: "",
    })
    localStorage.setItem('fall22', JSON.stringify(fall22))
    renderClass(fall22, filters)
 })

 document.querySelector("#error").addEventListener('submit', function  (e) {
  let error = e.target.elements.homework.value
  let messages = []
if (error <= 0) {
  messages.push('Please enter a homework time greater than 0')
} 
if (error >= 15) {
  messages.push('Please enter a homework time less than 15')
}
})


  
  