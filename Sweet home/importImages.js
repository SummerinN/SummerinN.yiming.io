


let h=window.innerHeight;
let w=window.innerWidth;//w and h used to save the height and the width of the window

// import all images needed to be draw on canvas
// and some positions of the image, for more uses on eventListener
let mouse=new Image(400,400);
mouse.src="image/mouse.png";

let fc = new Image(800,800);
fc.src="image/fc.png";
let background = new Image(1684,1587);
background.src="image/background.png";
let bookshelf = new Image(800,1024);
bookshelf.src="image/bookshelf.png";
let redBook= new Image(800,1024);
redBook.src="image/redBook.png";
let bookBg=new Image(1400,917);
bookBg.src="image/bookBg.png";

let lock= new Image(790,700);
lock.src="image/lock.png";

let bed = new Image(500,655);
bed.src="image/bed.png";
let poster = new Image(385,410);
poster.src="image/poster.png";
let couch = new Image(720,550);
couch.src="image/couch.png";

let fixCab=0.15*w;
let cabinet = new Image(500,570);
cabinet.src="image/cabinet.png";
let cabinetOn=new Image(500,570);
cabinetOn.src="image/cabinetOpen.png";
let cabinetD=new Image(500,570);
cabinetD.src="image/cabinetDone.png";
let cab_x=0.39*w-fixCab, cab_y=0.2*h;

let pcOff=new Image(787,1163);
pcOff.src="image/PCoff.png";
let pcOn=new Image(787,1163);
pcOn.src="image/PCon.png";
let pcOn_2=new Image(787,1162);
pcOn_2.src="image/PCon_2.png";
let pc_x=0.37*w;
let pc_y=0.33*h;

let letter= new Image(390,510);
letter.src= "image/letter.png";
let letter_x=0.5*w;
let letter_y=0.4*h;

let player1=new Image(640,640);
player1.src="image/player1.png";
let player2=new Image(640,640);
player2.src="image/player2.png";
let player3=new Image(640,640);
player3.src="image/player3.png";
let player4=new Image(640,640);
player4.src="image/player4.png";
let player_x=0.394*w-fixCab,player_y=0.15*h;

let tVoff = new Image(400,263);
tVoff.src= "image/TVoff.png";
let tVon1=new Image(400,263);
tVon1.src="image/TVon_1.png";
let tVon2=new Image(400,263);
tVon2.src="image/TVon_2.png";
let tVon3=new Image(400,263);
tVon3.src="image/TVon_3.png";
let tv_x=0.625*w, tv_y=0.18*h;

//import music
let jazzMusic = new Audio();
jazzMusic.src = 'media/jazz.mp3';
jazzMusic.volume=0.2;
jazzMusic.loop=true;

let uiMusic=new Audio();
uiMusic.src='media/uiSound.wav';
uiMusic.volume=0.3;
jazzMusic.loop=false;
