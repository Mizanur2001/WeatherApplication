console.log("Welcome to Weather Application console ❤️");

const dateHtml = document.getElementById('date');
const weathercon = document.getElementById('weathercon');

const tempStatus = "{%tempstatus%}";
if (tempStatus == "Sunny") {
    weathercon.innerHTML = `<i class="fa-solid fa-sun wIcon" style="color:yellow"></i>`;
}
else if (tempStatus == "Clouds") {
    weathercon.innerHTML = `<i class="fas fa-solid fa-cloud wIcon" style="color:#f1f2f6"></i>`;
}
else if (tempStatus == "Rainy") {
    weathercon.innerHTML = `<i class="fas fa-cloud-rain wIcon" style="color:#9aa1a9"></i>`;
}
else {
    weathercon.innerHTML = `<i class="fas fa-cloud-sun wIcon" style="color:#7d777f"></i>`;
}


const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const time = new Date;
let date = time.getDate();
let month = time.getMonth();
let day = time.getDay();
let minutes = time.getMinutes();
let hours = time.getHours();
let period = "AM";

day = weekday[day];
month = months[month];
hours > 11 ? period = "PM" : period = "AM";
hours = hours > 12 ? hours - 12 : hours;
hours < 10 ? hours = `0` + hours : hours;
minutes < 10 ? minutes = `0` + minutes : minutes;
dateHtml.innerText = `${day} | ${month} ${date} | ${hours}:${minutes} ${period}`;
