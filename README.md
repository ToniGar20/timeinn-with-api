# TimeInn, por Toni Gómez y Toni García

Segundo proyecto de las asignaturas de front DIW y DWEC. Desarrollado conjuntamente por Toni Gómez y Toni García.

La página simula un portal de cine en el que se puede encontrar noticias, información sobre series y películas además de eventos relacionados.

En la versión actual, solamente la home y la sección "Eventos" son accesibles y disponen de elementos interactivos.

A continuación se enlaza la lista de actividades realizadas (TODOs) así cómo el índice del README.

* [**Lista de TODOs de la práctica**](https://github.com/tonigomez02/TimeInn/blob/master/TODO.md)

* **Índice README**:
    * [1. Wireframe](https://github.com/tonigomez02/TimeInn#1-wireframe)
    * [2. Proceso de desarrollo](https://github.com/tonigomez02/TimeInn#2-proceso-de-desarrollo)
    * [3. Fuentes y colores](https://github.com/tonigomez02/TimeInn#3-fuentes-y-colores)
    * [4  Estructura del proyecto](https://github.com/tonigomez02/TimeInn#4-estructura-del-proyecto)
    * [5. Despliegue](https://github.com/tonigomez02/TimeInn#5-despliegue)
    * [6. Herramientas, recursos y fuentes](https://github.com/tonigomez02/TimeInn#6-herramientas-recursos-y-fuentes)
    * [7. Práctica 3: formularios de login y registro](https://github.com/tonigomez02/TimeInn#7-formularios-de-login-y-registro)

## 1. Wireframe

Desarrollo de la idea de la página web en el siguiente Wireframe en Balsamiq: https://balsamiq.cloud/sfm09kg/pyncyqf/r2278

Respecto a la propuesta inicial, se han hecho los siguientes cambios:
* Se modifica el header a una versión que resalte más el título de la página.
* Las cards de noticias de la "Home" distribuyen su información de manera distinta.
* En la "Home" se añaden las cards de los 3 eventos más próximos.
* La sección "Noticias" no se desarrolla al no ser necesario en la entrega final. Se trabaja sobre la sección "Eventos".
* La sección "Eventos" sitúa el mapa a final de la página. La distribución de los botones tiene ligeras modificaciones

De manera añadida, se añaden capturas del wireframe inicial en la carpeta _/docs/wireframe_

## 2. Proceso de desarrollo

### GitHub Projects

El proyecto se ha desarollado íntegramente a través de "GitHub Projects" y sus "Issues":
* https://github.com/tonigomez02/TimeInn/projects/3
* https://github.com/tonigomez02/TimeInn/issues

En el proyecto se han creado cards con "Issues" que representan nuevas funcionalidades, por lo general aquellas relacionadas con los TODO aunque se han generado más en función de errores a resolver. Sobre la dinámica empeada:
* Cada tarjeta tiene un identificador de tipo "TONIXX" que se relaciona con una rama
* Las tarjetas disponen de checkboxes de subtareas
* Se etiquetan las tareas según su naturaleza o lenguajes empleados

### Git branches

Generadas tres ramas de trabajo:
* **Master** - entorno de producción
* **Develop** - punto de encuento o de "merge" para nuevas funcionalidades
* **Bug** - resolución de errores de funcionalidades

Además y cómo se explicaba anteriormente, hay tantas ramas como funcionalidades (TONI1, TONI2, TONI3, TONI999, etc.) en las que se ha trabajado que se desdoblan de develop. De esta manera se ha focalizado el trabajo de cada apartado y los confictos han resultado mínimos y con resolución satisfactoria.

## 3. Fuentes y colores

### Fuentes
* Poppins Semi-Bold 600 para encabezados: https://fonts.google.com/specimen/Poppins
* Ubuntu Light 300 para textos: https://fonts.google.com/specimen/Ubuntu

### Colores
* **Rojo** como color principal de marca
* **Blanco** para texto
* Fondos con tonalidades de **negro**

La documentación completa de las fuentes y la paleta de colores usada se encuentra en el siguiente [documento de Google Sheets](https://docs.google.com/spreadsheets/d/1tuk11ITC-peK8dVaUx9CyS1RAEENNg9_PY31qC1zMJk).

De manera añadida, se añaden capturas de esta documentación en la carpeta _/docs/project-colors-and-fonts_

## 4. Estructura del proyecto

En la raíz, además de la documentación se encuentran las carpetas _docs_ y _src_. La primera contiene capturas relevante en la documentación sucesiva mientras que la segunda contiene toda la aplicación.

La aplicación se organiza de la siguiente manera:
* **css**
  * _event-card_: al ser un elemento común a la "home" y "Eventos", se sitúan los recursos comunes a ambas.
  * _events_: estilos exclusivos de "Eventos".
  * _home_: estilos exclusivos de la "home".
  * _styles_: estilos comunes a todas las páginas.
* **images** - imágenes que se usan para la aplicación.
* **js**
  * _events_ - JS para añadir o eliminar eventos. También se trabaja en cómo se muestra el botón para añadir nuevos eventos. 
  * _generic_ - código JS común para todas las páginas que incluye lo siguiente:
    * Botón para volver a la parte superior de la página.
    * Formulario de suscripción mediante cookie.
    * Apertura y cierre del "Hamburger icon".
  * _home_ - se importan los objetos necesarios así como lógica de aplicación de eventos. La utilidad de este JS es recorrrer los objetos y dibujar los elementos necesarios en el front (3 noticias, 6 películas y 3 eventos). También se genera todo el contenido del calendario por JS.
  * _objects_ - información de los objetos necesarios para la aplicación.
* **resources**
  * _events-form.html_ - formulario para añadir un nuevo evento.
  * _events-form.js_ - lógica de validación del formulario.
  * _footer.html_ - elemento común a todas las páginas inyectado por JQuery.
  * _form-sended.html_ - confirmación de que un evento ha sido añadido.
  * _go-to-top-button.html_ - elemento común a todas las páginas inyectado por JQuery.
  * _header.html_ - elemento común a todas las páginas inyectado por JQuery.
  * _map.js_ - mapa de Google.
  * _subscription-form.html_ - formulario de suscripción que aparece tras tres segundos al cargar la página si no se dispone de cookie asociada.
* **events.html** - página de "Eventos".
* **home.html** - "Homepage" de la aplicación.

## 5. Despliegue

Desarrollo continuo de la aplicación consultable en la URL:  
 https://timeinn-project.netlify.app/

## 6. Herramientas, recursos y fuentes

### Empleado en el proceso de desarrollo
* IntelIJ IDE
* [Netlify](https://www.netlify.com/)
* [README template by Vilanuevand](https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a)
* [Iconos de FontAwesome](https://fontawesome.com/): estrellas de valoración, redes sociales, calendario, papelera, lápiz de edición, etc.

### Páginas web de inspiración

* [Film Affinity](https://www.filmaffinity.com/es/main.html)
* [IMDb](https://www.imdb.com/)
* [SensaCine](https://www.sensacine.com/)
* [AcciónCine](https://www.accioncine.es/)
* [habitissimo](https://www.habitissimo.es/)
* [PcComponentes](https://www.pccomponentes.com/)

### 7. Práctica 3: formularios de login y registro

Formularios de login y registro, accesibles desde el botón login de la cabecera. Validaciones de campos y guardado de datos en local.

#### Mejoras adicionales implementadas en formularios
- Se utiliza "local storage" para tener los datos del último usuario registrado
- Se asocian los inputs de los formularios de manera explícita usando el atributo "aria-label".
- El login del usuario en versiones de móviles o responsive se muestra dentro del "hamburguer" icon
- Si las validaciones del E-mail o contraseña no son correctas, se ilumina el input con el color de error.

#### Controles y validaciones de campos de formularios
- Control de caracteres permitidos en el nombre y el apellido: entre 2 y 20.
- Patrón de validación de contraseña: debe tener al entre 8 y 16 caracteres, al menos un dígito, una minúscula y una mayúscula. Este patrón de validación se ha escogido según las recomendaciones para contraseñas seguras. [Enlace](https://www.xataka.com/basics/como-crear-contrasena-segura-como-gestionar-despues-para-proteger-tus-cuentas)
