export class GeometryModel{
    perimetre
    square
    name
}

export class Box extends GeometryModel{
    side
    constructor(side){
        super()
        this.name = "квадрат"
        this.side = side

    }

    getPerimetre(){
        this.perimetre = 4* this.side
        return this.perimetre
    }

    getSquare(){
        this.square = Math.pow(this.side, 2)
        return this.square
    }
}

export class Rectangle extends GeometryModel{
    a
    b
    
    constructor(a,b){
        super()
        this.name = "прямоугольник"
        this.a = a
        this.b = b
    }

    getPerimetre(){
        this.perimetre = 2*(this.a+this.b)
        return this.perimetre
    }

    getSquare(){
        this.square = this.a*this.b
        return this.square
    }
}

export class Rhomb extends GeometryModel{
    side
    height
    constructor(side, height){
        super()
        this.name = "ромб"
        this.side = side
        this.height = height
    }
    getPerimetre(){
        this.perimetre = 4* this.side
        return this.perimetre
    }

    getSquare(){
        this.square = this.side*this.height
        return this.square
    }
}

export class Parallelogram extends GeometryModel{
    a
    b
    height
    constructor(a,b,height){
        super()
        this.name = "паралелограм"
        this.a = a
        this.b = b
        this.height = height
    }

    getPerimetre(){
        this.perimetre = 2*(this.a+this.b)
        return this.perimetre
    }

    getSquare(){
        this.square = this.a*this.height
        return this.square
    }
}

export class Trapezoid extends GeometryModel{
    a
    b
    c 
    d
    height
    constructor(a,b,c,d,height){
        super()
        this.name = "трапеция"
        this.a = a
        this.b = b
        this.c = c 
        this.d = d
        this.height = height
    }
    getPerimetre(){
        this.perimetre = this.a+this.b+this.c+this.d
        return this.perimetre
    }

    getSquare(){
        this.square = 0.5*this.height*(this.a+this.b)
        return this.square
    }   
}

export class Circle extends GeometryModel{
    radius
    constructor(radius){
        super()
        this.name = "окружность"
        this.radius = radius
    }

    getPerimetre(){
        this.perimetre = 2*Math.PI*this.radius
        return this.perimetre
    }

    getSquare(){
        this.square =Math.PI*(this.radius^2)
        return this.square
    }   
}

export class Ellipse extends GeometryModel{
    height
    width

    constructor(height, width){
        super()
        this.name = "эллипс"
        this.height = height
        this.width = width
    }

    getPerimetre(){
        this.perimetre = 2*Math.PI*Math.sqrt((Math.pow(this.width, 2) + Math.pow(this.height, 2))*0.5)
        return this.perimetre
    }

    getSquare(){
        this.square =Math.PI*(this.width*this.height*0.25)
        return this.square
    }   

}
