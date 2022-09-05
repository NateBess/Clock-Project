const weekNames = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};
const monthNames = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

const getAmPm = (hour) => (hour > 11 ? "PM" : "AM");

const getCurrentTimeString = (currentHour, currentTime) => {
  if (currentHour > 12) {
    currentHour = currentHour - 12;
    if (currentHour < 10) {
      return `0${currentHour}${currentTime}`;
    }
  }
  return `${currentHour}${currentTime}`;
};

const getOrdinal = (lastNumberOfDay) => {
  if (lastNumberOfDay > 3 && lastNumberOfDay < 21) {
    return "th";
  }
  if (lastNumberOfDay === 1) {
    return "st";
  }
  if (lastNumberOfDay === 2) {
    return "nd";
  }
  if (lastNumberOfDay === 3) {
    return "rd";
  }
};

const updateTime = () => {
  const date = Date().toString();

  const currentTime = date.slice(18, 24);
  const currentHour = date.slice(16, 18);

  const dayAbbreviation = date.slice(0, 3);
  const monthAbbreviation = date.slice(4, 7);
  const dayNumber = parseInt(date.slice(8, 11), 10);
  const lastNumberOfDay = parseInt(date.slice(9, 11), 10);
  const year = date.slice(11, 15);

  const day = weekNames[dayAbbreviation];
  const month = monthNames[monthAbbreviation];

  let dayNum = dayNumber + getOrdinal(lastNumberOfDay);
  const currentTimeString = getCurrentTimeString(currentHour, currentTime);
  const amPm = getAmPm(currentHour);

  const currentTimeElement = document.getElementById("current-time");
  currentTimeElement.textContent = `${currentTimeString} ${amPm}`;
  const currentDateElement = document.getElementById("current-date");
  currentDateElement.textContent = `${day}, ${month} ${dayNum} ${year}`;

  setTimeout(updateTime, 1000);
};
updateTime();
