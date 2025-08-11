//Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

// type Guitarist = {
//   name?: string;
//   active: boolean;
//   albums: (string | number)[];
// };

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber

let myName: 'Will';
// myName = 'Eason';

let userName: 'Will' | 'Eason' | 'Nancy';
// userName = 'Qiu';

//functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));
// logMsg(add('a', 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

const addAll = (a: number, b: number, c?: number): number => {
  //type guard
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));

//Rest Parameters
// const total = (...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr);
// };

// logMsg(total(1, 2, 3, 4));

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

//use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  // if (typeof value === 'number') return 'number';
  if (isNumber(value)) return 'number';
  return createError('This could never happen');
};
