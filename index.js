// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
    resetGame();
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let grid = ["", "", "", "", "", "", "", "", ""];
let count = 0;

function clickButton(index) {
  // let currentPlayer = "";
  // Your main code here.
  let currentPlayer = "";
  if (grid[index - 1] === "") {
    currentPlayer = count % 2 == 0 ? "X" : "O";
    count++;
    grid[index - 1] = currentPlayer;
    fillButton(index, currentPlayer);
    theWinner(currentPlayer);
  }

  // console.log(
  //   `Button number ${index} is clicked , count ${count} ,grid ${grid}`
  // );
}

function theWinner(player) {
  const R1 =
    [grid[0], grid[1], grid[2]].join("") === [player, player, player].join("");
  const R2 =
    [grid[3], grid[4], grid[5]].join("") === [player, player, player].join("");
  const R3 =
    [grid[6], grid[7], grid[8]].join("") === [player, player, player].join("");
  const C1 =
    [grid[0], grid[3], grid[6]].join("") === [player, player, player].join("");
  const C2 =
    [grid[1], grid[4], grid[7]].join("") === [player, player, player].join("");
  const C3 =
    [grid[2], grid[5], grid[8]].join("") === [player, player, player].join("");
  const D1 =
    [grid[0], grid[4], grid[8]].join("") === [player, player, player].join("");
  const D2 =
    [grid[2], grid[4], grid[6]].join("") === [player, player, player].join("");

  if (R1 || R2 || R3 || C1 || C2 || C3 || D1 || D2) {
    winningAlert(player);
  } else if (
    grid[0] !== "" &&
    grid[1] !== "" &&
    grid[2] !== "" &&
    grid[3] !== "" &&
    grid[4] !== "" &&
    grid[5] !== "" &&
    grid[6] !== "" &&
    grid[7] !== "" &&
    grid[8] !== ""
  ) {
    draw();
  }
}

function resetGame() {
  count = 0;

  grid = ["", "", "", "", "", "", "", "", ""];
  for (let i = 0; i < 9; i++) {
    fillButton(i, "");
  }
}

function draw() {
  alert("DRAW!");
  resetGame();
}
/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
