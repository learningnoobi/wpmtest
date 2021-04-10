const local = document.getElementById("local");
const timer_text = document.querySelector(".curr_time");
const first_row = document.getElementById("firstrow");
const level = document.getElementById("select");

const timeModes = {
  15: document.getElementById("fifteen"),
  30: document.getElementById("thirty"),
  60: document.getElementById("sixty"),
  120: document.getElementById("twomin"),
};

// Current state of wpmtest
const current = {
  started: false,
  username: localStorage.getItem("username"),
  timeLimit: +localStorage.getItem("timelimit") || 60,
  difficulty: localStorage.getItem("difficulty") || "Medium",
};

function setTimeLimit(time) {
  if (!Object.keys(timeModes).includes(`${time}`)) {
    console.error(`Time limit ${time}s not available.`);
    return;
  }
  localStorage.setItem("timelimit", time);
  current.timeLimit = localStorage.getItem("timelimit");

  timer_text.innerText = current.timeLimit + "s";

  for (t in timeModes) {
    timeModes[t].style.color = t == time ? "#ee4e81" : "white";
  }
}

function setGameDifficulty(difficulty) {
  localStorage.setItem("difficulty", difficulty);

  current.difficulty = difficulty;

  first_row.innerText = "Currently " + difficulty;
}

// Initializing
setTimeLimit(current.timeLimit);
setGameDifficulty(current.difficulty);

if (!current.username) {
  current.username = prompt("enter username");
  localStorage.setItem("username", current.username);
}
local.innerText = current.username;

// selecting required elements
const accuracy_text = document.querySelector(".curr_accuracy");
const error_text = document.querySelector(".curr_errors");
const cpm_text = document.querySelector(".curr_cpm");
const wpm_text = document.querySelector(".curr_wpm");
const quote_text = document.querySelector(".quote");
const input_area = document.querySelector(".input_area");
const restart_btn = document.querySelector(".restart_btn");
const cpm_group = document.querySelector(".cpm");
const wpm_group = document.querySelector(".wpm");
const error_group = document.querySelector(".errors");
const accuracy_group = document.querySelector(".accuracy");

const getRandomQuoteNo = () =>
  Math.floor(Math.random() * quotes[current.difficulty].length);

let timeLeft = current.timeLimit;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = getRandomQuoteNo();
let timer = null;

function updateQuote() {
  quote_text.textContent = null;
  current_quote = quotes[current.difficulty][quoteNo];
  // separate each character and make an element
  // out of each of them to individually style them
  current_quote.split("").forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    quote_text.appendChild(charSpan);
  });

  // roll over to the first quote
  if (quoteNo < quotes[current.difficulty].length - 1) quoteNo++;
  else quoteNo = 0;
}

function processCurrentText() {
  // get current input text and split it
  curr_input = input_area.value;
  curr_input_array = curr_input.split("");

  // increment total characters typed
  characterTyped++;

  errors = 0;

  quoteSpanArray = quote_text.querySelectorAll("span");
  quoteSpanArray.forEach((char, index) => {
    let typedChar = curr_input_array[index];

    // characters not currently typed
    if (typedChar == null) {
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
      // correct characters
    } else if (typedChar === char.innerText) {
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
      // incorrect characters
    } else {
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");
      // increment number of errors
      errors++;
    }
  });

  // display the number of errors
  error_text.textContent = total_errors + errors;

  // update accuracy text
  let correctCharacters = characterTyped - (total_errors + errors);
  let accuracyVal = (correctCharacters / characterTyped) * 100;
  accuracy_text.textContent = Math.round(accuracyVal);

  // if current text is completely typed
  // irrespective of errors
  if (curr_input.length == current_quote.length) {
    updateQuote();
    // update total errors
    total_errors += errors;
    // clear the input area
    input_area.value = "";
  }
}

function updateTimer() {
  if (timeLeft > 0) {
    // decrease the current time left
    timeLeft--;
    // increase the time elapsed
    timeElapsed++;
    // update the timer text
    timer_text.textContent = timeLeft + "s";
  } else {
    // finish the game
    finishGame();
  }
}

function finishGame() {
  // stop the timer
  clearInterval(timer);

  // disable the input area
  input_area.disabled = true;
  // show finishing text
  quote_text.textContent = "Click on restart to start a new game.";

  // calculate cpm and wpm
  cpm = Math.round((characterTyped / timeElapsed) * 60);
  wpm = Math.round((characterTyped / 5 / timeElapsed) * 60);
  localStorage.setItem("last_wpm", wpm);
  // update cpm and wpm text
  cpm_text.textContent = cpm;
  wpm_text.textContent = wpm;
  // display the restart,cpm and wpm
  toggleButtons();
}

// Helper to toggle restart,cpm and wpm buttons
function toggleButtons(prop = "block") {
  restart_btn.style.display = prop;
  cpm_group.style.display = prop;
  wpm_group.style.display = prop;
}

function showLastwpm() {
  let lastwpm = document.getElementById("lastwpm");
  lastwpm_local = localStorage.getItem("last_wpm");
  if (lastwpm_local) {
    lastwpm.innerText = `You scored ${lastwpm_local} wpm last time.`;
  }
}

function startGame() {
  if (current.started) return;
  resetValues();
  updateQuote();
  current.started = true;
  // clear old and start a new timer
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);
}

function resetValues() {
  timeLeft = current.timeLimit;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  current.started = false;
  characterTyped = 0;
  quoteNo = getRandomQuoteNo();
  input_area.disabled = false;

  input_area.value = "";
  quote_text.textContent = "Click on the area below to start the game.";
  accuracy_text.textContent = 100;
  timer_text.textContent = timeLeft + "s";
  error_text.textContent = 0;
  toggleButtons("none");
  showLastwpm();
}