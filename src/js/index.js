import "../scss/style.scss"

new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination'
  },

  breakpoints: {
    320: {
      enable: true
    },
    768: {
      enabled: false
    }
  }
})

let buttonBrands = document.querySelector('.brands--show-all')
let hideSlides = document.querySelector('.slider__wrapper')
let isOpened = false

buttonBrands.addEventListener('click', function () {
  buttonBrands.classList.toggle('button--show-all--opened')
  hideSlides.classList.toggle('change--height')
  if (!isOpened) {
    buttonBrands.textContent = 'Скрыть'
    isOpened = true
  } else {
    buttonBrands.textContent = 'Показать все'
    isOpened = false
  }
})

let buttonTechnique = document.querySelector('.technique--show-all')
let hideSlidesTechnique = document.querySelector(
  '.technique > .slider > .slider__wrapper'
)
let isOpenedTechnique = false

buttonTechnique.addEventListener('click', function () {
  buttonTechnique.classList.toggle('button--show-all--opened')
  hideSlidesTechnique.classList.toggle('change--height')
  if (!isOpenedTechnique) {
    buttonTechnique.textContent = 'Скрыть'
    isOpenedTechnique = true
  } else {
    buttonTechnique.textContent = 'Показать все'
    isOpenedTechnique = false
  }
})

let buttonText = document.querySelector('.text__buttons')
let hideText = document.querySelector('.text__content')
let isOpenedText = false

buttonText.addEventListener('click', function () {
	buttonText.classList.toggle('button--show-all--opened')
  hideText.classList.toggle('change--height')
  if (!isOpenedText) {
    buttonText.textContent = 'Скрыть'
    isOpenedText = true
  } else {
    buttonText.textContent = 'Показать все'
    isOpenedText = false
  }
})
let burgerOpen = document.querySelector('.header__burger')
let burgerMenu = document.querySelector('.burger')
let pageOpacity = document.querySelector('.page')
let burgerClose = document.querySelector('.burger-header__buttons > .round-button__close')
let buttonOpenChat = document.querySelector('.round-button__chat')
let modalChat = document.querySelector('.modal-chat')
let modalChatClose = document.querySelector(
  '.modal-chat__button > .round-button__close'
)
let buttonChat = document.querySelector('.header__chat')
let buttonOpenCall = document.querySelector('.round-button__chatcopy')
let modalCall = document.querySelector('.modal-call')
let modalCallClose = document.querySelector(
  '.modal-call__button > .round-button__close'
)
let buttonCall = document.querySelector('.header__call')
let overlay = document.getElementById('overlay')
let overlayBurger = document.getElementById('overlayBurger')
let isOpened2 = false

burgerOpen.addEventListener('click', function (e) {
  e.stopPropagation()
  burgerMenu.classList.add('opened')
	overlay.style.display = "block"
  isOpened2 = true
})
burgerClose.addEventListener('click', function () {
	burgerMenu.classList.remove('opened')
  overlay.style.display = "none";
})
overlay.addEventListener('click', function () {
  if (isOpened2) {
    burgerClose.click()
    isOpened2 = false
  }
})

let isOpened3 = false
buttonOpenChat.addEventListener('click', function (e) {
	e.stopPropagation()
  modalChat.classList.add('opened')
	burgerClose.click()
  isOpened3 = true
	overlay.style.display = "block"
	overlayBurger.style.display = "block"
})
modalChatClose.addEventListener('click', function (e) {
	e.stopPropagation()
	modalChat.classList.remove('opened')
  overlay.style.display = "none"
	overlayBurger.style.display = "none"
	isOpened3 = false
})
overlayBurger.addEventListener('click', function () {
  if (isOpened3) {
    modalChatClose.click()
    isOpened3 = false
  }
})
buttonChat.addEventListener('click', function (e) {
  e.stopPropagation()
  modalChat.classList.add('opened')
  overlay.style.display = "block"
	overlayBurger.style.display = "block"
	isOpened3 = true
})

let isOpened4 = false
buttonOpenCall.addEventListener('click', function (e) {
	e.stopPropagation()
  modalCall.classList.add('opened')  
	burgerClose.click() 
	overlay.style.display = "block"
	overlayBurger.style.display = "block"
  isOpened4 = true
})
modalCallClose.addEventListener('click', function (e) {
	e.stopPropagation()
	modalCall.classList.remove('opened')
  overlay.style.display = "none"
	overlayBurger.style.display = "none"
	isOpened4 = false
 
})
overlayBurger.addEventListener('click', function () {
  if (isOpened4) {
    modalCallClose.click()
    isOpened4 = false
  }
})
buttonCall.addEventListener('click', function (e) {
	e.stopPropagation()
  modalCall.classList.add('opened')
  overlay.style.display = "block"
	overlayBurger.style.display = "block"
	isOpened4 = true
})
