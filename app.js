const express = require("express");
const daysOfWeek = require("./utils/daysOfWeek");

const app = express();

app.use(express.json());

const currentDate = new Date();

app.get("/api/v1/details", (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;
  const current_day = daysOfWeek[currentDate?.getDay()];
  //   const utc_time = currentDate.toUTCString();
  const utc_time = currentDate.toISOString();

  res.status(200).json({
    slack_name,
    current_day,
    utc_time,
    track,
    statusCode: 200,
  });
});

module.exports = app;
