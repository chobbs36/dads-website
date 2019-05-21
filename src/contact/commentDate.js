import React from "react";

const CurrentDate = () => {
  let todaysDate = new Date();
  let day = todaysDate.getDate();
  let month = todaysDate.getMonth() + 1;
  let year = todaysDate.getFullYear();

  todaysDate = month + "-" + day + "-" + year;

  console.log("today's date", todaysDate);

  return <div>{todaysDate}</div>;
};

export default CurrentDate;
