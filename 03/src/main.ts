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
let bands: string[] = []; //annotation
bands.push('Van');

//Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true];

let mixed = ['John', 1, false];

mixed = myTuple;
// myTuple = mixed
// myTuple[2] = 43
myTuple[1] = 43;

//Objects
let myObj: object;
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

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: 'Will',
  active: false,
  albums: [1984, 5150, 'OU812'],
};

let jp: Guitarist = {
  name: 'Eason',
  active: true,
  albums: ['I', 'II', 'IV'],
};

evh = jp;
// evh.years = 40

let hp: Guitarist = {
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

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return 'Hello!';
};

console.log(greetGuitarist(jp));

// Enums
enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
