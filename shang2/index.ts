// function Demo(target: Function) {
//   console.log(target);
// }
// function CustomToString(target: Function) {
//   target.prototype.toString = function () {
//     return JSON.stringify(this);
//   };
//   Object.seal(target.prototype);
// }

// @Demo
// @CustomToString
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1 = new Person('will', 18);
// console.log(p1.toString());

// function Demo(target: Function) {
//   return class {
//     test() {
//       console.log(200);
//       console.log(300);
//     }
//   };
// }

// @Demo
// class Person {
//   test() {
//     console.log(100);
//   }
// }

// console.log(Person);

type Constructor = new (...args: any[]) => {};

function test(fn: Constructor) {}

class Person {}

test(Person);
