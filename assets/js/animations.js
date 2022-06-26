var slideLeft = {
  distance: "150%",
  origin: "left",
  delay: 500,
  opacity: null,
  scale: 0.85,
  easing: "steps(12)",
};
var slideRight = {
  distance: "150%",
  origin: "right",
  delay: 500,
  opacity: null,
};

ScrollReveal().reveal(".column ", slideLeft);
// ScrollReveal().reveal(".slide__left", slideRight);
