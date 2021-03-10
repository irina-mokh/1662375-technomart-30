const buttonFeedback = document.querySelector(".button-feedback");
const modalFeedback = document.querySelector(".modal-feedback");

const map = document.querySelector(".map");
const modalMap = document.querySelector(".modal-map");

const btnsBuy = document.querySelectorAll(".hover-button_buy");
const modalAddedToCart = document.querySelector(".modal-added-to-cart");

const modals = document.querySelectorAll(".modal");

buttonFeedback.addEventListener ("click", function(evt){
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
});

map.addEventListener ("click", function(evt){
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modals.forEach((modal) =>{
  modal.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains("modal-show")) {
        evt.preventDefault();
        modal.classList.remove("modal-show");
      }
    }
  });  
  modal.querySelector(".close").addEventListener ("click", function(evt){
    evt.preventDefault();
    modal.classList.remove("modal-show");
  });
});

btnsBuy.forEach((btnBuy) =>{
  btnBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAddedToCart.classList.add("modal-show");
  })
});

const srvcBtns = document.querySelectorAll(".services-button");
srvcBtns.forEach((srvcBtn)=> {
  srvcBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    srvcBtn.classList.add("services__button_active");
  })
});

const btnDelivery = document.querySelector(".btn-delivery");
const btnGarantee = document.querySelector(".btn-garantee");
const btnCredit = document.querySelector(".btn-credit");

btnDelivery.addEventListener("click", function(evt) {
  evt.preventDefault();
  document.querySelector(".services__delivery").classList("services-active");
});
btnGarantee.addEventListener("click", function(evt) {
  evt.preventDefault();
  document.querySelector(".services__garantee").classList("services-active");
});
btnCredit.addEventListener("click", function(evt) {
  evt.preventDefault();
  document.querySelector(".services__credit").classList("services-active");
});