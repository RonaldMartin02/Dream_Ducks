var triviaCat = document.querySelector("#trivia-dropdown");
var triviaBtn = document.querySelector("#trivia-btn");
var triviaDiv = document.querySelector("#trivia-div");
var factsDiv = document.querySelector("#facts-div");
var factsBtn = document.querySelector("#facts-btn");

var jokesDiv = document.querySelector("#jokes-div");
var jokesBtn = document.querySelector("#jokes-btn");

//move into a for loop 

var triviaCategory = "";
var FactsAmount = "";
var jokeAmount = "";



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
    var triviaH1 = document.createElement("h1");
    var triviaP = document.createElement("p");
    triviaDiv.append(triviaH1);
    triviaDiv.append(triviaP);
    triviaH1.textContent = result[0].question;
    triviaP.textContent = result[0].answer;
  })
  .catch(error => {
    console.error('Error: ', error);
  });
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
    console.log(result);
    for(var i = 0; i< result.length;i++){
      var factsH1 = document.createElement("h1");
      var factsP = document.createElement("p");
      var facts = document.createElement("div")
      factsH1.textContent = "Did you know"
      factsP.textContent = result[i].fact;
      facts.append(factsH1)
      facts.append(factsP)
      console.log(facts)
      factsDiv.append(facts)
    }

    
  })
  .catch(error => {
    console.error('Error: ', error);
  });
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
    console.log(result);
    for(var i = 0; i< result.length;i++){
      var jokeH1 = document.createElement("h1");
      var jokeP = document.createElement("p");
      var jokes = document.createElement("div")
      jokeH1.textContent = "Did you know"
      jokeP.textContent = result[i].joke;
      jokes.append(jokeH1)
      jokes.append(jokeP)
      console.log(jokes)
      jokesDiv.append(jokes)
    }

    
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}
triviaBtn.addEventListener("click", triviaGen)
factsBtn.addEventListener("click", factsGen)
jokesBtn.addEventListener("click", jokesGen)