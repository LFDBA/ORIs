let clicking = false

function redirect(location) {
    window.location.href = location
}


function popup(element) {
    
    if(!element.classList.contains("hidden")){
        element.style.display = "none"
    }else{
        element.style.display = "block"
    }

    element.classList.toggle("hidden")
    clicking = true;
}

document.addEventListener("DOMContentLoaded", function() {
    
    console.log("ha")
    document.body.addEventListener("click", () => {
        let popups = document.querySelectorAll('.popup')
        console.log(popups)
        popups.forEach(element => {
            if(clicking == false){
                element.style.display = "none"
                if(!element.classList.contains("hidden")){
                    element.classList.add("hidden")
                }
                console.log("hu")
            }
            
        });
        clicking = false
    })
})