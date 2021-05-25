class Throw1{
 constructor(bodyA,pointB){
     var options = {
         bodyA: bodyA,
         pointB: pointB,
         stiffness: 0.01,
         length: 10
     }
     this.pointB = pointB;
     this.throw1 = Constraint.create(options);
     World.add(world, this.throw1)
 }
fly(){
   this.throw1.bodyA = null
}

launch(bodyA){
this.throw1.bodyA = bodyA
}
}