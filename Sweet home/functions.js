function openTV(event){
  let x=event.clientX;
  let y=event.clientY;
  if(x>tv_x&& x<tv_x+0.14*w && y>tv_y && y<tv_y+0.14*w*tVoff.height/tVoff.width){
    dialog=true;
    textTV=true;

    document.addEventListener("keydown",askTV);
  }//this function used to open tv
}
function askTV(event){
  if(event.key=="y"){
    uiMusic.play();
  dialog=false;
  tVLoaded=true;
  tVoffLoaded=false;
  textTV=false;
  document.removeEventListener("click", openTV);
  document.addEventListener("click", offTV);
  document.removeEventListener("keydown",askTV);
}else if(event.key=="n"){
  uiMusic.play();
  dialog=false;
  textTV=false;
  document.removeEventListener("keydown",askTV);
}//ask user if they want to open tv
}
function offTV(event){
  let x=event.clientX;
  let y=event.clientY;
  if(x>tv_x&& x<tv_x+0.14*w && y>tv_y && y<tv_y+0.14*w*tVoff.height/tVoff.width){

    tVLoaded=false;
    tVoffLoaded=true;
    document.removeEventListener("click", offTV);
    document.addEventListener("click", openTV);
  }
}//turn off tv

function openPlayer(event){
  uiMusic.play();
  let x=event.clientX;
  let y=event.clientY;
  if(x>player_x&&x<player_x+0.05*w && y>player_y && y<player_y+0.05*w*player1.height/player1.width){
    dialog=true;
    textplayer=true;
    document.addEventListener("keydown",askPlayer)
  }
}
function askPlayer(){
  if(event.key=="y"){
    uiMusic.play();
    dialog=false;
    playerLoaded=false;
    playeronLoaded=true;
    textplayer=false;
    jazzMusic.play();
    document.removeEventListener("click",openPlayer);
    document.addEventListener("click",offPlayer);
    document.removeEventListener("keydown",askPlayer);
  }else if(event.key=="n"){
    uiMusic.play();
    dialog=false;
    textplayer=false;
    document.removeEventListener("keydown",askPlayer);
  }
}
function welcome_1(e){
  uiMusic.play();
  welcomeLog_1=false;
  welcomeLog_2=true;
  document.removeEventListener("keydown", welcome_1);
  document.addEventListener("keydown",welcome_2);
}
function welcome_2(e){
  uiMusic.play();
  welcomeLog_2=false;
  welcomeLog_3=true;
  document.removeEventListener("keydown", welcome_2);
  document.addEventListener("keydown",welcome_3);
}function welcome_3(e){
  uiMusic.play();
  welcomeLog_3=false;
  document.removeEventListener("keydown",welcome_3);
  document.addEventListener("click", openTV);
  document.addEventListener("click", openPlayer);
  document.addEventListener("click",checkLetter);
  document.addEventListener("click",openPC);
  document.addEventListener("mousemove",function(){
    let x=event.x;
    let y=event.y;
    if(x>letter_x&&x<letter_x+0.03*w && y>letter_y && y<letter_y+0.03*w*letter.height/letter.width){

      document.body.style.cursor="pointer";
    }else if(x>tv_x&& x<tv_x+0.14*w && y>tv_y && y<tv_y+0.14*w*tVoff.height/tVoff.width){
      document.body.style.cursor="pointer";
    }else if(x>pc_x&&x<pc_x+0.1*w && y>pc_y && y<pc_y+0.1*w*pcOff.height/pcOff.width){
      document.body.style.cursor="pointer";
    }else if((x>cab_x&&x<cab_x+0.06*w && y>cab_y+0.07*h && y<cab_y+0.13*h)){
      document.body.style.cursor="pointer";
    }else if(x<=0.65*w&&x>=0.6*w&&y>=0.453*h&&y<=0.494*h){
      document.body.style.cursor="pointer";
    }else if(x>=(0.073*w+obj.shelf_x*w)&&x<=(0.09*w+obj.shelf_x*w)&&y>=0.287*h&&y<=0.337*h){
      document.body.style.cursor="pointer";
    }else if(x>player_x&&x<player_x+0.05*w && y>player_y && y<player_y+0.05*w*player1.height/player1.width){
      document.body.style.cursor="pointer";
    }else
    if(x<=0.65*w&&x>=0.613*w&&y>=0.514*h&&y<=0.556*h){
      document.body.style.cursor="pointer";
    }else if(x>=0.37*w&&x<=0.42*w&&y<=0.56*h&&y>=0.45*h){
      document.body.style.cursor="pointer";
    }else if(x>=(1-0.05)*w/2+0.013*w&&x<=(1-0.05)*w/2+0.013*w+0.05*w&&y>=0.165*h&&y<=0.165*h+0.05*w*lock.height/lock.width){
      document.body.style.cursor="pointer";
    }



    else{
      document.body.style.cursor="default";
    }
  });
}
function offPlayer(e){
  let x=event.clientX;
  let y=event.clientY;
  if(x>player_x&&x<player_x+0.05*w && y>player_y && y<player_y+0.05*w*player1.height/player1.width){

    playerLoaded=true;
    playeronLoaded=false;
    jazzMusic.pause();
    document.removeEventListener("click",offPlayer);
    document.addEventListener("click",openPlayer);
  }
}
function drawText(e){
  ctx.fillStyle="grey";
  ctx.fillRect(0.29*w,0.65*h-0.01*w,0.42*w,0.2*h+0.02*w);
  ctx.fillStyle="black";
  ctx.fillRect(0.3*w,0.65*h,0.4*w,0.2*h);
  ctx.fillStyle="LimeGreen";
  ctx.font="1.5vw pixel";
  ctx.textAlign="left";
  ctx.fillText("YES (press Y)",0.33*w,0.81*h);
  ctx.textAlign="right";
  ctx.fillText("NO (press N)",0.67*w,0.81*h);
}
function drawWelcome_1(e){

  ctx.fillStyle='rgba(0,0,0,0.8)';
  //ctx.fillRect(0.3*w, 0.28*h,0.4*w,0.2*w);
ctx.fillRect(0, 0,w,h);
  for(let i=0;i<20;i++){
    for(let j=0;j<10;j++){
      if(Math.random()>=0.7){
        ctx.fillStyle='rgba(256,256,256,0.8)';
      }else{
        ctx.fillStyle='rgba(0,0,0,0.8)'
      }
      ctx.fillRect(0.3*w+i*0.02*w,0.28*h+j*0.02*w,0.02*w,0.02*w);
    }
  }ctx.font="1.5vw pixel";
  ctx.fillStyle='LimeGreen';
  ctx.textAlign="center";
  ctx.fillText("Hey! Welcome!", 0.5*w,0.45*h);
  ctx.fillText("So glad you could be here", 0.5*w,0.5*h);
  ctx.font="1vw pixel";
  ctx.fillText("Press Any Key to Continue",0.5*w,0.57*h);
}function drawWelcome_2(){

  ctx.fillStyle='rgba(0,0,0,0.8)';
  ctx.fillRect(0, 0,w,h);

  for(let i=0;i<20;i++){
    for(let j=0;j<10;j++){
      if(Math.random()>=0.7){
        ctx.fillStyle='rgba(256,256,256,0.8)';
      }else if(Math.random()<0.7){
        ctx.fillStyle='rgba(0,0,0,0.8)'
      }
      ctx.fillRect(0.3*w+i*0.02*w,0.28*h+j*0.02*w,0.02*w,0.02*w);
    }
  }ctx.font="1.5vw pixel";
  ctx.fillStyle='LimeGreen';
  ctx.textAlign="center";
  ctx.fillText("You can listen to music, watch tv", 0.5*w,0.45*h);
  ctx.fillText(", play with computer if you want to", 0.5*w,0.5*h);
  ctx.font="1vw pixel";
  ctx.fillText("Press Any Key to Continue",0.5*w,0.57*h);
}function drawWelcome_3(){
  ctx.fillStyle='rgba(0,0,0,0.8)';
  ctx.fillRect(0, 0,w,h);

  for(let i=0;i<20;i++){
    for(let j=0;j<10;j++){
      if(Math.random()>=0.7){
        ctx.fillStyle='rgba(256,256,256,0.8)';
      }else if(Math.random()<0.7){
        ctx.fillStyle='rgba(0,0,0,0.8)'
      }
      ctx.fillRect(0.3*w+i*0.02*w,0.28*h+j*0.02*w,0.02*w,0.02*w);
    }
  }ctx.font="1.5vw pixel";
  ctx.fillStyle='LimeGreen';
  ctx.textAlign="center";
  ctx.fillText("Just make yourself at home", 0.5*w,0.45*h);
  ctx.font="1vw pixel";
  ctx.fillText("Press Any Key to Continue",0.5*w,0.57*h);
}
function checkLetter(e){
  uiMusic.play();
  let x=event.clientX;
  let y=event.clientY;
  if(x>letter_x&&x<letter_x+0.03*w && y>letter_y && y<letter_y+0.03*w*letter.height/letter.width){
    dialog=true;
    letter1=true;
    document.addEventListener("keydown",askLetter);
  }
}
  function askLetter(e){

    if(event.key=="y"){
      uiMusic.play();
      dialog=false;
      readLetter1_1=true;
      letter1=false;
      document.addEventListener("keydown",askLetter1_1);
      document.removeEventListener("keydown",askLetter);
    }else if(event.key=="n"){
      uiMusic.play();
      dialog=false;
      letter1=false
      document.removeEventListener("keydown",askLetter)
    }
  }
  function askLetter1_1(){
    uiMusic.play();
    readLetter1_1=false;
    readLetter1_2=true;
    document.removeEventListener("keydown",askLetter1_1);
    document.addEventListener("keydown",askLetter1_2)
  }
  function askLetter1_2(){
    uiMusic.play();
    readLetter1_2=false;
    readLetter1_3=true;
    document.addEventListener("keydown",quitLetter1);
    document.removeEventListener("keydown",askLetter1_2);
  }
  function quitLetter1(){
    uiMusic.play();
    readLetter1_3=false;
    document.removeEventListener("keydown",quitLetter1);
    document.addEventListener("click", cabinetOpen);
  }
  function letterBackground(){
    //what is does
    ctx.font="1.2vw pixel";
    dialog=false;
    ctx.fillStyle="grey";
    ctx.fillRect(0.29*w,0.65*h-0.01*w,0.42*w,0.2*h+0.02*w);
    ctx.fillStyle="black";
    ctx.fillRect(0.3*w,0.65*h,0.4*w,0.2*h);
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("Press Any Key to Continue", 0.5*w,0.815*h);
  }
  function openPC(e){
    uiMusic.play();
    let x=event.clientX;
    let y=event.clientY;
    if(x>pc_x&&x<pc_x+0.1*w && y>pc_y && y<pc_y+0.1*w*pcOff.height/pcOff.width){

      dialog=true;
      pcLog=true;
      document.removeEventListener("click",openPC);
      document.addEventListener("keydown",askPC);
    }
  }function askPC(e){

    if(event.key=="y"){
      uiMusic.play();
      dialog=false;
      pcLog=false;
      pcOffloaded=false;
      pcOnloaded=true;
      document.addEventListener("click",offPC);
      document.removeEventListener("keydown",askPC);
    }else if(event.key=="n"){
      uiMusic.play();
      dialog=false;
      pcLog=false
      document.removeEventListener("keydown",askPC);
    }
  }
  function offPC(e){
    let x=event.clientX;
    let y=event.clientY;
    if(x>pc_x&&x<pc_x+0.1*w && y>pc_y && y<pc_y+0.1*w*pcOff.height/pcOff.width){
      pcOffloaded=true;
      pcOnloaded=false;
      document.addEventListener("click",openPC);
      document.removeEventListener("click",offPC);
  }
  }
  function cabinetOpen(e){
    uiMusic.play();
    let x=event.x;
    let y=event.y;
    if((x>cab_x&&x<cab_x+0.06*w && y>cab_y+0.06*h && y<cab_y+0.13*h)){

      cabinetOpened=true;
      cabinetLoaded=false;
      document.removeEventListener("click", cabinetOpen);
      document.addEventListener("click",getPillAsk);
    }
  }
  function getPillAsk(){
    uiMusic.play();
    let x=event.x;
    let y=event.y;
    if((x>cab_x&&x<cab_x+0.06*w && y>cab_y+0.07*h && y<cab_y+0.13*h)){
    pillAsk=true;
    dialog=true;
      document.addEventListener("keydown",getPill);
    }
  }
  function getPill(e){
    if(event.key=="y"){
      uiMusic.play();
    dialog=false;
    cabinetOpened=false;
    cabinetDone=true;
    pillAsk=false;
    pillDone=true;
    booksLoaded=false;
    redbookLoaded=true;

    hintLog=true;
    document.addEventListener("keydown", hint_1);
    document.removeEventListener("keydown",getPill);
    document.removeEventListener("click",getPillAsk);
  }else if(event.key=="n"){
    uiMusic.play();
    dialog=false;
    pillAsk=false;
  }
  }
  function hint_1(){

    document.addEventListener("click",checkBook);
    hintLog=false;
    document.removeEventListener("keydown",hint_1);
  }
  function checkBook(e){
    uiMusic.play();
    let x=event.clientX;
    let y=event.clientY;
    if(x>=(0.073*w+obj.shelf_x*w)&&x<=(0.09*w+obj.shelf_x*w)&&y>=0.287*h&&y<=0.337*h){

      bookOpen=true;

      pcOffloaded=true;
      pcOnloaded=false;

      document.removeEventListener("click",offPC);

      document.addEventListener("keydown",returnBook);
      document.removeEventListener("click",checkBook);
      document.removeEventListener("click",openPC)

    }
  }
  function returnBook(){
    bookOpen=false;
    document.addEventListener("click",checkBook);
    document.removeEventListener("keydown",returnBook);
    document.addEventListener("keyup",moveShelf);
    document.addEventListener("click",unlock);
    document.addEventListener("click",openPC);
    document.addEventListener("click",offPC);
  }
  function unlock(){
    let x = event.clientX;
    let y = event.clientY;
    if(x>=(1-0.05)*w/2+0.013*w&&x<=(1-0.05)*w/2+0.013*w+0.05*w&&y>=0.165*h&&y<=0.165*h+0.05*w*lock.height/lock.width){
      unlocking=true;
      document.removeEventListener("click",openPC)
      document.removeEventListener("click",offPC);
      document.removeEventListener("click",unlock);
      document.addEventListener("keydown", returnPassword);
      document.addEventListener("click",password_1);
    }
  }
  function returnPassword(){
    unlocking=false;
    passwordNum_1_0=false;
    passwordNum_1_1=false;
    passwordNum_2_0=false;
    passwordNum_2_1=false;
    passwordNum_3_0=false;
    passwordNum_3_1=false;
    passwordNum_4_0=false;
    passwordNum_4_1=false;
    document.addEventListener("click",unlock);
    document.removeEventListener("click",password_1);
    document.removeEventListener("keydown", returnPassword);
    document.addEventListener("click",openPC);
    document.addEventListener("click",offPC);


//for password
  }
  function password_1(e){
    uiMusic.play();
    let x=event.clientX;
    let y=event.clientY;
    if(x<=0.65*w&&x>=0.6*w&&y>=0.453*h&&y<=0.494*h){

      passwordNum_1_0=true;
      document.removeEventListener("click",password_1);
      document.addEventListener("click",password_2);
    }else
    if(x<=0.65*w&&x>=0.6*w&&y>=0.514*h&&y<=0.556*h){
      passwordNum_1_1=true;
      document.removeEventListener("click",password_1);
      document.addEventListener("click",password_2);
    }
  }
  function password_2(e){
    uiMusic.play();
    let x=event.clientX;
    let y=event.clientY;
    if(x<=0.65*w&&x>=0.613*w&&y>=0.453*h&&y<=0.494*h){

      passwordNum_2_0=true;
      document.removeEventListener("click",password_2);
      document.addEventListener("click",password_3);
    }else
    if(x<=0.65*w&&x>=0.613*w&&y>=0.514*h&&y<=0.556*h){
      passwordNum_2_1=true;
      document.removeEventListener("click",password_2);
      document.addEventListener("click",password_3);
    }
  }function password_3(e){
    uiMusic.play();
    let x=event.clientX;
    let y=event.clientY;
    if(x<=0.65*w&&x>=0.613*w&&y>=0.453*h&&y<=0.494*h){

      passwordNum_3_0=true;
      document.removeEventListener("click",password_3);
      document.addEventListener("click",password_4);
    }else
    if(x<=0.65*w&&x>=0.613*w&&y>=0.514*h&&y<=0.556*h){
      passwordNum_3_1=true;
      document.removeEventListener("click",password_3);
      document.addEventListener("click",password_4);
    }
  }function password_4(e){
    uiMusic.play();
    let x=event.clientX;
    let y=event.clientY;
    if(x<=0.65*w&&x>=0.613*w&&y>=0.453*h&&y<=0.494*h){

      passwordNum_4_0=true;
      document.removeEventListener("click",password_4);
      document.addEventListener("click",again);
    }else
    if(x<=0.65*w&&x>=0.613*w&&y>=0.514*h&&y<=0.556*h){
      passwordNum_4_1=true;
      document.removeEventListener("click",password_4);
      document.addEventListener("click",again);
      document.addEventListener("mousemove",final);
    }
//for password

  }function final(){
    uiMusic.play();
    if(passwordNum_1_0&&passwordNum_2_1&&passwordNum_3_1&&passwordNum_4_1){
      passwordNum_1_0=false;
      passwordNum_1_1=false;
      passwordNum_2_0=false;
      passwordNum_2_1=false;
      passwordNum_3_0=false;
      passwordNum_3_1=false;
      passwordNum_4_0=false;
      passwordNum_4_1=false;
      unlocking=false;

      finalLog_1=true;
      document.removeEventListener("mousemove",final);
      document.addEventListener("keydown",final_1);
    }
  }
  function final_1(){
    uiMusic.play();
    finalLog_1=false;
    finalLog_2=true;
    document.removeEventListener("keydown",final_1);
    document.addEventListener("keydown",final_2);
  }
  function final_2(){
    uiMusic.play();
    finalLog_3=true;
    finalLog_2=false;
    document.removeEventListener("keydown",final_2);
    document.addEventListener("keydown",final_3);
  }function final_3(){
    uiMusic.play();
    finalLog_3=false;
    finalLog_4=true;

    document.removeEventListener("keydown",final_3);
    document.addEventListener("keydown", finalEnd);
  }
  function finalEnd(){
    finalLog_4=false;
    backgroundLoaded=false;
    outside=true;
    lockLoaded=false;
  }


  function again(){
    uiMusic.play();
    let x=event.clientX;
    let y=event.clientY;
    if(x>=0.37*w&&x<=0.42*w&&y<=0.56*h&&y>=0.45*h){
      document.removeEventListener("click",again);
      document.addEventListener("click",password_1);
      passwordNum_1_0=false;
      passwordNum_1_1=false;
      passwordNum_2_0=false;
      passwordNum_2_1=false;
      passwordNum_3_0=false;
      passwordNum_3_1=false;
      passwordNum_4_0=false;
      passwordNum_4_1=false;
    }
  }//try the password again
  function moveShelf(){
    if(obj.shelf_x<=0.33){
      document.removeEventListener("mousemove",moveShelf);
    }
    if(pcOnloaded&&playeronLoaded&&(!tVLoaded)){
      shelf_pos_x();
    }
  }//move the shelf away
  function shelf_pos_x() {
    if(obj.shelf_x>=0.33){
      obj.shelf_x=obj.shelf_x-0.01;
      setTimeout(shelf_pos_x,300);
    }
  }
  function drawOutside(){

    for(let i = 0; i < w/10; i++){
    for(let j = 0; j < h/10; j++){
      ctx.fillStyle = 'rgba('+Math.random()*256+','+Math.random()*256+','+Math.random()*256+','+0.7+')';
      ctx.fillRect(i * 10, j * 10, 10, 10);
      }
    }//setTimeout(drawOutside,300);
  }//draw the image of "outer world"
