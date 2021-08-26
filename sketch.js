var canvas;
var music;
var v1,v2,v3,v4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
v1=createSprite(0,580,360,30)
v1.shapeColor="red"
v2=createSprite(295,580,200,30)
v2.shapeColor="blue"
v3=createSprite(515,580,200,30)
v3.shapeColor="yellow"
v4=createSprite(740,580,220,30)
v4.shapeColor="green"


    //create box sprite and give velocity
ball=createSprite(random(20,750),100,50,50)
ball.shapeColor="white"
ball.velocityX=3;
ball.velocityY=3;


edges=createEdgeSprites()
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    ball.bounceOff(edges)


    //add condition to check if box touching surface and make it box

if(ball.isTouching(v1)&&ball.bounceOff(v1)){
    ball.shapeColor="red";
  music.play();
}
if(ball.isTouching(v2)&&ball.bounceOff(v2)){
    ball.shapeColor="blue";
  music.play();
}
if(ball.isTouching(v3)&&ball.bounceOff(v3)){
    ball.shapeColor="yellow";
  music.play();
}
if(ball.isTouching(v4)&&ball.bounceOff(v4)){
    ball.shapeColor="green";
  music.play();
}
drawSprites()
}
