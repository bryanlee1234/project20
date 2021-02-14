var cat,mouse;
var catimg1, catimg2,catimg4
var mouseimg1,mouseimg2,mouseimg4
var gardenimg;

function preload() {
    //load the images here
catimg1=loadAnimation("cat1.png");
catimg2=loadAnimation("cat2.png","cat3.png")
catimg4=loadAnimation("cat4.png")

mouseimg1=loadAnimation("mouse1.png");
mouseimg2=loadAnimation("mouse2.png","mouse3.png")
mouseimg4=loadAnimation("mouse4.png")

gardenimg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400,1000,800);
    garden.addImage(gardenimg);

        //create tom and jerry sprites here
    cat=createSprite(870,600,5,5);
    mouse=createSprite(200,600,5,5);
    cat.scale=0.1
    mouse.scale=0.1
    cat.addAnimation("cat_sitting",catimg1);
    mouse.addAnimation("mouse_sitting",mouseimg1);
}

function draw() {

     //Write condition here to evalute if tom and jerry collide
    
    if(keyDown("space")){
        cat.velocityX=-4
        cat.addAnimation("catrunning", catimg2)
        mouse.addAnimation("mouseteasing", mouseimg2)
        cat.changeAnimation("catrunning");
        mouse.changeAnimation("mouseteasing")
    }
    if(cat.x-mouse.x < mouse.width/2 + cat.width/2){
        cat.velocityX=0
        cat.addAnimation("catstop", catimg4)
        mouse.addAnimation("mousestop", mouseimg4)
        cat.changeAnimation("catstop");
        mouse.changeAnimation("mousestop")
    }

    drawSprites();

}
