let countries = {
    paris: "France",
    london: "United Kingdom",
    newYork: "USA",
    newDelhi: "India"
};

let countryCapital = document.getElementById('countryCapital');
let countryName = document.getElementById('countryName');

countryCapital.addEventListener('change', function(event) {
    countryName.textContent = countries[event.target.value];
    countryName.classList.add('country');
});