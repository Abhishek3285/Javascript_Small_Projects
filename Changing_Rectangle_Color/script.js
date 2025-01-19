const rect = document.querySelector('.center');

rect.addEventListener('mousemove', (e) => {
    let rectangleLocation = rect.getBoundingClientRect();
    let rectangleVal = e.clientX - rectangleLocation.left

    if (rectangleVal < rectangleLocation.width / 2) {
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, rectangleVal)
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        })

    }
    else {
        let blueColor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, rectangleVal)
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }
})

rect.addEventListener('mouseleave', () => {
    gsap.to(rect, {
        backgroundColor: "white"
    })
})