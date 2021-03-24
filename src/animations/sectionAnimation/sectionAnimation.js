import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const sectionAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);    
  const sections =  [...document.querySelectorAll(['section:not(:first-child) * '])]
  sections.forEach(section=>{
    const sectionsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        ease: 'sine'
      },
    });
    sectionsTimeline.from(section, { scale:0.9, opacity: 0, stagger: 0.7, duration: 0.5 })
  })
}