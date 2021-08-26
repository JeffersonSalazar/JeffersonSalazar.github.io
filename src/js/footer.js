// ------------- START CODE - SHOW ICON -------------- //
/*
    almacenamos en 1 VAR el ICONO definido dentro del COMPONENT_FOOTER
*/
let $icon_gotop = document.querySelector('#icon_gotop');

/* 
    generamos un evento SCROLL al OBJETO WINDOW y declaramos una FUNCTION
*/
window.addEventListener('scroll', function() {
    /*  
        definimos un condicional, si el PAGEYOFFSET es mayor a 100, añade a
        $ICON_GOTOP la clase (show_gotop) definida en 'src/sass/layout/footer.scss'
        que muestra el boton goTop, cuando es menor remueve la clase
    */
    if(this.pageYOffset > 100) {
        $icon_gotop.classList.add('show_gotop');
    } else {
        $icon_gotop.classList.remove('show_gotop');
    };
});
    
// ----------------- END CODE -------------------- //


// ---------- START CODE - GO TOP 0 -------------- //
/*  
    almacenamos en 1 VAR un 0 como inicio en la parte
    superior de la pantalla TOP = 0   
*/
let topWindow = 0;

/* 
    declaramos una FUNCTION y definimos un condicional
*/
function scrollStep() {
    /*
        si el PAGEYOFFSET es igual a 0 CLEARINTERVAL limpia el valor 
        de la VAR TOPWINDOW
    */
    if (window.pageYOffset === 0) {
        clearInterval(topWindow);
    };
    window.scroll(0, window.pageYOffset - 10);
    
};

/*
    declaramos una FUNCTION y redefinimos el valor de TOP
*/
function scrollToTop() {
    topWindow = setInterval(scrollStep, 0);
};

/* 
    generamos un evento CLICK en $ICON_GOTOP y llamamos la FUNCTION
*/
$icon_gotop.addEventListener('click', scrollToTop);

// ----------------- END CODE ---------------------- //


// ---------- START CODE - GET YEAR -------------- //
/*  
    almacenamos en 1 VAR a DATA YEAR definido en COMPONENT FOOTER
    y en 1 VAR el año actual dado por el metodo (getFullYear())
*/
let $textFooter = document.querySelector('#data_year'),
    year = new Date().getFullYear();

/*
    luego a travez de la propiedad (textContent) añadimos a
    $TEXTFOOTER el texto mas el año actual
*/ 
$textFooter.textContent = `© Copyright Jefferson Salazar ${year}`;

// ----------------- END CODE ---------------------- //