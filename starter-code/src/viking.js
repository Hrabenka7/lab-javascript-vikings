console.log("ready");

// Soldier Superclass
function Soldier(healthValue, strengthValue) {
    this.health = healthValue;
    this.strenght = strengthValue;
}

Soldier.prototype.attack = function(){
    return this.strenght;
}

Soldier.prototype.receiveDamage = function(damageValue) {    
    this.health - damageValue;
}


// Viking class
function Viking(nameValueViking, healthValueViking, strengthValueViking) {
    Soldier.call(this, healthValueViking, strengthValueViking);
    this.name = nameValueViking;    
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.receiveDamage = function(damage) {
    this.health = this.health - damage;
    if (this.health > 0){
        return this.name + " has received " + damage + " points of damage."
    }else{
        return + this.name + " has died in act of combat."
    }
}

Viking.prototype.battleCry =  function(){
    return "Odin Owns You All"
} 



// Saxon class
function Saxon(healthValueSaxon, strengthValueSaxon) {
    Soldier.call(this, healthValueSaxon, strengthValueSaxon)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function (damage) {
    this.health = this.health - damage;
    if (this.health > 0){
        return "A Saxon has received " + damage + "points of damage."
    }else{
        return "A Saxon died in combat."
    }
}


// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function (objectViking) {
    this.vikingArmy.push(objectViking);   
}

War.prototype.addSaxon = function (objectSaxon) {
    this.saxonArmy.push(objectSaxon);
}

War.prototype.vikingAttack = function () {
    var randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    var randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    
    var indxS = this.saxonArmy.indexOf(randomSaxon);
    randomSaxon.receiveDamage(randomViking.strenght);
    
    if (randomSaxon.health <= 0){
        this.saxonArmy.splice(indxS,1); 
    } return this.saxonArmy;
}

War.prototype.saxonAttack = function () {
    randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  
    var indxV = this.vikingArmy.indexOf(randomViking);
    randomViking.receiveDamage(randomSaxon.strenght);
    if (randomViking.health <= 0) {
        this.saxonArmy.splice(indxV,1); 
    } return this.vikingArmy;
}

 War.prototype.showStatus = function () {
    if (this.vikingArmy.length == 0){
        return "Saxons have fought for their lives and survive another day...";
    } else if (this.saxonArmy.length == 0){
        return "Vikings have won the war of the century!";
    }else{
        return "Vikings and Saxons are still in the thick of battle.";
    } 
}


// START WAR

var Viking1 =  new Viking("marketa", 50, 50);
var Viking2 = new Viking("angel", 50, 50);
var Viking3 = new Viking("rehor", 50, 50);

var Saxon1 = new Saxon (100, 100);
var Saxon2 = new Saxon(100, 100);
var Saxon3 = new Saxon(100, 100);

var BigWar = new War();
BigWar.addSaxon(Saxon1); BigWar.addSaxon(Saxon2); BigWar.addSaxon(Saxon3); 
BigWar.addViking(Viking1); BigWar.addViking(Viking2); BigWar.addViking(Viking3); 