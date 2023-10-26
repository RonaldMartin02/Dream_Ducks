var dbdiv = document.querySelector('#db-list')
var requestUrl = 'https://api.openbrewerydb.org/v1/breweries';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    for (var i = 0; i < 5; i++) {
      var dbH1 = document.createElement('h1');
      dbH1.textContent = data[i].name + " " + data[i].city;
      dbdiv.appendChild(dbH1);
    }
  });

  const category = 'geography';
fetch("https://api.api-ninjas.com/v1/trivia?category=" + category, {
  method: 'GET',
  headers: {
    'X-Api-Key': 's4eai3OcTWIfItEZPVmhVQ==7xEbwZl3bg2IVXiV',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error('Error: ', error);
  });
