const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
const cvDownload = document.getElementById("cv-download");

const trackFunction = eventName => {
  gtag("event", eventName, { debug_mode: true });
};

github.addEventListener("click", trackFunction("github"));
linkedin.addEventListener("click", trackFunction("linkedin"));
cvDownload.addEventListener("click", trackFunction("cv-download"));
