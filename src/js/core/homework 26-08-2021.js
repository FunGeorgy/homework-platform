import { Homework } from "./default-homework";

export class Homework4 extends Homework {
  students = [];
  studentNameInput;
  studentSurNameInput;
  studentAgeInput;
  studentAvrInput;
  studentSexInput;
  studentButton;
  resultLabel;

  constructor(config) {
    super(config);
    setTimeout(() => this.documentElems(), 1000);
  }

  documentElems() {
    this.studentNameInput = document.getElementById("studentNameInput");
    this.studentSurNameInput = document.getElementById("studentSurNameInput");
    this.studentAgeInput = document.getElementById("studentAgeInput");
    this.studentSexInput = document.getElementById("studentSexInput");
    this.studentAvrInput = document.getElementById("studentAvrInput");
    this.studentButton = document.getElementById("studentButton");
    this.stopButton = document.getElementById("stopButton");
    this.resultLabel = document.getElementById("resultLabel");

    this.studentNameInput.placeholder = "введите имя";
    this.studentSurNameInput.placeholder = "введите фамилию";
    this.studentAvrInput.placeholder = "введите средний балл (0-10)";
    this.studentAgeInput.placeholder = "введите возраст (14-100)";
    this.studentSexInput.placeholder = "введите пол(м-ж)";
    this.studentButton.addEventListener("click", () => this.addStudent());
    this.stopButton.addEventListener("click", () => this.addResult());
  }

  addStudent() {
    const name = this.studentNameInput.value;
    const surname = this.studentSurNameInput.value;
    const age = this.studentAgeInput.value;
    const sex = this.studentSexInput.value;
    const average = this.studentAvrInput.value;
    console.log(this.studentNameInput);
    let student = {
      name: name,
      surname: surname,
      age: age,
      sex: sex,
      average: average,
    };

    if (
      student.name != "" &&
      student.surname != "" &&
      student.age != "" &&
      student.age < 100 &&
      student.age > 14 &&
      student.average != "" &&
      (student.sex === "м" || student.sex === "ж") &&
      student.average >= 0 &&
      student.average <= 10
    ) {
      this.students.push(student);
      console.log(this.students);
      this.studentNameInput.value = "";
      this.studentSurNameInput.value = "";
      this.studentAgeInput.value = "";
      this.studentSexInput.value = "";
      this.studentAvrInput.value = "";
    } else alert("Заполните все поля или правильность ввода");
  }

  addResult() {
      if(this.students.length == 0) return

    let ageInfo = document.createElement('div')
    let avrInfo = document.createElement('div')
    let sexInfo = document.createElement('div')

    let avrCount = 0
    let femaleCount = 0
    let maleCount = 0
    let avrMiddle = 0
    ageInfo.style.color = "black"
    avrInfo.textContent += "Имена студентов средний балл которых меньше 7: "
    ageInfo.textContent += ("Имена студентов возраст которых больше 20: ")
    this.resultLabel.textContent = "All info:";
    this.resultLabel.style.color = "black"
    this.resultLabel.style.marginTop = "20px"
    for (let i = 0; i < this.students.length; i++) {
      let studentInfo = document.createElement("div");
      let ageInfos = document.createElement("div")
      let avrInfos = document.createElement('div')
      console.log(studentInfo);
      studentInfo.innerHTML =
        "Студент №" +
        (i + 1) +
        "</br></br>" +
        "Имя: " +
        this.students[i].name +
        "</br>" +
        "Фамилия: " +
        this.students[i].surname +
        "</br>" +
        "Возраст: " +
        this.students[i].age +
        "</br>" +
        "Пол: " +
        this.students[i].sex +
        "</br>" +
        "Cредний балл: " +
        this.students[i].average +
        "</br></br>";
        if(this.students[i].age > 20){
            ageInfos.innerHTML += this.students[i].name + "</br>" 
            ageInfo.appendChild(ageInfos)
        }
        if(this.students[i].average < 7){
            avrCount++
            avrInfos.innerHTML += this.students[i].name + "</br>"
            avrInfo.appendChild(avrInfos)
        }
        if(this.students[i].sex === "м") maleCount++; else femaleCount++;
        avrMiddle += this.students[i].average
      this.resultLabel.appendChild(studentInfo);
    }
    avrMiddle = avrMiddle/this.students.length
    avrInfo.innerHTML += "Общее количество таких студентов: " + avrCount + " </br>"
    sexInfo.textContent = "Количество мужчин в группе: "+maleCount + ". Количество женщин в группе: " + femaleCount + ". Средний балл группы: " + avrMiddle;
    const documentAdded = [ageInfo, avrInfo, sexInfo]
    documentAdded.forEach(i => {
        i.style.borderBottomWidth = "2px"
        i.style.borderBottomColor = "black"
        i.style.borderBottomStyle = "solid"
        i.style.marginTop = "20px"
        this.resultLabel.appendChild(i)
    });
  }
}
