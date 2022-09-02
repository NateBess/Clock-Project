const updateTime = async () => {
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

  if (dayName === "Mon") {
    dayName = "Monday";
  } else if (dayName === "Tue") {
    dayName = "Tuesday";
  } else if (dayName === "Wed") {
    dayName = "Wednesday";
  } else if (dayName === "Thu") {
    dayName = "Thursday";
  } else if (dayName === "Fri") {
    dayName = "Friday";
  } else if (dayName === "Sat") {
    dayName = "Saturday";
  } else if (dayName === "Sun") {
    dayName = "Sunday";
  }

  if (monthName === "Jan") {
    monthName = "January";
  } else if (monthName === "Feb") {
    monthName = "February";
  } else if (monthName === "Mar") {
    monthName = "March";
  } else if (monthName === "Apr") {
    monthName = "April";
  } else if (monthName === "May") {
    monthName = "May";
  } else if (monthName === "Jun") {
    monthName = "June";
  } else if (monthName === "Jul") {
    monthName = "July";
  } else if (monthName === "Aug") {
    monthName = "August";
  } else if (monthName === "Sep") {
    monthName = "September";
  } else if (monthName === "Oct") {
    monthName = "October";
  } else if (monthName === "Nov") {
    monthName = "November";
  } else if (monthName === "Dec") {
    monthName = "December";
  }

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

  if (currentHour > 12) {
    timeTitle = "PM";
    currentHour = currentHour - 12;
    currentTime = currentHour + currentTime;
  }
  /*
  console.log(dayName);
  console.log(monthName);
  console.log(dayNumber + `${abreviation}`);
  console.log(year);
  console.log(currentTime + ` ${timeTitle}`);
  console.log(currentHour);
  */

  const currentTimeElement = document.getElementById("current-time");
  const currentDateElement = document.getElementById("current-date");

  currentTimeElement.textContent = `${currentTime} ${timeTitle}`;
  currentDateElement.textContent = `${dayName}, ${monthName} ${
    dayNumber + abreviation
  } ${year}`;

  setTimeout(updateTime, 500);
};

updateTime();
