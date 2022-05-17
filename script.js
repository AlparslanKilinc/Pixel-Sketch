  // Defaults
 let size = 16;
 let col = 'black';
 let click = true;

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

//// click functionality 

document.querySelector('body').addEventListener('click',()=>{
    click=!click;
  });

//// Functions 
function makeGrid(size){
  let grid=document.querySelector('#grid');
  /// clear grid when making a new one
  let boxes= grid.querySelectorAll('div');
  boxes.forEach((div) => div.remove());
  /// set column/row of the grid
  grid.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;

  for(let i=0; i<size*size; i++){
    let box = document.createElement('div');
    box.addEventListener('mouseover',draw);
    box.style.backgroundColor='white';
    box.style.border='1px solid black';
    grid.insertAdjacentElement('beforeend',box);
  }
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
  if(click){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box =>{
     box.addEventListener('mouseover',()=>{
        box.style.backgroundColor= colors;
     });
    });
  }
}

function changeColor(input){
  color = input;
}

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
function getRainbow(){
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  let color = `rgb(${r},${g},${b})`;
  return color;
}

function drawsRainbow (){
  if(click){
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box =>{
   box.addEventListener('mouseover',()=>{
      box.style.backgroundColor= getRainbow();

   });
  });
}

}



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
   box.addEventListener('mouseover',()=>{
      box.style.backgroundColor= 'aliceblue';
   });
});
});

draw.addEventListener('mouseover',()=>{
  let c = col;
  draws(c);
});

rainbow.addEventListener('mouseover',()=>{
  drawsRainbow();
});








