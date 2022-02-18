![Covid](http://www.madarme.co/portada-web.png)
# Título de proyecto: Casos COVID en Colombia. 😷
***
En este proyecto se realiza un algoritmo para una página web donde se visualizan los casos de Covid en Colombia según los departamentos y municipios.
## 📜Tabla de Contenido
1. [Características](#características)
2. [Contenido del proyecto](#contenido-del-proyecto)
3. [Tecnologías](#%EF%B8%8Ftecnologías)
4. [IDE](#ide)
5. [Instalación](#instalación)
6. [Demo](#demo)
7. [Autores](#autores)
8. [Institución Académica](#institución-académica)

___
#### 💡Características:

Proyecto de una página web para la visualización de casos de Covid en Colombia, la cual se compone de las siguientes páginas:
1. En la página principal (index.html) el usuario encuentra información de interés sobre el coronavirus, además se encuentra con 3 opciones para conocer los casos de Covid.
2. La primera opción "Casos positivos por departamento" contiene un botón donde el usuario, al hacer clic, lo redireccionará a la página "ref1" donde podrá seleccionar cada departamento y visualizar en una tabla los casos de Covid de acuerdo al sexo (masculino - femenino) con su respectiva gráfica.
3. La segunda opción "Casos positivos por municipio" contiene un botón donde el usuario, al hacer clic, lo redireccionará a la página "ref2" donde podrá seleccionar cada municipio y visualizar en una tabla los casos de Covid de acuerdo a la fuente de contagio (relacionado - importado) con su respectiva gráfica.
4. Con la tercera opción "Total de casos positivos en Colombia" el usuario, al hacer clic, lo redireccionará a la página "ref3" donde podrá visualizar en una tabla todos los casos de Covid en los departamentos de Colombia con su respectiva gráfica.
* Para el proyecto se utilizó la lectura de datos JSON, donde se los casos de Covid con todos los datos correspondientes. 
* Carga dinámica del JSON
* El archivo JSON utilizado se encuentra en: [JSON COVID](https://martinmedinaruvian.github.io/json/covid19ColombiaMarzo.json "JSON COVID")
* Utilización de la Api de Google Chart para la realización de las gráficas y las tablas: [Google Charts](https://developers.google.com/chart/interactive/docs "Google Charts")
___
#### 📝Contenido del proyecto:

- [index.html](https://gitlab.com/jarlinandresfb/casos-covid/-/blob/master/index.html "index.html") : este es el archivo principal del proyecto.
- [ref1.html](https://gitlab.com/jarlinandresfb/casos-covid/-/blob/master/html/ref1.html "ref1.html") : archivo donde se encuentran los casos de Covid por departamentos.
- [ref2.html](https://gitlab.com/jarlinandresfb/casos-covid/-/blob/master/html/ref2.html "ref2.html"): archivo donde se encuentran los casos de Covid por municipio.
- [ref3.html](https://gitlab.com/jarlinandresfb/casos-covid/-/blob/master/html/ref3.html "ref3.html") : archivo donde se encuentran el total de casos de Covid en Colombia.
- [estadistica.js](https://gitlab.com/jarlinandresfb/casos-covid/-/blob/master/js/estadistica.js "estadistica.js") : archivo donde se encuentran la lógica del proyecto, contiene los algoritmos utilizados para la realización de las tablas y los gráficos.
- [index.css](https://gitlab.com/jarlinandresfb/casos-covid/-/blob/master/css/index.css "index.css"): archivo donde se encuentran los estilos utilizados para el diseño de la página.
___
#### 🛠️Tecnologías:

- [HTML5](https://developer.mozilla.org/es/docs/HTML/HTML5 "HTML5") : es la tecnología que permite la creación de sitios web gracias a la amplitud de elementos, atributos y etiquetas. 
- [JavaScript](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Qu%C3%A9_es_JavaScript "JavaScript"): lenguaje que permite implementar funciones en las páginas web. Es la tecnología que hace realidad el diseño dinamico de un sitio web.
- [CSS3](https://desarrolloweb.com/manuales/css3.html "CSS3"): es la tecnología que permite el diseño de la página web, con la utilización de multiples estilos.
- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/ "Bootstrap"): es la biblioteca utilizada para el diseño de la página web.
- [Google Charts](https://developers.google.com/chart/interactive/docs "Google Charts"): es la tecnología que permite crear tablas y gráficos estadistícos.
___
#### 📺IDE:

- El proyecto se desarrolla con la utilización de Visual Studio Code.
- Se utiliza el visor de JSON, para visualizar los datos guardados dentro del JSON-(http://jsonviewer.stack.hu/).
___
#### ⚙Instalación:

NOTA: Para la interacción por consola del proyecto es necesario la instalación de Firefox Developer Edition - [descargar](https://www.mozilla.org/es-ES/firefox/developer/ "descargar")


```sh
1. Se debe descargar el proyecto completo.
2. Invocar el index.html desde el navegador Firefox Developer Edition
```

___
#### 🔍Demo:

Para la demostración de la aplicación de los casos de COVID visite: [Casos COVID](http://ufps16.madarme.co/casos-covid/ "Casos COVID")
___
#### 👥Autores:

1. Jarlin Andres Fonseca Bermón 1151758 - jarlinandresfb@ufps.edu.co
2. Natalia Ortiz Armesto        1151770 - nataliaoa@ufps.edu.co
___
#### 🏫Institución Académica:
Proyecto desarrollado en la materia de Programación Web del [Programa de Ingeniería de Sistemas](https://ingsistemas.cloud.ufps.edu.co/ "Programa de Ingeniería de Sistemas") de la [Universidad Francisco de Paula Santander](https://ww2.ufps.edu.co/ "Universidad Francisco de Paula Santander")
