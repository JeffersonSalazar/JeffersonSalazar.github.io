// ------------ START CODE - SCROLL NAVBAR ----------- //

/* 
    almacenamos en 1 VAR al COMPONENT_HEADER 
*/
let $header = document.querySelector('#header');

/* 
    generamos un evento SCROLL al OBJETO WINDOW y declaramos una FUNCTION
*/
window.addEventListener('scroll', function() {
    /*  
        definimos un condicional, si su PAGEYOFFSET es mayor a 20, añade a 
        $HEADER la clase (scorll_header) definida en 'src/sass/layout/header.scss'
        que genera el efecto SCROLL y cuando sea menor la remueve
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
    almacenamos en 1 VAR a DARK_MODE ID, definido en COMPONENT_HEADER
*/
let $dark_mode = document.querySelector('#dark_mode'),
    $component_dark = document.querySelectorAll('.component_dark'),
    $text_dark = document.querySelectorAll('.text_dark');

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
    $component_dark.forEach(component => {
       component.classList.toggle('component_darkmode');
    });

    /* 
        añadimos o removemos de los TEXTOS la clase (text_light) definida en 
        'src/sass/main.scss' que añade color a todos los textos  
    */
    $text_dark.forEach(dark => {
       dark.classList.toggle('text_light');
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

    $component_dark.forEach(component => {
        component.classList.add('component_darkmode');
     });

    $text_dark.forEach(dark => {
        dark.classList.add('text_light');
     });
} else {
    $dark_mode.classList.remove('active_dark');

    document.body.classList.remove('body_darkmode');

    $component_dark.forEach(component => {
        component.classList.remove('component_darkmode');
     });
     
    $text_dark.forEach(dark => {
        dark.classList.remove('text_light');
     });
}; 

// --------------- END CODE ------------------- //


// ------- START CODE - TRANSFORM  ICON X AND SHOW MENU --------- //

/* 
    almacenamos en VARS a NAVBAR ID, a MENUICON ID definidos en 
    COMPONENT_HEADER y a COMPONENT_FIXED ID
*/
let $nav_bar = document.querySelector('#navbar'),
    $fixed_header = document.querySelector('#fixed_header');
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

    /*
        añadimos o removemos de $NAV_BAR la clase (close_navbar)
        definida en 'src/sass/navbar.scss' que oculta el menu de navegacion 
    */
    $nav_bar.classList.toggle('close_navbar');


    /*
        añadimos o removemos de $FIXED la clase (close_fixed) definida 
        en 'src/sass/navbar.scss' que oculta el COMPONENT_FIXED  
    */
    $fixed_header.classList.toggle('close_fixed');
});

// --------------- END CODE ------------------- //