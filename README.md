# Scrollify lite

Scrollify lite nos oculta automáticamente el encabezado al desplazarse hacia abajo y lo muestra al desplazarse hacia arriba

- Este es un código simple para ocultar y mostrar el encabezado al usar el Scroll

- Trate de desplazarse hacia abajo y luego hacia arriba.

## Install

```
npm install scrollify-lite
```

## Uso

```
css

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

import scrollify from 'scrollify-lite'

scrollify('.header', '.Post')
```

## Créditos

- [estebanrfp](https://desarrolloactivo.com/)

## License

[MIT](https://opensource.org/licenses/MIT)
