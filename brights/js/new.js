let charBlock = document.querySelector('.char-block');
let forward = document.querySelector('#forward');
let back = document.querySelector('#back');
const img = ["img/boy.png", "img/boy_happy.png"];

const random = () => {
  let random = Math.round(Math.random() * 1.5)
  return random;
};

const createCircle = () => {
  let circle = document.createElement('div');
  circle.classList.add('circle');
  circle.innerHTML = '<img class="img" src=' + '"' + img[random()] + '"' + '>'
  return circle;
};

window.onload = () => {
  for (let i = 0; i <= img.length; i++) {
    charBlock.appendChild(createCircle());
  }
};

forward.addEventListener('click', () => {
  window.requestAnimationFrame(() => {
    let circle = document.querySelector('.circle:last-child');
    circle.classList.add('forward-remove-active');
    circle.addEventListener('animationend', () => {
      charBlock.lastChild.remove();
      window.requestAnimationFrame(() => {
        charBlock.insertBefore(createCircle(), charBlock.firstChild).classList.add('forward-add-active');
        charBlock.addEventListener('animationend', () => {
          charBlock.firstChild.classList.remove('forward-add-active');
        });
      });
    });
  });
});

back.addEventListener('click', () => {
  window.requestAnimationFrame(() => {
    let circle = document.querySelector('.circle:first-child');
    circle.classList.add('back-remove-active');
    circle.addEventListener('animationend', () => {
      charBlock.firstChild.remove();
      window.requestAnimationFrame(() => {
        charBlock.appendChild(createCircle(), charBlock.lastChild).classList.add('back-add-active');
        charBlock.addEventListener('animationend', () => {
          charBlock.lastChild.classList.remove('back-add-active');
        });
      });
    });
  }); 
});