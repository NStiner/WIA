/*
     Name: Nicole Stiner
     Date: 01/07/15
     Class & Section:  WIA-1501
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "black";

            ctx.fillRect(50, 25, 50, 100);
            ctx.strokeRect(50, 25, 50, 100);

        }
    }
};

//NEED TO FIX THE STROKE BEFORE THIS IS COMPLETED


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

var theCanvas2 = document.getElementById('Canvas2');
if(theCanvas2 && theCanvas2.getContext){
    var ctx2 = theCanvas2.getContext("2d");
    if(ctx2){
        ctx2.beginPath();
        ctx2.arc(50,50,30,0,2*Math.PI);
        ctx2.strokeStyle = 'black';
        ctx2.stroke();
        ctx2.beginPath();
        ctx2.arc(50,50,20,0,2*Math.PI);
        ctx2.fillStyle = 'rgba(200,0,0,.5)';
        ctx2.fill();
    }
};




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
var theCanvas3 = document.getElementById('Canvas3');
if(theCanvas3 && theCanvas3.getContext){
    var ctx3 = theCanvas3.getContext("2d");
    if(ctx3){
        ctx3.beginPath();
        ctx3.fillStyle = 'yellow';
        ctx3.strokeStyle = 'blue';
        ctx3.lineWidth = 5;
        ctx3.moveTo(100,100);
        ctx3.lineTo(210,100);
        ctx3.lineTo(250,40);
        ctx3.lineTo(290,100);
        ctx3.lineTo(400,100);
        ctx3.lineTo(300,150);
        ctx3.lineTo(350,250);
        ctx3.lineTo(250,185);
        ctx3.lineTo(150,250);
        ctx3.lineTo(200,150);
        ctx3.lineTo(100,100);
        ctx3.stroke();
        ctx3.fill();
    }
};


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
var theCanvas4 = document.getElementById('Canvas4');
if (theCanvas4 && theCanvas4.getContext) {
    var ctx4 = theCanvas4.getContext("2d");
    var gradient=ctx4.createLinearGradient(200,45,410,150);
    gradient.addColorStop(0,"black");
    gradient.addColorStop(1,"white");
    if(ctx4){
        ctx4.beginPath();
        ctx4.arc(200,150,105,Math.PI,0);
        ctx4.strokeStyle = 'black';
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(95,150); //move starting point
        ctx4.bezierCurveTo(95, 150, 132, 120, 167, 150);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(167,150); //move starting point
        ctx4.bezierCurveTo(167, 150, 197, 120, 232, 150);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(232,150); //move starting point
        ctx4.bezierCurveTo(232, 150, 267, 120, 305, 150);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 4;
        ctx4.moveTo(200,138); //move starting point
        ctx4.bezierCurveTo(200, 138, 200, 270,175, 210);
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(200,45); //move starting point
        ctx4.bezierCurveTo(200, 45, 160, 82.5, 167,150 );
        ctx4.stroke();
        ctx4.beginPath();
        ctx4.strokeStyle = 'black';
        ctx4.lineWidth = 1;
        ctx4.moveTo(200,45); //move starting point
        ctx4.bezierCurveTo(200, 45, 240, 82.5, 233,150 );
        ctx4.stroke();
    }
};

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text
var theCanvas5 = document.getElementById('Canvas5');
if (theCanvas5 && theCanvas5.getContext) {
    var ctx5 = theCanvas5.getContext("2d");
    if (ctx5) {
        var text = "This is my 3D example text!";

        //draw a simple text
        ctx5.shadowColor = '#000';
        ctx5.shadowBlur = 5;
        ctx5.shadowOffsetX = 5;
        ctx5.shadowOffsetY = 5;
        ctx5.font = "1.5em Georgia";
        ctx5.fillStyle = 'rgb(0,0,250)';
        ctx5.fillText(text, 20, 80);
        ctx5.font = "1em Georgia";
        ctx5.fillStyle = 'green';
        ctx5.fillText(text, 50, 130);
        ctx5.font = ".5em Georgia";
        ctx5.fillStyle = 'blue';
        ctx5.fillText(text, 80, 180);

    }
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
var theCanvas6 = document.getElementById('Canvas6');
if(theCanvas6 && theCanvas6.getContext){
    var ctx6 = theCanvas6.getContext("2d");
    if(ctx6){
       var srcImg = document.getElementById("logo");

        //Draw image exactly the way it is
        ctx6.drawImage(srcImg, -50, -130);


        //Draw a scaled down image
        /*ctx6.drawImage(srcImg, 50,50, 200, 100);*/

        //Slice a section out of the logo and draw onto that part of the canvas
        /*ctx6.drawImage(srcImg, 285,40,95,140, 50,50,190,200);*/
    }
}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
var theCanvas7 = document.getElementById("Canvas7");
if(theCanvas7 && theCanvas7.getContext){
    var ctx7 = theCanvas7.getContext("2d");
    if(ctx7){
       ctx7.fillStyle = "blue";
        ctx7.fillRect(0,0,500,500);

        //Draw house
        ctx7.fillStyle = "brown";
        ctx7.strokeStyle = "black";
        ctx7.lineWidth = 2;

        ctx7.fillRect(150,200,150,150);
        ctx7.stroke();

        //Draw Roof
        ctx7.beginPath();
        ctx7.moveTo(90,200);
        ctx7.lineTo(150,125);
        ctx7.lineTo(210,200);
        ctx7.stroke();
        ctx7.fill();


        //Draw Sun
        ctx7.fillStyle= "yellow";
        var degree = 360;
        var radian = (degree/180)*Math.PI;

        ctx7.beginPath();
        ctx7.arc(50,50, 50, 50, radian, true);
        ctx7.fill();

    }
}

