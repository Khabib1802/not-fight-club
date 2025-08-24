'use strict'

// DOM Elements
const elements = {
  // section elements
  homePage: document.querySelector('.js-home-page'),
  character: document.querySelector('.character'),
  settings: document.querySelector('.settings'),
  menu: document.querySelector('.menu'),
  // form elements
  formWrapper: document.querySelector('.js-form-wrapper'),
  formButton: document.querySelector('.js-form-btn'),
  // home page elements
  homePageButton: document.querySelector('.js-form-btn'),
  // username elements
  characterUserName: document.querySelector('.character__username'),
  settingsUserName: document.querySelector('.settings__username'),
  // menu elements
  menuCharacterButton: document.querySelector('#characterid'),
  menuHomePageButton: document.querySelector('#homepageid'),
  menuSettingsButton: document.querySelector('#settingsid'),
  // popup elements
  popup: document.querySelector('.popup'),
  popupBtn: document.querySelector('.popup__btn'),
  changeImageButton: document.querySelector('.character__change-img-btn'),
  popupItems: document.querySelectorAll('.popup__list-item'),
  characterAvatar: document.querySelector('.character__avatar img'),
}

function initFunctions() {
  initForm()
  addMenuButtonHandler()
  initPopup()
  switchTheme()
}

// Submit registration form
function initForm() {
  elements.formButton.addEventListener('click', handleFormSubmit)
}

function handleFormSubmit() {
  const userName = document.querySelector('.js-form-input').value || 'Guest'
  elements.formWrapper.classList.add('none')
  elements.homePage.classList.remove('none')
  elements.menu.classList.remove('none')
  elements.characterUserName.textContent = userName
  elements.settingsUserName.textContent`Username: ${userName}`
}

// Section change menu button handler
function addMenuButtonHandler() {
  elements.menuCharacterButton.addEventListener('click', () => showSection('character'))
  elements.menuHomePageButton.addEventListener('click', () => showSection('homePage'))
  elements.menuSettingsButton.addEventListener('click', () => showSection('settings'))
}

// Add character button handler
function showSection(sectionName) {
  elements.settings.classList.add('none')
  elements.homePage.classList.add('none')
  elements.character.classList.add('none')

  elements[sectionName].classList.remove('none')
}

// Popup function
function initPopup() {
  elements.changeImageButton.addEventListener('click', togglePopup)
  elements.popupBtn.addEventListener('click', closePopup)
  elements.popup.addEventListener('click', handlePopupClick)

  elements.popupItems.forEach((item, index) => {
    item.addEventListener('click', () => changeAvatar(index))
  })
}

function togglePopup() {
  elements.popup.classList.toggle('hidden')
}

function closePopup() {
  elements.popup.classList.add('hidden')
}

function handlePopupClick(event) {
  if (event.target === elements.popup) {
    closePopup()
  }
}

function changeAvatar(index) {
  elements.characterAvatar.src = `assets/img/characters/${index + 1}.jpg`
  closePopup()
}

function switchTheme() {
  const btnChangeTheme =
    document.querySelector('.settings__btn-change-theme')
  const isDarkThemeCached = localStorage.getItem('theme') === 'dark'

  if (isDarkThemeCached) {
    document.documentElement.classList.add('is-dark-theme')
  }

  btnChangeTheme.addEventListener('click', handleThemeSwitcher)
}

function handleThemeSwitcher() {
  const isDarkTheme = document.documentElement.classList.contains('is-dark-theme')
  document.documentElement.classList.toggle('is-dark-theme')

  localStorage.setItem(
    'theme',
    isDarkTheme ? 'light' : 'dark'
  )
}

initFunctions()