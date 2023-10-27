var triviaCat = document.querySelector("#trivia-dropdown");
var triviaBtn = document.querySelector("#trivia-btn");
var triviaDiv = document.querySelector("#trivia-div");
var triviaH1 = document.createElement("h1");
var triviaP = document.createElement("p");
var category = "";
triviaDiv.append(triviaH1);
triviaDiv.append(triviaP);

function triviaGen(){
    category = triviaCat.value;
    fetch("https://api.api-ninjas.com/v1/trivia?category=" + category, {
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


triviaBtn.addEventListener("click", triviaGen)