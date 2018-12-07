setRem()
window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', function () {
  setRem()
})

var setRemFontSize

function setRem () {
  const html = document.querySelector('html')
  const width = html.getBoundingClientRect().width
  setRemFontSize = width / 7.5
  html.style.fontSize = setRemFontSize + 'px'
}

export default setRemFontSize
