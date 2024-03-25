
const container = document.querySelector("#container")
const buttonReset = document.querySelector("#button-reset")
const buttonSize = document.querySelector("#button-size")

const buttonNormal = document.querySelector("#button-normal-pen")
const buttonRainbow = document.querySelector("#button-rainbow-pen")
const buttonOpacity = document.querySelector("#button-opacity-pen")

const gridUI = document.querySelector("#gridUI")

let size = 16;
let board = 25 * 16 // pokud je velikost 16 tak deska ma 400px
let boardBoxes = 16 * 16 // velikost desky

let penNormal = true;
let penRainbow = false;
let penOpacity = false;


buttonNormal.addEventListener("click", () => {
  penNormal = true;
  penRainbow = false;
  penOpacity = false;
})

buttonRainbow.addEventListener("click", () => {
  penNormal = false;
  penRainbow = true;
  penOpacity = false;
})

buttonOpacity.addEventListener("click", () => {
  penNormal = false;
  penRainbow = false;
  penOpacity = true;
})


// container.style.height = board
// container.style.width = board

buttonSize.addEventListener("click", () => {
    
    size = parseInt(prompt("How big?"));
    if (size >= 101 || size == "" || isNaN(size) == true)
    {
      alert("ERROR")
    }
    else
    {
    for (let i = 0; i < boardBoxes; i++) {
      container.removeChild(container.firstChild)
    }
    gridUI.textContent = `${size} x ${size}`
    board = 25 * size;
    boardBoxes = size * size;
    container.style.height = board  + "px";
    container.style.width = board  + "px";
    generateDesk() ;
    }
 })



function generateDesk () 
{
  for (let i = 1;i <= boardBoxes ; i++) {
    const box = document.createElement("div")
    box.classList.add("box")   
    let opacity = 0;
    container.appendChild(box) 

    box.addEventListener("mouseover", () => {
      if (penNormal == true)
      {
        opacity = 0;
        box.style.opacity = `100%`
        box.style.backgroundColor = "black"
        box.style.border = 'none';
      }
      if (penRainbow == true)
      {
        opacity = 0;
        box.style.opacity = `100%`
        box.style.backgroundColor = `rgb(${generateNum ()}, ${generateNum ()}, ${generateNum ()})`
        box.style.border = 'none';
      }
      if (penOpacity == true)
      {
        opacity += 10;
        box.style.backgroundColor = `black`
        box.style.opacity = `${opacity}%`
        box.style.border = 'none';
      }
     });


     buttonReset.addEventListener("click", () => {
      opacity = 0;
      box.style.opacity = `100%`
      box.style.backgroundColor = "white"
      box.style.border = 'solid black 1px';
   
    })
    } 
}

function generateNum () 
{
  return Math.floor(Math.random() * 255);
}

generateDesk () 