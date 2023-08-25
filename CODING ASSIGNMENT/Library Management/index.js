let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        imageLink,
        author
    } = result;

    let resultItemEl = document.createElement('div');
    searchResultsEl.appendChild(resultItemEl);

    let imageEl = document.createElement('img');
    imageEl.src = imageLink;
    searchResultsEl.appendChild(imageEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = author;
    searchResultsEl.appendChild(descriptionEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.toggle('d-none');

    let headingEl = document.createElement('h1');
    searchResultsEl.appendChild(headingEl);

    if (searchResults.length === 0) {
        headingEl.textContent = 'No results found';
    } else {
        headingEl.textContent = 'Popular Books';
    }
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchBooks(event) {
    if (event.key === 'Enter') {
        spinnerEl.classList.toggle('d-none');
        searchResultsEl.textContent = "";

        let searchInput = searchInputEl.value;
        let url = 'https://apis.ccbp.in/book-store?title=' + searchInput;

        let options = {
            method: 'GET'
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputEl.addEventListener('keydown', searchBooks);