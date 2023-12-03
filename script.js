var now = 0;
var meridiem = document.getElementById('ampm'),
    hour = document.getElementById('hour'),
    min = document.getElementById('min'),
    sec = document.getElementById('sec');
function updateClock() {

    now = new Date();
    // Get hours in 24-hour format
    let hours24 = now.getHours();

    // Convert to 12-hour format
    let hours12 = (hours24 % 12) || 12;

    const hours = hours12.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Determine if it's AM or PM
    const ampm = hours24 < 12 ? 'am' : 'pm';

    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
    meridiem.textContent = ampm;
}

setInterval(updateClock, 1000);

function todayDateday() {
    console.log('hi')
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    document.querySelector(`.${dayOfWeek}`).classList.add('active');

    const year = now.getFullYear().toString().padStart(2, '0');
    const month = now.getMonth() + 1;
    const day = now.getDate().toString().padStart(2, '0');
    const date = `${day}-${month.toString().padStart(2, '0')}-${year}`
    document.getElementById('date').textContent = date;
}

updateClock(); // Initial call to display time immediatelys
todayDateday();
