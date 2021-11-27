class PremiumCar {
    constructor (name, color, speed ) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    fastSpeed(){
        return `Max speed = ${this.speed}`;
    }
};


class Porsche extends PremiumCar {
    constructor (name, color, speed, power){
        super(name, color, speed);
        this.power  = power;
    }
    fastSpeed(){
        return `The ${this.name} has a power of ${this.power} hp, it has an ${this.color} color and it has a maximum speed of ${this.speed} km/h.`;
    }
};

const porscheGT = new Porsche('Porsche GT', 'orange', 330, 630);


console.log(porscheGT.fastSpeed());



