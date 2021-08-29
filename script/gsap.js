gsap.registerPlugin(TextPlugin);
gsap.from("header", {
  duration: 2.5,
  ease: "bounce.out",
  y: -100
});
gsap.from("#home", {
  duration: 2,
  delay: 1,
  ease: "back.out(1.7)",
  y: -200,
  opacity: 0
});
gsap.from("#landing-name", {
  duration: 3,
  delay: 2.5,
  text: ""
});
gsap.from("#landing-teks", {
  duration: 3,
  delay: 3,
  ease: "back.out(1.7)",
  x: -200,
  opacity: 0
});
gsap.from("#button-wa", {
  duration: 3,
  delay: 3.5,
  ease: "back.out(1.7)",
  x: -200,
  opacity: 0
});
