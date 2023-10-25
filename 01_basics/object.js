let myHeros = ["thor", "spidrman"];

let heroPower =  {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log(`Spidey Power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function() {
    console.log("I am everywhere")
}

Array.prototype.heyhitesh = function() {
    console.log('Hi, there');
}

heroPower.hitesh();
myHeros.hitesh();
myHeros.heyhitesh();