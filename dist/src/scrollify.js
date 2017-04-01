'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Scrolify;
function Scrolify(hideObject, scrollContent) {
  var header = document.querySelector(hideObject);
  var content = document.querySelector(scrollContent);
  var position = content.scrollTop;
  // content.classList.add('header-rotate')

  content.addEventListener('scroll', function (e) {
    var scroll = content.scrollTop;
    if (scroll > position) {
      header.classList.remove('header-show');
      header.classList.add('header-hide');
      // content.classList.remove('header-rotate')
    } else {
      header.classList.remove('header-hide');
      header.classList.add('header-show');
      // content.classList.add('header-rotate')
    }
    position = scroll;
  });
}