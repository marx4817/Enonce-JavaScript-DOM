
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(function(res) {
//     if (res.ok) {
//       return res.json();
//     }
//   })
//   .then(function(value) {
//     console.log(value);
//   })
//   .catch(function(err) {
//     // Une erreur est survenue
//   });

async function getResponse() {
  let tab = []
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/todos',
		{
			method: 'GET',
			
		}
	);
	const data = await response.json();
  //console.log(data)
  tab = data
  console.log(tab)
 const boutn =  document.getElementById("api")
 boutn.onclick = (event) => {
  const div = document.getElementsByClassName("data-wrapper")[0]
  div.innerHTML = ""
  let con = ''
  for(e of tab){
    if(e.completed == true){
     con = `<input type="checkbox" checked>`
    }else{
      con = `<input type="checkbox">`
    }
    div.innerHTML += `<h3>${e.title}</h3><br>${e.completed}${con}<br><label>ID ${e.id}</label><br><hr>`
  }
 }
}


getResponse()