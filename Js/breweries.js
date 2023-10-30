var dbdiv = document.querySelector('#db-list')
  // var requestUrl = 'https://api.openbrewerydb.org/v1/breweries';
  let citySearch = document.querySelector("#cityEntered");
  const searchButton=document.querySelector("#searchBtn");
  let breweryCard=document.querySelector(".card");


  // function to use the search city with the API. Will then display the results
  const getCityResults = function(event) {
    event.preventDefault();

      let cityName = citySearch.value.trim();
     
      //end/returns because the cityName was empty
      // if(!cityName)return; 

      var requestUrl =`https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}`
      // var requestUrl =`https://api.openbrewerydb.org/v1/breweries?by_city=norman`
      
      fetch(requestUrl)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data)
          for (var i = 0; i < data.length; i++) {

              var breweryName = document.createElement('h1');
              breweryName.textContent = data[i].name;
              breweryCard.appendChild(breweryName)
              
              var breweryCity = document.createElement('h2');
              breweryCity.textContent = data[i].city;
              breweryCard.appendChild(breweryCity)
              
              var breweryStreetAddress = document.createElement('h3');
              breweryStreetAddress.textContent = data[i].address_1;
              breweryCard.appendChild(breweryStreetAddress)
              
              var breweryCityStateZip = document.createElement('h3');
              breweryCityStateZip.textContent = data[i].city + ", " + data[i].state + " " + data[i].postal_code;
              breweryCard.appendChild(breweryCityStateZip)

              var breweryUrl = document.createElement('a');
              breweryUrl.textContent = data[i].website_url;
              breweryCard.appendChild(breweryUrl)

              
          }
          dbdiv.appendChild(breweryCard);
      });
    }
    searchButton.addEventListener("click", getCityResults);  



// var dbdiv = document.querySelector('#db-list')
// var requestUrl = 'https://api.openbrewerydb.org/v1/breweries';

// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//     for (var i = 0; i < 5; i++) {
//       var dbH1 = document.createElement('h1');
//       dbH1.textContent = data[i].name + " " + data[i].city;
//       dbdiv.appendChild(dbH1);
//     }
//   });

