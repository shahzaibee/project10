"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person_ {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
const person_ = new Person_('Shahzaib', 25);
person_.sayHello();
