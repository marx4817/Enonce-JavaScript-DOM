const drop = document.getElementById("drop")
const div = document.getElementById("paran")

drop.onmousedown = function(event) {
    console.log(event.type)
    const l = true
  
    drop.style.position = 'absolute';
    drop.style.zIndex = 1000;
    
    
    div.append(drop);
  
    
    function moveAt(pageX, pageY) {
      drop.style.left = pageX - drop.offsetWidth / 2 + 'px';
      drop.style.top = pageY - drop.offsetHeight / 2 + 'px';
    }
  
    moveAt(event.pageX, event.pageY);
    console.log(event.pageX)
    function onMouseMove(event) {
        let x = event.clientX
        let y = event.clientY
        console.log(x)
        if(x <20 || x >300){
            return false
        }else if(y <20 || y >300){
            return false
        }
      moveAt(x, y);
    }
  
    
    if(l == true){
        div.addEventListener('mousemove', onMouseMove);
    }
    
    drop.onmouseup = function() {
      div.removeEventListener('mousemove', onMouseMove);
      drop.onmouseup = null;
    };

  };

//   drop.onmouseup = (event) =>{
//         drop.style.position = "fixed"
//         drop.style.top = "20px"
//   }
  
  