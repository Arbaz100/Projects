const left = document.querySelector("#left")
const right = document.querySelector("#right")
const slider = document.querySelector("#slider")
const images = document.querySelectorAll("#slider>img")
const bottom = document.querySelector(".bottom")
let slideNumber = 1;
const length = images.length;
const imagewidth = screen.width
let wide = 0
if (imagewidth > 430)
{
    wide = 800
}
else {
    wide = 320
}

    const buttons = document.querySelectorAll(".button")
    buttons[0].style.backgroundColor = "white"
    
    const reset = () => {
        buttons.forEach((button) => {
            button.style.backgroundColor = "transparent"
        })
    }
    
    buttons.forEach((button,i) => {
        button.addEventListener("click", () => {
            reset()
            slider.style.transform = `translateX(-${i*wide}px)`
            slideNumber = i + 1
            button.style.backgroundColor = "white"
        })
    })

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber*wide}px)`
    slideNumber++
}
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2)*wide}px)`
    slideNumber--
}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slideNumber = 1
}
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*wide}px)`
    slideNumber = length
}
right.addEventListener("click", ()=>{
    slideNumber < length ? nextSlide() : getFirstSlide() 
    reset()
    buttons[slideNumber-1].style.backgroundColor = "white"
})
left.addEventListener("click", ()=>{
    slideNumber > 1 ? prevSlide() : getLastSlide() 
    reset()
    buttons[slideNumber-1].style.backgroundColor = "white"
})