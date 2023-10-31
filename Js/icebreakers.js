var triviaCat = document.querySelector("#trivia-dropdown");
var triviaBtn = document.querySelector("#trivia-btn");
var triviaDiv = document.querySelector("#trivia-div");
var FactsDiv = document.querySelector("#facts-div");
var FactsDiv = document.querySelector("#facts-slider");
var triviaH1 = document.createElement("h1");
var triviaP = document.createElement("p");
//move into a for loop 
var factsH1 = document.createElement("h1");
var factsP = document.createElement("p");

var triviaCategory = "";
var FactsAmount = "";
var triviaCategory = "";
var triviaCategory = "";
var triviaCategory = "";
triviaDiv.append(triviaH1);
triviaDiv.append(triviaP);

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
    triviaH1.textContent = result[0].question;
    triviaP.textContent = result[0].answer;
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}
function FactsGen(){
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
    triviaH1.textContent = result[0].question;
    triviaP.textContent = result[0].answer;
  })
  .catch(error => {
    console.error('Error: ', error);
  });
}
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

triviaBtn.addEventListener("click", triviaGen)