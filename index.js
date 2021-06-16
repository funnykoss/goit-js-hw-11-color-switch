const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stoptBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');
let intervalColorId;

startBtn.addEventListener('click', StartSwitchColor);
stoptBtn.addEventListener('click', StopSwitchColor);




function StartSwitchColor() {
   
intervalColorId = setInterval(() => {
   bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]; 
}, 1000);
    startBtn.disabled = true;
   
}

function StopSwitchColor() {
    clearInterval(intervalColorId);
    startBtn.disabled = false;
}

