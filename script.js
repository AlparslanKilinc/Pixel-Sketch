  /// Default
  window.onload = () => {makeGrid(16);}
  let color = 'black';
  let BorderChanges=false;
  let click = false;
  document.body.onmousedown = () => (click = true);
  document.body.onmouseup = () => (click = false);

  function getPosition(element) {
    let xPosition = 0;
    let yPosition = 0;
    while (element) {
       xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
       yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
       element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}
 

  function makeGrid(size){
    let grid=document.querySelector('#grid');
      //// Touch Move 
      grid.addEventListener("touchmove", event =>{
        event.preventDefault();
        event.stopPropagation();
        let myLocation = event.touches[0];
        let realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        let y = getPosition(document.getElementById('grid')).y;
        let x = getPosition(document.getElementById('grid')).x;
        console.log(y+grid.clientHeight);
        console.log(x+grid.clientWidth);
        if(x+grid.clientWidth>myLocation.clientX &&  myLocation.clientX>x  && y+grid.clientHeight>myLocation.clientY && myLocation.clientY >y)
          if(color==='rainbow') {
            let rainbow = getRainbow();
            realTarget.style.backgroundColor=rainbow;
            }else{
            realTarget.style.backgroundColor = color;
            }
         });
    let boxes= grid.querySelectorAll('div');
    /// clear grid when making a new one
    boxes.forEach((div) => div.remove());
    /// set column/row of the grid
    grid.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows= `repeat(${size}, 1fr)`;
    for(let i=0; i<size*size; i++){
      let box = document.createElement('div');
      box.addEventListener('mousemove', draw);
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
