import { gsap } from "gsap/all";
import barba from "@barba/core";

const projectsEnter = (container) => {
  let tl = new gsap.timeline();

  tl.from(".projects__switches", {
    opacity: 0,
    duration: 0.5,
    ease: "power1",
  })
    .from(
      ".projects__container",
      { opacity: 0, duration: 1, stagger: 0.5 },
      ">-0.5"
    )
    .from(
      ".scale",
      { opacity: 0, scale: 0, duration: 0.5, stagger: 0.25 },
      ">-0.5"
    );

  return tl;
};

const projectsLeave = (container) => {
  let tl = new gsap.timeline();

  tl.to(".projects__switches", {
    opacity: 0,
    duration: 0.5,
    ease: "power1",
  })
    .to(
      ".projects__container",
      { opacity: 0, duration: 1, stagger: 0.25 },
      ">-0.5"
    )
    .to(
      ".scale",
      { opacity: 0, scale: 0, duration: 0.5, stagger: 0.5 },
      ">-0.5"
    );

  return tl;
};

const homeEnter = (container) => {
  let tl = new gsap.timeline();

  tl.from(".fade-left", {
    opacity: 0,
    x: -800,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1",
  })
    .from(
      ".btn",
      { opacity: 0, x: -800, duration: 0.5, stagger: 0.1, ease: "power1" },
      ">-0.5"
    )
    .from(
      ".scale",
      { opacity: 0, scale: 0, duration: 0.5, stagger: 0.25 },
      ">0.4"
    );

  return tl;
};

const homeLeave = (container) => {
  let tl = new gsap.timeline();

  tl.to(".fade-left", {
    opacity: 0,
    x: -800,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1",
  })
    .to(
      ".btn",
      { opacity: 0, x: -800, duration: 0.5, stagger: 0.1, ease: "power1" },
      ">-0.5"
    )
    .to(
      ".scale",
      { opacity: 0, scale: 0, duration: 0.5, stagger: 0.25 },
      ">0.4"
    );

  return tl;
};

const aboutEnter = (container) => {
  let tl = new gsap.timeline();

  tl.from(".about__logo-container", {
    opacity: 0,
    x: 800,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1",
  })
    .from(
      ".about__text",
      { opacity: 0, x: -800, duration: 0.5, stagger: 0.1, ease: "power1" },
      ">-0.5"
    )
    .from(".about-shape", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.25,
    });

  return tl;
};

const aboutLeave = (container) => {
  let tl = new gsap.timeline();

  tl.to(".about__logo-container", {
    opacity: 0,
    x: 800,
    duration: 0.5,
    stagger: 0.1,
    ease: "power1",
  })
    .to(
      ".about__text",
      { opacity: 0, x: -800, duration: 0.5, stagger: 0.1, ease: "power1" },
      ">-0.5"
    )
    .to(".about-shape", { opacity: 0, scale: 0, duration: 0.5, stagger: 0.25 });

  return tl;
};

//
//functions for views
//

barba.init({
  views: [
    {
      namespace: "projects",
      beforeEnter(data) {
        const emailSwitch = data.next.container.querySelector("#email-switch");
        const landingPagesSwitch =
          data.next.container.querySelector("#pages-switch");
        const websitesSwitch =
          data.next.container.querySelector("#websites-switch");
        const emailContainer = data.next.container.querySelector("#emails");
        const landingPageContainer =
          data.next.container.querySelector("#landing-pages");
        const websitesContainer =
          data.next.container.querySelector("#websites");

        emailSwitch.addEventListener("click", () => {
          emailContainer.style.display = "grid";
          landingPageContainer.style.display = "none";
          websitesContainer.style.display = "none";
        });

        landingPagesSwitch.addEventListener("click", () => {
          emailContainer.style.display = "none";
          landingPageContainer.style.display = "grid";
          websitesContainer.style.display = "none";
        });

        websitesSwitch.addEventListener("click", () => {
          emailContainer.style.display = "none";
          landingPageContainer.style.display = "none";
          websitesContainer.style.display = "grid";
        });
      },
    },
  ],
  transitions: [
    {
      name: "home",
      from: {
        namespace: ["home"],
      },
      to: {
        namespace: ["about"],
      },
      once(data) {
        homeEnter(data.next.container);
      },
      leave: (data) => homeLeave(data.current.container),
      enter(data) {
        aboutEnter(data.next.container);
      },
    },
    {
      name: "home-projects",
      from: {
        namespace: ["home"],
      },
      to: {
        namespace: ["projects"],
      },
      once(data) {
        homeEnter(data.next.container);
      },
      leave: (data) => homeLeave(data.current.container),
      enter(data) {
        projectsEnter(data.next.container);
      },
    },
    {
      name: "about-home",
      from: {
        namespace: ["about"],
      },
      to: {
        namespace: ["home"],
      },
      once(data) {
        aboutEnter(data.next.container);
      },
      leave: (data) => aboutLeave(data.current.container),
      enter(data) {
        homeEnter(data.next.container);
      },
    },
    {
      name: "about-projects",
      from: {
        namespace: ["about"],
      },
      to: {
        namespace: ["projects"],
      },
      once(data) {
        aboutEnter(data.next.container);
      },
      leave: (data) => aboutLeave(data.current.container),
      enter(data) {
        projectsEnter(data.next.container);
      },
    },
    {
      name: "projects-home",
      from: {
        namespace: ["projects"],
      },
      to: {
        namespace: ["home"],
      },
      once(data) {
        projectsEnter(data.next.container);
      },
      leave: (data) => projectsLeave(data.current.container),
      enter(data) {
        homeEnter(data.next.container);
      },
    },
    {
      name: "projects-about",
      from: {
        namespace: ["projects"],
      },
      to: {
        namespace: ["about"],
      },
      once(data) {
        projectsEnter(data.next.container);
      },
      leave: (data) => projectsLeave(data.current.container),
      enter(data) {
        aboutEnter(data.next.container);
      },
    },
  ],
});
