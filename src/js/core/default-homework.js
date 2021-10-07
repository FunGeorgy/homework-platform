export class Homework {
    config
    img
    obj
    
    
    constructor(config){
        console.log(config)
        this.config = config
        this.addHomework()
        this.obj = document.getElementById("head")
        this.img = document.createElement('img')
        this.img.className = "image"
        this.img.id = "image"
        this.img.src = config.img
        this.obj.appendChild(this.img)
    }
    
    addHomework(){
        console.log(document.getElementById("homework"))
        document.getElementById("homework").innerHTML = this.config.code;
    }

    
}

