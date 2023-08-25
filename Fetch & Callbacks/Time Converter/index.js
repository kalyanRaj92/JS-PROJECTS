let hoursInputEl = document.getElementById('hoursInput');
let minutesInputEl = document.getElementById('minutesInput');
let convertBtn = document.getElementById('convertBtn');
let errorMsgEl = document.getElementById('errorMsg');
let timeInSecondsEl = document.getElementById('timeInSeconds');

let hoursErrorMsg = 'Please enter a valid number of hours';
let minutesErrorMsg = 'Please enter a valid number of minutes';

convertBtn.addEventListener('click', function() {
    let hoursInputElValue = hoursInputEl.value;
    let minutesInputElValue = minutesInputEl.value;

    if (hoursInputElValue === "") {
        errorMsgEl.textContent = hoursErrorMsg;
    } else if (minutesInputElValue === "") {
        errorMsgEl.textContent = minutesErrorMsg;
    } else {
        errorMsgEl.textContent = "";
        let hours = parseInt(hoursInputElValue);
        let minutes = parseInt(minutesInputElValue);

        let hoursToSeconds = (hours * 3600 + minutes * 60);

        timeInSecondsEl.textContent = hoursToSeconds + 's';
    }
});