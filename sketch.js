//Images
let boss;
let villageIcon;
let player;
let mysteryIcon;
let bossIcon;
let swordIcon;
let circle;
let triangle;
let square;
let pentagon;
let coin;
let sadplayer;
let victory;

//Overworld stuff
let overworldX;
let overworldY;
let overworldArray;
let time;

//Fight scene
let fightSelectArray;

//Player Stats
let money;
let level;
let xp;
let xpReq;
let curHP;
let maxHP;
let curMP;
let maxMP;
let damage;
let hpPots;
let mpPots;
let learnedAttacks;
let learnedSpells;

//village
let baseVillage;
let village1;
let village2;
let villageSelect;

let insideImage;
let insideSelect;

let rect1Size;
let rect2Size;

let restoreHP;

let shop;
let shopSelect;

//Combat
let enemies;
let enemySelect;

let menuSelect;
let attackSelect;
let magicSelect;
let itemSelect;

let combatSelect;

let enemyLevel;

let enemyHP;
let enemyDamage;

let enemyArray;

let combatType;

let enemy1HP;
let enemy2HP;
let enemy3HP;

let initCombat;

let combatOver;
let combatNum;

//Misc
let font;
let curTime;

let cheatCode;
let cheatSelect;

function preload(){
  boss = loadImage('assets/images/boss.png');
  villageIcon = loadImage('assets/images/village.png');
  player = loadImage('assets/images/player.png');
  baseVillage = loadImage('assets/images/basevillage.png');
  village1 = loadImage('assets/images/village1.png');
  village2 = loadImage('assets/images/village2.png');
  insideImage = loadImage('assets/images/innInside.png');
  shop = loadImage('assets/images/shop.png');
  mysteryIcon = loadImage('assets/images/mystery.png');
  bossIcon = loadImage('assets/images/bossIcon.png');
  swordIcon = loadImage('assets/images/swordIcon.png');

  circle = loadImage('assets/images/circle.png');
  triangle = loadImage('assets/images/triangle.png');
  square = loadImage('assets/images/square.jpg');
  pentagon = loadImage('assets/images/pentagon.jpg');

  coin = loadImage('assets/images/coin.png');
  sadplayer = loadImage('assets/images/sadplayer.png');
  victory = loadImage('assets/images/victory.png')


}

function setup() {
  createCanvas(600, 800);
  background(255);
  sceneNumber = 0;
  //Overworld setup
  overworldArray = [
    [0,0,10,0],
    [0,3,0,0],
    [0,1,0,1],
    [2,8,0,0]
  ]
  overworldX = 1;
  overworldY = 3;
  textFont("Comic Sans MS");

  //Player setup
  money = 5;
  level = 1;
  curHP = 10;
  maxHP = 10;
  hpPots = 1;
  mpPots = 1;
  damage = 1;
  xp = 8;
  xpReq = 10;
  curMP = 2;
  maxMP = 2;
  learnedAttacks = 1;
  learnedSpells = 1;

  cheatSelect = 0;
  //village
  villageSelect = -1;
  insideSelect = -1;

  rect1Size = 0;
  rect2Size = 0;

  curTime = 0;

  shopSelect = 0;

  //combat
  combatSelect = 0;
  itemSelect = 0;
  attackSelect = 0;
  magicSelect = 0;
  menuSelect = 0;
  combatType = 0;
  combatOver = false;
  initCombat = false;

  enemyHP = 5;

  cheatCode = [];
}
function cheatCheck(){
  let x = [3,3,4,4,1,2,1,2,5,6];
  let i;
  let matches = true;
  if(x.length == cheatCode.length){
    for(i = 0; i < cheatCode.length; ++i){
      if(cheatCode[i] != x[i]){
        matches = false;
      }
    }
  } else {
    matches = false;
  }
  for(i = 0;i < cheatCode.length; ++i){
    cheatCode.pop();
  }
  if(matches){
    sceneNumber = 55;
  }
}
function cheatMenu(){
  background(255);
  fill(0);
  if(cheatSelect == 0){
    fill(255,0,0);
  }
  text("Add level", 10,50);
  fill(0);
  if(cheatSelect == 1){
    fill(255,0,0);
  }
  text("Add damage",150,50)
  fill(0);
  if(cheatSelect == 2){
    fill(255,0,0);
  }
  text("Add maxHP", 300,50);
  fill(0);
  if(cheatSelect == 3){
    fill(255,0,0);
  }
  text("Add maxMP",10,150);
  fill(0);
  if(cheatSelect == 4){
    fill(255,0,0);
  }
  text("Add Money", 150,150);
  fill(0);
  if(cheatSelect == 5){
    fill(255,0,0);
  }
  text("Return to overworld", 10, 300);
  playerInfo();
}

function cheatKey(){
  switch(keyCode){
    case RIGHT_ARROW:
    if(cheatSelect < 5){
      cheatSelect++;
    }
    break;
    case LEFT_ARROW:
    if(cheatSelect > 0){
      cheatSelect--;
    }
    break;
    case 32:
      switch(cheatSelect){
        case 0:
        level++;
        xp = 0;
        maxHP += 5;
        curHP = maxHP;
        maxMP++;
        damage++;
        curMP = maxMP;
        learnedSpells++;
        learnedAttacks++;
        break;
        case 1:
        damage++
        break;
        case 2:
        maxHP++;
        break;
        case 3:
        maxMP++;
        break;
        case 4:
        money++;
        break;
        case 5:
        sceneNumber = 1;
        break;
      }
    break;
  }
}

function draw() {

  switch(sceneNumber){
    case 0:
      startUp();
      break;
    case 1:
      overworld();
      break;
    case 2:
      break;
    case 8:
      village();
      break;
    case 9:
      inside();
      break;
    case 10:
      playerInfo();
      shopScene();
      break;
    case 11:
      restoreHealth(12)
      break;
    case 12:
      rest();
      break;
    case 20:
      sleep(2000);
      sceneNumber = 8;
      break;
    case 23:
      damageShop();
      break;
    case 24:
      sleep(1000);
      playerInfo();
      sceneNumber = 10;
      break;
    case 25:
      hpShop();
      break;
    case 26:
      sleep(1000);
      playerInfo();
      sceneNumber = 10;
      break;
    case 27:
      mpShop();
      break;
    case 28:
      sleep(1000);
      sceneNumber = 10;
    case 30:
      combatScene();
      break;
    case 31:
      doCombat();
      break;
    case 32:
      sleep(1500);
      sceneNumber = 33;
      break;
    case 33:
      enemyTurn();
      break;
    case 34:
      sleep(1500);
      console.log("Combat check" + checkCombat() + " " + combatType);
      if(checkCombat() == 1){
        sceneNumber = 50;
      }
      else if(checkCombat() == 2){
        if(combatType == 10){
          sceneNumber = 60;
        }
        else{sceneNumber = 51;}
      } else {
        sceneNumber = 30;
      }
      break;
    case 40:
      foundMoney();
      break;
    case 41:
      sleep(1500);
      sceneNumber = 1;
      break;
    case 42:
      oops();
      break;
    case 43:
      sleep(1500);
      sceneNumber = 1;
      break;
    case 50:
      gameOver();
      break;
    case 51:
      victoryScene();
      break;
    case 52:
      sleep(2000);
      if(xp >= xpReq){
        sceneNumber = 53;
      } else{
        sceneNumber = 1;
      }
      break;
    case 53:
      levelUP();
      break;
    case 54:
      sleep(1500);
      sceneNumber = 1;
      break;
    case 55:
      cheatMenu();
      break;
    case 60:
      wonGame();
      break;
    default:
      break;


  }
}

function wonGame(){
  background(255);
  image(victory, 300,300);
  text("You've defeated the evil\nDodecahedron!", 20,100);
}
function gameOver(){
  background(255);
  text("You died!\n\nGame over.", 100,100);
  image(sadplayer,400,400);
}

function levelUP(){
  background(255);
  level++;
  xp = 0;
  maxHP += 5;
  curHP = maxHP;
  maxMP++;
  damage++;
  curMP = maxMP;
  learnedSpells++;
  learnedAttacks++;
  playerInfo();
  text("You leveled Up!", 100,100);
  switch(level){
    case 2:
    text("You learned multi-poke and heal!", 100,300);
    break;
    case 3:
    text("You learned eye-poke and curse!", 100,300);
    break;
  }
  image(player,400,400);
  sceneNumber = 54;

}

function startUp(){
  background(255);
  textSize(40);
  text("You're on a quest to defeat \nthe evil dodecahedron. \nGo and become a hero!", 50, 50);
  text("Arrow keys to move\n Space to interact\n\n\n\n\nPress space to begin", 50, 300);
}

function startKey(){
  if(keyCode == 32){
    sceneNumber = 1;
  }
}

function oops(){
  background(255);
  curHP -= 1;
  image(sadplayer,400,400);
  fill(0);
  text("You stubbed your toe\n -1 HP", 100, 50);
  playerInfo();
  sceneNumber = 43;
}

function foundMoney(){
  background(255);
  money += 3;
  image(player, 400,400);
  image(coin,200,200);
  image(coin, 300,200);
  image(coin, 400,200);
  fill(0);
  text("You found some money!\n +3 Coins", 100,50);
  playerInfo();
  sceneNumber = 41;
}

function overworld(){
  fill(255);
  var i;
  var j;
  strokeWeight(2);
  for(i = 0; i < 4; ++i){
    for( j = 0; j < 4; ++j){
      if(overworldX == j && overworldY == i){
        stroke(255,0,0);
      } else {
        stroke(0);
      }
      rect(150 * j, 150 * i, 150, 150);
    }
  }


  for(i = 0; i < 4; ++i){
    for( j = 0; j < 4; ++j){

      switch(overworldArray[i][j]){
        case 2:
        image(mysteryIcon, 150 * j + 75, 150 * i + 75)
        break;
        case 3:
        image(mysteryIcon, 150 * j + 75, 150 * i + 75);
        break;
        case 4:
        image(swordIcon, 150 * j + 75, 150 * i + 75);
        break;
        case 1:
        image(swordIcon, 150 * j + 75, 150 * i + 75);
        break;
        case 8:
        image(villageIcon, 150 * j + 75, 150 * i + 75);
        break;
        case 10:
        image(bossIcon, 150 * j + 75, 150 * i + 75);
        break;
      }

      if(overworldX == j && overworldY == i){
        stroke(255,0,0);
        rect(150 * j, 150 * i, 150, 150);
        imageMode(CENTER);
        image(player, 150 * j + 75, 150 * i + 75);
      }
    }
  }
  playerInfo();

}

function keyPressed(){
  switch(sceneNumber){
    case 0:
     startKey();
     break;
    case 1:
      overworldKey();
      break;
    case 8:
      villageKey();
      break;
    case 9:
      insideKey();
      break;
    case 10:
      shopKey();
      break;
    case 30:
      combatKey();
      break;
    case 55:
      cheatKey();
      break;
  }
}

function playerInfo(){
  stroke(0);
  fill(255);
  strokeWeight(2);
  rect(0, 600, 600, 200);
  textSize(24);
  fill(0);
  text("Money: " + money, 10, 630);
  text("HP: " + curHP + "/" + maxHP, 480, 630);
  let x;
  let y;
  switch(curTime){
    case 0:
      x = "Morning";
      break;
    case 1:
      x = "Afternoon";
      break;
    case 2:
      x = "Night";
      break;
  }

  switch(overworldArray[overworldY][overworldX]){
    case 0:
      y = "Nothing"
      break;
    case 2:
    case 3:
      y = "Unknown"
      break;
    case 8:
      y = "Town"
      break;
    case 1:
     y = "Fight"
     break;
    case 10:
     y = "Boss"
     break;
  }
  text("Time: " + x, 220, 630);
  text("Level: " + level, 10, 680);
  text("XP: " + xp + "/" + xpReq, 220, 680);
  text("HP Potions: " + hpPots, 10, 730);
  text("MP Potions: " + mpPots, 220, 730);
  text("MP: " + curMP + "/" + maxMP, 480, 680);
  text("Tile: " + y, 410, 730);
}

function overworldKey(){
  switch(keyCode){
    case LEFT_ARROW:
    cheatCode.push(1);
      if(overworldX == 0){
        break;
      }
      overworldX = overworldX - 1;
      break;
    case RIGHT_ARROW:
    cheatCode.push(2);
      if(overworldX == 3){
        break;
      }
      overworldX = overworldX + 1;
      break;
    case UP_ARROW:
    cheatCode.push(3);
      if(overworldY == 0){
        break;
      }
      overworldY -= 1;
      break;
    case DOWN_ARROW:
    cheatCode.push(4);
      if(overworldY == 3){
        break;
      }
      overworldY += 1;
      default:
      break;
    case 32:
      overworldInteract();
      break;
    case 66:
    cheatCode.push(5);
    break;
    case 65:
    cheatCode.push(6);
    break;
    case 13:
    console.log(cheatCode)
    cheatCheck();
    cheatCode.length = 0;
    break;
  }
}
function overworldEvent(){
  switch(overworldArray[overworldX][overworldY]){

  }
}

function overworldInteract(){
  if(curTime != 2){
    switch(overworldArray[overworldY][overworldX]){
      case 2:
        sceneNumber = 40;
        overworldArray[overworldY][overworldX] = 0;
        curTime += 1;
        break;
      case 3:
        sceneNumber = 42;
        overworldArray[overworldY][overworldX] = 0;
        curTime += 1;
        break;
      case 1:
        sceneNumber = 30;
        combatType = 1;
        initCombat = true;
        overworldArray[overworldY][overworldX] = 0;
        curTime += 1;
        break;
      case 4:
        sceneNumber = 30;
        combatType = 2;
        initCombat = true;
        overworldArray[overworldY][overworldX] = 0;
        curTime += 1;
        break;
      case 10:
        sceneNumber = 30;
        combatType = 10;
        initCombat = true;
        curTime += 1;
        break;
    }
  }
  if(overworldArray[overworldY][overworldX] == 8){
    sceneNumber = 8;
  }
}

function village(){
  fill(0);
  switch(villageSelect){
    case -1:
      image(baseVillage, 300,300);
      break;
    case 0:
      image(village1, 300,300);
      break;
    case 1:
      image(village2, 300,300);
      break;
    case 2:
      image(baseVillage, 300,300);
      fill(255,0,0);
      break;
  }
  text("Exit",300,570);
  playerInfo()

}

function villageKey(){
  switch(keyCode){
    case LEFT_ARROW:
      villageSelect = 0;
      break;
    case RIGHT_ARROW:
      villageSelect = 1;
      break;
    case DOWN_ARROW:
      villageSelect = 2;
      break;
    case 32:
      if(villageSelect == 0){
        sceneNumber = 9;
        villageSelect = -1;
      }
      if(villageSelect == 1){
        sceneNumber = 10;
        villageSelect = -1;
      }
      if(villageSelect == 2){
        sceneNumber = 1;
        villageSelect = -1;
      }
      break;
  }
}

function inside(){
  image(insideImage, 300, 300);
  console.log(curHP);
  if(curTime == 2){
    fill(255);
    rect(80, 400, 420, 50);
    fill(0);
    if(insideSelect == 0){
      fill(255,0,0);
    }
    text("Free: Restore 25% Max HP", 100,430);
    fill(255);
    rect(80, 450, 420, 50);
    fill(0);
    if(insideSelect == 1){
      fill(255,0,0);
    }
    text("5G: Restore Max HP", 100,480);
  } else {
    fill(255);
    rect(80, 400, 420, 50);
    fill(0);
    if(insideSelect == 0){
      fill(255,0,0);
    }
    text("Come back at night", 100,430);
  }

  fill(255);
  rect(80, 500, 420, 50);
  fill(0);
  if(insideSelect == 2){
    fill(255,0,0);
  }
  text("Exit", 100,530);
}

function insideKey(){
  switch(keyCode){
    case DOWN_ARROW:
    if(curTime == 2){
      if(insideSelect == -1){
        insideSelect = 0;
      }
      else if(insideSelect <=2){
          insideSelect++;
      }
    }
    else{
      insideSelect = 2;
    }
      break;
    case UP_ARROW:
    if(curTime == 2){
      if(insideSelect == -1){
        insideSelect = 0;
      }
      else if(insideSelect >= 0){
        insideSelect--;
      }
    } else{
      insideSelect = 2;
    }
      break;
    case 32:
      if(insideSelect == 0){
        if(curTime == 2){
          newDay();
          restoreHP = Math.floor(maxHP / 4);
          curTime = 0;
          sceneNumber = 11;
        }

      }
      if(insideSelect == 1 && money >= 5){
        if(curTime == 2){
          newDay();
          restoreHP = maxHP;
          curTime = 0;
          money -= 5;
          sceneNumber = 11;
        }
      }
      if(insideSelect == 2){
        sceneNumber = 8;
      }
      insideSelect = -1;
  }
}

function rest(){
  fill(0,0,0);
  rect(0,0, 600, rect1Size);
  rect(0, 600 - rect2Size, 600, rect2Size);
  rect1Size += 8;
  rect2Size += 8;
  curMP = maxMP;

  if(rect1Size > 320){
    fill(255,0,0);
    if(restoreHP == -1){
      text("You restored all your HP", 100, 430);
    } else{
      text("You gained " + restoreHP + "HP", 100, 430);
    }

    sceneNumber = 20;
  }
}

function restoreHealth(x){

  curHP += restoreHP;
  if(curHP >= maxHP){
    curHP = maxHP;
    restoreHP = -1;
  }
  if(x != -1){
    sceneNumber = x;
  }


}

function shopScene(){
  image(shop,300,300);
  noFill();
  stroke(255,0,0);
  switch(shopSelect){
    case 0:
    rect(50,80,150,150);
    fill(0);
    stroke(0);
    text("Definitely Not the Same Stick: +1 Damage - 5G", 10 ,510);
    break;
    case 1:
    rect(220,80,150,150);
    fill(0);
    stroke(0);
    text("HP Potion: Restores 25% max health - 3G", 10 ,510);
    break;
    case 2:
    rect(390,80,150,150);
    fill(0);
    stroke(0);
    text("Mana Potion: Restores 1 MP - 3G", 10 ,510);
    break;
  }

  if(shopSelect == -1){
    fill(255,0,0);
  } else{
    fill(0);
  }
  stroke(0);
  text("Exit", 300, 590);
  console.log(shopSelect);
}

function shopKey(){

  switch(keyCode){
    case LEFT_ARROW:
    if(shopSelect == -1){
      shopSelect = 2
    } else {
      if(shopSelect > 0){
        shopSelect--;
      }
    }
    break;
    case RIGHT_ARROW:
    if(shopSelect == -1){
      shopSelect = 0
    } else {
      if(shopSelect < 3){
        shopSelect++;
      }
    }
    break;
    case DOWN_ARROW:
      shopSelect = -1;
      break;
    case 32:
      switch(shopSelect){
        case -1:
         sceneNumber = 8;
         break;
        case 0:
         if(money >= 5){
           money -= 5;
           damage++;
           sceneNumber = 23;
         }
         break;
        case 1:
        if(money >= 3){
          money -= 3;
          hpPots++;
          sceneNumber = 25;
        }
        break;
        case 2:
        if(money >= 3){
          money -= 3;
          mpPots++;
          sceneNumber = 27;
        }
      }

  }
  console.log(shopSelect);
}

function damageShop(){
  fill(255);
  noStroke();
  rect(0,480, 600,50);
  stroke(0);
  fill(0);
  text("Damage UP!", 10 ,510);
  sceneNumber = 24;
}

function hpShop(){
  fill(255);
  noStroke();
  rect(0,480, 600,50);
  stroke(0);
  fill(0);
  text("You got a health potion!", 10 ,510);
  sceneNumber = 26;
}

function mpShop(){
  console.log("mana")
  fill(255);
  noStroke();
  rect(0,480, 600,50);
  stroke(0);
  fill(0);
  text("You got a mana potion!", 10 ,510);
  sceneNumber = 28;
}

function combatScene(){
  background(255);
  playerInfo();
  stroke(0);
  fill(255);
  strokeWeight(2);
  rect(0, 500, 600, 300);
  rect(0,600,600,200)
  image(player, 300,350);

  fill(0);
  textSize(24);
  text("HP: " + curHP + "/" + maxHP, 10, 530);
  fill(255,0,0);
  rect(10,550, 200,20);
  fill(0,255,0);
  rect(10,550, 200 * (curHP / maxHP), 20);
  fill(0);
  text("MP: " + curMP + "/" + maxMP, 500, 530);
  text("HP Pots: " + hpPots, 300, 570);
  text("MP Pots: " + mpPots, 470, 570);

  switch(combatSelect){
    case 0:
      textSize(34);
      fill(0);
      if(menuSelect == 0){
        fill(255,0,0);
      }
      text("Attack", 30, 650);
      fill(0);
      if(menuSelect == 1){
        fill(255,0,0);
      }
      text("Spells", 300, 650);
      fill(0);
      if(menuSelect == 2){
        fill(255,0,0);
      }
      text("Items", 30, 750);
      break;
    case 1:
      stroke(0);
      fill(255);
      strokeWeight(2);
      rect(0,725,600,75);
      fill(0);
      if(attackSelect == 0){
        text("Deal " + damage + " damage to one enemy", 10,750);
        fill(255,0,0);
      }
      text("Poke", 30, 630);
      if(learnedAttacks > 1){
        fill(0);
        if(attackSelect == 1){
          text("Deal " + (Math.ceil(damage * 0.75)) + " damage to all enemies", 10,750);
          fill(255,0,0);
        }
        text("Multi-poke", 200, 630);
      }
      if(learnedAttacks > 2){
        fill(0);
        if(attackSelect == 2){
          text ("Deal " + (2 * damage) + " to an enemy and " + (Math.floor(damage/3)) + " damage to yourself", 10 ,750);
          fill(255,0,0);
        }
        text("Eye-Poke", 30, 680);
      }
      fill(0);
      if(attackSelect == 3){
        fill(255,0,0);
      }
      text("Back",200,680);
      break;
    case 2:
      stroke(0);
      fill(255);
      strokeWeight(2);
      rect(0,725,600,75);
      fill(0);
      if(magicSelect == 0){
        text("Deal " + (Math.floor(damage * 3)) + " damage to one enemy", 10, 750);
        fill(255,0,0);
      }
      text("Fireball",30, 630);
      fill(0);
      if(learnedSpells > 1){
        if(magicSelect == 1){
          text("Heal 50% of your max health", 10, 750);
          fill(255,0,0);
        }
        text("Heal", 200,630);
      }
      fill(0);
      if(learnedSpells > 2){
        if(magicSelect == 2){
          text("Deal 75% of the targets current HP\nCosts all MP", 10, 750);
          fill(255,0,0);
        }
        text("Curse", 30,680);
      }
      fill(0);
      if(magicSelect == 3){
        fill(255,0,0);
      }
      text("Back",200,680);
    break;
    case 3:
      stroke(0);
      fill(255);
      strokeWeight(2);
      rect(0,725,600,75);
      fill(0);
      if(itemSelect == 0){
        text("Restores 25% max HP", 10,750);
        fill(255,0,0)
      }
      text("HP Potion", 30, 650);
      fill(0);
      if(itemSelect == 1){
        text("Recovers 1 MP", 10,750);
        fill(255,0,0)
      }
      text("MP Potion", 300, 650);
      fill(0);
      if(itemSelect == 2){fill(255,0,0)}
      text("Back", 30, 700);
    break;

  }

  switch(combatType){
    case 1:

      switch(level){
        case 1:
        enemyDamage = 1;
        if(initCombat){
          enemyHP = 5;
          enemy1HP = enemyHP;
          enemy2HP = -1;
          enemy3HP = -1;
          initCombat = false;
        }
        image(triangle,250, 100);
        break;
        case 2:
        enemyDamage = 3;
        if(initCombat){
          enemyHP = 10;
          enemy1HP = enemyHP;
          enemy2HP = -1;
          enemy3HP = -1;
          initCombat = false;
        }
        image(square,250, 100);
      }
      fill(255,0,0);
      rect(180,180,130,10);
      fill(0,255,0);
      rect(180,180, (enemy1HP / enemyHP) * 130, 10);

    break;
    case 2:
      if(initCombat){
        enemy1HP = enemyHP / 2;
        enemy2HP = enemyHP / 2;
        enemy3HP = enemyHP / 2;
        initCombat = false;
      }
      switch(level){
        case 1:
        image(circle, 100, 100);
        image(circle, 250, 100);
        image(circle, 400, 100);
        break;
      }
    break;
    case 10:
      if(initCombat){
        enemy1HP = 30
        enemyHP = 30;
        enemy2HP = -1;
        enemy3HP = -1;
        enemyDamage = 7;
        initCombat = false;
        console.log("here");
      }
      image(boss, 250, 100);
      fill(255,0,0);
      rect(180,200,130,10);
      fill(0,255,0);
      rect(180,200, (enemy1HP / 30) * 130, 10);
      break;
  }

}

function doCombat(){

  console.log(checkCombat());
  stroke(0);
  fill(255);
  strokeWeight(2);
  rect(0,725,600,75);
  fill(0);
  switch(combatType){
    case 1:
    case 10:
      switch(combatNum){
        case 1:
        enemy1HP -= damage;
        text("Dealt " + damage + " damage!", 10, 750);
        break;
        case 2:
        enemy1HP -= Math.ceil(damage*0.75);
        text("Dealt " + Math.ceil(damage * .75) + " damage to all enemies!", 10, 750);
        break;
        case 3:
        text("Dealt " + damage * 2 + " damage!\nTook " + Math.floor(damage/3) + " damage!", 10, 750);
        curHP -= Math.floor(damage/3);
        enemy1HP -= damage * 2;
        break;
        case 4:
        text("Dealt " + damage * 3 + " damage!", 10, 750);
        enemy1HP -= damage * 3;
        break;
        case 5:
        text("Healed " + Math.ceil(maxHP / 2) + " HP!", 10, 750);
        restoreHP = Math.ceil(maxHP / 2);
        restoreHealth();
        break;
        case 6:
        text("Dealt " + Math.ceil(enemyHP * .75) + " damage!", 10, 750);
        enemy1HP -= Math.ceil(enemyHP * .75);
        break;
      }
    break;

  }
  console.log('here')

  sceneNumber = 32;


}

function enemyTurn(){
  stroke(0);
  fill(255);
  strokeWeight(2);
  rect(0,725,600,75);
  fill(0);
  switch(combatType){
    case 1:
    case 10:
      curHP -= enemyDamage;
      text("You took " + enemyDamage + " damage!", 10, 750);
      break;
  }
  sceneNumber = 34;
}

function checkCombat(){
  if(curHP <= 0){
    return 1;
  }
  if(enemy1HP <= 0 && enemy2HP <= 0 && enemy3HP <= 0){
    return 2;
  }
}

function combatKey(){
  switch(keyCode){
    case LEFT_ARROW:
      switch(combatSelect){
        case 0:
        if(menuSelect > 0){
          menuSelect--;
        }
        break;
        case 1:
        if(attackSelect > 0){
          attackSelect--;
          if(attackSelect >= learnedAttacks){
            attackSelect = 0;
          }
        }
        break;
        case 2:
        if(magicSelect > 0){
          magicSelect--;
          if(magicSelect >= learnedSpells){
            magicSelect = 0;
          }
        }
        break;
        case 3:
        if(itemSelect > 0){
          itemSelect--;
        }
        break;

      }
    break;
    case RIGHT_ARROW:
      switch(combatSelect){
        case 0:
        if(menuSelect < 2){
          menuSelect++;
        }
        case 1:
        if(attackSelect < 3){
            attackSelect++;
            if(attackSelect >= learnedAttacks){
              attackSelect = 3;
            }

        }
        break;
        case 2:
        if(magicSelect < 3){
          magicSelect++;
          if(magicSelect >= learnedSpells){
            magicSelect = 3;
          }
        }
        case 3:
        if(itemSelect < 2){
          itemSelect++;
        }
        break;
      }
    break;
    case 32:
      switch(combatSelect){
        case 0:
        attackSelect = 0;
        magicSelect = 0;
        itemSelect = 0;
        if(menuSelect == 0){
          combatSelect = 1;
        }
        if(menuSelect == 1){
          combatSelect = 2;
        }
        if(menuSelect == 2){
          combatSelect = 3;
        }
        break;
        case 1:
        if(attackSelect == 0){
          combatNum = 1;
          sceneNumber = 31;
        }
        if(attackSelect == 1){
          combatNum = 2;
          sceneNumber = 31;
        }
        if(attackSelect == 2){
          combatNum = 3;
          sceneNumber = 31;
        }
        if(attackSelect == 3){
          combatSelect = 0;
          attackSelect = 0;
        }
        break;
        case 2:
        if(magicSelect == 0 && curMP > 0){
          combatNum = 4;
          sceneNumber = 31;
          curMP--;
        }
        if(magicSelect == 1 && curMP > 0){
          combatNum = 5;
          sceneNumber = 31;
          curMP--;
        }
        if(magicSelect == 2 && curMP > 0){
          combatNum = 6;
          sceneNumber = 31;
          curMP = 0;
        }
        if(magicSelect == 3){
          combatSelect = 0;
          magicSelect = 0;
        }
        break;
        case 3:
        if(itemSelect == 0){
          if(hpPots > 0){
            hpPots--;
            restoreHP = Math.floor(maxHP / 4);
            restoreHealth(30);
          }
        }
        if(itemSelect == 1){
          if(mpPots > 0 && curMP < maxMP){
            curMP++;
            mpPots--;
          }
        }
        if(itemSelect == 2){
          combatSelect = 0;
          itemSelect = 0;
        }
        break;
      }
    break;
  }
  console.log(magicSelect);
}

function newDay(){
  let i;
  let j;
  console.log("here");

  for(i = 0; i < 4; ++i){
    for (j = 0; j < 4; ++j){
      console.log("x")
      if(overworldArray[i][j] == 0){
        console.log(overworldArray[i][j])
        overworldArray[i][j] = Math.floor(Math.random() * 4);
      }

    }
  }
}

function victoryScene(){
  background(255);
  let xpGain;
  let moneyGain;
  if(combatType = 1){
    xpGain = 2;
    moneyGain = 3 * level;

  } else{
    xpGain = 3;
    moneyGain = 3 * level + 2;
  }
  xp += xpGain;
  text("You Won!\nGained " + xpGain + " XP!", 100,100);
  image(player,300,300);
  playerInfo();
  sceneNumber = 52;
}

function sleep(milliseconds) {
  let timeStart = new Date().getTime();
    while (true) {
      let elapsedTime = new Date().getTime() - timeStart;
        if (elapsedTime > milliseconds) {
            break;
        }
    }
}
