import { Homework } from "./default-homework";
import { Box, Rhomb, Parallelogram, Circle, Ellipse, Trapezoid } from "./Homework 7-10-21/geometry-model";
import { Rectangle } from "./Homework 7-10-21/geometry-model";
import * as PIXI from "pixi.js"
import anime from 'animejs/lib/anime.es.js';

export class Homework11_12 extends Homework{
    inputCont = document.getElementById("inputBox");
    inputDiv = document.getElementById('div_input')
    button = document.getElementById("check_button");
    object = document.getElementById("object_figure");
    field = document.getElementById("field")

    constructor(config){
        super(config)
        this.object.style.width = '300px'
        this.object.style.height='300px'
        this.button.addEventListener('click', ()=> this.switchGeometry(this.inputCont.value))
        this.createField()
    }

    
    switchGeometry(name){
        console.log(name)
        switch(name){
            case "квадрат":
                {
                    this.figureDrawing(Box, ['a'], 'Введите сторону квадрата')
                }
                break;
            case "прямоугольник":
                {
                    this.figureDrawing(Rectangle, ['a', 'b'], 'Введите стороны прямоугольника')
                }
                break;
            case "окружность":
                {
                    this.figureDrawing(Circle, ['radius'], 'Введите радиус окружности')
                }
                break;
            case "параллелограмм":
                {
                    this.figureDrawing(Parallelogram, ['a', 'b', 'height'], 'Введите стороны паралелограма')
                }
                break;
            case "эллипс":
                {
                    this.figureDrawing(Ellipse, ['height', 'width'], 'Введите высоту и ширину эллипса')
                }
                break;
            case "ромб":
                {   
                    this.figureDrawing(Rhomb, ['side', 'height'], 'Введите сторону и высоту ромба')
                }
                break;
            case "трапеция":
                {
                    this.figureDrawing(Trapezoid, ['a', 'b', 'c', 'd', 'height'], 'Введите стороны трапеции')
                }
                break;
            default:
                return alert("Введите корректное название фигуры!")
        }
    }

    figureDrawing(className, sideNames, textButton){
        this.inputDiv.replaceChildren()
        var massive = []
        for(let i = 0; i < sideNames.length; i++){
            const input = document.createElement('input')
            input.id = 'inputName'+i
            massive.push(input)
            this.inputDiv.appendChild(input)
        }
        
        const button = document.createElement('button')
        const finalText = document.createElement('div')
        button.textContent = textButton
        button.id = 'boxButton'
        this.inputDiv.appendChild(button)
        // finalText.textContent = "тут должна быть реклама"
        this.inputDiv.appendChild(finalText)
        button.addEventListener('click', ()=> {
            this.object.replaceChildren()
            let mass = massive
            for(let i = 0; i < sideNames.length; i++){
                var secondMass = []
                const input = mass[i]
                if(mass.length<0 && input.value.replace(/\D/, '') == '') return alert("введите цифры!")
                else{
                    let number = parseInt(input.value)
                    secondMass.push(number)
                    console.log(input.value, secondMass)
                } 
            }
            const box = new className(...secondMass)
            console.log(box)
            finalText.textContent = this.takeData(box)
            this.drawObject(className, ...secondMass)
            
        })
    }

    takeData(className){
        const text = "Периметр: "+ (className.getPerimetre())+"\n Площадь: "+(className.getSquare())
        return text
    }

    drawObject(name, ...stats){
        
    const app = new PIXI.Application({
    width: 200, height: 200, backgroundColor: 0xc0c0c0, resolution: window.devicePixelRatio || 1,
    })
     this.object.appendChild(app.view);
     const container = new PIXI.Container();
     app.stage.addChild(container);
     const graphics = new PIXI.Graphics();
     graphics.clear()
     container.addChild(graphics)
     container.x = app.screen.width / 2;
     container.y = app.screen.height /2;
     const x = 0
        const y = 0
    

    switch(name){
            case Box:
            console.log(stats[0])
            graphics.lineStyle(2, 0xFEEB77, 1);
            graphics.beginFill(0xFEEB77);
            graphics.drawRect(x, y, stats[0], stats[0]);
            graphics.endFill();
            console.log(graphics)
            break;
        case Rectangle:
            graphics.lineStyle(2, 0xFEEB77, 1);
            graphics.beginFill(0xFEEB77);
            graphics.drawRect(x, y, stats[0], stats[1]);
            graphics.endFill(); 
            break;
        case Parallelogram:
            graphics.lineStyle(2, 0xFEEB77, 1);
            graphics.beginFill(0xFEEB77);
            graphics.drawRect(x, y, stats[0], stats[1]);
            graphics.endFill();
            break;
        case Circle:
            console.log(stats[0])
            graphics.lineStyle(0);
            graphics.beginFill(0xFEEB77, 1);
            graphics.drawCircle(x, y, stats[0]);
            graphics.endFill();
            break;
        case Ellipse:
            graphics.lineStyle(0);
            graphics.beginFill(0xFEEB77, 1);
            graphics.drawEllipse(x, y, stats[0], stats[1]);
            graphics.endFill();
            break;
        case Rhomb:
            graphics.lineStyle(2, 0xFEEB77, 1);
            graphics.beginFill(0xFEEB77, 1);
            graphics.drawRect(x, y, stats[0], stats[0]);
            graphics.endFill();
            graphics.rotation = 0.5
            break;
        case Trapezoid:
            graphics.lineStyle(2, 0xFEEB77, 1);
            graphics.beginFill(0xFEEB77, 1);
            graphics.moveTo(x,y)
            graphics.lineTo(x, stats[0])
            graphics.lineTo(stats[5], stats[1])
            graphics.lineTo(stats[2], stats[3])
            graphics.lineTo(stats[4], stats[3])
            graphics.closePath();
            graphics.endFill();
            break;
    }  
    graphics.pivot.x = container.width / 2;
    graphics.pivot.y = container.height / 2;
    }

    createField(){
        const app = new PIXI.Application({
            width: 418, height: 315, backgroundColor: 0xc0c0c0, resolution: window.devicePixelRatio || 1,
            })
        this.field.appendChild(app.view)
        const background = PIXI.Sprite.from('/src/assets/images/field.jpg')
        // background.anchor.set(0.5)
        app.stage.addChild(background)
        const movementSpeed = 0.05;
        const ball = PIXI.Sprite.from('/src/assets/images/ball.png')
        const start = PIXI.Sprite.from('/src/assets/images/start.png')
        
        ball.alpha = 0;
        start.scale.set(0.03)
        ball.scale.set(0.05)
        ball.x = app.screen.width*0.5
        ball.y = app.screen.height*0.5
        ball.acceleration = new PIXI.Point(0);
        start.x = app.screen.width*0.36
        start.y =  app.screen.height*0.7

        let leftScore = 0;
        let rightScore = 0;
        let info = "click on the ball, \n when it on the gates to take the point"
        const leftText = new PIXI.Text(leftScore, textStyle())
        const rightText = new PIXI.Text(rightScore, textStyle())
        const infoText = new PIXI.Text(info, textStyle())

        leftText.x = 20
        leftText.y = 30

        rightText.x = 390
        rightText.y = 30

        infoText.x = 100
        infoText.y = background.height * 0.5
        infoText.alpha = 0;

        background.addChild(ball, start, leftText, rightText, infoText)

        anime({
            targets: start,
            alpha: 0.2,
            direction: 'alternate',
            easing: 'linear',
            loop: true,
            delay: 800
        })

        start.interactive = true;
        start.buttonMode = true;

        start.on('pointerdown', ()=> {
            anime({
                begin: ()=>{ball.alpha = 1},
                targets: ball.scale,
                x: 0.03,
                y: 0.03,
                easing:'linear',
                delay: 700,
                complete: ()=> {
                    ball.interactive = true;
                    anime({
                        targets: infoText,
                        alpha: 1,
                        easing: 'linear',
                        delay: 800,
                        complete: ()=>{
                            setTimeout(()=> infoText.alpha = 0, 6000)
                        }
                    })
                }
            })
            
            anime.remove(start)
            start.alpha = 1
            start.interactive = false;
            start.buttonMode = false;
        })

        ball.on('pointerdown', ()=> {
            if(ball.x > 0 && ball.x < 10 && ball.y > 100 && ball.y < 190){
                leftScore++
                rightText.text = leftScore
            }
            else if(ball.x < 418 && ball.x > 390 && ball.y > 100 && ball.y < 190){
                rightScore ++
                leftText.text = rightScore
            }
            console.log(leftScore, rightScore)
        })

        app.ticker.add((delta) => {
            ball.acceleration.set(ball.acceleration.x * 0.99, ball.acceleration.y * 0.99);
        
            const mouseCoords = app.renderer.plugins.interaction.mouse.global;
        
            // If the mouse is off screen, then don't update any further
            if (app.screen.width > mouseCoords.x || mouseCoords.x > 0
                || app.screen.height > mouseCoords.y || mouseCoords.y > 0) {
                // Get the red square's center point
                const ballCenterPosition = new PIXI.Point(
                    ball.x + (ball.width * 0.5),
                    ball.y + (ball.height * 0.5),
                );
        
                const toMouseDirection = new PIXI.Point(
                    mouseCoords.x - ballCenterPosition.x,
                    mouseCoords.y - ballCenterPosition.y,
                );
        
                const angleToMouse = Math.atan2(
                    toMouseDirection.y,
                    toMouseDirection.x,
                );
        
                const distMouseBall = distanceBetweenTwoPoints(
                    mouseCoords,
                    ballCenterPosition,
                );
                const ballSpeed = distMouseBall * movementSpeed;
        
                // Calculate the acceleration of the red square
                ball.acceleration.set(
                    Math.cos(angleToMouse) * ballSpeed,
                    Math.sin(angleToMouse) * ballSpeed,
                );
            }
        
            ball.x += ball.acceleration.x * delta;
            ball.y += ball.acceleration.y * delta;

            
        });
        
    }
}

function distanceBetweenTwoPoints(p1, p2) {
    const a = p1.x - p2.x;
    const b = p1.y - p2.y;

    return Math.hypot(a, b);
}

function textStyle(){
    const style = new PIXI.TextStyle({
        align: "center",
        breakWords: true,
        dropShadowAngle: 0.1,
        fill: [
            "brown",
            "black"
        ],
        fillGradientType: 1,
        fontSize: 12,
        fontStyle: "italic",
        fontVariant: "small-caps",
        fontWeight: "bold",
        stroke: "white",
        strokeThickness: 1,
        textBaseline: "bottom"
    })
    return style
}

