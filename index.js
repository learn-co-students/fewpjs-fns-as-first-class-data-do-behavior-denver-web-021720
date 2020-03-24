/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const hour = timeString.split(':')[0]

  if (hour < 12){
    return "Good Morning"
  }
  else if (hour >= 17){
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  const greeting = document.querySelector('#greeting')
  greeting.innerText = message
}
