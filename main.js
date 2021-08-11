var R=document.getElementById("myCanvas");
var CTX=R.getContext("2d");
var RooverWidth=100;
var RooverHeight=90;
var RooverX=10;
var RooverY=10;
var Images=["IMG 1.jpg", "IMG 2.jpg", "IMG 3.jpg"];
var Random_Number=Math.floor(Math.random()*3);
Background_image=Images[Random_Number];
Roover_Image="rover.png";
function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=Background_image;
    Roover_Imagetag=new Image();
    Roover_Imagetag.onload=uploadRoover;
    Roover_Imagetag.src=Roover_Image;
}
function uploadBackground(){
    CTX.drawImage(background_imagetag,0,0,R.Width,R.height);
}
function uploadRoover(){
    CTX.drawImage(Roover_Imagetag,RooverX,RooverY,RooverWidth,RooverHeight);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if (keypress=='37'){
        left();
        console.log("left");
    }
    if (keypress=='38'){
        up();
        console.log("up");
    }
    if (keypress=='39'){
        right();
        console.log("right");
    }
    if (keypress=='40'){
        down();
        console.log("down");
    }
}
function up(){
    if (RooverY>=0){
     RooverY=RooverY-10;
     console.log("when up arrow is pressed");
     console.log("x="+RooverX);
     console.log("y="+RooverY);
     uploadBackground();
     uploadRoover();
    }
}
function down(){
    if (RooverY<=500){
     RooverY=RooverY+10;
     console.log("when down arrow is pressed");
     console.log("x="+RooverX);
     console.log("y="+RooverY);
     uploadBackground();
     uploadRoover();
    }
}
function left(){
    if (RooverX>=0){
     RooverX=RooverX-10;
     console.log("when left arrow is pressed");
     console.log("x="+RooverX);
     console.log("y="+RooverY);
     uploadBackground();
     uploadRoover();
    }
}function right(){
    if (RooverX<=700){
     RooverX=RooverX+10;
     console.log("when right arrow is pressed");
     console.log("x="+RooverX);
     console.log("y="+RooverY);
     uploadBackground();
     uploadRoover();
    }
}
