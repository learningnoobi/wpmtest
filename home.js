// define the time limit

let getname = localStorage.getItem('username')
let local = document.getElementById('local')
let limit = localStorage.getItem('timelimit')
let timer_text = document.querySelector(".curr_time");
let fifteens = document.getElementById("fifteen")
let thirtys = document.getElementById("thirty")
let sixtys = document.getElementById("sixty")
let twomins = document.getElementById("twomin")

let TIME_LIMIT = limit;





function fifteen(){
  localStorage.setItem('timelimit',15)
   limit = localStorage.getItem('timelimit')
  
  timer_text.innerText = limit+ 's'
  fifteens.style.color = "#ee4e81"
  thirtys.style.color = "white"
  sixtys.style.color = "white"
  twomins.style.color = "white"
  TIME_LIMIT = limit
}

function thirty(){
  localStorage.setItem('timelimit',30)
   limit = localStorage.getItem('timelimit')
  TIME_LIMIT = limit 
  timer_text.innerText = limit+ 's'
  fifteens.style.color = "white"
  thirtys.style.color = "#ee4e81"
  sixtys.style.color = "white"
  twomins.style.color = "white"
}



function sixty(){
  localStorage.setItem('timelimit',60)
   limit = localStorage.getItem('timelimit')
  TIME_LIMIT = limit
  fifteens.style.color = "white"
  thirtys.style.color = "white"
  sixtys.style.color = "#ee4e81"
  twomins.style.color = "white"
  timer_text.innerText = limit+ 's'
}


function twomin(){
  localStorage.setItem('timelimit',120)
   limit = localStorage.getItem('timelimit')
  TIME_LIMIT = limit
  fifteens.style.color = "white"
  thirtys.style.color = "white"
  sixtys.style.color = "white"
  twomins.style.color = "#ee4e81"
  timer_text.innerText = limit+ 's'
}



timer_text.innerText = limit+ 's'

// switch(limit){
//   case 15:
//     fifteens.style.color = "#ee4e81"
//     break;
//   case 30:
//     thirtys.style.color = "#ee4e81"
//     break;
//     case 60:
//       sixtys.style.color = "#ee4e81"
//       break;
//     case 120:
//       twomins.style.color = "#ee4e81"
//       break;
//   default:
//       let b = "no"
// }
if(limit==15){
  fifteens.style.color = "#ee4e81"
}
if(limit==30){
  thirtys.style.color = "#ee4e81"
}
if(limit==60){
  sixtys.style.color = "#ee4e81"
}
if(limit==120){
  twomins.style.color = "#ee4e81"
}



if(getname==null){
    let username = prompt('enter username');
    localStorage.setItem('username',username)
    local.innerText = getname
}
local.innerText = getname
quotes_array = [
  "Do one thing every day that scares you.",
  "Failure is the condiment that gives success its flavor.",
  "Happiness is not something ready made. It comes from your own actions.",
  "It's going to be hard, but hard does not mean impossible.",
  "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
  "Whatever you are, be a good one.",
  "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."
]


let level = document.getElementById("select")
let difficulty;

function easy(){
  localStorage.setItem('difficulty','easy')
  quotes_array = [
    "a about all also and as at be because but by can come could day do even find first for fr",
    "me more my new no not now of on one only or other our out people say see she",
    "its just know like look make man many me more my new no not now of",
    "they thing think this those time to two up use very want way we well what when which who will with"
  ]
  first_row.innerText  = "Currently Easy" 
}

function hard(){
  localStorage.setItem('difficulty','hard')
  quotes_array = [
    "The 'perfect paragraph' will start (with a topic sentence)? It will have detail sentences in the ; Middle and end With a [concluding sentence].",
    "'Failure','success', 'lust' is THE condiment That gives Success its flavor.",
    "Wake up WITH determination a'int (see for yourself) and ; ",
    "It's going to be hard ; but Hard does (not mean impossible)?",
    "Learning never exhausts the mind.So keep learning forever.",
    "{The only way to do}, great WORK is ; To love ain't What you Do."
  ]
  first_row.innerText  = "Currently Hard" 
}

function medium(){
  localStorage.setItem('difficulty','medium')
  quotes_array = [
    "Do one thing every day that scares you.",
    "Failure is the condiment that gives success its flavor.",
    "Happiness is not something ready made. It comes from your own actions.",
    "It's going to be hard, but hard does not mean impossible.",
    "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
    "Whatever you are, be a good one.",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."
  ]
  first_row.innerText  = "Currently Medium" 
  
}

function ultrahard(){
  localStorage.setItem('difficulty','ultra')
  quotes_array = [
    "In 1599 (the trou'pe) Moved ;To a new 'venue' 1872, the Globe [Theatre], south of 'the' Thames River {in London,}",
    "Zebras are Several (many) Species of African EQUIDS (horse family) united by their distinctive 'BLACK' and 'White Striped coats'? ",
    "?Wake up with Deter'mination in 8039. Go to [dance] bed with 'satisfaction'.",
    "It's Going to be 'HARD' in 4826, but Hard Does not mean [impossible];",
    "Learning :NEVER exhausts (the mind). So keep {learning} forever.",
    "The 'only' way 987  do great [work] is ? love 'what' you do."
  ]
  first_row.innerText  = "currently Ultra Hard" 
}

console.log()


// define quotes to be used
let diff = window.localStorage.getItem("difficulty");
let first_row = document.getElementById('firstrow');
if(diff==="easy"){
  quotes_array = [
    "as if ken gintama see to me dance ego anime naruto bleach golden kamuy dragon ball one piece",
    "a nana all love now as at be mine because but by can should could day do even find first for fr",
    "me more my new no not love of on one only or other our out people say day she",
    "its just know like look make man zebra me more my new no not now of",
    "they thing could this those spam to two up use very want way we well what when which who will with",
   
  ]
  }
  //when th
  if(diff==="hard"){
    quotes_array = [
      "The 'perfect paragraph' will start (with a topic sentence)? It will have detail sentences in the ; Middle and end With a [concluding sentence].",
      "'Failure','success', 'lust' is THE condiment That gives Success its flavor.",
      "Wake up WITH determination a'int (see for yourself) and ; ",
      "It's going to be hard ; but Hard does (not mean impossible)?",
      "Learning never exhausts the mind.So keep learning forever.",
      "{The only way to do}, great WORK is ; To love ain't What you Do."
    ]
  }

  if(diff ==="medium"){
    quotes_array = [
      "The true measure Of a shinobi is not how he lives, but how he dies",
      "Do one thing every day that scares you.",
      "War brings death. And wounds and pain to both sides.",
      "Failure is the condiment that gives success its flavor.",
      "Happiness is not something ready made. It comes from your own actions.",
      "It's going to be hard, but hard does not mean impossible.",
      "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
      "Whatever you are, be a good one.",
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
      "Success is the sum of small efforts repeated day in and day out."
    ]
  }

  if(diff ==="ultrahard"){
    quotes_array = [
      "In 1599 (the trou'pe) Moved ;To a new 'venue' 1872, the Globe [Theatre], South of 'The' Thames River {in London,}",
      "Zebras are Several (many) Species of African EQUIDS (horse family) united by their distinctive 'BLACK' and 'White Striped coats'? ",
      "?Wake up with Deter'mination in 8039. Go to [dance] bed with 'satisfaction'.",
      "It's Going to be 'HARD' in 4826, but Hard Does not mean [impossible];",
      "Learning :NEVER exhausts (the mind). So keep {learning} forever.",
      "The 'only' way 987  do great [work] is ? love 'what' you do."
    ]
  }








if(diff){
  first_row.innerText  = "Currently " + diff
}

if(limit==null){
  TIME_LIMIT = 60;
  timer_text.innerText = TIME_LIMIT+ 's'
}


const random = Math.floor(Math.random() * quotes_array.length);

// selecting required elements

let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;

function updateQuote() {
  quote_text.textContent = null;
  current_quote = quotes_array[quoteNo];

  // separate each character and make an element 
  // out of each of them to individually style them
  current_quote.split('').forEach(char => {
    const charSpan = document.createElement('span')
    charSpan.innerText = char
    quote_text.appendChild(charSpan)
  })

  // roll over to the first quote
  if (quoteNo < quotes_array.length - 1)
    quoteNo++;
  else
    quoteNo = 0;
}


function processCurrentText() {

  // get current input text and split it
  curr_input = input_area.value;
  curr_input_array = curr_input.split('');
  

  // increment total characters typed
  characterTyped++;

  errors = 0;

  quoteSpanArray = quote_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
    let typedChar = curr_input_array[index]

    // characters not currently typed
    if (typedChar == null) {
      char.classList.remove('correct_char');
      char.classList.remove('incorrect_char');

      // correct characters
    } else if (typedChar === char.innerText) {
      char.classList.add('correct_char');
      char.classList.remove('incorrect_char');

      // incorrect characters
    } else {
      char.classList.add('incorrect_char');
      char.classList.remove('correct_char');

      // increment number of errors
      errors++;
    }
  });

  // display the number of errors
  error_text.textContent = total_errors + errors;

  // update accuracy text
  let correctCharacters = (characterTyped - (total_errors + errors));
  let accuracyVal = ((correctCharacters / characterTyped) * 100);
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
  }
  else {
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

  // display restart button
  restart_btn.style.display = "block";

  // calculate cpm and wpm
  cpm = Math.round(((characterTyped / timeElapsed) * 60));
  wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
  localStorage.setItem('last_wpm',wpm)
  // update cpm and wpm text
  cpm_text.textContent = cpm;
  wpm_text.textContent = wpm;

  // display the cpm and wpm
  cpm_group.style.display = "block";
  wpm_group.style.display = "block";

}

function lastwpm(){
  let lastwpm = document.getElementById('lastwpm')
  lastwpm_local = localStorage.getItem('last_wpm')
  if(lastwpm_local){
    lastwpm.innerText = `You scored ${lastwpm_local} wpm last time.`
  }
}

function startGame() {

  resetValues();
  updateQuote();

  // clear old and start a new timer
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);

}

function resetValues() {
  timeLeft = TIME_LIMIT;
  timeElapsed = 0;
  errors = 0;
  total_errors = 0;
  accuracy = 0;
  characterTyped = 0;
  quoteNo = 0;
  input_area.disabled = false;

  input_area.value = "";
  quote_text.textContent = 'Click on the area below to start the game.';
  accuracy_text.textContent = 100;
  timer_text.textContent = timeLeft + 's';
  error_text.textContent = 0;
  restart_btn.style.display = "none";
  cpm_group.style.display = "none";
  wpm_group.style.display = "none";
  lastwpm()
}