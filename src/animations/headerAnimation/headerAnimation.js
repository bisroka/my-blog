import gsap from 'gsap'

export const headerAnimation = () => {
    const header = document.querySelector('.helloHeader')
    const subHeader = document.querySelector('.helloSubheader')
    const image = document.querySelector('.helloImage')
    
    
    gsap.set([header, subHeader, image], {autoAlpha:0})
    
    const headerTimeLine = gsap.timeline({defaults: {
        ease: 'expo'
    }})
    headerTimeLine.fromTo(header,{y:'-=300'}, {y:"+=300", autoAlpha:1, duration:1.2})
    .fromTo(image, {x:'+=150'}, {x:"-=150", autoAlpha:1, duration:1.2, })
    .fromTo(subHeader, {y:'-=100'}, {y:"+=100", autoAlpha:1, duration:1.2, })
}