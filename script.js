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
  toggleMenu(e)
 })
})

function toggleMenu(e){
 e.preventDefault()
 submenuOpeners.forEach(sub => {
  if(sub !== e.target){
   sub.classList.remove('submenu-active')
  } else {
   e.target.classList.toggle('submenu-active')
  }
 })
}
