const buttonFeedback = document.querySelector('.button-feedback');
const modalFeedback = document.querySelector('.modal-feedback');

const map = document.querySelector('.map');
const modalMap = document.querySelector('.modal-map');

const buttonBuy = document.querySelector('.hover-button_buy');
const modalAddedToCart = document.querySelector('.modal-added-to-cart')

const modal = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.close');

buttonFeedback.addEventListener ('click', function(evt){
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
});

map.addEventListener ('click', function(evt){
  evt.preventDefault();
  modalMap.classList.add('modal-show')
});

modalClose.addEventListener ('click', function(evt){
  evt.preventDefault();
  modal.classList.remove('modal-show');
});

buttonBuy.addEventListener ('click', function(evt){
  evt.preventDefault();
  modalAddedToCart.classList.add('modal-show');
})

modal.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
    }
  }
});