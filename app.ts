class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("Owais", 30);
person.sayHello();

class Student extends Person {
  studentId: string;

  constructor(name: string, age: number, studentId: string) {
    super(name, age);
    this.studentId = studentId;
  }

  study(): void {
    console.log(`${this.name} is studying.`);
  }
}

const student = new Student("Honey", 20, "123456");
student.sayHello();
student.study();
