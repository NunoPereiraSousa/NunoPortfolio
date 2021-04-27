let date = new Date();
let currentDateTime = document.querySelector("#currentDateTime");

let weekDay = "";
let time = "";

function getWeekDay() {
  switch (date.getDay()) {
    case 0:
      weekDay = "Sun";
      break;
    case 1:
      weekDay = "Mon";
      break;
    case 2:
      weekDay = "Tue";
      break;
    case 3:
      weekDay = "Wed";
      break;
    case 4:
      weekDay = "Thu";
      break;
    case 5:
      weekDay = "Fri";
      break;
    case 6:
      weekDay = "Sat";
      break;
    default:
      weekDay = "?";
      break;
  }

  return weekDay;
}

function getTime() {
  let hours = date.getHours();

  hours = hours % 12 || 12;

  let timeFormat = hours >= 12 ? "pm" : "am";

  let finalTime = `${hours}:${getMinutes()} ${timeFormat}`;

  return finalTime;
}

function getMinutes() {
  let minutes = date.getMinutes();
  return minutes;
}

currentDateTime.innerHTML = `${getWeekDay()} ${getTime()}`;