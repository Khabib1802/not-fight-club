'use strict'

const formWrapper = document.querySelector('.js-form-wrapper')
const homePage = document.querySelector('.js-home-page')
const formButton = document.querySelector('.js-form-btn')
const homePageButton = document.querySelector('.js-form-btn')
const characterUserName = document.querySelector('.character__user-name')
const menuCharacterButton = document.querySelector('#characterid')
const menuHomePageButton = document.querySelector('#homepageid')
const character = document.querySelector('.character')
const menu = document.querySelector('.menu')

formButton.addEventListener('click', () => {
  const userName = document.querySelector('.js-form-input').value
  formWrapper.classList.toggle('none')
  homePage.classList.toggle('none')
  menu.classList.toggle('none')
  characterUserName.textContent = userName
})

menuCharacterButton.addEventListener('click', () => {
  character.classList.remove('none')
  homePage.classList.add('none')
})

menuHomePageButton.addEventListener('click', () => {
  character.classList.add('none')
  homePage.classList.remove('none')
})

const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup__btn');

const togglePopup = (popup) => {
  if (popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
  }
};

const handleButton = (event) => {
  const element = event.target;

  togglePopup(popup);
}

const popupClose = () => {
  popup.classList.add('hidden');
};

popupBtn.addEventListener('click', popupClose);
popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    popup.classList.add('hidden');
  }
});

const changeImageButton = document.querySelector('.character__change-img-btn')

changeImageButton.addEventListener('click', () => {
  popup.classList.toggle('hidden')

})

const popupItems = document.querySelectorAll('.popup__list-item')

popupItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.querySelector('.character__avatar img').src =
      `assets/img/characters/${index + 1}.jpg`

    popup.classList.toggle('hidden')
  })
})
