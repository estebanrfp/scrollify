export default function Scrollify (hideObject, scrollContent) {
  var header = document.querySelector(hideObject)
  var content = document.querySelector(scrollContent)
  var position = content.scrollTop

  content.addEventListener('scroll', () => {
    let scroll = content.scrollTop
    if (scroll > position) {
      header.classList.remove('header-show')
      header.classList.add('header-hide')
    } else {
      header.classList.remove('header-hide')
      header.classList.add('header-show')
    }
    position = scroll
  })
}