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
