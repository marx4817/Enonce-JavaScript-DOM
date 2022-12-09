const div = document.getElementById("souri");

div.onmousemove = (event) => {
   
    let x = event.clientX
    let y = event.clientY
    if(x > 255){
        x = 255
    }
    if(y > 255){
        y = 255
    }

    let z =  (x + y) / 2
    // console.log(`abscisse ${x}`)
    // console.log(`ordonnee ${y}`)
    // console.log(`ordonnee2 ${z}`)
    div.setAttribute("style", `background-color: rgb(${x}, ${y}, ${z});`)
    console.log(div)
}