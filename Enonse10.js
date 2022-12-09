const main = document.querySelectorAll("main")
console.log(main)
main.forEach((el) => {
    console.log(el)
    el.onmousedown = function(event){
        return false
    }

    el.onselectstart = function(event){
        return false
    }
})

main.onmousedown = function(event){
    return false   
}
main.onselectstart = function(event){
    return false
    
}

const p = document.querySelector('p')
const h1 = document.querySelector('h1')

const bouton = document.getElementById("copy")
bouton.onclick = (event) => {

    let range = document.createRange()
    range.setStart(h1.firstChild, 0)
    range.setEnd(p.firstChild, p.textContent.length)
    let selection = document.getSelection()
    selection.addRange(range)

    navigator.clipboard.writeText( selection.toString() )
}
