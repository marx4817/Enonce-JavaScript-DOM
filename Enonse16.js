const form = document.getElementById("form");

form.onsubmit = (event) => {
    event.preventDefault()
    const fom = new FormData(form)
    let tab = fom.get("non")
    console.log(tab)
    tab=tab.split(" ")
    const p = document.getElementsByTagName("p")
    let paraf =p[0].textContent
    let paraf1 = paraf.toLowerCase()
    let paraf2_1 =p[1].textContent
    let paraf2 = paraf2_1.toLowerCase()
    console.log(tab)
    let nd ='';
    let nd1 ='';

    for(i of tab){
        let b = i
        if(paraf1.includes(i.toLowerCase()) && paraf2.includes(i.toLowerCase())){
            const strong = document.createElement("strong")
            strong.textContent = i
            strong.style.fontWeight = "bold"
            strong.style.color = 'green'
            
            let index = paraf1.indexOf(i)
            
            if(paraf[index][0] === isLower(b[0])){
                paraf1 = paraf1.replaceAll(i, `<strong>${i[0].toUpperCase()}${i.substring(1, i.lenght)}</strong>`)
                paraf2 = paraf2.replaceAll(i, `<strong>${i[0].toUpperCase()}${i.substring(1, i.lenght)}</strong>`)
            }else{
                paraf1 = paraf1.replaceAll(i, `<strong>${i[0].toLowerCase()}${i.substring(1, i.lenght)}</strong>`)
                paraf2 = paraf2.replaceAll(i, `<strong>${i[0].toLowerCase()}${i.substring(1, i.lenght)}</strong>`)
            }

        }else if(paraf1.includes(i.toLowerCase())){
            const strong = document.createElement("strong")
            strong.textContent = i
            strong.style.fontWeight = "bold"
            strong.style.color = 'green'
            
            let index = paraf1.indexOf(i)
            
            if(paraf[index][0] === isLower(b[0])){
                paraf1 = paraf1.replaceAll(i, `<strong>${i[0].toUpperCase()}${i.substring(1, i.lenght)}</strong>`)
            }else{
                paraf1 = paraf1.replaceAll(i, `<strong>${i[0].toLowerCase()}${i.substring(1, i.lenght)}</strong>`)
            }
            
            
        }else if(paraf2.includes(i.toLowerCase())){
            const strong = document.createElement("strong")
            strong.textContent = i
            strong.style.fontWeight = "bold"
            strong.style.color = 'green'
            
            let index = paraf2.indexOf(i)
            
            if(paraf2_1[index][0] === isLower(b[0])){
                paraf2 = paraf2.replaceAll(i, `<strong>${i[0].toUpperCase()}${i.substring(1, i.lenght)}</strong>`)
            }else{
                paraf2 = paraf2.replaceAll(i, `<strong>${i[0].toLowerCase()}${i.substring(1, i.lenght)}</strong>`)
            }
        }
    }
    p[0].innerHTML = paraf1
    p[1].innerHTML = paraf2
}

function isLower(i){
    return i.toLowerCase()
}
