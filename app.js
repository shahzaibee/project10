"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person("Owais", 30);
person.sayHello();
class Student extends Person {
    studentId;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}
const student = new Student("Honey", 20, "123456");
student.sayHello();
student.study();
