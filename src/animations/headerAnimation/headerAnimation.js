import gsap from 'gsap'

export const headerAnimation = () => {
    const header = document.querySelector('.helloHeader')
    const subHeader = document.querySelector('.helloSubheader')
    const image = document.querySelector('.helloImage')
    
    
    gsap.set([header, subHeader, image], {autoAlpha:0})
    
    const headerTimeLine = gsap.timeline({defaults: {
        ease: 'expo'
    }})
    headerTimeLine.fromTo(header,{y:"-=300", autoAlpha:0}, {y:"+=300", autoAlpha:1, duration:2.5})
                .fromTo(image, {x:'+=150', autoAlpha:0}, {x:"-=150", autoAlpha:1, duration:1.2, }, "-=1")
                .fromTo(subHeader, {y:'-=300', autoAlpha:0}, {y:"+=300", autoAlpha:1, duration:1.2, }, "-=1" )
}