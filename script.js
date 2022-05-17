  /// Default
  let color = 'black';
  let click = true;
  //// Side Options 
  const picker = document.querySelector('#picker');
  picker.addEventListener('change' , (e)=>{
   color = e.target.value;
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
     box.addEventListener('click',draw);
     box.style.backgroundColor='white';
     box.style.border='1px solid black';
     grid.insertAdjacentElement('beforeend',box);
   }
 }
 
 /// Default Run 
 window.onload = () => {
   makeGrid(16);
 }
 
 function draw (){
   if(click){
     if(color==='rainbow') {
       let rainbow = getRainbow();
       this.style.backgroundColor=rainbow;
     }else{
       this.style.backgroundColor = color;
     }
   }
 }
 
 function clearUp(){
   let grid=document.querySelector('#grid');
   let boxes = grid.querySelectorAll('div');
   boxes.forEach((div) => (div.style.backgroundColor='white'));
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
 
   document.querySelector('#grid').addEventListener('click' , () => click=!click);













