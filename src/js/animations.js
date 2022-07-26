// var slideLeft = {
//   distance: "150%",
//   origin: "left",
//   delay: 500,
//   opacity: null,
//   scale: 0.85,
//   easing: "steps(12)",
// };
// var slideRight = {
//   distance: "150%",
//   origin: "right",
//   delay: 500,
//   opacity: null,
// };

// ScrollReveal().reveal(".column ", slideLeft);
// ScrollReveal().reveal(".slide__left", slideRight);
window.sr = ScrollReveal({ reset: true });
ScrollReveal({ distance: "15px" });
sr.reveal(".home-content", { duration: 4000, origin: "left" });
// sr.reveal(".logo", { duration: 3000, origin: "left" });
// sr.reveal(".toggle", { duration: 3000, origin: "top" });
// sr.reveal(".menu", { duration: 3000, origin: "right" });
sr.reveal("#slide__right", { duration: 3000, origin: "right" });
sr.reveal("#slide__left", { duration: 3000, origin: "left" });
sr.reveal("#services", { duration: 3000, origin: "bottom" });
sr.reveal("#contact__right", { duration: 3000, origin: "right" });
sr.reveal("#contact__left", { duration: 3000, origin: "left" });

// sr.reveal('.project', {duration : 3000, origin:'bottom'})

// sr.reveal('.github-link', {duration : 3000, origin:'bottom'})
