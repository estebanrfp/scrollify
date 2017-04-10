# Scrollify lite

Scrollify lite is a simple code for hiding header when scrolling down and showing when scrolling up. 

This lets the content to be more focus and shine.

Try scrolling down and then up.

## Install

```
npm install scrollify-lite
```

## Usage

```
// css

.header-show {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all .5s cubic-bezier(.45,1,.22,1);
    transition: all .5s cubic-bezier(.45,1,.22,1);
}

.header-hide {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: all .3s cubic-bezier(.55,.055,.675,.19);
    transition: all .3s cubic-bezier(.55,.055,.675,.19);
}

// js

import scrollify from 'scrollify-lite'

scrollify('.header', '.Post')
```
## Example

[scrollify-lite](https://desarrolloactivo.com/articulos/scrollify-lite/)

## Credits

[estebanrfp](https://desarrolloactivo.com/)

## License

[MIT](https://opensource.org/licenses/MIT)
