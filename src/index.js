
import './styles/index.scss';
import './assets/fonts/Roboto-Regular.ttf';
import './component.js';
import { Homework1 } from "./js/core/homework 19-08-2021.js";
import { Homework2 } from "./js/core/homework 24-08-2021.js";
import { Homework3 } from "./js/core/homework 25-08-21.js";
import { Homework10 } from "./js/core/homework 30-09-2021.js";
import { Homework11_12 } from "./js/core/homework 5-10-2021.js";
import { config } from "./js/configs.js";

document.getElementsByTagName('input').text = "Input here"
document.getElementById('codeBlock').hidden = true;
document.getElementById('homework').hidden = true;
document.getElementById('codeHead').hidden = true;
document.getElementById('taskHead').hidden = true;
document.getElementById('headAnim').src = "./src/assets/images/code.gif"

const wordsOne = ['{', '}','(',')','this','class', 'export', '[',']']
const wordsTwo = ['if', 'const', 'function','constructor', 'import', 'for']
const wordsThree = ['//', '/', '/**', '*/']

function addContext(){
  let mainHomeworks = [];
  for(let i = 0; i < config.length; i++){
    mainHomeworks.push(document.getElementById("homework"+(i+1)+"button"))
  }
  return mainHomeworks
}

// Change task to create new divs and removes old ones
function changeTask() {
    const mainHomeworks = addContext()
    document.getElementById("dropbtn").addEventListener('click', function(){
        document.getElementById("dropdown-content").style.display = "block"
    })
    
  for (let i = 0; i < mainHomeworks.length; i++) {
      mainHomeworks[i].addEventListener("click", function () {
        // console.log(document.getElementByid('rightbtn').style.top)
      document.getElementById('rightbtn').style.top = '0%'
      document.getElementById('dropdown').style.position = "relative"
      document.getElementById('codeBlock').hidden = false;
      document.getElementById('homework').hidden = false;
      document.getElementById('codeHead').hidden = false;
      document.getElementById('taskHead').hidden = false;
      document.getElementById('headAnim').style.display = "none"
      document.getElementById("dropdown-content").style.display = "none"
      removeImage()
      const homework = changeHomework(i, config)
      var context = document.getElementById("codeBlock")
      context.replaceChildren()
      fileHelper(context, config[i].codeSrc)
      

    });
  }
}

function removeImage(){
  // let obj =  document.getElementById("head")
  let img = document.getElementById('image')
  if(img)
  img.parentNode.removeChild(img);
  else return
}

changeTask()


function changeHomework(i, config){
  switch(i){
    case 0: return new Homework1(config[i])
    case 1: return new Homework2(config[i])
    case 2: return new Homework3(config[i])
    case 3: return new Homework10(config[i])
    case 4: return new Homework11_12(config[i])
  }
}

function fileHelper(context, path){
  

    Promise.all([
    fetch(path).then(response => response.text())
    .then((result) => {
      
      console.log(result);
      const massive = result.split(/\r\n|\n/);
      massive.forEach((line) => {
        const e = document.createElement("p")
        e.id = 'codeLine'+ massive.indexOf(line)
        e.textContent = line
        changeCodeColor(e)
        context.appendChild(e)
    })
      
      
      // context.textContent = result
    })
    .catch(error => console.dir(error + " ошибка с запросом"))
  ])
    // var request = new XMLHttpRequest()
    // request.open("GET", path, false)
    // request.send(null)
    // var returnValue = request.responseText
    // return text
  
}

function changeCodeColor(code){
  code.addEventListener("blur", highlight);
  highlight(code, " ");
}


function highlight(code, symbol) {
    const words = code.textContent.split(symbol);
    code.innerHTML = "";
    words.forEach((word) => {
    const span = code.appendChild(document.createElement('span'));
    span.textContent = word + ' ';
    for(let i = 0; i < 10; i++){
        if (word === wordsOne[i] || word.includes(wordsOne[i])) span.classList.add('orange');
        if (word === wordsTwo[i] || word.includes(wordsTwo[i]) ) span.classList.add('blue');
        if (word === wordsThree[i] || word.includes(wordsThree[i])) span.classList.add('green');
    }
})
}
