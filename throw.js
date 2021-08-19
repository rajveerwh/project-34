class Throw{
    constructor(bodyA,bodyB){
        var option = {
            hero: hero,
            pointB: pointB,
            stiffnes: 0.01,
            length: 10
        }
            this.pointB=pointB;
            this.throw = Constraint.create(option);
            world.add(world,this.throw);
        }

        fly(){
            this.throw.hero=null;
        }

        launch(bodyA){
            this.throw.hero=hero;
        }

        display(){

        }
        
    }
