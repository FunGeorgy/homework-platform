import "./styles/index.css";
import "./assets/fonts/Roboto-Regular.ttf";
import { Homework1 } from "./js/core/homework 19-08-2021.js";
import { Homework2 } from "./js/core/homework 24-08-2021.js";
import { Homework3 } from "./js/core/homework 25-08-21.js";
import { Homework10 } from "./js/core/homework 30-09-2021.js";
import { Homework11_12 } from "./js/core/homework 5-10-2021.js";
import { config } from "./js/configs.js";
import gif from "./assets/images/code.gif";
import anime from "animejs";
// добавляем эффект на стартовую страницу

// /добавляем эффект на стартовую страницу
document.getElementsByTagName("input").text = "Input here";
document.getElementById("codeBlock").hidden = true;
document.getElementById("homework").hidden = true;
document.getElementById("codeHead").hidden = true;
document.getElementById("taskHead").hidden = true;
document.getElementById("headAnim").src = gif;

let isDone = false;
let doOnce = true;
const wordsOne = ["{", "}", "(", ")", "this", "class", "export", "[", "]"];
const wordsTwo = ["if", "const", "function", "constructor", "import", "for"];
const wordsThree = ["//", "/", "/**", "*/"];

function addContext() {
  let mainHomeworks = [];
  for (let i = 0; i < config.length; i++) {
    mainHomeworks.push(
      document.getElementById("homework" + (i + 1) + "button")
    );
    document.getElementById("homework" + (i + 1) + "button").textContent =
      config[i].description;
  }
  mainHomeworks.push(document.getElementById("lasthomework"));
  return mainHomeworks;
}

// Change task to create new divs and removes old ones
function changeTask() {
  const mainHomeworks = addContext();
  document.getElementById("dropbtn").addEventListener("click", function () {
    document.getElementById("dropdown-content").style.display = "block";
  });

  for (let i = 0; i < mainHomeworks.length; i++) {
    mainHomeworks[i].addEventListener("click", function () {
      return new Promise((resolve)=> {
        console.clear();
        if(doOnce){
          doOnce = false;
          animations();
        }
        document.getElementById("dropdown-content").style.display = "none";
      if (i === mainHomeworks.length - 1)
        console.log(config[mainHomeworks.length - 2].description);
      else console.log(config[i].description);
      removeImage();
      const homework = changeHomework(i, config);
      var context = document.getElementById("codeBlock");
      context.replaceChildren();
      if (i === mainHomeworks.length - 1)
        fileHelper(context, config[i - 1].codeSrc);
      else fileHelper(context, config[i].codeSrc);
      setTimeout(()=>resolve('here'), 3500);
      }).then(()=> isDone = true)
      
    });
  }

  document.getElementById("blockid").addEventListener('mouseover', function(){
    if(!isDone) return
    const timeline = anime.timeline()
    timeline.add({
      targets:  document.getElementById('lasthomework'),
      translateX: 0,
      easing: "easeInSine",
      duration: 200,
    })
    timeline.add({
      targets:  document.getElementById('gitLink'),
      translateX: 0,
      easing: "linear",
      duration: 400,
    })
    timeline.add({
      targets:  document.getElementById('dropbtn'),
      translateX: 0,
      easing: "linear",
      duration: 400,
    })
  })

  document.getElementById("blockid").addEventListener('mouseout', function(){
    if(!isDone) return
    let xPath = 140
    let sizeWidth = 125
    const timeline = anime.timeline()
    timeline.add({
      targets:  document.getElementById('lasthomework'),
      translateX: -xPath,
      easing: "easeInSine",
      duration: 200,
    })
    timeline.add({
      targets:  document.getElementById('gitLink'),
      translateX: -(xPath*2 + sizeWidth),
      easing: "linear",
      duration: 400,
    })
    timeline.add({
      targets:  document.getElementById('dropbtn'),
      translateX: -(xPath*3 + sizeWidth*2),
      easing: "linear",
      duration: 400,
    })
  })
}

function removeImage() {
  // let obj =  document.getElementById("head")
  let img = document.getElementById("image");
  if (img) img.parentNode.removeChild(img);
  else return;
}

changeTask();

function changeHomework(i, config) {
  switch (i) {
    case 0:
      return new Homework1(config[i]);
    case 1:
      return new Homework2(config[i]);
    case 2:
      return new Homework3(config[i]);
    case 3:
      return new Homework10(config[i]);
    case 4:
      return new Homework11_12(config[i]);
    default:
      return new Homework11_12(config[config.length - 1]);
  }
}

function fileHelper(context, path) {
  Promise.all([
    fetch(path)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        const massive = result.split(/\r\n|\n/);
        massive.forEach((line) => {
          const e = document.createElement("p");
          e.id = "codeLine" + massive.indexOf(line);
          e.textContent = line;
          changeCodeColor(e);
          context.appendChild(e);
        });
      })
      .catch((error) => console.dir(error + " ошибка с запросом")),
  ]);
}

function changeCodeColor(code) {
  code.addEventListener("blur", highlight);
  highlight(code, " ");
}

function highlight(code, symbol) {
  const words = code.textContent.split(symbol);
  code.innerHTML = "";
  words.forEach((word) => {
    const span = code.appendChild(document.createElement("span"));
    span.textContent = word + " ";
    for (let i = 0; i < 10; i++) {
      if (word === wordsOne[i] || word.includes(wordsOne[i]))
        span.classList.add("orange");
      if (word === wordsTwo[i] || word.includes(wordsTwo[i]))
        span.classList.add("blue");
      if (word === wordsThree[i] || word.includes(wordsThree[i]))
        span.classList.add("green");
    }
  });
}

function documentChange() {
  // btn.block
  document.querySelector(".btn-block").style.flexDirection = "row";
  document.querySelector(".btn-block").style.width = "100%";
  // .btn
  document.querySelector(".btn").style.marginRight = "20px";
  document.querySelector(".btn").style.maxWidth = "125px";
  document.querySelector(".btn").style.padding = "10px";
  // gitLink
  document.getElementById("gitLink").style.marginRight = "20px";
  document.getElementById("gitLink").style.padding = "10px";
  document.getElementById("gitLink").style.maxWidth = "125px";
  // dropbtn
  document.getElementById("dropbtn").style.padding = "10px";
  document.getElementById("dropbtn").style.maxWidth = "125px";
  document.getElementById("dropdown").style.position = "relative";
  // other
  document.getElementById("codeBlock").hidden = false;
  document.getElementById("homework").hidden = false;
  document.getElementById("codeHead").hidden = false;
  document.getElementById("taskHead").hidden = false;
  
}

function animations() {
  const timeline = anime.timeline();
  timeline.add({
    targets: document.querySelector(".btn-block"),
    translateY: -200,
    easing: "easeInSine",
    duration: 500,
  });
  timeline.add({
    targets: document.querySelector(".btn-block").style,
    flexDirection: "row",
    easing: "easeInSine",
    duration: 400,
    complete: () => {
      documentChange();
    },
  });
  timeline.add({
    begin: () => {
      document.querySelector(".start-page").classList.add("disable");
    },
    targets: [
      document.getElementById("headAnim").style,
      document.querySelector(".start-page").style,
    ],
    display: "none",
    duration: 700,
    easing: "linear",
  });
  timeline.add({
    targets:  document.getElementById('lasthomework'),
    translateX: -140,
    easing: "easeInSine",
    duration: 200,
  })
  timeline.add({
    targets:  document.getElementById('gitLink'),
    translateX: -(140*2+125),
    easing: "linear",
    duration: 400,
  })
  timeline.add({
    targets:  document.getElementById('dropbtn'),
    translateX: -(140*3+250),
    easing: "linear",
    duration: 400,
  })
  return timeline
}
