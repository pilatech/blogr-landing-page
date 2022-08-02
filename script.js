const submenuOpeners = document.querySelectorAll('.nav__link--menu')
const nav = document.querySelector('.nav')
const closeBtn = document.querySelector('.nav__icon--close')
const openBtn = document.querySelector('.nav__icon--open')

openBtn.addEventListener('click', () => {
 nav.classList.add('menu-active')
})

closeBtn.addEventListener('click', () => {
 nav.classList.remove('menu-active')
})

submenuOpeners.forEach(item => {
 item.addEventListener('click', (e) => {
  e.preventDefault()
  e.target.classList.toggle('submenu-active')
 })
})

