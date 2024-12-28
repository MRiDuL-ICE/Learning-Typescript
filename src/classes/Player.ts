export class Player {
    private name: string;
    private age: number;
    private country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {
        console.log(`${this.name} from ${this.country} and age is ${this.age}`)
    }
}

