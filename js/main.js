const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novermber",
    "December"
];


const todays = new Date();
const daysdate = days[todays.getDay()];
const month = months [todays.getMonth()];
const actualdate = daysdate + month  + todays.getDate() + todays.getFullYear();
document.getElementById("time").innerHTML = actualdate;