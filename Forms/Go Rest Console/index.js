let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");

let requestBodyEl = document.getElementById("requestBody");

let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};

requestUrlEl.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
});

requestMethodEl.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});

requestBodyEl.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
});

function validateRequesturl(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsgEl.textContent = "Required*";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
}

function sendRequest(formData) {
    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formData;

    let options = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer b2d8461de1f1eac9ca5df728892265d23f5ebe156521d9ee866aa61132526e6"
        },
        body: requestBody
    };
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let responseStatus = jsonData.code;
            let responseBody = JSON.stringify(jsonData);
            responseStatusEl.value = responseStatus;
            responseBodyEl.value = responseBody;
        });
}

consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateRequesturl(formData);
    sendRequest(formData);
});