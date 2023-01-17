class Animal {
    constructor(legs, wings){  
        this.legs = legs;
        this.wings = wings;
    }

    say() {
        return 'Hello World';
    }
}

class Dog {
    name = "Bobby";

    walk() {
        return `${this.name} is walking `;
    }

    run = () => {
        return `${this.name} is running`;
    }
}

let animal = new Animal();
let Bobby = new Dog();
animal.legs = 2;                    // set the value using their name because of constructor
animal.wings = 2;
console.log(animal.say());
console.log(animal);
console.log(Bobby.name);
console.log(Bobby.run());


module.exports = {Animal, Dog}