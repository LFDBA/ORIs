const navs = document.querySelectorAll('#nav-elements div')
const lists = document.querySelectorAll(".list")
const userAgent = navigator.userAgent;
const clickIcons = document.querySelectorAll(".imgContainer h2")
const 

clickIcons.forEach(icon => {
    if (/Mobi|Android/i.test(userAgent)) {
        
        icon.style = "position: absolute; top:5px; left: 20px; visibility: visible; font-size: 2vh;"
        navs.forEach(nav => {
            if(nav.querySelector(".drop")){
                nav.querySelector(".drop").style.scale = 0.8
                nav.querySelector(".drop").style.transform = "rotate(90deg)"
            }
        })
        
    }else{
        icon.style = "visibility: hidden;"
    }
})
window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let opacity = Math.max(0, scrollTop / 300); // Adjust '300' to control transparency speed
    navs.forEach(nav => {
        if(nav.querySelector(".list")){
            nav.querySelector(".list").style.maxHeight = "0px";
            nav.querySelector(".drop").style.scale = 0
            nav.querySelector(".drop").style.transform = "rotate(90deg)"
        }
    })
    if(opacity < 1){
        document.querySelector("#nav").style.backgroundColor = `rgba(31, 30, 30, ${opacity})`;
        document.querySelector("#title").style.backgroundColor = `rgba(31, 30, 30, ${opacity})`;
        
    }else{
        document.querySelector("#nav").style.backgroundColor = `rgba(31, 30, 30, 0.9)`;
        document.querySelector("#title").style.backgroundColor = `rgba(31, 30, 30, 0.9`;
        
    }
    

    
});
function redirect(location) {
    window.location.href = location
}


navs.forEach(nav => {
    if(nav.querySelector(".drop")){
        let drop = nav.querySelector(".drop")


        drop.addEventListener('mouseenter', () => {

            drop.style.scale = 1.1
            drop.style.transform = "rotate(-90deg)"
            nav.style.backgroundColor = "rgb(211, 211, 211)"
        
            if(nav.querySelector(".list")){
                let list = nav.querySelector(".list")
                list.style.display = "flex";
                list.style.maxHeight = "500px";
                list.addEventListener('mouseleave', () => {
                    drop.style.scale = 0.8;
                    drop.style.transform = "rotate(90deg)"
                    list.style.maxHeight = "0px";
                })

            }
            
        })
    }
})



navs.forEach(nav => {
    nav.addEventListener('mouseenter', () => {
        if(nav.querySelector(".drop")){
            nav.querySelector("text").style.scale = 0.8;
            nav.querySelector(".drop").style.scale = 0.8
            nav.querySelector(".drop").style.transform = "rotate(90deg)"
        }
        
    })
    nav.addEventListener('mouseleave', () => {
        if(nav.querySelector(".drop")){
            nav.querySelector(".drop").style.scale = 0
            nav.querySelector(".drop").style.transform = "rotate(-90deg)"
            if(nav.querySelector(".list")){
                let list = nav.querySelector(".list")
                list.style.maxHeight = "0px"
                nav.querySelector("text").style.scale = 1;
            }
        }
        
    })
    let dropping = false
    nav.addEventListener('click', () => {
        if(nav.querySelector(".list") && dropping == false){
            
            nav.querySelector(".list").style.display = "flex";
            nav.querySelector(".list").style.maxHeight = "500px";
            nav.querySelector(".drop").style.scale = 1.1
            nav.querySelector(".drop").style.transform = "rotate(-90deg)"
            dropping = true;
        }else if(nav.querySelector(".list") && dropping == true){
            nav.querySelector(".list").style.maxHeight = "0px";
            nav.querySelector(".drop").style.scale = 0.8
            nav.querySelector(".drop").style.transform = "rotate(90deg)"
            dropping = false
        }
    })
})


const follower = document.querySelector('#cursor');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const easing = 0.1; // Adjust this value to control the "speed" (lower = slower)

document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function animate() {
    // Interpolate current position towards target position
    // (target - current) gives the distance to cover
    // multiplying by easing moves it a fraction of that distance
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    // Update the position of the div based on the interpolated coordinates
    // Subtract half of the div's width/height to center it on the cursor
    follower.style.transform = `translate(${currentX - (follower.offsetWidth / 2)}px, ${currentY - (follower.offsetHeight / 2)}px)`;

    requestAnimationFrame(animate); // Keep the animation loop going
}

// Start the animation loop
animate();