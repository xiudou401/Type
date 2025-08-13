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
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak(n) {
        for (let i = 0; i < n; i++) {
            console.log(`My name is ${this.name}, I'm ${this.age} years old`);
        }
    }
}
const p1 = new Person('eason', 18);
p1.speak(4);
export {};
//# sourceMappingURL=main.js.map