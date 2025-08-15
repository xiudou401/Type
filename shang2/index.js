// function Demo(target: Function) {
//   console.log(target);
// }
// function CustomToString(target: Function) {
//   target.prototype.toString = function () {
//     return JSON.stringify(this);
//   };
//   Object.seal(target.prototype);
// }
function test(fn) { }
class Person {
}
test(Person);
export {};
//# sourceMappingURL=index.js.map