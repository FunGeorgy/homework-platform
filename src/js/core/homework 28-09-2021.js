 import { Homework } from "./default-homework.js"
  export class Homework10 extends Homework { 
    constructor(config){
      super(config)
      setTimeout(()=> this.startFunc(), 1000)
      console.log(config.img)
    }

    startFunc() {
      const localConfig = {
        div: document.getElementById("block-easy"),
        input: document.getElementById("input"),
        buttonToModule: document.getElementById("moduleButton"),
        switchButton: document.getElementById("thirdButton"),
        trafficLight: [
          document.getElementById("green"),
          document.getElementById("yellow"),
          document.getElementById("red"),
        ],
      }
        this.inputName(localConfig)
        this.openModuleWindow(localConfig)
        this.switchLight(localConfig)
    }
    
    // Homework 1
    inputName(config) {
      if (config.input) {
        console.log(config.input);
        config.input.addEventListener("keyup", function (event) {
          for (let i = 0; i < 10; i++) {
            if (event.code === "Digit" + i) {
              this.value = this.value.slice(0, -1);
            }
          }
        });
      } else return;
    }
    
    // Homework 2
    openModuleWindow(config) {
      if (config.buttonToModule) {
        console.log(config.buttonToModule);
        let newButton = document.createElement("button");
        newButton.textContent = "Close";
        newButton.className = "closeButton";
        let module = document.createElement("div");
        let isCreated = false;
    
        config.buttonToModule.addEventListener("click", function () {
          console.log("here");
          if (isCreated) {
            return;
          }
          isCreated = true;
          module.className = "module";
          module.textContent = "Module here";
          document.body.appendChild(module);
          module.appendChild(newButton);
        });
    
        newButton.addEventListener("click", function () {
          isCreated = false;
          setTimeout(() => document.body.removeChild(module), 250);
        });
      } else return;
    }
    
    // Homework 3
    switchLight(config) {
      if (config.switchButton) {
        console.log(config.switchButton);
        let switchButton = config.switchButton;
        let i = 0;
        let light = config.trafficLight;
        switchButton.addEventListener("click", function () {
          
          light[i].style.background = light[i].id;
          console.log(light[i].id)
          if (light[i - 1]) light[i - 1].style.background = "";
          else light[2].style.background = "";
          i++;
          if (i > 2) i = 0;
        });
      } else return;
    }
  }