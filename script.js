// Defaults



// get Html elements 
const grid=document.querySelector('#grid');

/// Size Options
 const Sixteen = document.querySelector('.Sixteen');
 const Thirty_two = document.querySelector('.Thirty_two');
 const Sixty_four = document.querySelector('.Sixty_four');

 //// Side Options 

 const color = document.querySelector('#picker');
 const eraser = document.querySelector('.eraser');
 const rainbow = document.querySelector('.rainbow');
 const clear = document.querySelector('.clear');




function clearUp(){
  const boxes = document.querySelectorAll('.box');
    boxes.forEach(box =>{
      box.remove();
    });
}



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

//// Side Option Buttons 

color.addEventListener('change' , (e)=>{
  
  console.log(e.target.value);

});






clear.addEventListener('click' , ()=>{
  clearUp();
});





//// Button Actions For Size 

  Sixteen.addEventListener('click' ,()=>{
    // Clear Grid 
    let g = grid;
    clearUp();
    // Make new grid size
    makeGrid(16,g);
  });

  Thirty_two.addEventListener('click' ,()=>{
    // Clear Grid 
    let g = grid;
    clearUp();
    // Make new grid size
    makeGrid(32,g);
  });

  Sixty_four.addEventListener('click' ,()=>{
    // Clear Grid 
    let g = grid;
    clearUp();
    // Make new grid size
    makeGrid(64,g);
  });
