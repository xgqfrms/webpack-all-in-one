const log = console.log;

const any: any = 35;

const multi: boolean | number = 35;

let example1: boolean = true;

let example2: number = 35;

let example3: string = 'Hello world';


const arrayExample: number[] = [1, 3, 4, 5];

// let arr= arrayExample.reduce((num1, num2) => num1 + num2);
let arr= arrayExample.reduce((sum, num) => sum + num);

log(`arr`, arr)
