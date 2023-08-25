let aboutButtonEle = document.getElementById('aboutButton');
let timeToVisitButtonEle = document.getElementById('timeToVisitButton');
let attractionsButtonEle = document.getElementById('attractionsButton');

let aboutTabEle = document.getElementById('aboutTab');
let timeToVisitTabEle = document.getElementById('timeToVisitTab');
let attractionsTabEle = document.getElementById('attractionsTab');

timeToVisitTabEle.classList.add('d-none');
attractionsTabEle.classList.add('d-none');

function onClickAboutTab() {
    aboutTabEle.classList.remove('d-none');
    timeToVisitTabEle.classList.add('d-none');
    attractionsTabEle.classList.add('d-none');

    aboutButtonEle.classList.add('selected-button');
    timeToVisitButtonEle.classList.remove('selected-button');
    attractionsButtonEle.classList.remove('selected-button');
}

function onClickTimeToVisitTab() {
    aboutTabEle.classList.add('d-none');
    timeToVisitTabEle.classList.remove('d-none');
    attractionsTabEle.classList.add('d-none');

    aboutButtonEle.classList.remove('selected-button');
    timeToVisitButtonEle.classList.add('selected-button');
    attractionsButtonEle.classList.remove('selected-button');

}

function onClickAttractionsTab() {
    aboutTabEle.classList.add('d-none');
    timeToVisitTabEle.classList.add('d-none');
    attractionsTabEle.classList.remove('d-none');

    aboutButtonEle.classList.remove('selected-button');
    timeToVisitButtonEle.classList.remove('selected-button');
    attractionsButtonEle.classList.add('selected-button');

}