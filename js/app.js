gsap.registerPlugin(ScrollTrigger);
const screenWidth = document.documentElement.clientWidth;
const rightSideScreen = screenWidth - screenWidth * 0.1;
const rightPosition = rightSideScreen * (33 / 100);

const imgDefaultPosition =
  window.innerHeight / 2 - window.innerWidth * (15 / 100);
const topPosition = window.innerHeight * 0.2 + window.innerWidth * 0.3;

// create a for loop to add multiple code.
for (let i = 1; i < 8; i++) {
  if (i % 2 === 0) {
    gsap.from(`#animal-img-${i}`, {
      top: `-${topPosition}`,
      left: rightPosition,
      scrollTrigger: {
        trigger: `#animal-img-${i}`,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: true,
      },
    });
  } else {
    gsap.from(`#animal-img-${i}`, {
      top: `-${topPosition}`,
      right: rightPosition,
      scrollTrigger: {
        trigger: `#animal-img-${i}`,
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: true,
      },
    });
  }

  if (i === 7) {
    break;
  }

  gsap.to(`#animal-img-${i}`, {
    opacity: 0,
    diration: 0.4,
    scrollTrigger: {
      trigger: `#section-${i + 1}`,
      scroller: "body",
      end: "top 104%",
      start: "top 105%",
      scrub: true,
    },
  });
}
