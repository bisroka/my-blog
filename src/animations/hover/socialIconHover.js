import gsap from 'gsap'

export const socialIconHoverAnimation = () => {
const buttons = document.querySelectorAll([".social-icon"])

  buttons.forEach(button=>{
  const buttonsTimeLine = gsap.timeline({
    ease: 'power0',
    paused: true
  });
  const animation = buttonsTimeLine.to(button, { y: "+=5", opacity: "1",  duration: 0.1, })

      button.addEventListener("mouseenter", ()=>  animation.play() )
      button.addEventListener("mouseleave", ()=> animation.reverse() )
    })
  }