  // Defaults
 let size = 16;
 let col = 'black';


// get Html elements 
const grid=document.querySelector('#grid');

 /// Size Options
 const Sixteen = document.querySelector('.Sixteen');
 const Thirty_two = document.querySelector('.Thirty_two');
 const Sixty_four = document.querySelector('.Sixty_four');

 //// Side Options 
 const color = document.querySelector('#picker');
 const draw = document.querySelector('.draw');
 const eraser = document.querySelector('.eraser');
 const rainbow = document.querySelector('.rainbow');
 const clear = document.querySelector('.clear');



//// Functions 
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

function draws (colors){
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box =>{
   box.addEventListener('click',()=>{
      box.style.backgroundColor= colors;
   });

});
}
function getRainbow(){
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  let color = `rgb(${r},${g},${b})`;
  return color;

}

function drawsRainbow (){
  
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box =>{
   box.addEventListener('click',()=>{
      box.style.backgroundColor= getRainbow();

   });
  });

}

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

/// Default Run 
window.onload = () => {
  makeGrid(size,grid);
  draws(col);
}


//// Side Option Buttons 


color.addEventListener('change' , (e)=>{
    col = e.target.value;
    draws(col);
    });


clear.addEventListener('click' , ()=>{
  let g = grid;
  let s = size;
  clearUp();
  makeGrid(s,g);
  draws(col);

});

eraser.addEventListener('click' , ()=>{
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box =>{
   box.addEventListener('click',()=>{
      box.style.backgroundColor= 'aliceblue';
   });
});
});

draw.addEventListener('click',()=>{
  let c = col;
  draws(c);
});

rainbow.addEventListener('click',()=>{
  drawsRainbow();
});





//// Button Actions For Size 

  Sixteen.addEventListener('click' ,()=>{
    let g = grid;
    clearUp();
    size=16;
    makeGrid(size,g);
    let c = col;
    draws(c);
  });

  Thirty_two.addEventListener('click' ,()=>{
    let g = grid;
    clearUp();
    size = 32;
    makeGrid(size,g);
    let c = col;
    draws(c);
  });

  Sixty_four.addEventListener('click' ,()=>{
    let g = grid;
    clearUp();
    size = 64;
    makeGrid(size,g);
    let c = col;
    draws(c);
  });
