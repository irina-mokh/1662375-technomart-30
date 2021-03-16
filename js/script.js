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
  });
});

/*Services
const tabs = document.querySelectorAll(".services__button");
const tabsItems = document.querySelectorAll(".services__item");
for (n = 0; n < tabs.length; n++) {
  tabs[n].addEventListener("click", function() {
    tabsItems[n].classList.add("services_active");
  });
};
*/

//Slider
const sliderItems = document.querySelectorAll(".slider__item");
let i = 1;
const btnPrev = document.querySelector(".prev-slide");
const btnNext = document.querySelector(".next-slide");

let sliderControls = document.querySelectorAll(".slider__control");

btnPrev.addEventListener("click", function(evt){
  evt.preventDefault();
  sliderRefresh();
  i--;
  if (i < 0) {
    i = sliderItems.length - 1;
  }
  sliderRefresh();
});
btnNext.addEventListener("click", function(evt){
  evt.preventDefault();
  sliderRefresh();
  i++;
  if (i >= sliderItems.length) {
    i = 0;
  }
  sliderRefresh();
});

function sliderRefresh() {
  sliderItems[i].classList.toggle("slider_current");
  sliderControls[i].classList.toggle("current");
};

sliderControls.forEach((dot, i) =>{
  dot.addEventListener("click", (evt) => {
    evt.preventDefault;
    let sliderItem = document.querySelector(".slider__item.slider_current");
    let sliderDot = document.querySelector(".slider__control.current");
    sliderDot.classList.remove ("current");
    sliderItem.classList.remove("slider_current");
    sliderControls[i].classList.add ("current");
    sliderItems[i].classList.add("slider_current");
  })
});
