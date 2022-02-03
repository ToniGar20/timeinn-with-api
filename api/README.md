# API JSON-Server para carga de contenido y autorizaciones - Asyncronus JS

Se disponen de dos API que cargan todo el contenido de la web (eventos y películas) tanto en el front como en la página de eventos. El contenido de las noticias del frontpage
solamente carga si el usuario ha logueado, disponiendo de un token almacenado en cookies.

## Funcionamiento

1. A través del archivo "crud.json" cargará todo el contenido de la web a exepción del módulo de noticias del frontpage
2. Para ver las noticias el usuario tendrá que registrarse o loguear.
3. Realizada la acción se mostrará el email del usuario y en el proceso de autentificación, se almacenará el token en la cookie llamada "loginToken"
4. Siendo leído esta cookie con el token, se solicitará el contenido de las noticias guardado en el endpoint asociado al archivo auth.json

## Estructura y código modificado sobre el proyecto de JS síncrono

El javascript asociado a estos añadidos del proyecto se encuentra diferentes archivos del directorio /src/js
* home.js -> importa la función de generación de eventos y consulta un endpoint para obtener los datos de las películas con funciones asíncronas (líneas 3 a 50)
* register.js -> entre las 95 y 100 se envía al endpoint asociado a users.json los datos de un nuevo usuario registrado. Se evita refactorizar el código y se simplifca el proceso de validación
* login.js -> entre las 16 y 37 se envían los datos de acceso y se guardan dos cookies: el email del usuario  y el token recibido en la autorización válida.
* events.js -> líneas 7 a 15: se guardan los datos de los eventos. En la función de la línea 105 se ha añadido la consulta al endpoint de crud.json asociado con el método DELETE para borrar eventos. Por último, a partir de la línea 175 se añade la lógica necesaria para la edición de eventos usando PUT.