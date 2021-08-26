// ------------ START CODE - SCROLL NAVBAR COLOR----------- //

/* 
    almacenamos en 1 VAR al COMPONENT_HEADER 
*/
let $header = document.querySelector('#header');

/* 
    generamos un evento SCROLL al OBJETO WINDOW y declaramos una FUNCTION
*/
window.addEventListener('scroll', function() {
    /*  
        definimos un condicional, si su PAGEYOFFSET es mayor a 20 y la clave
        del modo oscuro es diferente a verdadero añade a $HEADER la clase (scorll_light)
        y remueva de $HEADER la clase (scorll_dark) definida en 'src/sass/layout/header.scss' 
        que genera el efecto SCROLL COLOR y cuando sea menor remueva la clase (scorll_light)
    */
    if(this.pageYOffset > 20 && localStorage.getItem('key_darkMode') !== "true") {
        $header.classList.add('scroll_light');
        $header.classList.remove('scroll_dark');
    } else {
        $header.classList.remove('scroll_light');
    };

    /*  
        definimos un condicional, si su PAGEYOFFSET es mayor a 20 y la clave
        del modo oscuro es igual a verdadero añade a $HEADER la clase (scorll_dark)
        y remueva de $HEADER la clase (scorll_light) definida en 'src/sass/layout/header.scss' 
        que genera el efecto SCROLL COLOR y cuando sea menor remueva la clase (scorll_dark)
    */
    if(this.pageYOffset > 20 && localStorage.getItem('key_darkMode') === "true") {
        $header.classList.add('scroll_dark');
        $header.classList.remove('scroll_light');
    } else {
        $header.classList.remove('scroll_dark');
    };
}); 
    
// --------------- END CODE ------------------- //


// ------------ START CODE - DARK MODE ----------- //

/* 
    almacenamos en 1 VAR a DARK_MODE ID, definido en COMPONENT_HEADER
*/
let $dark_mode = document.querySelector('#dark_mode'),
    $components_dark = document.querySelectorAll('.component_dark'),
    $texts_dark = document.querySelectorAll('.text_dark');
    $inputs_dark = document.querySelectorAll('input'); 

/* 
    generamos un evento CLICK en $DARK_MODE y declaramos una FUNCTION
*/
$dark_mode.addEventListener('click', function() {
    /* 
        añadimos o removemos de $DARK_MODE la clase (active_dark) definida en 
        'src/sass/layout/header.scss' que tranforma el boton de light a dark 
    */
    this.classList.toggle('active_dark');

    /* 
        añadimos o removemos del BODY la clase (body_darkmode) definida en 
        'src/sass/main.scss' que añade color de fondo a todo el BODY  
    */
    document.body.classList.toggle('body_darkmode');

    /* 
        añadimos o removemos de los COMPONENTES la clase (body_darkmode) definida en 
        'src/sass/main.scss' que añade color de fondo a todos los componentes  
    */
    $components_dark.forEach(component => {
       component.classList.toggle('component_darkmode');
    });

    /* 
        añadimos o removemos de los TEXTOS la clase (text_light) definida en 
        'src/sass/main.scss' que añade color a todos los textos  
    */
    $texts_dark.forEach(text => {
       text.classList.toggle('text_light');
    });

    /* 
        añadimos o removemos de los INPUTS la clase (form_dark) definida en 
        'src/sass/contactos.scss' que añade color oscuro a todos los inputs  
    */
    $inputs_dark.forEach(input => {
       input.classList.toggle('form_dark');
    });

    /*  
        definimos un condicional, si el BODY tiene la clase (body_darkmode) 
        almacenamos en LOCALSTORAGE un TRUE de lo contrario almacenamos un FALSE
    */
    if (document.body.classList.contains('body_darkmode')) {
        localStorage.setItem('key_darkMode','true');
    } else {
        localStorage.setItem('key_darkMode','false');
    };
}); 

// --------------- END CODE ------------------- //


// ------------ START CODE - SAVE LOCAL STORAGE ----------- //

/*
    definimos un condicional, si la clave en LOCALSTORAGE es igual a TRUE 
    añadimos a $DARK_MODE la clase (active_dark) y al BODY la clase 
    (body_darkmode) en caso de ser FALSE las removemos
*/
if (localStorage.getItem('key_darkMode') === "true") {
    $dark_mode.classList.add('active_dark');

    document.body.classList.add('body_darkmode');

    $components_dark.forEach(component => {
        component.classList.add('component_darkmode');
    });

    $texts_dark.forEach(text => {
        text.classList.add('text_light');
    });

    $inputs_dark.forEach(input => {
        input.classList.add('form_dark');
    });
} else {
    $dark_mode.classList.remove('active_dark');

    document.body.classList.remove('body_darkmode');

    $components_dark.forEach(component => {
        component.classList.remove('component_darkmode');
    });
     
    $texts_dark.forEach(text => {
        text.classList.remove('text_light');
    });

    $inputs_dark.forEach(input => {
        input.classList.remove('form_dark');
    });
}; 

// --------------- END CODE ------------------- //


// ------- START CODE - TRANSFORM  ICON X AND SHOW MENU --------- //

/* 
    almacenamos en VARS a NAVBAR ID, a MENUICON ID definidos en 
    COMPONENT_HEADER y a COMPONENT_FIXED ID
*/
let $nav_bar = document.querySelector('#navbar'),
    $menu_icon = document.querySelector('#menuIcon');

/* 
    generamos un evento CLICK en $MENU_ICON y definimos una FUNCION
*/
$menu_icon.addEventListener('click', function() {
    /* 
        añadimos o removemos de $MENU_ICON la clase (transform_iconMenu) 
        definida en 'src/sass/header.scss' que transforma el icon menu
    */
    this.classList.toggle('transform_iconMenu');
        
    /*
        añadimos o removemos de $NAV_BAR la clase (open_navbar)
        definida en 'src/sass/navbar.scss' que muestra el menu de navegacion  
    */
    $nav_bar.classList.toggle('open_navbar');
});

// --------------- END CODE ------------------- //