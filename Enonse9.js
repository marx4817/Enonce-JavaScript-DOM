const input = document.querySelector("input[name=event-name]")
const result = document.getElementById("resultat")
const evenmanValid = ["click", "dblclick", "aksyonpam"]

input.onkeydown = (event) =>{
    let value = event.target.value
    let charCode = event.code;

    if(charCode == 'Enter'){
        input.blur()
        const evenmanDekl =input.value
        if(evenmanValid.includes(evenmanDekl)){
            action(evenmanDekl)
        }else{
            result.innerHTML = "Evènman sa pa valid"
        }
        
    }
}

function action(e){
    const btn = document.getElementById("action")
    
    btn.addEventListener(e, (event) => {
      result.innerHTML = `Evènman sa valid. Se ${e}`
    })
    
    if(e == "click"){
        btn.click()
    }else{
        const myEvent = new Event(e)
        btn.dispatchEvent(myEvent)
    }
}
