import gsap from 'gsap'

export const mobileMenuAnimation = (isOpen) => {
    const outer = document.querySelectorAll('.outer')
    const menu = document.querySelector('.menu-inner')

    const mobileMenuTimeLine = gsap.timeline({defaults: {
        ease: 'power0',
        duration: 0.4,
    }})
    mobileMenuTimeLine.paused(true)
    mobileMenuTimeLine.fromTo([...outer, menu],{x:'0'}, {x:"-=100vw"})

    if(isOpen === true){   
        mobileMenuTimeLine.play()
    }else {
        mobileMenuTimeLine.reverse(1)
    }
}
