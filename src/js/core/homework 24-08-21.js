import {Homework} from './default-homework.js'

export class Homework3 extends Homework {
    //! Переменные
// Задание1
questionCont = document.getElementById("question_input");
buttonQuest = document.getElementById("question_button");
countContQuest = document.getElementById("question_count");
questionNum = 1;
// Задание2
questionAgeCont = document.getElementById("question_age_input");
buttonAge = document.getElementById("question_age_button");
countContAge = document.getElementById("age_count");
// Задание3
calculateNum1 = document.getElementById("number1_input");
calculateNum2 = document.getElementById("number2_input");
buttonAction = document.getElementById("action_button");
contentCont = document.getElementById("content_cont");
// Задание4
buttonCounts = document.getElementById("button_counts");
messageCont = document.getElementById("message_cont");
numberLength = document.getElementById("number_length_input");
answerCont = document.getElementById("answer_cont");

constructor(config){
super(config)
setTimeout(()=> this.eventListeners(), 1000)
}

eventListeners(){
  this.buttonQuest.addEventListener("click", () => this.changeQuestion());
  this.buttonAge.addEventListener("click", () => this.whatsYourAge());
  this.buttonAction.addEventListener("click", () => this.calculateSmth());
  this.buttonCounts.addEventListener("click", () => this.buttonOn());
}
//!Функции
// Задание1
changeQuestion() {
  switch (this.questionNum) {
    case 1:
      {
        this.countContQuest.textContent = "Год начала Второй мировой войны?";
        this.questionGenerate(
          "1939",
          "Когда в России отмечают день Победы?",
          "Укажите год в формaте ГГГГ"
        );
      }
      break;
    case 2:
      {
        this.questionGenerate(
          "09.05",
          "Дата окончания Второй Мировой Войны?",
          "Укажите дату в формате ДД.ММ"
        );
      }
      break;
    case 3: {
      this.questionGenerate(
        "30.09.1945",
        "Спасибо за прохождение мини викторины! Хотите ответить на вопросы еще раз?",
        "Укажите дату в формате ДД.ММ.ГГ"
      );
    }
    break;
    default:
      {
        this.questionNum = this.questionCont.value === "да" ? 1 : 0;
        this.questionCont.value = "";
        if (this.questionNum === 1) {
          this.countContQuest.textContent = "Год начала Второй мировой войны?";
        }
      }
      break;
  }
}

questionGenerate(value, nextQuest, alertMessage) {
  if (this.questionCont.value === value) {
    alert("Верно!");
    this.countContQuest.textContent = nextQuest;
    this.questionCont.value = "";
    return this.questionNum++;
  } else {
    alert("Попробуй еще раз");
    alert(alertMessage);
    return this.questionNum;
  }
}

// Задание2

whatsYourAge() {
  let age = this.questionAgeCont.value;
  if (age >= 0 && age < 12) alert("вы ребенок!");
  else if (age >= 12 && age < 18) alert("вы подросток");
  else if (age >= 18 && age < 60) alert("вы взрослый");
  else if (age >= 60) alert("вы пенсионер");
  else alert("введите корректный возраст");
  this.questionAgeCont.value = "";
}



// Задание3
calculateSmth() {
  let answer = prompt(
    "Выберите оператор действия (+, -, /, *) P.S.(если хотите завершить действия, напишите: 'cтоп'"
  );
  let result = 0;
  while (answer != "стоп") {
    switch (answer) {
      case "+":
        {
          result =
            parseInt(this.calculateNum1.value) + parseInt(this.calculateNum2.value);
        }
        break;
      case "-":
        {
          result =
            parseInt(this.calculateNum1.value) - parseInt(this.calculateNum2.value);
        }
        break;
      case "*":
        {
          result =
            parseInt(this.calculateNum1.value) * parseInt(this.calculateNum2.value);
        }
        break;
      case "/":
        {
          result =
            parseInt(this.calculateNum1.value) / parseInt(this.calculateNum2.value);
        }
        break;
      case ":": {
        result = parseInt(this.calculateNum1.value) / parseInt(this.calculateNum2.value);
      }
      break;
      case "^":
        {
          result = Math.pow(
            parseInt(this.calculateNum1.value),
            parseInt(this.calculateNum2.value)
          );
        }
        break;
      default:
        result = "неверный оператор";
        break;
    }
    alert(result);
    answer = prompt(
      "Выберите оператор действия (если хотите завершить действия, напишите: 'cтоп'"
    );
  }
  this.calculateNum1.value = "";
  this.calculateNum2.value = "";
}



// Задание4
buttonOn() {
  let length = this.numberLength.value;
  let answer;

  // счетчики
  let honestCount = 0;
  let negativeCount = 0;
  let notHonestCount = 0;
  let plusCount = 0;
  let zeroCount = 0;

  // массивы
  let honestMassive = [];
  let negativeMassive = [];
  let notHonestMassive = [];
  let plusMassive = [];

  if (this.numberLength.value != "") {
    alert("Впишите " + length + " цифр");
    for (let i = 0; i < length; i++) {
      answer = prompt("Введите " + (i + 1) + " число");
      if (answer == "") answer = 0;
      if (answer == 0) zeroCount++;
      else if (answer > 0) {
        plusCount++;
        plusMassive.push(answer);
      } else {
        negativeCount++;
        negativeMassive.push(answer);
      }

      if (answer % 2 == 0) {
        honestCount++;
        honestMassive.push(answer);
      } else {
        notHonestCount++;
        notHonestMassive.push(answer);
      }
    }

    alert("количество положительных чисел: " + plusCount);
    alert("количество отрицательных чисел " + negativeCount);
    alert("количество четных чисел " + honestCount);
    alert("количество нечетных чисел " + notHonestCount);
    alert("количество нулей " + zeroCount);

    this.answerCont.textContent =
      "Все положительные числа: " +
      this.isMassiveNull(plusMassive) +
      "; " +
      "Все отрицательные числа: " +
      this.isMassiveNull(negativeMassive) +
      "; " +
      "Все четные числа: " +
      this.isMassiveNull(honestMassive) +
      "; " +
      "Все нечетные числа: " +
      this.isMassiveNull(notHonestMassive);
    this.numberLength.value = "";
  } else {
    alert("Укажите количество цифр!");
  }
}

isMassiveNull(massive) {
  return (this.message = massive.length <= 0 ? "нету" : massive);
}
}