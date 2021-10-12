import {Homework} from './default-homework.js'
export class Homework1 extends Homework{
    constructor(config){
        super(config)
        this.exersise()
    }

    exersise(){
        console.log('ДОМАШНЯЯ РАБОТА 1')
let value1 = 1;
let value2 = 3;

let object1 = {
    value3: 4,
    value4: 5
}

let value4 = value1+value2

function iterators(x){
    let value1 = 3;
    return x = value1 + x;
}

let value5 = object1.value3/iterators(value1)

console.log(value4 * value5)
    }
    
}