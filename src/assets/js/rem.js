setRem()
window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function () {
  setRem()
})

function setRem () {
  const html = document.querySelector('html')
  const width = html.getBoundingClientRect().width
  html.style.fontSize = width / 7.5 + 'px'
}
