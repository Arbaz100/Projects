const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length
const screenwidth = screen.width
let activeSlideIndex = 0

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
const sliderHeight = sliderContainer.clientHeight
const sliderWidth = sliderContainer.clientWidth

    if (screenwidth > 430) {
        if (direction === 'up') {
            activeSlideIndex++
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0
            }
        }
        else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1
            }
        }
        slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    }
    else if (screenwidth <= 430) {
        if (direction === 'up') {
            activeSlideIndex++
            if (activeSlideIndex > slidesLength - 1) {
                activeSlideIndex = 0
            }
        }
        else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesLength - 1
            }
        }
        slideLeft.style.left = `-${(slidesLength - 1) * 100}vw`
        slideRight.style.transform = `translateX(-${activeSlideIndex * sliderWidth}px)`
        slideLeft.style.transform = `translateX(${activeSlideIndex * sliderWidth}px)`
    }
}