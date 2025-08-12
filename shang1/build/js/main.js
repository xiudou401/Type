let person;
person = { name: 'will', age: 18, city: 'beijing', gender: 'male' };
// console.log(person);
let count;
// count = function (a: number, b: number): number {
//   return a + b;
// };
count = function (a, b) {
    return a + b;
};
// let arr: string[];
// let arr2: Array<number>;
// arr = ['a', 'b'];
// arr2 = [100, 1];
// let arr1: [string, number]; //tuple
// let arr2: [string, boolean?];
// let arr3: [string, ...string[]];
// arr1 = ['hee', 1];
// arr2 = ['hee'];
// arr3 = ['xiaomi', 'xiaoma', 'xiaomiu'];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// console.log(Direction.Down);
const walk = (str) => {
    console.log(str);
};
// walk(Direction.Up);
// type shuzi = number;
// let a: shuzi;
// a = 100;
// type Status = number | string;
// function printStatus(data: Status): void {
//   console.log(data);
// }
// printStatus(4004);
// printStatus('haha');
// type Gender = 'male' | 'female';
// function printGender(data: Gender): void {
//   console.log(data);
// }
// printGender('female');
// type Area = {
//   height: number;
//   width: number;
// };
// type Address = {
//   num: number;
//   cell: number;
//   room: string;
// };
// type House = Area & Address;
// const house: House = {
//   height: 100,
//   width: 12,
//   num: 2,
//   cell: 22,
//   room: 'unit 2',
// };
// function demo(): void {
//   return undefined;
// }
// demo();
// type LogFunc = () => void;
// const f1: LogFunc = function () {
//   return 999;
// };
// let x = f1();
// console.log(x);
// if(x){
// }
// const src = [1, 2, 3];
// const dst = [0];
// src.forEach((el) => dst.push(el));
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     console.log(`My name is ${this.name}, ${this.age} years old`);
//   }
// }
// const p1 = new Person('will', 18);
// console.log(p1);
// p1.speak();
// class Student extends Person {
//   grade: string;
//   constructor(name: string, age: number, grade: string) {
//     super(name, age);
//     this.grade = grade;
//   }
//   override speak() {
//     console.log(`${this.name} says I am ${this.age}`);
//   }
//   study() {
//     console.log(`my name is ${this.name} and loves study`);
//   }
// }
// const s1 = new Student('Eason', 5, 'year 11');
// console.log(s1);
// s1.study();
// s1.speak();
// class Person {
//   public name: string;
//   public age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   public speak() {
//     console.log(`My name is ${this.name}, ${this.age} years old`);
//   }
// }
// class Student extends Person {
//   study() {
//     console.log(`${this.name} loves study`);
//   }
// }
// const p1 = new Person('eason', 5);
// p1.name;
// p1.age;
// p1.speak();
// class Person {
//   constructor(protected name: string, protected age: number) {}
//   protected getDetails() {
//     return `my name is ${this.name} and i am ${this.age}`;
//   }
//   introduce() {
//     console.log(this.getDetails());
//   }
// }
// // const p1 = new Person('eason', 5);
// // p1.getDetails()
// // p1.introduce();
// class Student extends Person {
//   study() {
//     this.introduce();
//     console.log(`${this.name} is at school`);
//   }
// }
// const s1 = new Student('Eason', 5);
// s1.study();
// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     private IDcard: string
//   ) {}
//   getPrivateInfo() {
//     return `you id is ${this.IDcard}`;
//   }
//   getInfo() {
//     return `name is ${this.name}, age is ${this.age}`;
//   }
//   getFullInfo() {
//     return this.getInfo() + ', ' + this.getPrivateInfo();
//   }
// }
// const p1 = new Person('Eason', 5, '32414123412341234');
// console.log(p1.getPrivateInfo());
// console.log(p1.getFullInfo());
// class Person {
//   constructor(
//     public name: string,
//     public readonly age: number,
//     private IdCard: string
//   ) {}
// }
// const p1 = new Person('eason', 5, 'asdfasdfasdf1213');
// console.log(p1);
// p1.name = 'will';
// console.log(p1);
class Package {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    printPackage() {
        console.log(`the parcel is ${this.weight} kg, the fee is ${this.calculate()} dollars`);
    }
}
class StandardPackage extends Package {
    unitPrice;
    constructor(weight, unitPrice) {
        super(weight);
        this.unitPrice = unitPrice;
    }
    calculate() {
        return this.weight * this.unitPrice;
    }
}
const s1 = new StandardPackage(10, 5);
s1.printPackage();
export {};
//# sourceMappingURL=main.js.map