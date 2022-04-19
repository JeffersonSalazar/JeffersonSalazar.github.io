// __________ start code - active dark mode __________ //

/* 
    .$darkMode: almacena el elemento html con ID dark-mode-icon 
    .$darkComponents: almacena todos los elementos html con clase dark_components 
    .$lightText: almacena todos los elementos html con clase light_text 
*/
let $darkModeIcon = document.querySelector('#dark-mode-icon'),
    $darkComponents = document.querySelectorAll('.dark_components'),
    $lightText = document.querySelectorAll('.light_text');

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
        realizamos un recorrido forEach en $darkComponents, pasamos un parametro
        (component) y definimos una funcion
    */
    $darkComponents.forEach(component => {
        /* 
            añadimos o removemos de component la clase js_dark_mode_components 
            definida en 'src/sass/main.scss'
        */
        component.classList.toggle('js_dark_mode_components');
    });

   /* 
        realizamos un recorrido forEach en $lightText, pasamos un parametro
        (text) y definimos una funcion
    */
    $lightText.forEach(text => {
        /* 
            añadimos o removemos de text la clase js_light_text 
            definida en 'src/sass/style.scss'
        */
        text.classList.toggle('js_light_text');
    });

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

    /* 
        realizamos un recorrido forEach en $darkComponents, pasamos un parametro
        (component) y definimos una funcion
    */
    $darkComponents.forEach(component => {
        /* 
            añadimos a component la clase js_dark_mode_components 
            definida en 'src/sass/main.scss'
        */
        component.classList.add('js_dark_mode_components');
    });

    /* 
        realizamos un recorrido forEach en $lightText, pasamos un parametro
        (text) y definimos una funcion
    */
    $lightText.forEach(text => {
        /* 
            añadimos a text la clase js_light_text 
            definida en 'src/sass/main.scss'
        */
        text.classList.add('js_light_text');
    });
}

// __________ end code - save dark mode to local storage __________ //


// __________ start code - scroll dark mode __________ //

/* 
   .$headerComponent: almacena el elemento html con ID header-component
*/
let $headerComponent = document.querySelector('#header-component');

/* 
    generamos un evento scroll al objeto windows y declaramos una funcion
*/
window.addEventListener('scroll', function() {
    /*  
        definimos un condicional, si la propiedad scrollY es mayor a 0 realizamos
        una nueva validacion
    */
    if(this.scrollY > 0) {
        $headerComponent.classList.add('js_header_scroll');
    }else {
        /* 
            de lo contrario removemos de $headerComponent las clases 
            js_scorll_light y js_scroll_dark
        */
        $headerComponent.classList.remove('js_header_scroll');
    };
}); 
    
// __________ end code - scroll dark mode __________ //


// __________ start code - show menu __________ //

/* 
    .$menuIconHeader: almacena el elemento html con ID menu-icon-header
    .$navbarComponent: almacena el elemento html con ID navbar-component
    .$navbarNav: almacena el elemento html con ID navbar-nav
    .$menuIconHeader: almacena el elemento html con ID menu-icon-header
*/
let $menuIconHeader = document.querySelector('#menu-icon-header');
    $navbarComponent = document.querySelector('#navbar-component'),
    $navbarNav = document.querySelector('#navbar-nav'),
    $body = document.querySelector('#body');

/* 
    generamos un evento click en menuIconHeader y definimos una funcion
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
        añadimos a $body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    $body.classList.add('js_hidden_scroll');
});

// __________ end code - transform icon and show menu __________ //