// ---- ---- Const ---- ---- //
const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');
const executeCodes = () => {
  cookiesBox.classList.add('show');
};

window.addEventListener('load', executeCodes);
