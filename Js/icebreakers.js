var triviaCat = document.querySelector("#trivia-dropdown");
var triviaBtn = document.querySelector("#trivia-btn");
var triviaDiv = document.querySelector("#trivia-div");

var factsDiv = document.querySelector("#facts-div");
var factsBtn = document.querySelector("#facts-btn");

var jokesDiv = document.querySelector("#jokes-div");
var jokesBtn = document.querySelector("#jokes-btn");

var dadDiv = document.querySelector("#dad-div");
var dadBtn = document.querySelector("#dad-btn");

var quoteCat = document.querySelector("#quotes-dropdown");
var quotesDiv = document.querySelector("#quotes-div");
var quoteBtn = document.querySelector("#quote-btn");

var riddleDiv = document.querySelector("#riddle-div");
var riddleBtn = document.querySelector("#riddle-btn");

var triviaCategory = "";
var triviaAmount = "";

var factsAmount = "";

var quoteCategory = "";
var quoteAmount = "";

var jokeAmount = "";

var dadAmount = "";

var riddleAmount = "";

var triviaSlider = document.getElementById("triviaRange");
var triviaCountEl = document.getElementById("trivia-count");
triviaCountEl.textContent = parseInt(triviaSlider.value);
triviaSlider.oninput = function() {
  triviaCountEl.textContent = this.value;  
}
function triviaGen(){
    triviaCategory = triviaCat.value;
    triviaAmount = triviaSlider.value;
    fetch("https://api.api-ninjas.com/v1/trivia?category=" + triviaCategory+ "&limit=" + triviaAmount, {
  method: 'GET',
  headers: {
    'X-Api-Key': 's4eai3OcTWIfItEZPVmhVQ==7xEbwZl3bg2IVXiV',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => { 
    clearTrivia()
    for(var i = 0; i< result.length;i++){
    var triviah3 = document.createElement("h3");
    var triviaP = document.createElement("p");
    var trivia = document.createElement("div")
    trivia.classList = "trivia"
   
    
    triviah3.textContent = "Question #"+ (i+1) +": "+ result[i].question;
    triviaP.textContent = result[i].answer;
    
    trivia.append(triviah3);
    trivia.append(triviaP);
    triviaDiv.append(trivia);
    }
    triviaBtn.textContent = "Generate More Trivia"
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
factCountEl.textContent = parseInt(factSlider.value);
factSlider.oninput = function() {
  factCountEl.textContent = this.value;
  if(parseInt(this.value) === 1){
    factsBtn.textContent="Generate a Fact"
  } else if (parseInt(this.value) > 1) {
    factsBtn.textContent="Generate Facts"
  }
  
}

function factsGen(){
  factsAmount = factSlider.value;
    fetch("https://api.api-ninjas.com/v1/facts?limit=" + factsAmount, {
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
      factsh3.textContent = "Fact #" + (i+ 1);
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
jokeCountEl.textContent = parseInt(jokeSlider.value);
jokeSlider.oninput = function() {
  jokeCountEl.textContent = this.value;
  if(parseInt(this.value) === 1){
    
    jokesBtn.textContent="Generate a Joke"
  } else if (parseInt(this.value) > 1) {
    jokesBtn.textContent="Generate Jokes"
  }
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
      jokeh3.textContent = "Joke #" + (i+ 1);
      
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

var dadSlider = document.getElementById("dadRange");
var dadCountEl = document.getElementById("dad-count");
dadCountEl.textContent = parseInt(dadSlider.value);
dadSlider.oninput = function() {
  dadCountEl.textContent = this.value;
  if(parseInt(this.value) === 1){
    
    dadBtn.textContent="Generate a Dad Joke"
  } else if (parseInt(this.value) > 1) {
    dadBtn.textContent="Generate Dad Jokes"
  }
}
function dadGen(){
  dadAmount=dadSlider.value;

    fetch("https://api.api-ninjas.com/v1/dadjokes?limit="+ dadAmount , {
  method: 'GET',
  headers: {
    'X-Api-Key': 'VL87+lt+oTWu9ITfd0qcaA==LpaINk8wGhmB0Dry',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => {
    clearDad()
    for(var i = 0; i< result.length;i++){
      var dadh3 = document.createElement("h3");
      var dadP = document.createElement("p");
      var dad = document.createElement("div")
      dad.classList = "dad"
      dadh3.textContent = "Dad Joke #" + (i+1);
      dadP.textContent = result[0].joke;
      dad.append(dadh3)
      dad.append(dadP)
      dadDiv.append(dad)
    }
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}

function clearDad() {
  let oldDad = document.getElementsByClassName("dad");
  for (let i=oldDad.length -1;i>=0; i--){
    oldDad[i].remove();
  }
}

var quoteSlider = document.getElementById("quoteRange");
var quoteCountEl = document.getElementById("quote-count");
quoteCountEl.textContent = parseInt(quoteSlider.value);
quoteSlider.oninput = function() {
  quoteCountEl.textContent = this.value;
  console.log(this.value)
  if(parseInt(this.value) === 1){
    
    quoteBtn.textContent="Generate a Quote"
  } else if (parseInt(this.value) > 1) {
    quoteBtn.textContent="Generate Quotes"
  }
}
function quotesGen(){
  quoteCategory = quoteCat.value;
  quoteAmount = quoteSlider.value;
  fetch("https://api.api-ninjas.com/v1/quotes?category=" + quoteCategory + "&limit="+ quoteAmount, {
method: 'GET',
headers: {
  'X-Api-Key': 's4eai3OcTWIfItEZPVmhVQ==7xEbwZl3bg2IVXiV',
  'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(result => { 
  clearQuotes()
  for(var i = 0; i< result.length;i++){
  var quoteh3 = document.createElement("h3");
  var quoteP = document.createElement("p");
  var quote = document.createElement("div")
  quote.classList = "quote"
  quoteh3.textContent = "Quote #" + (i+1);
  quoteP.textContent = result[i].quote;
  quote.append(quoteh3);
  quote.append(quoteP);
  quotesDiv.append(quote);
  }
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

var riddleSlider = document.getElementById("riddleRange");
var riddleCountEl = document.getElementById("riddle-count");
riddleCountEl.textContent = parseInt(riddleSlider.value);
riddleSlider.oninput = function() {
  riddleCountEl.textContent = this.value;
  if(parseInt(this.value) === 1){
    
    riddleBtn.textContent="Generate a Riddle"
  } else if (parseInt(this.value) > 1) {
    riddleBtn.textContent="Generate Riddles"
  }
}
function riddleGen(){
  riddleAmount = riddleSlider.value;
  fetch("https://api.api-ninjas.com/v1/riddles?limit=" + riddleAmount , {
method: 'GET',
headers: {
  'X-Api-Key': 'VL87+lt+oTWu9ITfd0qcaA==LpaINk8wGhmB0Dry',
  'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(result => {
  clearRiddle()
  for(var i = 0; i< result.length;i++){
    var riddleh3 = document.createElement("h3");
    var riddleP = document.createElement("p");
    var riddle = document.createElement("div")
    riddle.classList = "riddle"
    riddleh3.textContent = result[0].question;
    riddleP.textContent = result[0].answer;
    riddle.append(riddleh3)
    riddle.append(riddleP)
    riddleDiv.append(riddle)
  }
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
dadBtn.addEventListener("click", dadGen)
quoteBtn.addEventListener("click", quotesGen)
riddleBtn.addEventListener("click", riddleGen)