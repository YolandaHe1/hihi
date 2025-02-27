var rects = [];
var numRects = 200;
var cir;
function setup() {
	createCanvas(1500, 900);

	for(i=0;i<numRects;i++){
		r = new rectObj(random(width),random(height), random(10,50), random(10,80) ) // generate a rectObj
		rects.push(r); //add it to the array.
	}

	cir = new circleObj(20);// create a new circle object
	console.log(rects);
}

function draw(){
	background((233),(214),(224));

	for(i=0;i<numRects;i++){
		rects[i].disp();
		rects[i].collide( cir ); //collide against the circle object
	}

	cir.disp(mouseX,mouseY); //pass the x,y pos in to the circle.

}

function rectObj(x,y,w,h){
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.color = color(random(233),(22),(185))
	this.hit = false;

	this.collide = function(obj){

		this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

		if(this.hit){
			this.color = color((144), (0), (219)) //set this rectangle to be black if it gets hit
		}

	}

	this.disp = function(){
		noStroke();
		fill(this.color);
		this.x += 3 //move to the right!
		if(this.x > width){ //loop to the left!
			this.x = -this.w;
		}
		rect(this.x,this.y,this.w,this.h);

	}

}

function circleObj(dia){
	this.dia = dia;
	this.color = color((230),(42),(139))
	this.x;
	this.y;

	this.disp = function(x,y){
		this.x = x;
		this.y = y;
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.dia,this.dia);
	}

}