import {Homework} from './default-homework.js'

export class Homework2 extends Homework {

    ageCont
    button
    countCont

    yearCont
    button2
    countYearCont

    costCont
    button3
    countCostCont

    circleCont
    boxCont
    button4
    countResult

  constructor(config) {
    super(config);

    this.ageCont = document.getElementById("input1");
    this.button = document.getElementById("button1");
    this.countCont = document.getElementById("ageCount");
    // Задание 2 год
    this.yearCont = document.getElementById("input2");
    this.button2 = document.getElementById("button2");
    this.countYearCont = document.getElementById("yearCount");
    // Задание 3 сумма со скидкой
    this.costCont = document.getElementById("input3");
    this.button3 = document.getElementById("button3");
    this.countCostCont = document.getElementById("costCount");
    // Задание 4 на окружностьq
    this.circleCont = document.getElementById("circle_input");
    this.boxCont = document.getElementById("box_input");
    this.button4 = document.getElementById("button4");
    this.countResult = document.getElementById("countResult");
    this.button.addEventListener("click", ()=> this.checkAge());
    this.button2.addEventListener("click", ()=> this.checkYear());
    this.button3.addEventListener("click", ()=> this.checkCost());
    this.button4.addEventListener("click", ()=> this.ifCircleInBox());
  }

  // Задание 1
  checkAge() {
    let age = this.ageCont.value;
    let text;
    console.log(age);
    if (age >= 18) {
      text = "Возраст равен - " + age + ", он совершеннолетний";
    } else if (age === "") {
      text = "Впиши возраст!";
    } else if (age < 18) {
      text = "Возраст равен - " + age + ", он несовершеннолетний";
    }
    console.log(text);
    this.countCont.textContent = text;
  }

  // Задание 2
  checkYear() {
    let year = this.yearCont.value;
    let text;
    console.log(year);
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      text = "Год високостный";
    } else if (year === "") {
      text = "Введите год!";
    } else {
      text = "Год не високостный";
    }
    console.log(text);
    this.countYearCont.textContent = text;
  }

  // Задание 3
  checkCost() {
    let cost = this.costCont.value;
    let text;
    console.log(cost);
    if (cost >= 1000) {
      let sale = (cost * 5) / 100;
      cost = parseInt(cost) - sale;
      text = "Цена со скидкой: " + cost;
    } else if (cost === "") {
      text = "Введите цену";
    } else if (cost < 1000) {
      text = "Цена без скидки: " + cost;
    }

    console.log(text);
    this.countCostCont.textContent = text;
  }

  // Задание 4
  ifCircleInBox() {
    let text;
    let circleLength = this.circleCont.value;
    let boxPerimetre = this.boxCont.value;

    let sOfCircle = circleLength ^ (2 / (Math.PI * 4));
    let sOfBox = (boxPerimetre / 4) ^ 2;
    if (sOfCircle <= sOfBox && sOfCircle != 0) {
      text = "Данная окружность помещается в квадрат";
    } else if (sOfCircle > sOfBox) {
      text = "Данная окружность не помещается в квадрат";
    } else {
      text = "Впишите данные!";
    }
    console.log(text);
    this.countResult.textContent = text;
  }
}
