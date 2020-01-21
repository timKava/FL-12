class Fighter {
    constructor(object){
        this._name = object.name;
        this._damage = object.damage;
        this._hp = object.hp;
        this._strength = object.strength;
        this._agility = object.agility;
        this.totalLosses = 0;
        this.totalWins = 0;
    }

    getName(){
        return this._name;
    }
    getDamage(){
        return this._damage;
    }
    getStrength(){
        return this._strength;
    }
    getAgility(){
        return this._agility;
    }
    getHealth(){
        return this._hp;
    }

    attack(fighter){
        let attackProbability = Math.round(Math.random() * 100);
        let successAttack = 100 - (fighter._strength + fighter._agility);
        if (successAttack > attackProbability) {
            fighter._hp -= this._damage;
            console.log(`${this._name} makes ${this._damage} damage to ${fighter._name}`);
        } else {
            console.log(`${fighter._name} attack missed`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this.totalWins}. Losses: ${this.totalLosses}`);
    }
    heal(toHeal) {
        if (this._hp + toHeal > 100){
            this._hp = 100;
        } else {
            this._hp += toHeal;
        }
    }
    dealDamage(reduceHp){
        if (this._hp - reduceHp < 0){
            this._hp = 0;
        } else {
            this._hp -= reduceHp;
        }
    }
    addWin(){
        this.totalWins++;
    }
    addLoss(){
        this.totalLosses++;
    }
}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() <= 0 || fighter2.getHealth() <= 0){
        console.log('Fight is impossible. One of fighters or both is already dead');
    }
    while(fighter1.getHealth() > 0 || fighter2.getHealth() > 0){
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }

    if (fighter1.getHealth() > fighter2.getHealth()){
        console.log(`${fighter1.getName()} win`);
        fighter1.addWin();
        fighter2.addLoss();
    } else {
        console.log(`${fighter2.getName()} win`);
        fighter2.addWin();
        fighter1.addLoss();
    }
}

const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const myFighter2 = new Fighter({name: 'Timus', damage: 25, hp: 100, strength: 30, agility: 25});
