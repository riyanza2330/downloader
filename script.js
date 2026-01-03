function download() {
  const url = document.getElementById("url").value;
  const type = document.getElementById("type").value;
  const status = document.getElementById("status");
  const progress = document.getElementById("progress");
  const bar = document.querySelector(".bar");

  if (!url) {
    status.innerText = "❌ Masukkan URL";
    return;
  }

  progress.classList.remove("hidden");
  bar.style.width = "0%";

  let percent = 0;
  const loading = setInterval(() => {
    percent += 10;
    bar.style.width = percent + "%";
    if (percent >= 100) clearInterval(loading);
  }, 200);

  saveHistory(url, type);
  function saveHistory(url, type) {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.unshift({ url, type, time: new Date().toLocaleString() });
  localStorage.setItem("history", JSON.stringify(history));
}

  const api = `https://downloader-api.onrender.com/${type}?url=${encodeURIComponent(url)}`;
  window.open(api, "_blank");

  status.innerText = "✅ Download diproses";
}
