const rect = document.querySelector('.rectangle')


rect.addEventListener('mousemove', (e) => {
    let xval = gsap.utils.mapRange(0, window.innerWidth, 100 + rect.getBoundingClientRect().width / 2, window.innerWidth - (100 + rect.getBoundingClientRect().width / 2), e.clientX)
    gsap.to('.rectangle', {
        left: xval + "px",
        ease: Power3
    })
})