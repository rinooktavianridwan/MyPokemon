import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".animation-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })

    .add("startAnimation")
    .from(".animation-container .logo", {
      duration: 2,
      delay : 1,
      y: 400,
      skewY: 30,
      stagger: 0.4,
      ease: "Power3.easeOut",
    }, "startAnimation")

    .from(".animation-container .ball_rigth", {
      duration: 2,
      delay : 1,
      x: 400, 
      rotate: 360, 
      ease: "Power3.easeOut",
    }, "startAnimation")
    
    .from(".animation-container .ball_left", {
      duration: 2,
      delay : 1,
      x: -400, 
      rotate: -360, 
      ease: "Power3.easeOut",
    }, "startAnimation")

    .add("endtAnimation")
    .to(".animation-container .logo", {
      duration: 2,
      y: -600,
      skewY: -50,
      stagger: 1,
      ease: "Power3.easeOut",
    },"endtAnimation")
   
    .to(".animation-container .ball_rigth", {
      duration: 2,
      x: 400, 
      rotate: 360,
      ease: "Power3.easeOut",
    },"endtAnimation")

    .to(".animation-container .ball_left", {
      duration: 2,
      x: -400, 
      rotate: -360,
      ease: "Power3.easeOut",
    },"endtAnimation")
    
    .to("body", {
      duration: -5,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(
      [".preloader", ".toprigth", ".topleft", ".bottomrigth", ".bottomleft"],
      {
        duration: 1,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=1"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

