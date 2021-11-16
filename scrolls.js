
/*-----------mouse animation------------*/

let mouse = document.querySelector('#mouse');

//console.log(mouse);

let myAnimation = requestAnimationFrame(aniFn);

let posX = 0;
let posY = 0;
let targetPosX = 0;
let targetPosY = 0;
let g = 0.05;


function aniFn()
{
    mouse.style.left = posX+ 'px';
    mouse.style.top = posY+ 'px';
    
    //move algorithm
    posX += (targetPosX-posX) * g;
    posY += (targetPosY-posY) * g;
   
    requestAnimationFrame(aniFn);
}


document.addEventListener('mousemove', setPos);

function setPos(e)
{
    targetPosX = e.clientX;
    targetPosY = e.clientY;
}








/*-----------scroll animation------------*/

let main = document.querySelector('#main');

let contentA = document.querySelector('#contentA');
let contentB = document.querySelector('#contentB');
let contentC = document.querySelector('#contentC');
let contentD = document.querySelector('#contentD');



let widthA = contentA.getBoundingClientRect().width;
let widthB = contentB.getBoundingClientRect().width;
let widthC = contentC.getBoundingClientRect().width;
let widthD = contentD.getBoundingClientRect().width;

let container = document.querySelector('#contentContainer');


let totalScrollMt;
//console.log(rect.width);

let elemBody = document.body;
let nowScrollVal;

window.addEventListener('scroll', scrollHandler);


function scrollHandler(e)
{ 
   //console.log(window.scrollY);
   container.style.left = -window.scrollY + 'px';
}

function resizeHandler()
{

    totalScrollMt += window.innerHeight;
    elemBody.style.height = totalScrollMt + 'px';
}

function  init() {
    totalScrollMt = widthA + widthB + widthC;
    console.log(totalScrollMt);
    resizeHandler();
}

init();



/*-----------------에어호버------------------*/

let air = document.querySelector('#airHover');
console.log(air);
air.addEventListener('mouseover', airmouse);
air.addEventListener('mouseout', airmouseOut);

let airText = document.querySelector('#airtext');
function airmouse() {
    air.classList.add('active');
    airText.classList.add('active');
}
function airmouseOut() {
    air.classList.remove('active');
    airText.classList.remove('active');
}





/*-----------------에어호버------------------*/


let lee = document.querySelector('#lee2');
console.log(lee);
lee.addEventListener('mouseover', leemouse);
lee.addEventListener('mouseout', leemouseOut);
function leemouse() {
    lee.classList.add('active');
}
function leemouseOut() {
    lee.classList.remove('active');
}

/*-----------------아나호버------------------*/

let ana = document.querySelector('#mosspic');
console.log(ana);
ana.addEventListener('mouseover', anamouse);
ana.addEventListener('mouseout', anamouseOut);
function anamouse() {
    ana.classList.add('active');
}
function anamouseOut() {
    ana.classList.remove('active');
}

/*-----------------텍스트호버------------------*/

let moss = document.querySelector('#Ctext2');
console.log(moss);
moss.addEventListener('mouseover', mossmouse);
moss.addEventListener('mouseout', mossmouseOut);
function mossmouse() {
    moss.classList.add('active');
}
function mossmouseOut() {
    moss.classList.remove('active');
}

/*-----------------소행성호버------------------*/

let Dtext2 = document.querySelector('#power');
console.log(Dtext2);
Dtext2.addEventListener('mouseover', Dtext2mouse);
Dtext2.addEventListener('mouseout', Dtext2mouseOut);
function Dtext2mouse() {
    Dtext2.classList.add('active');
}
function Dtext2mouseOut() {
    Dtext2.classList.remove('active');
}

/*-----------------원호버-----------------*/

let one = document.querySelector('#Atext01');
console.log(one);
one.addEventListener('mouseover', onemouse);
one.addEventListener('mouseout', one2mouseOut);
function onemouse() {
    one.classList.add('active');
}
function one2mouseOut() {
    one.classList.remove('active');
}

/*-----------------미러호버-----------------*/

let Dtext7 = document.querySelector('#mirror');
console.log(Dtext7);
Dtext7.addEventListener('mouseover', Dtext7mouse);
Dtext7.addEventListener('mouseout', Dtext7mouseOut);
function Dtext7mouse() {
    Dtext7.classList.add('active');
}
function Dtext7mouseOut() {
    Dtext7.classList.remove('active');
}

/*-----------------미러호버-----------------*/

let second= document.querySelector('#second2');
console.log(second)
second.addEventListener('mouseover', secondmouse);
second.addEventListener('mouseout', secondmouseout);

function secondmouse() {
    second.classList.add('active');
}
function secondmouseout() {
    second.classList.remove('active');
}