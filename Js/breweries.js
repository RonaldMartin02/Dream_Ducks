var dbdiv = document.querySelector('#db-list')
  // var requestUrl = 'https://api.openbrewerydb.org/v1/breweries';
  let citySearch = document.querySelector("#cityEntered");
  const searchButton=document.querySelector("#searchBtn");

  // let breweryCard=document.querySelector(".card");


  // function to use the search city with the API. Will then display the results
  const getCityResults = function(event) {
    event.preventDefault();
  //brings in the name of the city from the search button. Will need to change this to get the city name from the original search on the index.html page. Ronald will suggested    
      let cityName = citySearch.value.trim();
     
      var requestUrl =`https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}&sort=type,state:asc`
      https://api.openbrewerydb.org/v1/breweries?by_state=ohio&sort=type,name:asc
      
      
      fetch(requestUrl)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data)

          clearCards();
          
          for (var i = 0; i < data.length; i++) {
            
            let breweryCard= document.createElement('div');
              breweryCard.setAttribute("class", "card");

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

              var breweryType = document.createElement('h3');
              breweryType.textContent = "Type: " + data[i].brewery_type;
              breweryCard.appendChild(breweryType)

              var breweryUrl = document.createElement('a');
              breweryUrl.textContent = data[i].website_url;
              breweryUrl.setAttribute("href",data[i].website_url);
              breweryUrl.setAttribute("target","_blank");
              breweryCard.appendChild(breweryUrl)

             
              

            //  trying to create maps for each place
            let longitude = data[i].longitude;
            let latitude = data[i].latitude;
            console.log(longitude, latitude);
          
            let mapRequestUrl = `https://www.mapquestapi.com/staticmap/v5/map?key=o9jwvmjO9PUJfBv5BBejULQqjOmRpQRd&center=${latitude},${longitude}&size=@2x&defaultMarker=circle-3B5998-sm&format=png`

            fetch(mapRequestUrl)
            .then(function (response) {
                return response;
            })
            .then(function (data) {
                console.log(data)
              
                for (var i = 0; i < data.length; i++) {

                  // let breweryMap= document.createElement('div');
                  let breweryMap = document.createElement('img');
                  breweryMap.src=data[i].url;
                  breweryMap.setAttribute("id", "map");
                  breweryCard.appendChild(breweryMap);



                }
            })
             
              dbdiv.append(breweryCard);
          }
          

    
      });

        function clearCards() {
          let oldCards = document.getElementsByClassName("card");
          console.log(oldCards.length);
          console.log(oldCards);
          for (let j=oldCards.length -1;j>=0; j--){
              console.log(j);
              console.log(oldCards[j]);
              oldCards[j].remove();
          }
      
      }
}    


    searchButton.addEventListener("click", getCityResults);  





