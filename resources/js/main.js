function switchVisibility() {

   var x = document.getElementById("email");
   if (x.style.visibility === "visible") {
       x.style.visibility = "hidden";
   } else {
       x.style.visibility = "visible";
   }
}



function makeVisible() {
document.getElementById("email").style.visibility = "visible";

}



//This aint working yet

function smoothScroll(target,duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startingPosition= window.pageYOffset;
  var distanceBetween=targetPosition - startingPosition;

  var startTime = null;

  function animation(currentTime){
    if (startTime === null) currentTime = startTime;
    var timeElapsed = currentTime -startTime;
    var run = ease(timeElapsed,startingPosition,distanceBetween,duration);
    window.scrollTo(0,run);
    if(timeElapsed<duration) requestAnimationFrame(animation);
  }

  function ease (t,c,b,d){
    t /= d / 2;
    if (t<1) return c / 2 * t * t + b ;
    t--;
    return -c / 2* (t * (t-2) - 1)+ b
  
  }

  requestAnimationFrame(animation);

}

var contact= document.querySelector('scroll');
if(contact){
contact.addEventListener('click',function(){
  smoothScroll('#email',1000);
  });
}