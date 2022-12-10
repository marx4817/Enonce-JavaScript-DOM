const div = document.querySelector("#timer")
let b = div.getAttribute("value")
b = parseInt(b)
function timer() {
    if(b>=0){
        div.innerHTML = b
    }else{
        div.innerHTML = "time out"
        return false
    }
    
    b -= 1
}

setInterval(timer, 1000);


