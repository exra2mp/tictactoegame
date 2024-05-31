
let drawCompare= 45;
let drawVerf='';
let winVerf=[];
let idCheck='';
let turnCounter= 1;
let click0Counter = 0;
let clickXCounter = 0;
let started=1;
let score1= 0;
let score2= 0;
let size = 40;
let pageX = 0;
let pageY = 0;
let backgButton=  document.querySelector('.btn');
let pointerM = document.getElementById('pointer');
let buttonS= document.querySelectorAll('.btn').length;


document.body.appendChild(pointerM);

pointerM.style.setProperty('--size',size+'px');

window.addEventListener('mousemove', function(mouseMovDirection){
    pageX = mouseMovDirection.clientX;
    pageY = mouseMovDirection.clientY;
    pointerM.style.left = mouseMovDirection.clientX-size/2+'px';
    pointerM.style.top = mouseMovDirection.clientY-size/2+'px';
});

for(let i=0;i<buttonS;i++){
 document.querySelectorAll('.btn')[i].addEventListener('click', function (){
    let buttonObject = this;
    if(turnCounter===1 || turnCounter===3 || turnCounter===5 || turnCounter===7 || turnCounter===9){
        buttonObject.classList.add('clickedX');
        pointerM.classList.add('blue');
        turnCounter+=1;
        pointerM.classList.remove('red');
     } else if(turnCounter===2 || turnCounter===4 || turnCounter===6 || turnCounter===8){
        buttonObject.classList.add('clicked0');
        pointerM.classList.add('red');
        turnCounter+=1;  
        pointerM.classList.remove('blue');      
     }
     checkSpecificClasses();
 })}


 function checkSpecificClasses() {
    
    const buttons = document.querySelectorAll("#choices button");
  
    const firstWinCondition = [0, 3, 6]; 
    const secondWinCondition = [1, 4, 7];
    const thirdWinCondition = [2, 5, 8];
    const fourthWinCondition= [0, 1, 2];
    const fifthWinCondition= [3, 4, 5];
    const sixthWinCondition= [6, 7, 8];
    const seventhWinCondition= [0, 4, 8];
    const eightWinCondition= [2 , 4, 6];
    const allBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    
      if (firstWinCondition.every(index => buttons[index].classList.contains("clickedX"))) {
        document.getElementById('status').textContent = 'Player X Won!!';
        console.log('Player X Won');
      }
      else if (secondWinCondition.every(index => buttons[index].classList.contains("clickedX"))){
        document.getElementById('status').textContent = 'Player X Won!!';
        console.log('Player X Won');}
      else if (thirdWinCondition.every(index => buttons[index].classList.contains("clickedX"))){
        document.getElementById('status').textContent = 'Player X Won!!';
        console.log('Player X Won');}
      else if (fourthWinCondition.every(index => buttons[index].classList.contains("clickedX"))){
        document.getElementById('status').textContent = 'Player X Won!!';
        console.log('Player X Won');}
      else if (fifthWinCondition.every(index => buttons[index].classList.contains("clickedX"))){
        document.getElementById('status').textContent = 'Player X Won!!';
        console.log('Player X Won');}
      else if (sixthWinCondition.every(index => buttons[index].classList.contains("clickedX"))){
        document.getElementById('status').textContent = 'Player X Won!!';
        console.log('Player X Won');}
      else if (seventhWinCondition.every(index => buttons[index].classList.contains("clickedX"))){
        document.getElementById('status').textContent = 'Player X Won!!';
        console.log('Player X Won');}
      else if (eightWinCondition.every(index => buttons[index].classList.contains("clickedX"))){
        document.getElementById('status').textContent = 'Player X Won!!';
        console.log('Player X Won');}
      else if (firstWinCondition.every(index => buttons[index].classList.contains("clicked0"))){
        document.getElementById('status').textContent = 'Player 0 Won!!';
        console.log('Player 0 Won');}
      else if (secondWinCondition.every(index => buttons[index].classList.contains("clicked0"))){
        document.getElementById('status').textContent = 'Player 0 Won!!';
        console.log('Player 0 Won');}
      else if (thirdWinCondition.every(index => buttons[index].classList.contains("clicked0"))){
        document.getElementById('status').textContent = 'Player 0 Won!!';
        console.log('Player 0 Won');}
      else if (fourthWinCondition.every(index => buttons[index].classList.contains("clicked0"))){
        document.getElementById('status').textContent = 'Player 0 Won!!';
        console.log('Player 0 Won');}
      else if (fifthWinCondition.every(index => buttons[index].classList.contains("clicked0"))){
        document.getElementById('status').textContent = 'Player 0 Won!!';
        console.log('Player 0 Won');}
      else if (sixthWinCondition.every(index => buttons[index].classList.contains("clicked0"))){
        document.getElementById('status').textContent = 'Player 0 Won!!';
        console.log('Player 0 Won');}
      else if (seventhWinCondition.every(index => buttons[index].classList.contains("clicked0"))){
        document.getElementById('status').textContent = 'Player 0 Won!!';
        console.log('Player 0 Won');}
      else if (eightWinCondition.every(index => buttons[index].classList.contains("clicked0"))){
        document.getElementById('status').textContent = 'Player 0 Won!!';
        console.log('Player 0 Won');}
      else if(allBoard.every(index => buttons[index].classList.contains("clickedX") ||
                buttons[index].classList.contains("clicked0"))){
                  document.getElementById('status').textContent = 'DRAW!!';
                  console.log("draw");
      }
}  


