# Página web de Dixit.com.py

Sitio institucional de Dixit.

## Requirements

  * [Node.js](http://nodejs.org)
  * [grunt](http://gruntjs.com/): `npm install -g grunt-cli`
  * [bower](http://bower.io): `npm install -g bower`

## Develop

La primera vez que se accede al proyecto hay que descargar las dependencias con bower:

```bash
bower install
```

Repetir esto cada vez que existan cambios en el archivo `bower.json`.

Para trabajar en el proyecto, ejecutar el siguiente comando:

```bash
grunt server
```

## Build

Para crear una nueva versión publicable del sitio, ejecutar el comando:

```bash
grunt build
```

El contenido resultante se encuentra en la carpeta `dist`.