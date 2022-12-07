const countryArray = ["Haiti", "France", "United States", "Belgium", "Canada", "Jamaica", "Mexico", "Brazil", "Nigeria"];

let mapCountry = countryArray.map(na)

function na(el){
    return `<ul><li><input type='checkbox' name='country' value='${el}' />` +el + "</li></ul>"
}


const div =document.getElementById("enonse")
for(let b of mapCountry){
    div.innerHTML += b
}

const btn = document.createElement("button")

btn.setAttribute("type", "button")
btn.innerText = "Rekiper"
btn.id ="bouton"
div.append(btn)

let peyiChwazi =[]

const bouton = document.getElementById("bouton")

bouton.onclick = (event) => {
    const ul =document.querySelectorAll('input')
    
    peyiChwazi.length = 0
    for(el of ul){
        // console.log(el.checked)
        if(el.checked === true){
            peyiChwazi.push(el.value)
        }
    }

    const divChwa = document.createElement("div")
    divChwa.innerHTML = "<br><strong>Peyi Chwaziyo se:</strong>"
     for(country of peyiChwazi){
        divChwa.innerHTML += `<p>${country}</p>`
    }
    div.append(divChwa)
}
