const express = require("express");
const cors = require("cors");
const ytdlp = require("yt-dlp-exec");

const app = express();
app.use(cors());

app.get("/tiktok", async (req, res) => {
  const url = req.query.url;
  res.redirect(`https://tikcdn.app/download?url=${url}`);
});

app.get("/youtube", async (req, res) => {
  const url = req.query.url;
  const video = await ytdlp(url, { format: "best", dumpSingleJson: true });
  res.redirect(video.url);
});

app.get("/mp3", async (req, res) => {
  const url = req.query.url;
  const audio = await ytdlp(url, {
    extractAudio: true,
    audioFormat: "mp3",
    dumpSingleJson: true
  });
  res.redirect(audio.url);
});

app.listen(3000, () => console.log("API running"));
