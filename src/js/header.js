// ------------ START CODE - SCROLL NAVBAR ----------- //

/* 
    almacenamos en una VAR al COMPONENT_HEADER 
*/
let $header = document.querySelector('#header');

/* 
    generamos un evento SCROLL al OBJETO WINDOW y declaramos una FUNCTION
*/
window.addEventListener('scroll', function() {
    /*  
        definimos un condicional, si su PAGEYOFFSET es mayor a 20, añade a 
        $HEADER la clase (scorll_header) definida en 'src/sass/layout/header.scss'
        que genera el efecto SCROLL y cuando sea menor la remueva
    */
    if(this.pageYOffset > 20) {
        $header.classList.add('scorll_header');
    } else {
        $header.classList.remove('scorll_header');
    };
}); 
    
// --------------- END CODE ------------------- //


// ------------ START CODE - DARK MODE ----------- //

/* 
    almacenamos en una VAR a ICON_MODE_HEADER definido en COMPONENT_HEADER
*/
let $dark_mode = document.querySelector('#dark_mode');

/* 
    generamos un evento CLICK en $DARK_MODE y declaramos una FUNCTION
*/
$dark_mode.addEventListener('click', function() {
    /* 
        añadimos o removemos de $DARK_MODE la clase (active_dark) definida en 
        'src/sass/layout/header.scss'que tranforma el boton de light a dark 
    */
    this.classList.toggle('active_dark');

    /* 
        añadimos o removemos del BODY la clase (body_darkmode) definida en 
        'src/sass/main.scss' que añade color de fondo a todo el BODY  
    */
    document.body.classList.toggle('body_darkmode');

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
} else {
    $dark_mode.classList.remove('active_dark');
    document.body.classList.remove('body_darkmode');
}; 

// --------------- END CODE ------------------- //


// ------- START CODE - ICON TRANSFORM AND SHOW MENU --------- //

/* 
    almacenamos en VARS al COMPONENT_NAVBAR y al icono de menu
    definido en COMPONENT_HEADER
*/
let $nav_bar = document.querySelector('#navbar');
let $menu_icon = document.querySelector('#menuIcon');

/* 
    generamos un evento CLICK en $MENU_ICON y definimos una FUNCION
*/
$menu_icon.addEventListener('click', function() {

    /*
        añadimos o removemos de $NAV_BAR la clase (open_navbar)
        definida en 'src/sass/navbar.scss' que muestra el menu de navegacion  
    */
    $nav_bar.classList.toggle('open_navbar');

    /*
        añadimos o removemos de $NAV_BAR la clase (close_navbar)
        definida en 'src/sass/navbar.scss' que oculta el menu de navegacion 
    */
    $nav_bar.classList.toggle('close_navbar');

    /* 
        añadimos o removemos de $MENU_ICON la clase (transform_iconMenu) 
        definida en 'src/sass/header.scss' que transforma el icon menu
    */
    this.classList.toggle('transform_iconMenu');
});

// --------------- END CODE ------------------- //