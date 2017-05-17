### VRT-test usando Backstopjs
-----
Instalar dependencias: ```npm install```

Para correr el proyecto (static server de carpete public):
```npm start```

##### VRT

Configuracion de backstopjs, el archivo por si mismo es bastante descriptivo con las siguiente secciones.
```vrt-config.json```


**viewports:** En esta sección se definen los tamaños de pantalla para los cuales se realizaran las pruebas.

**scenarios:** Contiene los diversos ecenarios (paths) a probar, es posible añadir interaccion al path a probar con scripts javascript, un ejemplo de esto se encuentra en ```vrt/casper_scripts/increase_progress.js```.

**paths:** Contiene los paths en los cuales se almacenaran las imagenes de referencia, prueba y donde se ubicara el reporte resultante.

**General:** existen configuraciones generales que le indican a backstopjs que motor va a utilizar para realizar las pruebas en esta caso phantomjs.

###### Comandos:

```npm run backstop -- reference --configPath=vrt-config.json``` - corre el test the referencia.

```npm run backstop -- test --configPath=vrt-config.json ``` - corre el test de comparacion.

#### Ejemplo de workflow:

1. Crear un feature branch ```feature/one``` y realizar los cambios deseados.
2. Crear un test branch ```test/one``` desde **master**.
3. Realizar el test de referencia ```npm run backstop -- reference --configPath=vrt-config.json```.
4. Hacer un **git merge** de ```feature/one``` en ```test/one```.
5. Realizar el test de comparacion ```npm run backstop -- test --configPath=vrt-config.json```.
6. El reporte se abrira automaticamente en el navegador mostrando los resultados del VRT mostrando un sumario y los test que pasaron o fallaron.

**Nota:** El reporte html resultante esta en ```vrt/backstop_data/html_report```.
