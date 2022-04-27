import gsap from "gsap";

//screen size check
if (window.screen.width > 768) {
  headerAnimations();

  //about animations
  const tlAbout = new gsap.timeline();

  tlAbout
    .fromTo(
      ".about-shape",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.5,
        ease: "power2",
      }
    )
    .fromTo(
      ".about__text",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    )
    .fromTo(
      ".about__logo-container",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      ">-1"
    )
    .fromTo(
      ".logo",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.25,
        ease: "power1",
      },
      ">-0.5"
    );

  //projects animations
  const tlProjects = new gsap.timeline();

  tlProjects
    .fromTo(
      ".project-shape",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.5,
        ease: "power2",
      }
    )
    .fromTo(
      ".projects__switches",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2",
      }
    )
    .fromTo(
      ".projects__container",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power1",
      }
    )
    .fromTo(
      ".test-block",
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.4,
        ease: "sine",
      }
    );
}

function headerAnimations() {
  const tlHeader = new gsap.timeline();

  tlHeader
    .fromTo(
      ".header-shape",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.4,
        ease: "power1",
      }
    )
    .fromTo(
      ".hero__container",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      ">-0.5"
    )
    .fromTo(
      ".hero-svg",
      {
        y: 100,
        opacity: 0,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.25,
        ease: "power2",
      },
      ">-0.3"
    );
}
