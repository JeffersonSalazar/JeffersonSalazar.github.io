# GUIA DEL PROYECTO
// ____________________ archivos principales ____________________ //

index.html: en este definimos toda la estructura de etiquetas con las que se construyo
este proyecto

style.sccs: en esta definimos las importaciones de los archivos scss externos
ademas aqui definimos estilos globales que comparten varios elementos dentro 
del proyecto

_layout.scss: contiene las importaciones de las diferentes hojas de estilos de cada
componente definido en html

main.js: en esta implementamos las libreias javascript que son utilizadas por varios
componentes


// ____________________ estuctura del proyecto ____________________ //

<carpeta api> 
    contiene los archivos con los cuales creamos la api 
    a travez de nodejs utilizada en el portafolio para 
    almacenar los datos del formulario 

    <CARPETA SRC> 
        contiene el archivo SERVE.JS en este creamos
        el servidor local haciendo uso de express

        <CARPETA DATABASE>
            contiene el archivo CONNECT.JS donde definimos la 
            conexion a la base de datos MONGODB y el archivo 
            SCHEMA.JS en el cual definimos la estructura de la 
            coleccion
        </CARPETA DATABASE>

        </CARPETA ROUTES>
            contiene el archivo METHODS.JS donde definimos la ruta 
            a la API que nos permite almacenar datos haciendo uso del 
            metodo POST
        </CARPETA ROUTES>
    </CARPETA SRC>
</carpeta api>


<carpeta assets>
    <carpeta docs>
        contiene todo lo relacionado a los archivos que pueden ser
        descragados desde el portafolio
    </carpeta docs> 

    <carpeta fonts>
        contiene todo lo relacionado a las fuentes utiilizadas para
        el desarrollo del portafolio
    </carpeta fonts> 

    <carpeta images>
        contiene todo lo relacionado a las imagenes utiilizadas para
        el desarrollo del portafolio
    </carpeta images> 
</carpeta assets> 


<carpeta src>
    <carpeta js>
        contiene todos los archivos javascript utilizados para
        el desarrollo del portafolio, estos se nombraron de la
        misma manera que se nombraron los componentes en html 
    </carpeta js> 

    <carpeta sass>
        <carpeta layout>
            contiene todos los archivos sass utilizados para
            el desarrollo del portafolio, estos se nombraron 
            de la manera que se nombraron los componentes en html
        </carpeta layout>

        <carpeta shared>
            _fonts.scss: contiene la definicion de las diferentes fuentes utilizadas
            para el desarrolo del portafolio

            _layout.scss: contiene las importaciones de las diferentes hojas de estilos 
            de cada componente definido en html

            _mixins.scss: contiene la definicion de estilos globales reutilizables por
            cada componente

            _variables.scss: contiene la definicion de variables globales reutilizables
            por cada componente
        </carpeta shared> 

        style.scss: archivo principal del proyecto
    </carpeta sass> 
</carpeta src> 


readme.md: en este definimos la guia de como esta construido o estructurado 
el proyecto


index.html: archivo principal del proyecto


// ____________________ estuctura html ____________________ //

<head>
    style.css: hoja de estilos principal donde se recopila los diferentes estilos 
    pertenecientes a cada componente

    swiper-bundle.min.css: implementa los estilos css de la libreria swiper js

    scrollreveal: esta libreria nos permite mostrar un elemento de la pagina 
    en el momento en que el escroll pasa por el mismo
</head>

<body>  

    //
        header_component: en este definimos el activador del modo oscuro
        y el icono encargado de abrir el menu de navegacion, cuando hacemos
        scroll en la pagina este se fija en la parte superior de la misma
    //
    <header class="header_component"></header>        


    //  
        body_page: definido para contener las dos cajas en las que se divide el cuerpo del
        portafolio
    //  
    <div class="body_page">
        //
            navbar_component: en este definimos el icono que cierra el menu de navegacion
            y los enlaces encargados de la redireccion a las diferentes secciones de la
            pagina, finalmente cuenta con un boton skins el cual define el color y 
            background que tendran algunos elementos dentro de la misma
        //
        <div class="navbar_component"></div>


        //
            main_container: definido para contener los diferentes componentes que conforman
            el cuerpo del portafolio
        //
        <main class="main_container">
            //
                banner_component: en este definimos la descripcion personal acompañada de una
                imagen, el boton encargado de abril el modal y un enlace para descargar la
                hoja de vida del aspirante, destaquemos que la imagen desaparece cuando entra 
                en vista de dispositovo movil
            //
            <div class="banner_component"></div>


            //
                modal_component: en este definimos una imagen y la continuacion de la descripcion 
                personal, finalmente un icono para cerrar el modal pero cabe resaltar que este
                cierre se puede ralizar desde toda la vista del modal
            //
            <div class="modal_component"></div>


            //
                skills_component: en este definimos unas tarjetas que hacen referencia a las 
                tecnologias aprendidas, al pasar el mouse sobre las mismas aumentan su tamaño
                generando un efecto demovimiento. para la creacion de estas se implemento 
                display: grid, finalmente destacamos que para dispositivos moviles estas se
                transforma en un slider.
            //
            <section class="skills_component"></section>


            //
                certificates_component: en estas definimos una breve reseña de los cursos realizados
                y la opcion de descarga de los mismos, este conponente funciona a travez de un acordeon
                el cual rota 360 grados el icono mientras abre la informacion
            //
            <section class="certificates_component"></section>


            //
            
            //
            <section class="proyects_component"></section>


            //
                contacts_component: en este definimos las opiniones de nuestros clientes
                representados en dos tarjetas que cuentan con la informacion de los mismos.
                para la creacion de estas se implemento display: grid que se encarga de ir 
                ajuntando su distribucion en las diferentes medidas responsive
            //
            <section class="customers_component"></section>


            //
                contacts_component: en este definimos el formulario de contacto el cual
                cuenta con campos de validacion que se activan dependiendo de los datos 
                ingresados por el usuario, este envia los datos a una base de datos mongo db 
                haciendo uso de una api creada con node js que muestra una tarjeta alert 
                dependiendo de la respuesta del servidor
            //
            <div class="contacts_component"></div>
        </main>
    </div>


    //
        footer_component: en este definimos el pie de pagina y icon gotop que se
        encarga de redirigir al usuario al inicio del portafolio
    //
    <footer class="footer_component"></footer>  


    // ____________________ archivos javascript ____________________ //
    
    swiper js: esta libreria nos permite crear sliders gallery

    sweetalert js: esta libreria nos permite mostrar tarjetas de alerta

    main js: archivo js principal del proyecto

    custom js: estos son son archivos javascript personalizados para cada
    componente, cabe dastacar que estos estan nombrados de la misma manera
    que se nombraron los componentes en html
</body>


// ____________________ definicion de estilos dentro de los archivos css ____________________ //

1. estos estan nombrados de la misma manera que se nombraron los componentes 
en html

2. al inicio pueden tener definidas variables locales que solo son reutilizables 
en esa hoja de estilos

3. al inicio pueden tener definidos mixins locales que solo son reutilizables 
en esa hoja de estilos

4. el orden utilizado para aplicar los estilos en cascada es el mismo orden con
el que se estructuro el componente en html


// ____________________ funcionalidad de los archivos javascript ____________________ //

1. estos estan nombrados de la misma manera que se nombraron los componentes 
en html

main.js: {
    1. implementar las librerias js externas 
}

header.js: {
    1. activar el modo oscuro

    2. almacena una clave en localstorage para guardar la 
    configuracion del modo oscuro

    3. recordar el modo oscuro

    4. realizar añadir el scroll al header_component

    5. abrir el menu de navegacion
}

navbar.js {
    1. dejar activo el enlace seleccionado del menu de navegacion

    2. generar un background-color e implementarlo a ciertos
    componentes para generar una identificacion de estos

    3. cerrar el menu de navegacion
}

modal.js {
    1. abrir el modal

    2. cerrar el modal
}

certificates.js {
    1. mostrar la informacion del acordeon seleccionado a la vez que
    oculta la informacion del acordeon que dejo de ser seleccionado
}

proyects.js {

}

contacts.js {
    1. mostrar la caja de errores de los campos del formulario

    2. enviar los datos ingresados al formulario para ser validados
    en la api y mostrar una tarjeta alert segun sea la respuesta del
    servidor

    3. guardar los datos en la base de datos mongo db
}

footer.js {
    1. redirigir al usuario al inicio de la pagina por medio declaracion
    icono gotop

    2. definir el año actual del proyecto
}
