const menuUp = gsap.timeline({
  scrollTrigger: {
    trigger: ".menu li",
    toggleActions: "play none none reverse",
    start: "500 20%",
    scurb: true,
  },
});

menuUp.to(".menu li", {
  y: -200,
});

const disc = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    toggleActions: "play none none reverse",
    start: "-1% top",
    scurb: true,
    pinSpacing: false,
  },
});
disc.to(".img-bg1", { rotation: 360, duration: 2 });

const fontAn = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-content",
    toggleActions: "play none none reverse",
    start: "top center",
    end: "bottom center",
    scurb: true,
  },
});

fontAn.fromTo(
  ".txt-content h1",
  0.6,
  {
    opacity: 0,
    duration: 1,
    y: 300,
  },
  {
    opacity: 1,
    duration: 1,
    y: 0,
  }
);

//scroll change bg color
let sectionsColor = gsap.utils.toArray("[data-color]");
sectionsColor.forEach((seciton) => {
  let [bgColor, color] = seciton.getAttribute("data-color").split(" ");
  ScrollTrigger.create({
    trigger: seciton,
    start: "100 center",
    end: `+=100%`,
    onToggle: (self) => {
      if (self.isActive) {
        gsap.to("body", {
          backgroundColor: bgColor,
          color: color,
        });
      }
    },
  });
});

//scroll pic and txt
gsap.utils.toArray(".list-img img").forEach((img) => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: img,
      start: "top center",
      end: "+=20",

      scrub: true,
      toggleClass: "img-active",
    },
  });
});
//scroll pic and txt
gsap.utils.toArray(".list").forEach((txt) => {
  console.log(txt);
  gsap.to(txt, {
    scrollTrigger: {
      trigger: txt,
      start: "top center",
      end: "+=40",
      scrub: true,
      toggleClass: "focus-txt",
    },
  });
});

//slider bg color

gsap.to("body", {
  scrollTrigger: {
    trigger: ".slider",
    start: "100 center",
    end: "bottom center",
    scurb: true,
    onEnter: () => {
      let [bgColor, color] = document
        .querySelector(".is-selected")
        .dataset.slide.split(" ");
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = color;
      let slider = $(".carousel").flickity({
        wrapAround: true,
      });
      slider.data("flickity").on("select", function () {
        let s = this.cells.find((c) =>
          c.element.classList.contains("is-selected")
        ).element.dataset.slide;
        let [bgColor, color] = s.split(" ");
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = color;
        document.body.style.transition = "all 0.2s linear 0.3s";
      });
    },
  },
});
