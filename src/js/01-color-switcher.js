const btnStart=document.querySelector(`[data-start]`);
console.log(btnStart);
const btnStop=document.querySelector(`[data-stop]`);
console.log(btnStart);

btnStart.addEventListener('click',()=>{
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.setAttribute('disabled', true);
    console.log("Button was clicked");});
btnStop.addEventListener('click',()=>{
    clearInterval(timerId);
    btnStart.removeAttribute('disabled');
    console.log("Button was clicked");});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  