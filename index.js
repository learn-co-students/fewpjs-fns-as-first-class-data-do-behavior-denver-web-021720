/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
// greet() {

// }

function displayMessage(string) {
  const greeting = document.querySelector('#greeting')
  greeting.innerText = string

}

function greet(timeString) {
  const time = timeString.split(':')[0]
  // if the time is earlier than 12pm, return "good morning"
if (time < 12) {
  return "Good Morning"
}
else if (time > 12 && time < 17) {
  return "Good Afternoon"
}
else {
  return "Good Evening"
}
  // if the time is between 12 adn 5pm, return 'good afternoon'
  // if the time is later than 5pm return "good evening"
}