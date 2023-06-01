const github = document.getElementById("github");

const trackFunction = () => {
  gtag("event", "github", { debug_mode: true });
};

github.addEventListener("click", trackFunction);
