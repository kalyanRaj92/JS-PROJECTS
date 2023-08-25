let searchInput = document.getElementById('searchInput');
let spinner = document.getElementById('spinner');
let searchResults = document.getElementById('searchResults');

function displayResults(data) {
    spinner.classList.add('d-none');
    let {
        city,
        name
    } = data;

    let containerEl = document.createElement('div');
    containerEl.classList.add('container');
    searchResults.appendChild(containerEl);

    let bikeNmae = document.createElement('p');
    bikeNmae.textContent = 'Bike name :' + name;
    containerEl.appendChild(bikeNmae);

    let bikeCity = document.createElement('p');
    bikeCity.textContent = 'City :' + city;
    containerEl.appendChild(bikeCity);
}

function searchData(jsonData) {
    for (let data of jsonData) {
        displayResults(data);
        console.log(data);
    }
}

function  searchBikes() {
    spinner.classList.remove('d-none');
    let inputVal = searchInput.value;
    
    let url = 'https://apis.ccbp.in/city-bikes?bike_name=' + inputVal;
    let options = {
        method: 'GET'
    };
    
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            searchData(jsonData);
        });
}

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
         searchBikes();
    }
});