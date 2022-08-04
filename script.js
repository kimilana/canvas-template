//Here we have stored a reference to the canvas in the canvas constant. In the second line we set both a new constant width and the canvas' width property equal to Window.innerWidth (which gives us the viewport width.) In the third line we set both a new constant height and the canvas' height property equal to Window.innerHeight (which gives us the viewport height).
const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//To draw onto the canvas we need to get a special reference to the drawing area called a context. This is done using the HTMLCanvasElement.getContext() method, which for basic usage takes a single string as a parameter representing the type of context you want to retrieve.
const ctx = canvas.getContext('2d');

//The ctx variable now contains a CanvasRendering Context2D object, and all drawing operations on the canvas will involve manipulating this object.

//Color the canvas background.
//Here we are setting a fill color using the canvas' fillStyle property (this takes color values just like CSS properties do), then drawing a rectangle that covers the entire canvas with the fillRect method(the first two parameters are the coordinates of the rectangle's top left-hand corner; the last two are the width and height you want the rectangle drawn at)
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width, height);

//add a small red rectangle 50 pixels from the top and left of the canvas, 100 pixels wide and 150 pixels tall
ctx.fillStyle = 'rgb(255,0,0)';
ctx.fillRect(50, 50, 100, 150);

//overlapping green rectangle
ctx.fillStyle = 'rgb(0,255,0)';
ctx.fillRect(75, 75, 100, 100);

//transparent purple rectangle
ctx.fillStyle = 'rgba(255,0,255,0.75)';
ctx.fillRect(25, 100, 175, 50);
//Draw a stroke: a retangle that is just an outline
ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.lineWidth = 5; //default line width is 1
ctx.strokeRect(25,25,175,200);
