"use strict";
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'sir' : 'Mr.'} ${user.name}`);
};
// function signature
let myFunc;
myFunc = (a, b) => {
    return (a + b);
};
let calculation;
calculation = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else if (c === 'substraction') {
        return a - b;
    }
    else if (c === 'division') {
        return a / b;
    }
    else if (c === 'multiplication') {
        return a * b;
    }
    else {
        return a % b;
    }
};
console.log(calculation(10, 5, 'substraction'));
let userInfo;
userInfo = (id, user) => {
    console.log(`${id} and ${user}`);
};
// typescript classes
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    plaY() {
        console.log(`${this.name} from ${this.country} and age is ${this.age}`);
    }
}
const neymar = new Player('Neymar', 34, 'Brazil');
const rodrygo = new Player('Rodrygo Goes', 21, 'Brazil');
const vini = new Player('Vinicious Jr.', 22, 'Brazil');
const players = [];
players.push(neymar);
players.push(rodrygo);
players.push(vini);
console.log(players);
