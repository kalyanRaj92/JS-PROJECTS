let reviewsContainerEl = document.getElementById("reviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");
let addBtnEl = document.getElementById("addBtn");

//addBtnEl.onclick = function() {
function onAddReview() {
    let movieTitle = titleInputEl.value;
    let movieReview = reviewTextareaEl.value;

    if (movieTitle === "") {
        alert("Please enter a movie title");
        return;
    }

    if (movieReview === "") {
        alert("Please enter a Review");
        return;
    }

    let movieTitleEl = document.createElement("h1");
    movieTitleEl.textContent = "Movie Title: " + movieTitle;
    movieTitleEl.classList.add("movie-title");
    reviewsContainerEl.appendChild(movieTitleEl);

    let movieReviewEl = document.createElement("p");
    movieReviewEl.textContent = "Review: " + movieReview;
    reviewsContainerEl.appendChild(movieReviewEl);

    let horizontalLineEl = document.createElement("hr");
    reviewsContainerEl.appendChild(horizontalLineEl);

    titleInputEl.value = "";
    reviewTextareaEl.value = "";
}