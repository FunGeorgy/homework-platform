import { Homework } from "./default-homework";
export class Homework5 extends Homework {
  otherNumber = 0;
  // Ввод цифр
  number1;
  number2;
  number3;

  // Ввод даты
  time1;
  time2;
  buttonResult;
  resultDiv;

  constructor(config) {
    super(config);
    setTimeout(() => this.addSomeFeatures(), 1000);
  }

  addSomeFeatures() {
    // Ввод цифр
    this.number1 = document.getElementById("number1_input");
    this.number2 = document.getElementById("number2_input");
    this.number3 = document.getElementById("number3_input");

    // Ввод даты
    this.time1 = document.getElementById("time1_input");
    this.time2 = document.getElementById("time2_input");
    this.buttonResult = document.getElementById("result_button");
    this.resultDiv = document.getElementById("result_cont");
    this.buttonResult.addEventListener("click", () => this.showResults());
  }

  showResults() {
    // numbers
    let numberValue1 = this.number1.value;
    let numberValue2 = this.number2.value;
    let numberValue3 = this.number3.value;

    // time
    let timeValue1 = this.getSomeAnotherTime(this.time1.value);
    let timeValue2 = this.getSomeAnotherTime(this.time2.value);

    console.log(numberValue3);

    let newMass = [];
    for (let i = 0; i < 10; i++) {
      newMass.push(document.createElement("div"));
    }
    newMass[0].innerHTML =
      "Упражнение 1: Сравнение двух чисел </br> Если первое число больше второго то единица, если наоборот то -1, если числа равны то 0 </br> Полученное значение: " +
      this.comparisonTwoItems(numberValue1, numberValue2);
    newMass[1].innerHTML =
      "Упражнение 2: Нахождение факториала </br> Факториал равен: " +
      this.factorial(numberValue1);
    newMass[2].innerHTML =
      "Упражнение 3: Превращение 3 цифр в одну </br> Полученный результат " +
      this.refactorNumbers(numberValue1, numberValue2, numberValue3);
    newMass[3].innerHTML =
      "Упражнение 4: Нахождение площади фигуры </br> Полученный результат " +
      this.findSquareOfFigure(numberValue1, numberValue2);
    newMass[4].innerHTML =
      "Упражнение 5: Проверка на совершенство числа. </br> Полученный результат " +
      this.isPerfectNumber(numberValue1);
    newMass[5].innerHTML =
      "Упражнение 6: Получение всех совершенных чисел из диапозона. </br> Полученный результат " +
      this.isPerfectNumberFromNumbers(numberValue2, numberValue3);
    newMass[6].innerHTML =
      "Упражнение 7: Получение даты. </br> Полученный результат " +
      this.getTime(timeValue1[0], timeValue1[1], timeValue1[2]);
    newMass[7].innerHTML =
      "Упражнение 8: Получение секунды. </br> Полученный результат " +
      this.getSeconds(timeValue1[0], timeValue1[1], timeValue1[2]);
    newMass[8].innerHTML =
      "Упражнение 9: Получение времени из секунд. </br> Полученный результат " +
      this.getFullTime(numberValue1);
    newMass[9].innerHTML =
      "Упражнение 10: Получение общего времени из двух времен. </br> Полученный результат " +
      this.compareTwoDate(timeValue1, timeValue2);
    newMass.forEach((i) => {
      i.style.borderBottomWidth = "2px";
      i.style.borderBottomColor = "black";
      i.style.borderBottomStyle = "solid";
      i.style.marginTop = "20px";
      this.resultDiv.appendChild(i);
    });
  }
  // 1 сравнение чисел
  comparisonTwoItems(a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
  }

  // 2 нахождение факториала
  factorial(a) {
    let factorial = 0;
    for (let i = 1; i < a + 1; i++) {
      factorial += i;
    }
    return factorial;
  }

  // 3 совмещение чисел
  refactorNumbers(a, b, c) {
    let newNumber = "" + a + b + c;
    return parseInt(newNumber);
  }

  // 4 нахождение площади фигуры
  findSquareOfFigure(a, b) {
    if (b) return a * b;
    else return a * a;
  }

  // 5 проверка на совершенство числа
  isPerfectNumber(a) {
    var otherNumber = 0;
    for (let i = 1; i < a; i++) {
      if (a % i === 0) {
        otherNumber += i;
      }
    }
    console.log(otherNumber);
    return a == otherNumber ? true : false;
  }

  // 6 нахождение всех совершенных чисел в интервале
  isPerfectNumberFromNumbers(min, max) {
    let perfectMass = [];
    for (let i = min; i <= max; i++) {
      if (this.isPerfectNumber(i)) {
        console.log(i);
        perfectMass.push(i);
      }
    }
    console.log(perfectMass);
    return perfectMass;
  }

  // 7 время
  getSomeAnotherTime(time) {
    return time.split(/:/g);
  }
  getTime(hour, minutes, second) {
    let date = new Date();
    date.setHours(hour);
    if (minutes) date.setMinutes(minutes);
    else date.setMinutes(0);
    if (second) date.setSeconds(second);
    else date.setSeconds(0);
    return date;
  }

  // 8 возвращает только секунды
  getSeconds(hour, minutes, seconds) {
    const time = 60;
    return (hour * time + minutes) * time + seconds;
  }

  // 9 переводит секунды во время
  getFullTime(seconds) {
    const time = 60;
    let minutes;
    let hours;
    let partOfSec;
    let partOfMinute;
    partOfSec = seconds % time;
    minutes = Math.trunc(seconds / time);
    partOfMinute = minutes % time;
    hours = Math.trunc(minutes / time);
    return this.getTime(hours, partOfMinute, partOfSec);
  }

  // 10 сравнение дат

  compareTwoDate(date1, date2) {
    console.log(date1);
    let secondFromFirstDate = this.getSeconds(
      parseInt(date1[0]),
      parseInt(date1[1]),
      parseInt(date1[2])
    );
    let secondFromSecondDate = this.getSeconds(
      parseInt(date2[0]),
      parseInt(date2[1]),
      parseInt(date1[2])
    );
    let newTime =
      secondFromFirstDate > secondFromSecondDate
        ? secondFromFirstDate - secondFromSecondDate
        : secondFromSecondDate - secondFromFirstDate;
    return this.getFullTime(newTime);
  }
}
