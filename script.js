'use strict'

const formButton = document.querySelector('.form__button')
const form = document.querySelector('.form-wrapper')


formButton.addEventListener('click', () => {
  const userName = document.querySelector('.form__input').value
  form.classList.toggle('none')
  alert(userName)
})

document.querySelector('form').addEventListener('submit', (event) => event.preventDefault())

const formContent = document.querySelector('.form')

console.log(formContent.textContent)