var dbdiv = document.querySelector('#db-list');
let citySearch = document.querySelector("#cityEntered");
const searchButton = document.querySelector("#searchBtn");
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var modalMessage = document.getElementsByClassName("modal-message")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const getCityResults = function(event) {
    event.preventDefault();
    let cityName = citySearch.value.trim();
    
    if (cityName === '') {
        modal.style.display = "block"
        modalMessage.textContent = "Please Choose a City"
    }
    
    var requestUrl = `https://api.openbrewerydb.org/v1/breweries?by_city=${cityName}`;
      
    fetch(requestUrl)
    .then(function(response) {
        if (!response.ok) {
           modal.style.display = "block"
           modalMessage.textContent = "Network response was not ok"
        }
        return response.json();
    })
    .then(function(data) {
        dbdiv.innerHTML = '';  // Clear existing results
        
        if (data.length === 0) {
            modal.style.display = "block"
           modalMessage.textContent = "No results found for the entered city."
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
        modal.style.display = "block"
           modalMessage.textContent = 'There was a problem with the fetch operation:', error.message;
    });
};

searchButton.addEventListener("click", getCityResults);
searchButton.addEventListener("", getCityResults);

citySearch.addEventListener("keydown", (event) => {
    console.log(event.key)
    if (event.key === "Enter"){
        getCityResults(event)
     }
});

