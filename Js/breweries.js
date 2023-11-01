var dbdiv = document.querySelector('#db-list');
let citySearch = document.querySelector("#cityEntered");
const searchButton = document.querySelector("#searchBtn");

const getCityResults = function(event) {
    event.preventDefault();
    let cityName = citySearch.value.trim();
    
    if (cityName === '') {
        alert('Please enter a city.');
        return;
    }
    
    var requestUrl = `https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}`;
      
    fetch(requestUrl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data) {
        dbdiv.innerHTML = '';  // Clear existing results
        
        if (data.length === 0) {
            alert('No results found for the entered city.');
            return;
        }
        
        data.forEach(brewery => {
            let breweryCard = document.createElement('div');
            breweryCard.setAttribute("class", "card");
            
            var breweryName = document.createElement('h1');
            breweryName.textContent = brewery.name;
            breweryCard.appendChild(breweryName);
              
            var breweryCity = document.createElement('h2');
            breweryCity.textContent = brewery.city;
            breweryCard.appendChild(breweryCity);
              
            if (brewery.address_1) {
                var breweryStreetAddress = document.createElement('h3');
                breweryStreetAddress.textContent = brewery.address_1;
                breweryCard.appendChild(breweryStreetAddress);
            }
              
            var breweryCityStateZip = document.createElement('h3');
            breweryCityStateZip.textContent = `${brewery.city}, ${brewery.state} ${brewery.postal_code}`;
            breweryCard.appendChild(breweryCityStateZip);

            if (brewery.website_url) {
                var breweryUrl = document.createElement('a');
                breweryUrl.textContent = 'Visit Website';
                breweryUrl.href = brewery.website_url;
                breweryUrl.target = '_blank';  // Open in a new tab
                breweryCard.appendChild(breweryUrl);
            }
             
            dbdiv.append(breweryCard);
        });
    })
    .catch(error => {
        console.log('There was a problem with the fetch operation:', error.message);
    });
};

searchButton.addEventListener("click", getCityResults);


