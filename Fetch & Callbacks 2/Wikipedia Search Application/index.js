let searchInputEl = document.getElementById("searchInput");

let searchResultsEl = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  let { link, title, description } = result;

  //1.Div Container -- result-item
  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");
  searchResultsEl.appendChild(resultItemEl);

   //2.Anchor Title -- result-title
  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

   //3.Title break
  let titleBreakEl = document.createElement("br");
  resultItemEl.appendChild(titleBreakEl);

  //4.Anchor URL -- result-url
  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  resultItemEl.appendChild(urlEl);

   //5.LineBreak
  let linkBreakEl = document.createElement("br");
  resultItemEl.appendChild(linkBreakEl);

   //6.Paragraph Description - line-description
  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);

  
}

function displayResults(searchResults) {
  //spinnerEl.classList.toggle("d-none");
  spinnerEl.classList.add("d-none");

  for (let result of searchResults) {
    createAndAppendSearchResult(result);
  }
}

function searchWikipedia(event) {
  if (event.key === "Enter") {

    //spinnerEl.classList.toggle("d-none");
    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let options = {
      method: "GET"
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);