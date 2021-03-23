import VanillaTilt from "./tilt"

export const cardAnimation = (obj) => {
    console.log(obj)
    VanillaTilt.init(document.querySelectorAll(".news-card"), {
    max: 5,
    speed: 400
    })
}