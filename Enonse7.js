const div =document.getElementById("enonse")
const input =document.createElement("input")
input.type ="text"
input.name ="number"
div.innerHTML = "<label>Number "
div.append(input)
div.innerHTML += "<label>"

const digits = '0123456789'
const val = document.querySelector("input[name=number]")
val.addEventListener('keydown', function(event){
  let value = event.target.value
  let charCode = event.code;
  
  if(charCode != 'Backspace'){
    if(value.length >= 8 || !digits.includes(charCode.slice(-1))){
      event.preventDefault()
    }
  }
})