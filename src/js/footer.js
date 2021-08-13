/*  -------------- START CODE ----------- //
    almacenamos en una VAR el ICONO definido dentro del COMPONENT_FOOTER
*/
let $btn_gotop = document.querySelector('#icon_gotop');

/* 
    generamos un evento SCROLL al OBJETO WINDOW y declaramos una FUNCTION
*/
window.addEventListener('scroll', function() {
    /*  
        definimos un condicional, si su PAGEYOFFSET es mayor a 100, añade 
        a $BTN_GOTOP la clase que muestra el boton goTop (show_gotop) definida 
        en 'src/sass/layout/footer.scss' de lo contrario la remueve
    */
    if(this.pageYOffset > 100) {
        $btn_gotop.classList.add('show_gotop');
    } else {
        $btn_gotop.classList.remove('show_gotop');
    };
});
    // ---------- END CODE ------------ //


/*  -------------- START CODE ----------- //
    almacenamos en una VAR un 0 como inicio de pantalla   
*/
let topWindow = 0;

/* 
    declaramos una FUNCTION y definimos un condicional
*/
function scrollStep() {
    /*
        si la altura del OBJETO WINDOW con la propiedad PAGEYOFFSET 
        es igual a 0 CLEARINTERVAL limpia el valor de la VAR TOP
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
    generamos un evento CLICK para $BTN_GOTOP y llamamos la FUNCTION
*/
$btn_gotop.addEventListener('click', scrollToTop);

/* ---------- END CODE ------------ */