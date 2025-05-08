

function drawEverything(){
  //this function will draw all the images and shapes on this canvas

  ctx.globalCompositeOperation="source-over";
  if(obj.playerloop==4){
    obj.playerloop=0;
  }
  if(obj.pcloop==2){
    obj.pcloop=0;
  }
  if(outside){
    drawOutside();
  }
  if (backgroundLoaded) {
    ctx.drawImage(background,0.2*w,0.1*h,0.6*w,0.8*h);
  }
  if (lockLoaded){
    ctx.drawImage(lock,(1-0.05)*w/2+0.013*w,0.165*h,0.05*w,0.05*w*lock.height/lock.width);
  }
  if(booksLoaded){
    ctx.drawImage(bookshelf, obj.shelf_x*w,0,0.15*w,0.15*w*bookshelf.height/bookshelf.width);
  }
  if(redbookLoaded){
    ctx.drawImage(redBook,obj.shelf_x*w,0,0.15*w,0.15*w*bookshelf.height/bookshelf.width);
  }
  if(posterLoaded){
    ctx.drawImage(poster,0.58*w,0.15*h,0.04*w,0.08*h);
  }
  if(bedLoaded){
      ctx.drawImage(bed,0.23*w,0.4*h,0.27*h,0.27*h*262/200);
  }
  if(couchLoaded){
    ctx.drawImage(couch,0.66*w,0.5*h,0.18*h,0.18*h*couch.height/couch.width);
  }
  if(cabinetLoaded){
    ctx.drawImage(cabinet,cab_x,cab_y,0.06*w,0.07*w*cabinet.height/cabinet.width);
  }
  if(cabinetOpened){
    ctx.drawImage(cabinetOn,cab_x,cab_y,0.06*w,0.07*w*cabinet.height/cabinet.width);
  }

  if(cabinetDone){
    ctx.drawImage(cabinetD,cab_x,cab_y,0.06*w,0.07*w*cabinet.height/cabinet.width);
  }
  if(tVLoaded){
    let random=Math.floor(Math.random()*3);
    switch (random) {
      case 0:
        ctx.drawImage(tVon1,tv_x,tv_y,0.14*w,0.14*w*tVoff.height/tVoff.width);
        break;
      case 1:
        ctx.drawImage(tVon2,tv_x,tv_y,0.14*w,0.14*w*tVoff.height/tVoff.width);
        break;
      case 2:
        ctx.drawImage(tVon3,tv_x,tv_y,0.14*w,0.14*w*tVoff.height/tVoff.width);
        break;
    }
  }
  if(tVoffLoaded){
    ctx.drawImage(tVoff,tv_x,tv_y,0.14*w,0.14*w*tVoff.height/tVoff.width);
  }
  if(fcLoaded){
    ctx.drawImage(fc,0.6*w,0.25*h,0.15*w,0.15*w);
  }
  if(playerLoaded){
    ctx.drawImage(player1,player_x,player_y,0.05*w,0.05*w*player1.height/player1.width);
  }
  if(playeronLoaded){
    ctx.drawImage(players[obj.playerloop],player_x,player_y,0.05*w,0.05*w*player1.height/player1.width);
    obj.playerloop++;
    //console.log(obj.playerloop);
  }if(pcOffloaded){
    ctx.drawImage(pcOff, pc_x, pc_y, 0.1*w, 0.1*w*pcOff.height/pcOff.width);
  }if(pcOnloaded){
    /*let random=Math.floor(Math.random()*2);
    switch (random) {
      case 0:
        ctx.drawImage(pcOn,pc_x,pc_y,0.1*w,0.1*w*pcOff.height/pcOff.width);
        break;
      case 1:
        ctx.drawImage(pcOn_2,pc_x,pc_y,0.1*w,0.1*w*pcOff.height/pcOff.width);
        break;
  }*/
  ctx.drawImage(pcs[obj.pcloop],pc_x,pc_y,0.1*w,0.1*w*pcOff.height/pcOff.width);
  obj.pcloop++;
}
  if(letterLoaded){
    ctx.drawImage(letter,letter_x,letter_y,0.03*w,0.03*w*letter.height/letter.width);
  }
  if(dialog){
    drawText();
  }
  if(textplayer){
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("An aged Music Player, Turn it on?",0.5*w,0.73*h);
  }
  if(textTV){
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("A brand-new Television, Turn it on?",0.5*w,0.73*h);
  }
  if(pcLog){
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("Open the computer?",0.5*w,0.73*h);
  }
  if(pillAsk){
    ctx.font="1.5vw pixel";
    ctx.textAlign="center";
    ctx.fillStyle="LimeGreen";
    ctx.fillText("A red pill, eat it?",0.5*w,0.73*h);
  }
  if(letter1){
    ctx.font="1.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("Seems like a letter, check it?",0.5*w,0.73*h);
  }
  if(welcomeLog_1){
    drawWelcome_1();

  }
  if(welcomeLog_2){
    drawWelcome_2();

  }
  if(welcomeLog_3){
    drawWelcome_3();
  }
  if(readLetter1_1){
    letterBackground();
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("Enough! I have to leave this place!", 0.5*w,0.73*h);
  }
  if(readLetter1_2){
    letterBackground();
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("Where are my pills???", 0.5*w,0.73*h);
  }
  if(readLetter1_3){
    letterBackground();
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("I'll remember something with the pill", 0.5*w,0.73*h);
  }
  if(hintLog){
    letterBackground();
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("Seems something changed...", 0.5*w,0.73*h)
  }if(bookOpen){
    ctx.fillStyle="rgba(10,10,10,0.7)";
    ctx.fillRect(0,0,w,h);
    ctx.drawImage(bookBg,(1-0.5)*w/2,(h-0.5*w*bookBg.height/bookBg.width)/2,0.5*w,0.5*w*bookBg.height/bookBg.width);
    ctx.fillStyle='white';
    ctx.font="1.5vw pixel";
    ctx.fillText("Press Any Key to Return",0.5*w,0.86*h);
  }if(unlocking){

    ctx.fillStyle='rgba(0,0,0,0.7)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle='white';
    ctx.font="1.5vw pixel";
    ctx.fillText("Press Any Key to Return",0.5*w,0.83*h);
    ctx.drawImage(lock,(1-0.3)*w/2,(h-0.3*w*lock.height/lock.width)/2,0.3*w,0.3*w*lock.height/lock.width);
  }
  if(passwordNum_1_0){
    ctx.fillStyle="LimeGreen";
    ctx.font="3.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("0",0.482*w,0.535*h);
  }
  if(passwordNum_2_0){
    ctx.fillStyle="LimeGreen";
    ctx.font="3.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("0",0.505*w,0.535*h);
  }
  if(passwordNum_3_0){
    ctx.fillStyle="LimeGreen";
    ctx.font="3.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("0",0.528*w,0.535*h);
  }
  if(passwordNum_4_0){
    ctx.fillStyle="LimeGreen";
    ctx.font="3.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("0",0.551*w,0.535*h);
  }
  if(passwordNum_1_1){
    ctx.fillStyle="LimeGreen";
    ctx.font="3.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("1",0.482*w,0.535*h);
  }
  if(passwordNum_2_1){
    ctx.fillStyle="LimeGreen";
    ctx.font="3.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("1",0.505*w,0.535*h);
  }
  if(passwordNum_3_1){
    ctx.fillStyle="LimeGreen";
    ctx.font="3.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("1",0.528*w,0.535*h);
  }
  if(passwordNum_4_1){
    ctx.fillStyle="LimeGreen";
    ctx.font="3.5vw pixel";
    ctx.textAlign="center";
    ctx.fillText("1",0.551*w,0.535*h);
  }
  if(finalLog_1){
    letterBackground();
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("...well done", 0.5*w,0.73*h);
  }if(finalLog_2){
    letterBackground();
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("...so I guess you are leaving now", 0.5*w,0.73*h);
  }if(finalLog_3){
    letterBackground();
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("Would you come back again?", 0.5*w,0.70*h);
    ctx.fillText("I'll miss you very much...", 0.5*w,0.75*h);
  }if(finalLog_4){
    letterBackground();
    ctx.font="1.5vw pixel";
    ctx.fillStyle="LimeGreen";
    ctx.textAlign="center";
    ctx.fillText("...farewell...dear friend", 0.5*w,0.73*h);
  }
  setTimeout(drawEverything,250);
  }
//finish of drawEverything()
