const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
const cvDownload = document.getElementById("cv-download");

// const githubTrack = () => {
//   gtag("event", "github", { debug_mode: true });
// };
// const linkedinTrack = () => {
//   gtag("event", "linkedin", { debug_mode: true });
// };
// const cvTrack = () => {
//   gtag("event", "cv-download", { debug_mode: true });
// };

// github.addEventListener("click", githubTrack);
// linkedin.addEventListener("click", linkedinTrack);
// cvDownload.addEventListener("click", cvTrack);

const trackFunction = eventName => {
  gtag("event", eventName, { debug_mode: true });
};

github.addEventListener("click", trackFunction("github"));
linkedin.addEventListener("click", trackFunction("linkedin"));
cvDownload.addEventListener("click", trackFunction("cv-download"));
