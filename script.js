function download() {
  const url = document.getElementById("url").value;
  const platform = document.getElementById("platform").value;
  const result = document.getElementById("result");

  if (!url) {
    result.innerText = "Masukkan link dulu bro!";
    return;
  }

  result.innerHTML = "⏳ Memproses...";

  let api = "";

  if (platform === "tiktok") {
    api = `https://api.example.com/tiktok?url=${url}`;
  } 
  else if (platform === "youtube") {
    api = `https://api.example.com/youtube?url=${url}`;
  }
  else {
    api = `https://api.example.com/mp3?url=${url}`;
  }

  window.open(api, "_blank");
}
