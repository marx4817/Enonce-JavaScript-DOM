const div = document.getElementsByTagName("input")


const b = div[0]
b.focus()
b.onfocus = (event) => {
    b.style.borderColor = "#0275d8"
}

b.onblur = (event) => {
    b.style.borderColor = "#777"
}

function el(e){
    const div = document.getElementsByTagName("input")


    const b = div[e]
    b.focus()
    b.onfocus = (event) => {
        b.style.borderColor = "#0275d8"
    }

    b.onblur = (event) => {
        b.style.borderColor = "#777"
    }
}

btn = document.getElementById("next")

let count = 0
btn.onclick = (event ) => {
    if(count < div.length -1){
        count += 1
    }else{
        count = 0
    }
    el(count)

}