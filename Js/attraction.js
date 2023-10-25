var dbdiv = document.querySelector('#db-list')
var requestUrl = 'https://api.openbrewerydb.org/v1/breweries';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      var dbH1 = document.createElement('h1');
      dbH1.textContent = data[i].name + " " + data[i].city;
      dbdiv.appendChild(dbH1);
    }
  });