// 1 - The .onload is a Global event that happens every time the browser window loads.
// here we are using it to fire a function that will log out a message in the console.
window.onload = () => {
  console.log("Hey student, welcome to your console!")

  // We'll add an event listener to the submit button so we can prevent the window from reloading when we click it.
  const submitButton = document.getElementById("submit-button").addEventListener("click", event => {
    event.preventDefault(),
    sayHi()
  })
}



// 2 - This function is called when a user clicks on the button in the HTML. 
// Can you make the text "hello" log to the console?
const sayHello = () => {
  return "Hello!"
}



// 3 - In the Chrome Console type out the name of each of these variables 
// ... one at a time and see what is returned.
const arr1 = [2, 4, 6, 77, 90, 12, 1]
const num1 = 8039
const name1 = "Chrome Console"
const object1 = {
  name: "Laura",
  phone: "214-888-0000",
  email: "lauracan@email.com",
  username: "fantastic-laura",
  id: 69002,
}

// 3.5 - Can you add statements below to log to the console each of the variables above?


// This variable will hold text values for us
let inputFieldValue = ""

// 4 - This function will change the value assigned to inputFieldValue
// go back to the web page, open the console, and type into the Name field to see what is happening.
const setInputFieldValue = (val) => {
  inputFieldValue = val
  console.log(val)
  console.log("inputFieldValue: " + inputFieldValue)
}


// 5 - This function uses the field input to say hello to a name given by the user.
const sayHi = () => {
  greetingString = "Hi, " + inputFieldValue + "!"

  return console.log(greetingString)
}



