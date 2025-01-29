// First project start here
const h5 = document.querySelector('h5')
const add = document.querySelector('#add')


let check = 1
add.addEventListener('click', (e) => {
    if (check == 1) {
        h5.innerText = "Friends"
        h5.style.color = "green"
        add.innerText = "Remove Friend"
        check = 0
    }
    else {
        h5.innerText = "Stranger"
        h5.style.color = "red"
        add.innerText = "Add Friend"
        check = 1
    }
})
// First project end here


// second project start here

const icon = document.querySelector('i')
const card = document.querySelector('#container')
card.addEventListener('dblclick', (e) => {
    icon.style.transform = 'translate(-50%, -50%) scale(1)'
    icon.style.opacity = 0.8

    setTimeout(() => {
        icon.style.opacity = 0
    }, 2000);
    setTimeout(() => {
        icon.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 2000);
})

// second project end here


// Third project start here

const main = document.querySelector('#main')
const cursor = document.querySelector('#cursor')

main.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.x +'px'
    cursor.style.top = e.y +'px'
})

// Third project end here



// Fourth project start here

const firstCard = document.querySelector('#elem1')
const cardImage = document.querySelector('#elem1 img')

firstCard.addEventListener('mousemove', (e) => {
    cardImage.style.left = e.x + "px"
    cardImage.style.top = e.y + "px"
})


firstCard.addEventListener('mouseenter', (e) => {
    cardImage.style.opacity = 1
})
firstCard.addEventListener('mouseleave', (e) => {
    cardImage.style.opacity = 0
})

// if we want to showing images in all divs then use this code

const Cards = document.querySelectorAll('.elem')

Cards.forEach((val) => {


    val.addEventListener('mousemove', (details) => {
        val.childNodes[3].style.left = details.x + "px"
        val.childNodes[3].style.top = details.y + "px"
    })
    val.addEventListener('mouseenter', () => {
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener('mouseleave', () => {
        val.childNodes[3].style.opacity = 0
    })
})

// Fourth project end here


// Fifth project start here

let arr = [
    {
        dp: "https://images.unsplash.com/photo-1592214534258-0067435006d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1599065286449-b984d8ac7e4e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://mastdp.com/images/beautiful-girl/2024/08/beautiful%20girl-04.webp",
        story: "https://mastdp.com/images/beautiful-girl/2024/08/beautiful%20girl-03.webp"
    },
    {
        dp: "https://mastdp.com/images/beautiful-girl/2024/08/beautiful%20girl%20photo-01.webp",
        story: "https://mastdp.com/img/beautiful-girl/beautiful-girl-wallpaper-download.webp"
    },
    {
        dp: "https://images.unsplash.com/photo-1599065286381-8425edfb85e4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://mastdp.com/images/beautiful-girl/2024/08/beautiful%20girl-01.webp"
    },
    {
        dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTV1tdKNeIYf6Sx_zOu6zUGBKEjYUgLjDIw7po_Q584I2nvl8Oue4GzqUBIBljcm7ZQZ4&usqp=CAU",
        story: "https://mastdp.com/images/beautiful-girl/2024/08/beautiful%20girl-06.webp"
    }
]

let storiyan = document.querySelector('#storiy')

let clutter = ""

arr.forEach((e, idx) => {
    clutter += `<div class="story">
          <img id="${idx}" src="${e.dp}" alt="">
          </div>`
})

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {
    let fullScreen = document.querySelector('#fullscreen')
    fullScreen.style.display = "block"
    fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(() => {
        document.querySelector('#fullscreen').style.display = "none"
    }, 3000);
})

// Fifth project end here
