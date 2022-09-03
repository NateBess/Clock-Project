const updateTime = () => {
  let date = Date().toString();

  let currentTime = date.slice(18, 24);
  let currentHour = date.slice(16, 18);
  let timeTitle = "AM";

  let dayName = date.slice(0, 3);
  let monthName = date.slice(4, 7);
  let dayNumber = parseInt(date.slice(8, 11), 10);
  let lastNumberOfDay = parseInt(date.slice(9, 11), 10);
  let abreviation = "None";
  let year = date.slice(11, 15);

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
  dayName = weekNames[dayName];
  monthName = monthNames[monthName];

  if (lastNumberOfDay > 3 && lastNumberOfDay < 21) {
    abreviation = "th";
  } else if (lastNumberOfDay === 1) {
    abreviation = "st";
  } else if (lastNumberOfDay === 2) {
    abreviation = "nd";
  } else if (lastNumberOfDay === 3) {
    abreviation = "rd";
  } else {
    abreviation = "th";
  }

  if (currentHour > 11) {
    timeTitle = "PM";
  }
  if (currentHour > 12) {
    currentHour = currentHour - 12;
    if (currentHour < 10) {
      currentTime = `0${currentHour}${currentTime}`;
    } else {
      currentTime = `${currentHour}${currentTime}`;
    }
  } else {
    currentTime = `${currentHour}${currentTime}`;
  }

  const currentTimeElement = document.getElementById("current-time");
  const currentDateElement = document.getElementById("current-date");
  let dayNum = dayNumber + abreviation;

  currentTimeElement.textContent = `${currentTime} ${timeTitle}`;
  currentDateElement.textContent = `${dayName}, ${monthName} ${dayNum} ${year}`;

  setTimeout(updateTime, 1000);
};
updateTime();
