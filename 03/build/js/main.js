let stringArr = ['one', 'hey', 'Will'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'eason';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
// stringArr = guitars;
guitars = stringArr;
mixedData = guitars;
// guitars = mixedData
let test = [];
let bands = []; //annotation
bands.push('Van');
//Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
mixed = myTuple;
// myTuple = mixed
// myTuple[2] = 43
myTuple[1] = 43;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
// exampleObj.prop2 = 22;
exampleObj.prop2 = false;
let evh = {
    name: 'Will',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'Eason',
    active: true,
    albums: ['I', 'II', 'IV'],
};
evh = jp;
// evh.years = 40
let hp = {
    name: 'Nancy',
    active: false,
    albums: ['I', 'Today', 'IV'],
};
// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello ${guitarist.name.toUpperCase()}`;
// };
// const greetGuitarist = (guitarist: Guitarist) => {
//   return `Hello ${guitarist.name?.toUpperCase()}`;
// };
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
export {};
//# sourceMappingURL=main.js.map