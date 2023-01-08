  /// Default
  window.onload = () => {makeGrid(16);}
  let color = 'black';
  let BorderChanges=false;
  let click = false;
  document.body.onmousedown = () => (click = true);
  document.body.onmouseup = () => (click = false);
  document.addEventListener("touchstart",true);
  document.addEventListener("touchend",false);
 

  function makeGrid(size){
    let grid=document.querySelector('#grid');
    let boxes= grid.querySelectorAll('div');
    /// clear grid when making a new one
    boxes.forEach((div) => div.remove());
    /// set column/row of the grid
    grid.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;
  
    for(let i=0; i<size*size; i++){
      let box = document.createElement('div');
      box.addEventListener('mousemove', draw);
      box.addEventListener("touchmove", draw);
     
      
      
      box.style.backgroundColor='white';
      if(BorderChanges) box.style.border='0px';
      else box.style.border='1px solid black';
      grid.insertAdjacentElement('beforeend',box);
    } 
 }

 function draw (event){
   event.preventDefault();
   if(click){
     if(color==='rainbow') {
       let rainbow = getRainbow();
       this.style.backgroundColor=rainbow;
     }else{
       this.style.backgroundColor = color;
     }
   }
 }

  //// Side Options 
 function BorderChange(){
  let grid=document.querySelector('#grid');
  let boxes= grid.querySelectorAll('div');
  BorderChanges = !BorderChanges;
  if(BorderChanges)boxes.forEach((div) => div.style.border='0px');
  else boxes.forEach((div) => div.style.border='1px solid black');
  }
 
 function clearUp(){
   let grid=document.querySelector('#grid');
   let boxes = grid.querySelectorAll('div');
   boxes.forEach((div) => (div.style.backgroundColor='white'));
 }

 function changeColor(input){color=input;}

 const picker = document.querySelector('#picker');
 picker.addEventListener('change' , (e)=>{
  color = e.target.value;
  });

 const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
 function getRainbow(){
   const r = randomBetween(0, 255);
   const g = randomBetween(0, 255);
   const b = randomBetween(0, 255);
   let color = `rgb(${r},${g},${b})`;
   return color;
 }
