import React from "react";

const CurrentDate = () => {
  let todaysDate = new Date();
  let day = todaysDate.getDate();
  let month = todaysDate.getMonth() + 1;
  let year = todaysDate.getFullYear();

  todaysDate = month + "-" + day + "-" + year;

  console.log("today's date", todaysDate);

  return <div style={dateStyle}>{todaysDate}</div>;
};

const dateStyle = {
  fontSize: "10px",
  fontStyle: "italic"
};

export default CurrentDate;
