
var canvas=new fabric.Canvas('myCanvas');

var pelotay=0;
var pelotax=0;

var hoyoy=400;
var hoyox=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) { 
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
		top:hoyoy,
		left:hoyox	
		});
		canvas.add(hole_obj); });
	    
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToHeight(50);
		ball_obj.scaleToWidth(50);
		ball_obj.set({
		top:pelotay,
		left:pelotax
			});
		canvas.add(ball_obj);
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((pelotax==hoyox)&&(pelotay==hoyoy)){ canvas.remove(ball_obj);
	 console.log("¡Lo lograste!"); document.getElementById("hd3").innerHTML="¡Lo lograste!"; 
	 document.getElementById("myCanvas").style.borderColor="red";
										  }
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(pelotay >=5){
			pelotay = pelotay - block_image_height;
			canvas.remove(ball_obj)
			new_image();
		}
	}

	function down()
	{
		 if(pelotay <=450)
			 {
				 pelotay = pelotay + block_image_height;
				 canvas.remove(ball_obj);
				 new_image();
			 }
	}

	function left()
	{
		if(pelotax >5)
		{
		pelotax = pelotax - block_image_width;
			console.log("block image width = " + block_image_width); 
			console.log("When Left arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj); new_image();
		}
	}

	function right()
	{
		if(pelotax <=1050)
		{
			pelotax = pelotax + block_image_width;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

