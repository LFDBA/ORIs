let clicking = false


function redirect(location) {
    window.location.href = location
}


function popup(elem, sib) {
    let element = document.querySelectorAll('.popup')[elem]
    let sibling = document.querySelectorAll('.popup')[sib]
    if(!element.classList.contains("hidden")){
        element.style.display = "none"
    }else if(!sibling.classList.contains("hidden")){
        sibling.style.display = "none"
        sibling.classList.toggle("hidden")
        element.style.display = "flex"
    }else{
        element.style.display = "flex"
    }

    element.classList.toggle("hidden")
    clicking = true;
}

document.addEventListener("DOMContentLoaded", function() {
    let popups = document.querySelectorAll('.popup')

    popups.forEach(element => {
        element.addEventListener("click", () => {
            clicking = true
        })
    })



    document.body.addEventListener("click", () => {
        
        popups.forEach(element => {
            if(clicking == false){
                element.style.display = "none"
                if(!element.classList.contains("hidden")){
                    element.classList.add("hidden")
                }
            }
            
        });
        clicking = false
    })
})