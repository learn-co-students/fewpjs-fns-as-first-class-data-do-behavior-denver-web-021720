/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
   const string = timeString.split(':').join('')
   const time = parseInt(string)
   if (time < 1200) {
     return 'Good Morning'
   } else if (time > 1200 && time < 1700) {
     return 'Good Afternoon'
   } else {
     return 'Good Evening'
   }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greeting = document.querySelector('#greeting')
  greeting.innerText = string 
}
