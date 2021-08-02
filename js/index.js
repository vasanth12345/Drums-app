const drum = document.querySelectorAll('.d');
const sound = document.querySelectorAll('.sound');
const body = document.querySelector('body');


drum.forEach((d, index)=> {
d.addEventListener('click', ()=> {
//alert(index);	

let rndnum = Math.floor(Math.random() * 360);

let color = "linear-gradient(hsl("+rndnum+",56.8%,100%), hsl("+rndnum+".8,89.8%,95.7%),hsl("+rndnum+",65.6%,90.8%), hsl("+rndnum+",96.5%,67.9%))";

body.style.background = color;

sound[index].play();
sound[index].currentTime =0;

});
});
