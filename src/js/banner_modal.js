// ------ START CODE - VISIBLE/HIDDEN MODAL FROM COMPONET_BANNER ------- //

/*
    almacenamos en VARS a COMPONENT_MODAL, CONTAINER_CARD_MODAL definidos en
    COMPONENT_MODAL y el BUTTON definido en COMPONENT_BANNER 
*/
let $window_modal = document.querySelector('#window_modal'),
    $card_modal = document.querySelector('#card_modal'),
    $btnOpen_modal = document.querySelector('#btnOpen_modal');

/* 
    generamos un evento CLICK en $BTNOPEN_MODAL y declaramos una FUNCION
*/
$btnOpen_modal.addEventListener('click', function() { 
    /* 
        añadimos al $WINDOW_MODAL la clase (visible_modal) definida en 
        'src/sass/layout/modal.scss' que muestra el modal  
    */
    $window_modal.classList.add('visible_modal');

    /* 
        añadimos a $CARD_MODAL la clase (translate_down) definida
        en 'src/sass/layout/modal.scss' que desplaza la tarjeta modal
        generando un efecto de entrada
    */
    $card_modal.classList.add('translate_down');
});
    
// ----------------- END CODE ---------------------- //


// ------ START CODE - HIDDEN/VISIBLE MODAL FROM COMPONENT_MODAL -------- //

/*  
    generamos un evento CLICK en $WINDOW_MODAL y declaramos una FUNCION
*/
$window_modal.addEventListener('click', function() {
    /* 
        removemos de $WINDOW_MODAL la clase (visible_modal) definida 
        en 'src/sass/layout/modal.scss' que muestra el modal  
    */
    this.classList.remove('visible_modal');

    /* 
        removemos de $CARD_MODAL la clase (translate_down) definida 
        en 'src/sass/layout/modal.scss' que desplaza la tarjeta modal 
    */
    $card_modal.classList.remove('translate_down');
});

// ----------------- END CODE ---------------------- //