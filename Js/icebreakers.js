var triviaCat = document.querySelector("#trivia-dropdown");
var triviaBtn = document.querySelector("#trivia-btn");
var triviaDiv = document.querySelector("#trivia-div");
var factsDiv = document.querySelector("#facts-div");
var factsBtn = document.querySelector("#facts-btn");

var jokesDiv = document.querySelector("#jokes-div");
var jokesBtn = document.querySelector("#jokes-btn");

var norrisDiv = document.querySelector("#norris-div");
var norrisBtn = document.querySelector("#norris-btn");
var quoteCat = document.querySelector("#quotes-dropdown");
var quotesDiv = document.querySelector("#quotes-div");
var quoteBtn = document.querySelector("#quote-btn");
var riddleDiv = document.querySelector("#riddle-div");
var riddleBtn = document.querySelector("#riddle-btn");
//move into a for loop 

var triviaCategory = "";
var FactsAmount = "";
var jokeAmount = "";
var norrisAmount = "";
var quoteCategory = "";

function triviaGen(){
    triviaCategory = triviaCat.value;
    fetch("https://api.api-ninjas.com/v1/trivia?category=" + triviaCategory, {
  method: 'GET',
  headers: {
    'X-Api-Key': 's4eai3OcTWIfItEZPVmhVQ==7xEbwZl3bg2IVXiV',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => { 
    clearTrivia()
    var triviah3 = document.createElement("h3");
    var triviaP = document.createElement("p");
    var trivia = document.createElement("div")
    trivia.classList = "trivia"
    trivia.append(triviah3);
    trivia.append(triviaP);
    triviaDiv.append(trivia);
    triviah3.textContent = result[0].question;
    triviaP.textContent = result[0].answer;
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}
function clearTrivia() {
  let oldTrivia = document.getElementsByClassName("trivia");
  for (let i=oldTrivia.length -1;i>=0; i--){
    oldTrivia[i].remove();
  }
}
var factSlider = document.getElementById("factsRange");
var factCountEl = document.getElementById("fact-count");
factCountEl.textContent = factSlider.value;

factSlider.oninput = function() {
  factCountEl.textContent = this.value;
}

function factsGen(){
  FactsAmount = factSlider.value;
    fetch("https://api.api-ninjas.com/v1/facts?limit=" + FactsAmount, {
  method: 'GET',
  headers: {
    'X-Api-Key': 'VL87+lt+oTWu9ITfd0qcaA==LpaINk8wGhmB0Dry',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => {
    
    clearFacts()
    for(var i = 0; i< result.length;i++){
      
      var factsh3 = document.createElement("h3");
      var factsP = document.createElement("p");
      var facts = document.createElement("div")
      facts.classList = "facts"
      factsh3.textContent = "Did you know"
      factsP.textContent = result[i].fact;
      facts.append(factsh3)
      facts.append(factsP)
      factsDiv.append(facts)
    }

    
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}
function clearFacts() {
  let oldFacts = document.getElementsByClassName("facts");
  for (let i=oldFacts.length -1;i>=0; i--){
      oldFacts[i].remove();
  }
}
var jokeSlider = document.getElementById("jokesRange");
var jokeCountEl = document.getElementById("joke-count");
jokeCountEl.textContent = jokeSlider.value;

jokeSlider.oninput = function() {
  jokeCountEl.textContent = this.value;
}

function jokesGen(){
  jokeAmount = jokeSlider.value;
    fetch("https://api.api-ninjas.com/v1/jokes?limit=" + jokeAmount, {
  method: 'GET',
  headers: {
    'X-Api-Key': 'VL87+lt+oTWu9ITfd0qcaA==LpaINk8wGhmB0Dry',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => {
    clearJokes()
    for(var i = 0; i< result.length;i++){
      var jokeh3 = document.createElement("h3");
      var jokeP = document.createElement("p");
      var jokes = document.createElement("div")
      jokes.classList = "jokes"
      jokeh3.textContent = "Joke #" + i;
      
      jokeP.textContent = result[i].joke;
      jokes.append(jokeh3)
      jokes.append(jokeP)
      jokesDiv.append(jokes)
    }

    
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}

function clearJokes() {
  let oldJokes = document.getElementsByClassName("jokes");
  for (let i=oldJokes.length -1;i>=0; i--){
      oldJokes[i].remove();
  }
}



function norrisGen(){
    fetch("https://api.api-ninjas.com/v1/chucknorris?" , {
  method: 'GET',
  headers: {
    'X-Api-Key': 'VL87+lt+oTWu9ITfd0qcaA==LpaINk8wGhmB0Dry',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => {
    clearNorris()
      var norrish3 = document.createElement("h3");
      var norrisP = document.createElement("p");
      var norris = document.createElement("div")
      norris.classList = "norris"
      norrish3.textContent = "Joke";
      norrisP.textContent = result.joke;
      norris.append(norrish3)
      norris.append(norrisP)
      norrisDiv.append(norris)
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}

function clearNorris() {
  let oldNorris = document.getElementsByClassName("norris");
  for (let i=oldNorris.length -1;i>=0; i--){
    oldNorris[i].remove();
  }
}

function quotesGen(){
  quoteCategory = quoteCat.value;
  fetch("https://api.api-ninjas.com/v1/quotes?category=" + quoteCategory, {
method: 'GET',
headers: {
  'X-Api-Key': 's4eai3OcTWIfItEZPVmhVQ==7xEbwZl3bg2IVXiV',
  'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(result => { 
  clearQuotes()
  var quoteh3 = document.createElement("h3");
  var quoteP = document.createElement("p");
  var quote = document.createElement("div")
  quote.classList = "quote"
  quoteh3.textContent = "Quote Generated:";
  quoteP.textContent = result[0].quote;
  quote.append(quoteh3);
  quote.append(quoteP);
  
  
  quotesDiv.append(quote);
})
.catch(error => {
  console.error('Error: ', error);
});
}
function clearQuotes() {
let oldQuotes = document.getElementsByClassName("trivia");
for (let i=oldQuotes.length -1;i>=0; i--){
  oldQuotes[i].remove();
}
}

function riddleGen(){
  fetch("https://api.api-ninjas.com/v1/riddles" , {
method: 'GET',
headers: {
  'X-Api-Key': 'VL87+lt+oTWu9ITfd0qcaA==LpaINk8wGhmB0Dry',
  'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(result => {
  clearRiddle()
    var riddleh3 = document.createElement("h3");
    var riddleP = document.createElement("p");
    var riddle = document.createElement("div")
    riddle.classList = "riddle"
    riddleh3.textContent = result[0].question;
    riddleP.textContent = result[0].answer;
    riddle.append(riddleh3)
    riddle.append(riddleP)
    riddleDiv.append(riddle)
})
.catch(error => {
  console.error('Error: ', error);
});
}

function clearRiddle() {
let oldRiddle = document.getElementsByClassName("riddle");
for (let i=oldRiddle.length -1;i>=0; i--){
  oldRiddle[i].remove();
}
}
triviaBtn.addEventListener("click", triviaGen)
factsBtn.addEventListener("click", factsGen)
jokesBtn.addEventListener("click", jokesGen)
norrisBtn.addEventListener("click", norrisGen)
quoteBtn.addEventListener("click", quotesGen)
riddleBtn.addEventListener("click", riddleGen)