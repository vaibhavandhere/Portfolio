import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

export let smoother = {
  paused: (isPaused?: boolean) => {
    if (isPaused !== undefined) {
      document.body.style.overflow = isPaused ? "hidden" : "auto";
    }
  },
  scrollTop: (top?: number) => {
    if (top !== undefined) window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
    return window.scrollY;
  },
  scrollTo: (section: string | Element, smooth: boolean = true) => {
    const target = typeof section === "string" ? document.querySelector(section) : section;
    target?.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  },
};

const Navbar = () => {
  useEffect(() => {
    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section);
          target?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          VA
        </a>
        <a
          href="mailto:vaibhav.andhere06@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          vaibhav.andhere06@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#certifications" href="#certifications">
              <HoverLinks text="CERTS" />
            </a>
          </li>
          <li>
            <a data-href="#techstack" href="#techstack">
              <HoverLinks text="TECH" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
