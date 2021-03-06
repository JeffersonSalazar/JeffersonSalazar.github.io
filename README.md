# GUIA DEL PROYECTO

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
    <docs>
        contiene todo lo relacionado a los archivos que pueden ser
        descragados desde el proyecto
    </docs> 

    <fonts>
        contiene todo lo relacionado a las fuentes externas utilizadas
        para el desarrollo del proyecto
    </fonts> 

    <images>
        contiene todo lo relacionado a las imagenes utilizadas para
        el desarrollo del proyecto
    </images> 

    <languages>
        contiene los archivos JSON .es y .en encargados de realizar el 
        cambio de lenguaje del proyecto
    </languages> 
</carpeta assets> 


<carpeta src>
    <js>
        <index>
            contiene todos los archivos javascript utilizados para
            el desarrollo de index.html, estos se nombraron de la
            misma manera que se nombraron los componentes en html 
        </index>

        <portfolio>
            contiene todos los archivos javascript utilizados para
            el desarrollo de portafolio.html, estos se nombraron de la
            misma manera que se nombraron los componentes en html 
        </portfolio>

        main.js: archivo javascript principal, en este definimos 
        las librerias externas cuyas funcionalidades son compartidas 
        por los elementos de index.html y portfolio.html
    </js> 

    <carpeta sass>
        <layout>
            <index>
                contiene todos los archivos sass utilizados para dar
                estilos a los elementos de index.html, estos se nombraron
                de la misma manera que se nombraron los componentes en html 
            </index>

            <portfolio>
                ccontiene todos los archivos sass utilizados para dar
                estilos a los elementos de portfolio.html, estos se nombraron
                de la misma manera que se nombraron los componentes en html
            </portfolio>
            
            main.scss: contiene las importaciones de las hojas de estilos
            pertenecientes a index.html y portfolio.html
        </layout>

        <shared>
            _fonts.scss: contiene la definicion de las diferentes fuentes utilizadas
            para el desarrollo del proyecto

            _mixins.scss: contiene la definicion de estilos globales reutilizables por
            los componentes

            _variables.scss: contiene la definicion de variables globales reutilizables
            por los componentes
        </shared> 

        style.scss: archivo de estilos principal, en este definimos clases generales que son compartidas por diferentes elementos html
    </carpeta sass> 
</carpeta src> 


readme.md: en este definimos la guia de como esta construido o estructurado 
este proyecto


index.html: en este archivo definimos toda la estructura de la landing page


portfolio.html: en este archivo definimos toda la estructura del portafolio


// ____________________ estuctura index.html ____________________ //

<head>
    style.css: hoja de estilos principal donde se recopila los diferentes estilos 
    pertenecientes a cada componente

    scrollreveal: esta libreria nos permite mostrar un elemento de la pagina 
    en el momento en que el escroll pasa por el mismo
</head>

<body>  

    //
        header_component: dentro de este definimos el activador del modo oscuro
        y el icono encargado de abrir el menu de navegacion, cuando hacemos
        scroll en la pagina este se fija en la parte superior de la misma
    //
    <header class="header_component"></header>        

    //
        main_components_container: definido para contener los diferentes componentes que
        conforman el cuerpo de la landig
    //
    <main class="main_components_container">
        //
            jumbotron_component: dentro de este definimos la descripcion personal acompa??ada 
            de una imagen, el boton encargado de abrir el modal y un enlace para descargar
            la hoja de vida del aspirante, destaquemos que la imagen desaparece cuando entra 
            en vista de dispositovo movil
        //
        <section class="jumbotron_component"></section>


        //
            cards_component: dentro de este definimos una imagen y la continuacion de la 
            descripcion personal, finalmente un icono para cerrar el modal pero cabe resaltar 
            que este cierre se puede ralizar desde toda la vista del modal
        //
        <div class="cards_component"></div>
    </main>
    

    //
        footer_component: en este definimos el pie de pagina y EL icon gotop que se
        encarga de redirigir al usuario al inicio del portafolio. Tambien cuenta con
        la posibilidad de ambiar el lenguaje entre el idioma espa??ol e ingles,
        finalmente muestra el a??o actual en el que se creo el proyecto
    //
    <footer class="footer_component"></footer>  


    // ____________________ archivos javascript ____________________ //

    main js: archivo js principal del proyecto donde definimos el javascript
    que es utilizado por varios componentes

    custom js: estos son son archivos javascript personalizados para cada
    componente, cabe dastacar que estos estan nombrados de la misma manera
    que se nombraron los componentes en portfolio.html y estan definidos 
    en el mismo orden
</body>


// ____________________ estuctura portfolio.html ____________________ //

<head>
    style.css: hoja de estilos principal donde se recopila los diferentes estilos 
    pertenecientes a cada componente

    swiper-bundle.min.css: implementa los estilos css de la libreria swiper js

    scrollreveal: esta libreria nos permite mostrar un elemento de la pagina 
    en el momento en que el escroll pasa por el mismo
</head>

<body>  

    //
        header_component: dentro de este definimos el activador del modo oscuro
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
            navbar_component: dentro de este definimos el icono que cierra el menu de navegacion
            y los enlaces encargados de la redireccion a las diferentes secciones de la
            pagina, finalmente cuenta con un boton skins el cual define el color y 
            background que tendran algunos elementos dentro de la misma
        //
        <div class="navbar_component"></div>


        //
            main_components_container: definido para contener los diferentes componentes que
            conforman el cuerpo del portafolio
        //
        <main class="main_components_container">
            //
                banner_component: dentro de este definimos la descripcion personal acompa??ada 
                de una imagen, el boton encargado de abrir el modal y un enlace para descargar
                la hoja de vida del aspirante, destaquemos que la imagen desaparece cuando entra 
                en vista de dispositovo movil
            //
            <div class="banner_component"></div>


            //
                modal_component: dentro de este definimos una imagen y la continuacion de la 
                descripcion personal, finalmente un icono para cerrar el modal pero cabe resaltar 
                que este cierre se puede ralizar desde toda la vista del modal
            //
            <div class="modal_component"></div>


            //
                skills_component: dentro de este definimos unas tarjetas que hacen referencia a
                las tecnologias aprendidas, al pasar el mouse sobre las mismas aumentan su tama??o
                generando un efecto de movimiento. para la creacion de estas se implemento 
                display: grid, finalmente destacamos que para dispositivos moviles estas se
                transforma en un slider.
            //
            <section class="skills_component"></section>


            //
                certificates_component: dentro de este definimos una breve rese??a de los cursos realizados
                y la opcion de descarga de los mismos, este conponente funciona a travez de un acordeon
                el cual rota 360 grados el icono mientras abre la informacion
            //
            <section class="certificates_component"></section>


            //
                projects_component: dentro de este definimos los proyectos que hemos realizado con 
                un enlace de redireccionamiento para visitiar la pagina oficial, para esta parte 
                del portafolio implementamos la libreria swiper js para crear los sliders
            //
            <section class="projects_component"></section>


            //
                contacts_component: dentro de este definimos las opiniones de nuestros clientes
                representados en dos tarjetas que cuentan con la informacion de los mismos.
                para la creacion de estas se implemento display: grid que se encarga de ir 
                ajustando su distribucion en las diferentes medidas responsive
            //
            <section class="customers_component"></section>


            //
                contacts_component: dentro de este definimos el formulario de contacto el cual
                cuenta con campos de validacion que se activan dependiendo de los datos 
                ingresados por el usuario, este envia los datos a una base de datos mongoDB
                haciendo uso de una api creada con node js que muestra una tarjeta alert 
                dependiendo de la respuesta del servidor
            //
            <div class="contacts_component"></div>

            //
                loader_component: dentro de este definimos el loader que se hace visible una vez
                el usuario realize el envio del formulario 
            //
            <div class="loader_component"></div>
        </main>
    </div>


    //
        footer_component: en este definimos el pie de pagina y EL icon gotop que se
        encarga de redirigir al usuario al inicio del portafolio. Tambien cuenta con
        la posibilidad de ambiar el lenguaje entre el idioma espa??ol e ingles,
        finalmente muestra el a??o actual en el que se creo el proyecto
    //
    <footer class="footer_component"></footer>  


    // ____________________ archivos javascript ____________________ //
    
    swiper js: esta libreria nos permite crear sliders gallery

    sweetalert js: esta libreria nos permite mostrar tarjetas de alerta

    main js: archivo js principal del proyecto donde definimos el javascript
    que es utilizado por varios componentes

    custom js: estos son son archivos javascript personalizados para cada
    componente, cabe dastacar que estos estan nombrados de la misma manera
    que se nombraron los componentes en portfolio.html y estan definidos 
    en el mismo orden
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

5. IMPORTANTE: 
(js_background_change, js_color_change, js_img_border_color_change, js_icon_color_change y js_color_border_change)
son clases definidas en algunas etiquetas html para ser implementadas unicamente en javascript
mas exactamente en 'src\js\navbar.js' por lo que no funcionan como clases para stilos css


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

    4. realizar a??adir el scroll al header_component

    5. abrir el menu de navegacion
}

navbar.js {
    1. dejar activo el enlace seleccionado del menu de navegacion

    2. generar un background-color e implementarlo a ciertos
    componentes para generar una identificacion de estos

    3. cerrar el menu de navegacion
}

banner.js {
    1. abrir el modal
}

modal.js {
    1. cerrar el modal
}

certificates.js {
    1. mostrar la informacion del acordeon seleccionado a la vez que
    oculta la informacion del acordeon que dejo de ser seleccionado
}

projects.js {
    1. realizar el despalzamiento cuando se da click en los iconos
    del slider permitiendo mostrar las demas tarjetas

    2. crear un bucle infinito para repetir las tarjetas cada que 
    estas terminen en su despalzamiento
}

contacts.js {
    1. mostrar la caja de errores de los campos del formulario

    2. enviar los datos ingresados al formulario para ser validados
    en la api y mostrar una tarjeta alert segun sea la respuesta del
    servidor

    3. Mostrar el loader mientras llega la respuesta del servidor
    
    4. guardar los datos en la base de datos mongo db
}

footer.js {
    1. redirigir al usuario al inicio de la pagina por medio declaracion
    icono gotop

    3. cambiar el idioma del sitio web

    3. definir el a??o actual del proyecto
}

