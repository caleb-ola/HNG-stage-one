const express = require("express");
const daysOfWeek = require("./utils/daysOfWeek");

const app = express();

app.use(express.json());

const currentDate = new Date();

app.get("/api/v1/details", async (req, res) => {
  try {
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    const current_day = daysOfWeek[currentDate?.getDay()];
    //   const utc_time = currentDate.toUTCString();
    const utc_time = currentDate.toISOString();
    const github_file_url = process.env.GITHUB_FILE;
    const github_repo_url = process.env.GITHUB_REPO;

    res.status(200).json({
      slack_name,
      current_day,
      utc_time,
      track,
      github_file_url,
      github_repo_url,
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong, please try again",
    });
  }
});

module.exports = app;
