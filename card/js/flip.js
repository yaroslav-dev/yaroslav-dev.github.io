var flip = document.querySelector('.flip-card-inner');
var cvc = document.querySelector('#cvc');

cvc.addEventListener("focus", () => flip.classList.add('flip'), true);