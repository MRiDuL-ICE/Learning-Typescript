import { isPlayer } from "../interfaces/isPlayer.js";

export class Player implements isPlayer {
    name: string;
    private age: number;
    readonly country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    getAge() {
        return this.age
    }

    play() {
        console.log(`${this.name} from ${this.country} and age is ${this.age}`)
    }
}

