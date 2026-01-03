function download() {
  const url = document.getElementById("url").value;
  const type = document.getElementById("type").value;
  const status = document.getElementById("status");

  if (!url) {
    status.innerText = "❌ Link kosong bro";
    return;
  }

  status.innerText = "⏳ Processing...";

  const api = `https://downloader-api.onrender.com/${type}?url=${encodeURIComponent(url)}`;
