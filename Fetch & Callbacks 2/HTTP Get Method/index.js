let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendGetHTTPRequest() {
    let requestUrl = "https://gorest.co.in/public-api/users";
    let options = {
        method: "GET",
    };
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none");
            loadingEl.classList.add("d-none");
            console.log(jsonData);
            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}

sendGetRequestBtnEl.addEventListener("click", sendGetHTTPRequest);