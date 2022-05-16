// Defaults
let size=32;



// get Html elements 
const grid=document.querySelector('#grid');

makeGrid(size,grid);

function makeGrid(size,grid){
    
    grid.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    for(let i=0; i<size*size; i++){
      let box =document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor='white';
      box.style.border='2px solid black';
      grid.appendChild(box);
    }

}
