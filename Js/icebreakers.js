var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];
var modalMessage = document.getElementsByClassName("modal-message")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Everything to do with the Trivia Div
var triviaCat = document.querySelector("#trivia-dropdown");
var triviaBtn = document.querySelector("#trivia-btn");
var triviaDiv = document.querySelector("#trivia-div");
var triviaSlider = document.getElementById("triviaRange");
var triviaCountEl = document.getElementById("trivia-count");
var triviaCategory = "";
var triviaAmount = "";
//This allows the slider in the trivia div to be an input for the amount of trivia they want to generate
triviaSlider.oninput = function() {
  if(this.value > 0 && this.value <= 20){
  triviaCountEl.textContent = 1; 
  triviaAmount = 1;
  }else if(this.value > 20 && this.value <= 40){
  triviaCountEl.textContent = 2;  
  triviaAmount = 2;
  } else if(this.value > 40 && this.value <= 60){
  triviaCountEl.textContent = 3;  
  triviaAmount = 3;
  } else if(this.value > 60 && this.value <= 80){
  triviaCountEl.textContent = 4;  
  triviaAmount = 4;
  } else{
    triviaCountEl.textContent = 5;  
  triviaAmount = 5;
  }
  
}
function triviaGen(){
    triviaCategory = triviaCat.value;
    //triviaAmount = triviaSlider.value;
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
    modal.style.display = "block";
        modalMessage.textContent = `There was a problem with the fetch operation: ${error.message}`;
  });
}
function clearTrivia() {
  let oldTrivia = document.getElementsByClassName("trivia");
  for (let i=oldTrivia.length -1;i>=0; i--){
    oldTrivia[i].remove();
  }
}
//Everything to do with the facts Div
var factsDiv = document.querySelector("#facts-div");
var factsBtn = document.querySelector("#facts-btn");
var factsAmount = "";
var factSlider = document.getElementById("factsRange");
var factCountEl = document.getElementById("fact-count");
//This allows the slider in the facts div to be an input for the amount of facts they want to generate
factSlider.oninput = function() {
  if(this.value > 0 && this.value <= 20){
    factCountEl.textContent = 1; 
    factsAmount = 1;
  factsBtn.textContent="Generate a Fact"
  }else if(this.value > 20 && this.value <= 40){
    factCountEl.textContent = 2;  
    factsAmount = 2;
  factsBtn.textContent="Generate "+ factsAmount + " Facts"
  } else if(this.value > 40 && this.value <= 60){
    factCountEl.textContent = 3;  
    factsAmount = 3;
  factsBtn.textContent="Generate "+ factsAmount + " Facts"
  } else if(this.value > 60 && this.value <= 80){
    factCountEl.textContent = 4;  
    factsAmount = 4;
  factsBtn.textContent="Generate "+ factsAmount + " Facts"
  } else{
    factCountEl.textContent = 5;  
    factsAmount = 5;
  factsBtn.textContent="Generate "+ factsAmount + " Facts"
  }
}
function factsGen(){
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
    modal.style.display = "block";
        modalMessage.textContent = `There was a problem with the fetch operation: ${error.message}`;
  });
}
function clearFacts() {
  let oldFacts = document.getElementsByClassName("facts");
  for (let i=oldFacts.length -1;i>=0; i--){
      oldFacts[i].remove();
  }
}
//Everything to do with the jokes Div
var jokesDiv = document.querySelector("#jokes-div");
var jokesBtn = document.querySelector("#jokes-btn");
var jokeAmount = "";
var jokeSlider = document.getElementById("jokesRange");
var jokeCountEl = document.getElementById("joke-count");
//This allows the slider in the jokes div to be an input for the amount of jokes they want to generate
jokeSlider.oninput = function() {
  if(this.value > 0 && this.value <= 20){
    jokeCountEl.textContent = 1; 
    jokeAmount = 1;
    jokesBtn.textContent="Generate a Joke"
  }else if(this.value > 20 && this.value <= 40){
    jokeCountEl.textContent = 2;  
    jokeAmount = 2;
  jokesBtn.textContent="Generate "+ jokeAmount + " Jokes"
  } else if(this.value > 40 && this.value <= 60){
    jokeCountEl.textContent = 3;  
    jokeAmount = 3;
    jokesBtn.textContent="Generate "+ jokeAmount + " Jokes"
  } else if(this.value > 60 && this.value <= 80){
    jokeCountEl.textContent = 4;  
    jokeAmount = 4;
    jokesBtn.textContent="Generate "+ jokeAmount + " Jokes"
  } else{
    jokeCountEl.textContent = 5;  
    jokeAmount = 5;
    jokesBtn.textContent="Generate "+ jokeAmount + " Jokes"
  }
}
function jokesGen(){

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
    modal.style.display = "block";
        modalMessage.textContent = `There was a problem with the fetch operation: ${error.message}`;
  });
}
function clearJokes() {
  let oldJokes = document.getElementsByClassName("jokes");
  for (let i=oldJokes.length -1;i>=0; i--){
      oldJokes[i].remove();
  }
}
//Everything to do with the dad jokes Div
var dadDiv = document.querySelector("#dad-div");
var dadBtn = document.querySelector("#dad-btn");
var dadAmount = "";
var dadSlider = document.getElementById("dadRange");
var dadCountEl = document.getElementById("dad-count");
//This allows the slider in the dad div to be an input for the amount of dad jokes they want to generate
dadSlider.oninput = function() {
  if(this.value > 0 && this.value <= 20){
    dadCountEl.textContent = 1; 
    dadAmount = 1;
    dadBtn.textContent="Generate a Dad Joke"
  }else if(this.value > 20 && this.value <= 40){
    dadCountEl.textContent = 2;  
    dadAmount = 2;
    dadBtn.textContent="Generate "+ dadAmount + " Dad Jokes"
  } else if(this.value > 40 && this.value <= 60){
    dadCountEl.textContent = 3;  
    dadAmount = 3;
    dadBtn.textContent="Generate "+ dadAmount + " Dad Jokes"
  } else if(this.value > 60 && this.value <= 80){
    dadCountEl.textContent = 4;  
    dadAmount = 4;
    dadBtn.textContent="Generate "+ dadAmount + " Dad Jokes"
  } else{
    dadCountEl.textContent = 5;  
    dadAmount = 5;
    dadBtn.textContent="Generate "+ dadAmount + " Dad Jokes"
  }
}
function dadGen(){

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
      dadP.textContent = result[i].joke;
      dad.append(dadh3)
      dad.append(dadP)
      dadDiv.append(dad)
    }
  })
  .catch(error => {
    modal.style.display = "block";
        modalMessage.textContent = `There was a problem with the fetch operation: ${error.message}`;
  });
}

function clearDad() {
  let oldDad = document.getElementsByClassName("dad");
  for (let i=oldDad.length -1;i>=0; i--){
    oldDad[i].remove();
  }
}
//Everything to do with the quotes Div
var quoteCat = document.querySelector("#quotes-dropdown");
var quotesDiv = document.querySelector("#quotes-div");
var quoteBtn = document.querySelector("#quote-btn");
var quoteCategory = "";
var quoteAmount = "";
var quoteSlider = document.getElementById("quoteRange");
var quoteCountEl = document.getElementById("quote-count");

//This allows the slider in the quotes div to be an input for the amount of quotes they want to generate
quoteSlider.oninput = function() {
  if(this.value > 0 && this.value <= 20){
    quoteCountEl.textContent = 1; 
    quoteAmount = 1;
    quoteBtn.textContent="Generate a Quote"
  }else if(this.value > 20 && this.value <= 40){
    quoteCountEl.textContent = 2;  
    quoteAmount = 2;
    quoteBtn.textContent="Generate "+ quoteAmount + " Quotes"
  } else if(this.value > 40 && this.value <= 60){
    quoteCountEl.textContent = 3;  
    quoteAmount = 3;
    quoteBtn.textContent="Generate "+ quoteAmount + " Quotes"
  } else if(this.value > 60 && this.value <= 80){
    quoteCountEl.textContent = 4;  
    quoteAmount = 4;
    quoteBtn.textContent="Generate "+ quoteAmount + " Quotes"
  } else{
    quoteCountEl.textContent = 5;  
    quoteAmount = 5;
    quoteBtn.textContent="Generate "+ quoteAmount + " Quotes"
  }
}
function quotesGen(){
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
  modal.style.display = "block";
        modalMessage.textContent = `There was a problem with the fetch operation: ${error.message}`;
});
}
function clearQuotes() {
let oldQuotes = document.getElementsByClassName("quote");
for (let i=oldQuotes.length -1;i>=0; i--){
  oldQuotes[i].remove();
}
}

// Everything to do with the riddle Div
var riddleDiv = document.querySelector("#riddle-div"); 
var riddleBtn = document.querySelector("#riddle-btn");
var riddleAmount = ""; 
var riddleSlider = document.getElementById("riddleRange"); 
var riddleCountEl = document.getElementById("riddle-count"); 
// This allows the slider in the riddle div to be an input for the amount of riddles they want to generate
riddleSlider.oninput = function() {
  if (this.value > 0 && this.value <= 20) {
    riddleCountEl.textContent = 1;
    riddleAmount = 1;
    riddleBtn.textContent = "Generate a Riddle";
  } else if (this.value > 20 && this.value <= 40) {
    riddleCountEl.textContent = 2;
    riddleAmount = 2;
    riddleBtn.textContent = "Generate " + riddleAmount + " Riddles";
  } else if (this.value > 40 && this.value <= 60) {
    riddleCountEl.textContent = 3;
    riddleAmount = 3;
    riddleBtn.textContent = "Generate " + riddleAmount + " Riddles";
  } else if (this.value > 60 && this.value <= 80) {
    riddleCountEl.textContent = 4;
    riddleAmount = 4;
    riddleBtn.textContent = "Generate " + riddleAmount + " Riddles";
  } else {
    riddleCountEl.textContent = 5;
    riddleAmount = 5;
    riddleBtn.textContent = "Generate " + riddleAmount + " Riddles";
  }
}

function riddleGen() {  
  fetch("https://api.api-ninjas.com/v1/riddles?limit=" + riddleAmount, {
    method: 'GET',
    headers: {
      'X-Api-Key': 'VL87+lt+oTWu9ITfd0qcaA==LpaINk8wGhmB0Dry',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(result => {
    clearRiddle(); 
    for (var i = 0; i < result.length; i++) {
      var riddleh3 = document.createElement("h3"); 
      var riddleP = document.createElement("p");  
      var riddle = document.createElement("div"); 
      riddle.classList = "riddle";
      riddleh3.textContent = "Riddle #" + (i + 1) + ": " + result[i].question;
      riddleP.textContent = result[i].answer;  
      riddle.append(riddleh3);  
      riddle.append(riddleP);  
      riddleDiv.append(riddle); 
    }
  })
  .catch(error => {
    modal.style.display = "block";
        modalMessage.textContent = `There was a problem with the fetch operation: ${error.message}`; 
  });
}

function clearRiddle() {
  let oldRiddle = document.getElementsByClassName("riddle"); 
  for (let i = oldRiddle.length - 1; i >= 0; i--) {
    oldRiddle[i].remove(); 
  }
}
triviaBtn.addEventListener("click", triviaGen)
factsBtn.addEventListener("click", factsGen)
jokesBtn.addEventListener("click", jokesGen)
dadBtn.addEventListener("click", dadGen)
quoteBtn.addEventListener("click", quotesGen)
riddleBtn.addEventListener("click", riddleGen)
