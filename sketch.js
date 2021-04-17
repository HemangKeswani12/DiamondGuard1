var Diamond;
var DiamondRadius;
var Guard;
var Gun1, Gun2, Gun3;
var Bullet;
var Zombie;
var gunStage = 1;
var score = 0;
var gameState = "play";
var attached = 0;

function setup() {

    createCanvas(1000, 800);

    gameState = "play";

    Diamond = createSprite(700, 400, 15, 15);
    Diamond.shapeColor = color("black");

    Guard = createSprite(550, 200, 30, 30);
    Guard.shapeColor = color("green");

    Gun1 = createSprite(Guard.y, Guard.x-15, 7, 15);
    Gun1.shapeColor = color("black");

    Gun2 = createSprite(Guard.y, Guard.x-15, 9, 18);
    Gun2.shapeColor = color("black");

    Gun3 = createSprite(Guard.y, Guard.x-15, 10, 22);
    Gun3.shapeColor = color("blue");

    Bullet = createSprite(Guard.x, Guard.y, 3, 7);
    Bullet.shapeColor = color("black");

    DiamondRadius = createSprite(Diamond.x, Diamond.y, 50, 50);
    DiamondRadius.visible = false;

}

function draw() {
    
    background(230);

    textSize(15);
    text("Press w, a, s and d keys to move around, and space to shoot! You can pick up and move the diamond by pressing shift!", 50 ,50);

    DiamondRadius.x = Diamond.x;
    DiamondRadius.y = Diamond.y;

    Gun1.x = Guard.x;
    Gun1.y = Guard.y;

    Gun2.x = Guard.x;
    Gun2.y = Guard.y;

    Gun2.x = Guard.x;
    Gun2.y = Guard.y;

    if(score < 100) {
        gunStage = 1;
    }

    if(score >= 100 && score < 200) {
        gunStage = 2;
    }

    if(score > 200) {
        gunStage = 3;
    }

    if(Guard.isTouching(DiamondRadius) && keyWentDown("shift")) {
        Diamond.held = true;
    } else{Diamond.held = false};

    if(keyWentDown("shift")) {
        attached = attached+1;
    }

    if(attached/2 % 2 === 0 && Guard.isTouching(DiamondRadius)) {
        Diamond.x = Guard.x+10;
        Diamond.y = Guard.y;
    } 

    if(keyCode === 87 && gameState === "play" && Diamond.held === false) {
        Guard.velocityY = -4;
        Guard.velocityX = 0;
    } else if(gameState === "end") {
        Guard.velocityY = 0;
        Guard.velocityX = 0;
    } else if(keyCode === 87 && gameState === "play" && Diamond.held === true) {
        Guard.velocityX = 0;
        Guard.velocityY = -2.5;
    }


    if(keyCode === 65 && gameState === "play" && Diamond.held === false) {
        Guard.velocityY = 0;
        Guard.velocityX = -4;
    } else if(gameState === "end") {
        Guard.velocityY = 0;
        Guard.velocityX = 0;
    } else if(keyCode === 65 && gameState === "play" && Diamond.held === true) {
        Guard.velocityX = -2.5;
        Guard.velocityY = 0;
    }

    if(keyCode === 68 && gameState === "play" && Diamond.held === false) {
        Guard.velocityY = 0;
        Guard.velocityX = 4;
    } else if(gameState === "end") {
        Guard.velocityY = 0;
        Guard.velocityX = 0;
    } else if(keyCode === 68 && gameState === "play" && Diamond.held === true) {
        Guard.velocityX = 2.5;
        Guard.velocityY = 0;
    }

    if(keyCode === 83 && gameState === "play" && Diamond.held === false) {
        Guard.velocityY = 4;
        Guard.velocityX = 0;
    } else if(gameState === "end") {
        Guard.velocityY = 0;
        Guard.velocityX = 0;
    } else if(keyCode === 87 && gameState === "play" && Diamond.held === true) {
        Guard.velocityX = 0;
        Guard.velocityY = 2.5;
    }

    drawSprites();
}
