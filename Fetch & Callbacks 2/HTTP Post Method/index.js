let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendPostHTTPRequest() {
    let requestUrl = "https://gorest.co.in/public-api/users";
    let requestBody = requestBodyEl.value;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"
        },
        body: requestBody
    };
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            requestStatusEl.classList.remove("d-none");
            loadingEl.classList.add("d-none");

            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}

sendPostRequestBtnEl.addEventListener("click", sendPostHTTPRequest);