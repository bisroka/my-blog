import gsap from 'gsap'

export const desktopMenuAnimation = () => {
    const buttons = [...document.querySelectorAll('nav button')]
    buttons.forEach(button=>{
        const buttonsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: "center bottom",
            },
        });
        buttonsTimeline.from(button, {x:"+=50", opacity: 0, stagger: 0.2, duration: 1.2 }, "+=1")  
    })
}