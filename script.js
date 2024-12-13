function eebydeeby(){
    console.log("Surprise! You found me!!!! :D");
}
// once again, code is provided by CodingNepal on YT
const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d");

let isDrawing = false;
// making it so it doesn't automatically draw as soon as you hover your mouse over the canvas

window.addEventListener("load", ()=>{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});
const startDraw = () => {
    isDrawing = true;
    ctx.beginPath();
}
const drawing = (e) => {
    if(!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    // allows you to make marks on the canvas
    ctx.stroke(); 
}
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", ()=> isDrawing = false);