const now = new Date();
function updateClock() {

    // Get hours in 24-hour format
    let hours24 = now.getHours();

    // Convert to 12-hour format
    let hours12 = (hours24 % 12) || 12;

    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Determine if it's AM or PM
    const ampm = hours24 < 12 ? 'AM' : 'PM';

    const timeString = `${hours12}:${minutes}:${seconds}`;

    document.getElementById('displayTime').textContent = timeString;
}

// setInterval(updateClock, 1000);
// updateClock(); // Initial call to display time immediately

function todayDate() {
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    document.querySelector(`.${dayOfWeek}`).classList.add('active');
}
