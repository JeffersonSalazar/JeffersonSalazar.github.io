// __________ start code - active dark mode __________ //

/* 
    .$darkMode: almacena el elemento html con ID dark-mode-icon 
*/
let $darkModeIcon = document.querySelector('#dark-mode-icon');

/* 
    generamos un evento click en $darkModeIcon y declaramos una funcion
*/
$darkModeIcon.addEventListener('click', function() {
    /* 
        añadimos o removemos de $darkModeIcon la clase js_active_dark_mode 
        definida en 'src/sass/layout/header.scss
    */
    this.classList.toggle('js_active_dark_mode');

    /* 
        añadimos o removemos del body la clase js_body_dark_mode definida en 
        'src/sass/style.scss' 
    */
    document.body.classList.toggle('js_body_dark_mode');

    /*  
        definimos un condicional, si body contiene la clase js_body_dark_mode 
        almacenamos en localStorage la clave dark_mode con valor: true 
    */
    if (document.body.classList.contains('js_body_dark_mode')) {
        localStorage.setItem('dark_mode','true');
    } else {
        /* 
            de lo contrario almacenamos en localStorage la clave dark_mode 
            con valor: false
        */
        localStorage.setItem('dark_mode','false');
    };
}); 

// __________ end code - active dark mode __________ //

// __________ start code - save dark mode to local storage __________ //

/*
    definimos un condicional, si localStorage tiene la clave dark_mode y su
    valor es igual true
*/
if (localStorage.getItem('dark_mode') === "true") {
    /* 
        añadimos a $darkModeIcon la clase js_active_dark_mode
    */
    $darkModeIcon.classList.add('js_active_dark_mode');

    /* 
        añadimos a body la clase js_body_dark_mode
    */
    document.body.classList.add('js_body_dark_mode');
}

// __________ end code - save dark mode to local storage __________ //


// __________ start code - scroll header __________ //

/* 
   .$headerComponent: almacena el elemento html con ID header-component
*/
let $headerComponent = document.querySelector('#header-component');

/* 
    generamos un evento scroll al objeto windows y declaramos una funcion
*/
window.addEventListener('scroll', function() {
    /*  
        definimos un condicional, si window.scrollY es mayor a 70
        añadimos a $headerComponent la clase js_header_scroll,
        definida en 'src\sass\layout\_header.scss'
    */
    if(this.scrollY > 70) {
        $headerComponent.classList.add('js_header_scroll');
    }else {
        /* 
            de lo contrario removemos de $headerComponent la clase
            js_header_scroll
        */
        $headerComponent.classList.remove('js_header_scroll');
    };
}); 
    
// __________ end code - scroll header __________ //


// __________ start code - show menu __________ //

/* 
    .$menuIconHeader: almacena el elemento html con ID menu-icon-header
    .$navbarComponent: almacena el elemento html con ID navbar-component
    .$navbarNav: almacena el elemento html con ID navbar-nav
*/
let $menuIconHeader = document.querySelector('#menu-icon-header');
    $navbarComponent = document.querySelector('#navbar-component'),
    $navbarNav = document.querySelector('#navbar-nav'),

/* 
    generamos un evento click en $menuIconHeader y definimos una funcion
*/
$menuIconHeader.addEventListener('click', function() {    
    /*
        añadimos a $navbarComponent la clase js_show_overlay
        definida en 'src/sass/navbar.scss'  
    */
    $navbarComponent.classList.add('js_show_overlay');
        
    /*
        añadimos a $navbarNav la clase js_show_menu_nav
        definida en 'src/sass/navbar.scss'  
    */
    $navbarNav.classList.add('js_show_menu_nav');

    /*
        añadimos a body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    document.body.classList.add('js_hidden_scroll');
});

// __________ end code - show menu __________ //