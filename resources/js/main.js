function switchVisibility() {
   var x = document.getElementById('email');
  if (x.style.visibility=== "hidden") {
    x.style.visibility = 'visible';
  } else if(x.style.visibility=== "visible"){
    x.style.visibility = 'hidden';
  }
}

function makeVisible() {
document.getElementById("email").style.visibility = "visible";
}
