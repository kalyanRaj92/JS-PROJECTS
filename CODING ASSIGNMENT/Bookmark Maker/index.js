// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkFormEl = document.getElementById('bookmarkForm');

let siteNameInputEl = document.getElementById('siteNameInput');
let siteNameErrMsgEl = document.getElementById('siteNameErrMsg');

let siteUrlInputEl = document.getElementById('siteUrlInput');
let siteUrlErrMsgEl = document.getElementById('siteUrlErrMsg');

let submitBtnEl = document.getElementById('submitBtn');
let bookMarksListEl = document.getElementById('bookMarksList');

let nameInputVal = siteNameInputEl.value;
let urlInputVal = siteUrlInputEl.value;

let formData = {
    name: nameInputVal,
    url: urlInputVal
};

siteNameInputEl.addEventListener('change', function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = 'Required*';
    } else {
        siteNameErrMsgEl.textContent = '';
    }
    formData.name = event.target.value;
});

siteUrlInputEl.addEventListener('change', function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = 'Required*';
    } else {
        siteUrlErrMsgEl.textContent = '';
    }
    formData.url = event.target.value;
});

function validateFormData(formData) {
    let {
        name,
        url
    } = formData;
    if (name === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (url === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }
}

function makeList(formData) {
    let {
        name,
        url
    } = formData;
    let listEl = document.createElement('li');
    listEl.classList.add("liststyle");
    //listEl.textContent = name;
    bookMarksListEl.appendChild(listEl);

    let headingEl = document.createElement("h1");
    headingEl.textContent = name;
    listEl.appendChild(headingEl);

    let anchorEl = document.createElement("a");
    anchorEl.href = url;
    anchorEl.classList.add("result-url");
    anchorEl.target = "_blank";
    anchorEl.textContent = url;
    listEl.appendChild(anchorEl);
}

bookmarkFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    validateFormData(formData);
    makeList(formData);
});