document.body.classList.add('fade')
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.remove('fade')

  window.addEventListener('resize', () => {
    setVh()
  })

  setVh()

  const menuTrigger = document.getElementById('menu-trigger')
  menuTrigger.addEventListener('click', () => {
    document.documentElement.classList.add('show-menu')
  })

  const closeMenu = document.getElementById('close-menu')
  closeMenu.addEventListener('click', () => {
    document.documentElement.classList.remove('show-menu')
  })
})

function setVh() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
