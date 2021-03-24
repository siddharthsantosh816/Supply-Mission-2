class Box{

    constructor(x,y,width,height){
       
      var options={
          restitution:0.3
      }

      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);

    }
     
   display(x1,y1){
       
        var pos=this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(x1,y1,this.width,this.height);
 
   }




}