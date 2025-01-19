// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        // console.log(now - prev, delay);

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}

// const btn = document.querySelector("#throttle");
const div = document.querySelector('.container')

// adding Event Listener
div.addEventListener("mousemove",
    throttleFunction((e) => {
        //Create div which shows images
        let imagediv = document.createElement('div')
        imagediv.classList.add('imagediv')
        imagediv.style.left = e.clientX + 'px'
        imagediv.style.top = e.clientY + 'px'


        //creating array to show random images
        let image_array = ['https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1694557636097-5969bae91ba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
            'https://img.freepik.com/free-photo/portrait-beautiful-girl-with-red-lips-spring-blossom-garden-wear-red-dress-white-blouse_627829-11204.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZhl4InfIfK-_If5ca8crsDFJdCtxulJrm7FRYm-5055oHJTo_Zc-fwayJJGylqxXjfQ&usqp=CAU',
            'https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1676234917180-595817acb14f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
            'https://plus.unsplash.com/premium_photo-1676064229129-fd2be05b9daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
            'https://plus.unsplash.com/premium_photo-1676234917148-9d2e8a6e5865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8', 'https://plus.unsplash.com/premium_photo-1691948105982-699318cad969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8', 'https://plus.unsplash.com/premium_photo-1703257523744-e21048f247fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbmVlciUyMHJvdGklMjBjaG9sZXxlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhbmVlciUyMHJvdGklMjBjaG9sZXxlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1619028004868-ca9c0344e062?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhbmVlciUyMHJvdGklMjBjaG9sZXxlbnwwfHwwfHx8MA%3D%3D']

        let random_index = Math.floor(Math.random() * image_array.length)
        selected_image = image_array[random_index]
        let img = document.createElement('img')
        img.setAttribute('src', `${selected_image}`)
        imagediv.appendChild(img)
        document.body.appendChild(imagediv)

        //using Gsap for transition our images
        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .6,
        })
        gsap.to(img, {
            y: "100%",
            delay: .6,
            ease: Power2,
        })

        //using settime out for remove our images after 2seconds
        setTimeout(() => {
            imagediv.remove();
        }, 2000);
    }, 400));