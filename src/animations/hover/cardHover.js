import gsap from 'gsap'
import { theme } from "../../utils/theme"
export const cardHoverAnimation = () => {

const cards = document.querySelectorAll([".news-card"])

cards.forEach(card=>{
const cardTimeLine = gsap.timeline({
  ease: 'power0',
  paused: true
});
    const cardImage = card.querySelector(".news-card a img")
    const cardAnimation = cardTimeLine.to(card, { boxShadow: theme.shadows.cardHoverShadow,  duration: 0.2, })
    const cardImageAnimation = cardTimeLine.to(cardImage, { opacity: 1,  duration: 0.2, delay: 0  })

    const animations = [cardAnimation, cardImageAnimation]

      card.addEventListener("mouseenter", ()=>  animations.forEach(el => el.play()))
      card.addEventListener("mouseleave", ()=>  animations.forEach(el => el.reverse()))
    })
  }