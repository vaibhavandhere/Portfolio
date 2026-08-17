import { SplitText } from "./splitTextHelper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var bimText = new SplitText(".landing-h2-1", TextProps);
  var vdcText = new SplitText(".landing-h2-2", TextProps);
  var leadershipText = new SplitText(".landing-h2-info", TextProps);
  var engineeringText = new SplitText(".landing-h2-info-1", TextProps);

  // Initial load entry for Pair 1 (BIM & Leadership)
  gsap.fromTo(
    [...bimText.chars, ...leadershipText.chars],
    { opacity: 0, y: 60, filter: "blur(4px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.025,
      delay: 0.4,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  LoopPairs(bimText, leadershipText, vdcText, engineeringText);
}

function LoopPairs(
  bimText: SplitText,
  leadershipText: SplitText,
  vdcText: SplitText,
  engineeringText: SplitText
) {
  // Hide Pair 2 initially
  gsap.set([...vdcText.chars, ...engineeringText.chars], {
    opacity: 0,
    y: 50,
  });

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });

  tl
    // 1. Transition BIM & LEADERSHIP OUT (upward)
    .to(
      [...bimText.chars, ...leadershipText.chars],
      {
        opacity: 0,
        y: -50,
        duration: 0.7,
        ease: "power2.inOut",
        stagger: 0.02,
      },
      3.5
    )
    // 2. Transition VDC & ENGINEERING IN (upward from bottom)
    .fromTo(
      [...vdcText.chars, ...engineeringText.chars],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.02,
      },
      3.7
    )
    // 3. Transition VDC & ENGINEERING OUT (upward)
    .to(
      [...vdcText.chars, ...engineeringText.chars],
      {
        opacity: 0,
        y: -50,
        duration: 0.7,
        ease: "power2.inOut",
        stagger: 0.02,
      },
      7.5
    )
    // 4. Transition BIM & LEADERSHIP back IN (upward from bottom)
    .fromTo(
      [...bimText.chars, ...leadershipText.chars],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.02,
      },
      7.7
    );
}
