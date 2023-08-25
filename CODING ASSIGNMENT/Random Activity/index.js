let getActivityBtn = document.getElementById('getActivityBtn');
let activityName = document.getElementById('activityName');
let activityType = document.getElementById('activityType');
let activityImg = document.getElementById('activityImg');
let spinner = document.getElementById('spinner');

function displayResult(jsonData) {
    spinner.classList.add('d-none');
    let {
        activity,
        type,
        image
    } = jsonData;

    activityName.textContent = activity;
    activityType.textContent = type;
    activityImg.src = image;
}

function searchResult() {
    spinner.classList.remove('d-none');
    let options = {
        method: 'GET'
    };
    let url = 'https://apis.ccbp.in/random-activity';
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            displayResult(jsonData);
        });
}

getActivityBtn.addEventListener('click', function() {
    searchResult();
});