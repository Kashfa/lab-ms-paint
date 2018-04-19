const app = function (){
  const canvas = document.getElementById('paint-canvas')
  const context = canvas.getContext('2d');

let size = prompt('Enter Your Brush Size');
let md = false;
  canvas.addEventListener('mousedown', down);
  canvas.addEventListener('mouseup', toggledraw);
  canvas.addEventListener('mousemove',
  function(event){
    const mousePos = getMousePos(canvas, event);
    const posx = mousePos.x;
    const posy = mousePos.y;
    draw(canvas, posx, posy);
  });
  function down() {
    md = true;
  }
  function toggledraw(){
    md = false;
    canvas.style.cursor = "default";
  }
  function getMousePos(canvas, event){
    const rect = canvas.getBoundingClientRect();
    return{
      x:event.clientX - rect.left,
      y:event.clientY - rect.top
    };
  }

  function draw(canvas, posx, posy){
    const context = canvas.getContext('2d');
    if(md){
      canvas.style.cursor = "pointer";
      context.fillRect(posx, posy, size, size);
      context.beginPath(posx, posy);
      context.moveTo(posx, posy);
      context.lineTo(posx, posy);
      context.closePath();
      context.stroke();
    }
  }

  const changeColour = function() {
  context.strokeStyle = this.value;
  context.fillStyle = this.value;
}

const colourPicker = document.querySelector('#input-colour');
colourPicker.addEventListener('change', changeColour);


} //app end





document.addEventListener('DOMContentLoaded', app);
// const resetButton = document.querySelector('#reset-button')
// resetButton.addEventListener('click', handleReset)
//
// const handleReset = function (event){
//   const applePaint = document.querySelector('#reset-button')
//   window.location.reload();
//
// }
