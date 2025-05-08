let myCanvas = document.getElementById("myCanv");
let ctx=myCanvas.getContext("2d");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

let frontCanv=document.getElementById("frontCanv");




drawEverything();//call this "loop function"

document.addEventListener("keydown", welcome_1);
//start of a series of events

/*document.addEventListener("click",function(){
  console.log(event.clientX/w, event.clientY/h);
})*/
/*document.addEventListener("mousemove",function(){
  let x=event.x;
  let y=event.y;
  ctx0.drawImage(mouse,x,y,100,100);
});*/
