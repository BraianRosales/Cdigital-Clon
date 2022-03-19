# Cotdigital-Clone.

Este proyecto es un E-commerce,un clon de la pagina coto digital.

\*Este proyecto me base en la pagina de coto digital (lugar de donde trabajo actualmente) me propuse como desafio clonar todo lo que
pueda de dicha pagina en el tiempo del desarrollo de la cursada, este proyecto va a seguir mejorando dia a dia hasta quede
lo mas identica posible o me aburra.

# funcionalidad

\*Es un E-commerce, el usuario al ingresar a la aplicacion se encontrara con la pagina de catalogos, podra clickear en cualquier imagen
y dicha imagen lo redireccionara a una lista de productos(Cada imagen hace referencia a los productos que contiene), en esta seccion podra interactuar agregando productos al carrito desde la lista productos por medio del boton agregar. Al hacer click en el boton agregar el boton cambiara a un contador con sus botones + y - donde incrementara o decrementara la cantidad del producto, cuando decremente a cero, le saldra una alerta preguntando si quiere eliminar el producto del carrito en su totalidad.Al agregar un producto se podra ver visible dentro del carrito que se encuentra del lado derecho de la pantalla, tambien podra ver como aparece un carrito dinamico sobre la barra de navegacion, si le da click lo redireccionara a la pagina carrito, un detalle si hace click sobre la imagen de los productos el router lo direccionara hacia la vista detalle de dicho producto donde lo podra apreciar con mayor acercamiento.

\*En la barra de navegacion podra navegar entre las distintas secciones de la aplicacion separando los productos por categorias.

\*En todo momento lo acompañara un buscador dinamico que estara en todas las secciones donde se encuentre, ahi podra filtrar las busquedas por:
-gaseosas
-cervezas
-vinos
-caramelos
-televisores
-heladeras
-aires
-pizzas
-empanadas
-yogures
-carnes
-pescados
-galletitas
-jugos
-facturas
Estan separados por su tipo a medidas que pase el tiempo ire agregando mas tipos al proyecto.

\*Dentro de la pagina /Cart que pertene al carrito podra eliminar producto por producto del carrito, limpiar el carrito por completo, sumar la cantidad de sus productos y cuando este listo para concretar la compra puede clickear el boton pagar que lo redireccionara hacia pagina
CashBox donde esta su caja de pago.

\*Cuando rellene el formulario donde indicara su dia de entrega, fecha y horario (ya que es un E-commerce online a domicilio) podra darle al boton aceptar donde obtendra acceso al boton confirmar al darle click se concretara la compra, al concretarse la compra le saltara una alerta donde podra ver su id de compra, procure poner bien sus datos o sino no tendremos contacto y su compra no se despachara.

# Descargar y correr la aplicacion.

1- instalar nodejs: https://nodejs.org/es/
2- abrir la terminal de comandos e instalar la utlima version de npm que hay disponible:
	npm install -g npm@latest
3- borrar cache: npm cache clean --force
2- instalar visual studio code: https://code.visualstudio.com/download.
3- abrir visual estudio code, abrir la terminal en visual studio code y tipear: 
    git clone https://github.com/BraianRosales/Cdigital-Clon.git
4- ir a Open Folder buscar la ruta donde se descargo la carpeta ejemplo: D:\CursosProgramacion\CursoReactJsCoder
5- instalar node_modules: ir a la terminal una vez abierto el directorio de la carpeta y tipear, npm install
6- npm run start/npm start
