window.addEventListener('load', function () {

  const loading  = document.getElementById('intro-loading');
  const btnMulai = document.getElementById('btn-mulai');

  setTimeout(function () {

    loading.style.display = 'none';
    btnMulai.style.display = 'inline-block';

  }, 3500);

});


/* =========================
   MASUK APP
========================= */
function masukApp(){
const intro=document.getElementById('intro');
const app=document.getElementById('app');
intro.classList.add('hide');
setTimeout(()=>{
intro.style.display='none';
app.style.display='flex';
/* POSISI TENGAH */
wrapper.style.left='50%';
wrapper.style.top='50%';
wrapper.style.transform='translate(-50%,-50%)';

},1000);

}
/* =========================
   KALKULATOR
========================= */
let currentInput = '0';
let operator = null;
let firstValue = null;
const layar = document.getElementById('layar');
function updateLayar() {
  layar.textContent = currentInput;
  layar.classList.remove('pop');
  void layar.offsetWidth;
  layar.classList.add('pop');
}
/* INPUT ANGKA */
function input(num) {
  if (currentInput === '0') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateLayar();
}
/* INPUT TITIK */
function inputDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateLayar();
}
/* CLEAR */
function clearAll() {
  currentInput = '0';
  operator = null;
  firstValue = null;
  updateLayar();
}
/* OPERATOR */
function setOp(op) {

  firstValue = parseFloat(currentInput);
  operator = op;
  currentInput = '0';
}


/* HITUNG */

function calculate() {

  if (operator === null || firstValue === null) return;

  let secondValue = parseFloat(currentInput);
  let result = 0;

  switch(operator) {

    case '+':
      result = firstValue + secondValue;
      break;

    case '-':
      result = firstValue - secondValue;
      break;

    case '*':
      result = firstValue * secondValue;
      break;

    case '/':
      result = secondValue !== 0
        ? firstValue / secondValue
        : 'Error';
      break;
  }

  currentInput = result.toString();

  operator = null;
  firstValue = null;

  updateLayar();
}


/* PLUS MINUS */

function toggleSign() {

  currentInput = (parseFloat(currentInput) * -1).toString();

  updateLayar();
}


/* PERSEN */

function percent() {

  currentInput = (parseFloat(currentInput) / 100).toString();

  updateLayar();
}
function updateLayar() {
  layar.textContent = currentInput;
  layar.setAttribute('data-text', currentInput);
  layar.classList.remove('pop');
  void layar.offsetWidth;
  layar.classList.add('pop');
}
/* =========================
   CLOCK
========================= */
function updateClock(){

  const now = new Date();

  let h = String(now.getHours()).padStart(2,'0');
  let m = String(now.getMinutes()).padStart(2,'0');

  document.getElementById('clock').textContent =
    `${h}:${m}`;
}
setInterval(updateClock,1000);
updateClock();
/* =========================
   DRAG SYSTEM
========================= */
const wrapper = document.querySelector('.wrapper');
wrapper.style.left = '50%';
wrapper.style.top = '50%';
wrapper.style.transform = 'translate(-50%, -50%)';
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
/* TEKAN */
wrapper.addEventListener('mousedown', function(e){
  isDragging = true;
  offsetX = e.clientX - wrapper.offsetLeft;
  offsetY = e.clientY - wrapper.offsetTop;
});
/* LEPAS */
document.addEventListener('mouseup', function(){
  isDragging = false;
});
/* GERAK */
document.addEventListener('mousemove', function(e){
  if(!isDragging) return;
  wrapper.style.left = (e.clientX - offsetX) + 'px';
  wrapper.style.top = (e.clientY - offsetY) + 'px';
  wrapper.style.transform = 'none';
});
/* =========================
EYES FOLLOW CALCULATOR
========================= */

window.addEventListener('load',()=>{

const wrapper = document.getElementById('app');
const pupils=document.querySelectorAll('.pupil');
function updateEyes()
{
const wrapperRect=wrapper.getBoundingClientRect();

const targetX=wrapperRect.left+(wrapperRect.width/2);
const targetY=wrapperRect.top+(wrapperRect.height/2);

pupils.forEach(pupil=>{

const eye=pupil.parentElement;

const eyeRect=eye.getBoundingClientRect();

const eyeX=eyeRect.left+(eyeRect.width/2);
const eyeY=eyeRect.top+(eyeRect.height/2);

const angle=Math.atan2(
targetY-eyeY,
targetX-eyeX
);

const moveX=Math.cos(angle)*22;
const moveY=Math.sin(angle)*22;

pupil.style.transform=
`translate(calc(-50% + ${moveX}px),calc(-50% + ${moveY}px))`;

});

}

setInterval(updateEyes,16);

});
