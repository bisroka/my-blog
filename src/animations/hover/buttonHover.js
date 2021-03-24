import gsap from 'gsap'
import { theme } from "../../utils/theme"

export const buttonHoverAnimation = (el) => {
const buttons = el.querySelectorAll([".button-hover"])

  buttons.forEach(button=>{
  const buttonsTimeLine = gsap.timeline({
    ease: 'power0',
    paused: true
  });
  const animation = buttonsTimeLine.to(button, { boxShadow: theme.shadows.buttonHoverShadow ,  duration: 0.1, })


      button.addEventListener("mouseenter", ()=>  animation.play() )
      button.addEventListener("mouseleave", ()=> animation.reverse() )
    
    })
    
  }