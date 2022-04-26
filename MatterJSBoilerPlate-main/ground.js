class ground{

constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    var options = {
        isStatic : true
    }
this.body = Bodies.rectangle(this.x, this.y, this.w, this.h)
World.add(world, this.body)
}
Show(){

    var pos = this.body.position
    push()
    translate(pos.x, pos.y)
rectMode(CENTER)
strokeWeight (4)
fill ("lavender")
rect(0,0, this.w, this.h)
    pop()

}

}