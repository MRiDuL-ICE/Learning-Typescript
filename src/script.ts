import { Player } from "./classes/Player.js";

// type aliases
type stringOrNum = number | string;
type userType = { name: string, age: number }


const userDetails = (id: stringOrNum, user: userType) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`)
}

const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? 'sir' : 'Mr.'} ${user.name}`)
}



// function signature

let myFunc: (x: number, y: number) => number;

myFunc = (a: number, b: number) => {
    return (a + b)
}

let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
    if (c === 'add') {
        return a + b
    }
    else if (c === 'substraction') {
        return a - b
    }
    else if (c === 'division') {
        return a / b
    }
    else if (c === 'multiplication') {
        return a * b
    }
    else {
        return a % b
    }
}


console.log(calculation(10, 5, 'substraction'))


let userInfo: (id: string | number, user: {
    name: string,
    age: number
}) => void

userInfo = (id: string | number, user: {
    name: string,
    age: number
}) => {
    console.log(`${id} and ${user}`)
}


// typescript classes




const neymar = new Player('Neymar', 34, 'Brazil')
const rodrygo = new Player('Rodrygo Goes', 21, 'Brazil')
const vini = new Player('Vinicious Jr.', 22, 'Brazil')


const players: Player[] = []

players.push(neymar)
players.push(rodrygo)
players.push(vini)

console.log(players)