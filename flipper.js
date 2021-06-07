
var colors=['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var button=document.querySelector('button');
var heading=document.querySelector('h2');


button.addEventListener('click', flipper);

function flipper(){

var first='#'; 

for(var i=0; i<6; i++) {
     
const random = Math.floor(Math.random() * colors.length);
first=first+colors[random];
}            

document.body.style.backgroundColor=first;
heading.innerHTML='Hex Color:' + "<br>" + first;

}