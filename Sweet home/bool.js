
//BOOL ZONE
let backgroundLoaded = false; //main bg
let fcLoaded = false;
//props images
let booksLoaded=false;
let posterLoaded=false;
let playerLoaded=false;
let bedLoaded=false;
let couchLoaded=false;
let cabinetLoaded=false;

let cabinetOpened=false;
let cabinetDone=false;

//interation states
//
let tVoffLoaded=false;
let tVLoaded=false;
let tVons=[tVon1, tVon2, tVon3];
let players=[player1,player2,player3,player4];
let pcs=[pcOn,pcOn_2];
let playeronLoaded= false;
let dialog=false;
let letterLoaded=false;
let textplayer=false;
let textTV=false;

let pcOffloaded=false;
let pcOnloaded=false;
let pcLog=false;

let welcomeLog_1=true;
let welcomeLog_2=false;
let welcomeLog_3=false;

let pillAsk=false;
let pillDone=false;
let redbookLoaded=false;
let bookBgLoaded=false;
let hintLog=false;
let bookOpen=false;

let letter1=false;
let readLetter1_1=false;
let readLetter1_2=false;
let readLetter1_3=false;

let lockLoaded=false;
let unlocking=false;
let passwordNum_1_0=false;
let passwordNum_1_1=false;
let passwordNum_2_0=false;
let passwordNum_2_1=false;
let passwordNum_3_0=false;
let passwordNum_3_1=false;
let passwordNum_4_0=false;
let passwordNum_4_1=false;

let finalLog_1=false;
let finalLog_2=false;
let finalLog_3=false;
let finalLog_4=false;

let outside=false;
//BOOL ZONE END
var obj={playerloop : 0, pcloop: 0,shelf_x:0.44};

//CHANGE BOOL ZONE
window.onload=function(){
  backgroundLoaded = true;
  fcLoaded = true;
  letterLoaded=true;
  couchLoaded=true;
  bedLoaded=true;
  posterLoaded=true;
  lockLoaded=true;
}//fixed objects


bookshelf.onload=function(){
  booksLoaded=true;
}

cabinet.onload=function(){
    cabinetLoaded=true;
}

player1.onload=function(){
  playerLoaded=true;
}
tVoff.onload=function(){
  tVoffLoaded=true;
}
tVons.onload=function(){
  tVLoaded=false;
}
pcOff.onload=function(){
  pcOffloaded=true;
}//some changable bool for event listener

//CHANGE BOOL ZONE END
