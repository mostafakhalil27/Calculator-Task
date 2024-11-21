var x = 0; 
var y = 0;
var z = 0;
var i = 0;


function Add(){
  x = document.getElementById("x").value;
  i = 1;
}

function Sub(){
  x = document.getElementById("x").value;
  i = 2;
}

function Mul(){
  x = document.getElementById("x").value;
  i = 3;
}

function Divi() {
  x = document.getElementById("x").value;
  i = 4;
}


function Result(){
  y = document.getElementById("y").value;

  if (i == 1){
    z = parseInt (x) + parseInt (y)
    document.getElementById("z").value = z

  }else if (i == 2){
    z = parseInt (x) - parseInt (y)
    document.getElementById("z").value = z
  
  }else if (i == 3){
    z = parseInt (x) * parseInt (y)
    document.getElementById("z").value = z
  
  }else {
    z = parseInt (x) / parseInt (y)
    document.getElementById("z").value = z
  }
}