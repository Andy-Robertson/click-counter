// Assigns all 3 buttons to array, buttons
const buttons = document.querySelectorAll("button");

// Assigns display to an array, screen
const screen = document.getElementById("display");

// Iterates through buttons array using forEach and adds event listeners to each button
buttons.forEach(function (button) {
  button.addEventListener("click", keepCount);
});

// Declares count variable and sets it to zero
let count = 0;
// Sets displayed value to zero prior to counting
screen.value = count;

// Function to manipulate the count variable
function keepCount(event) {
  // Added to shorten code
  const buttonId = event.target.id;

  // Tests condition of buttonId
  if (buttonId === "plus-btn") {
    count += 1; // Adds one to the count if plus button clicked
    screen.value = count; // updates output screen with value stored in count variable
  } else if (buttonId == "minus-btn") {
    count -= 1; // Reduces count variable by one if minus button clicked
    screen.value = count;
  } else {
    count = 0; // Resets counter to zero if reset button clicked
    screen.value = 0;
  }
}
