// __________ start code - show modal __________ //

/* 
    .$btnOpenModal: almacena el elemento html con ID btn-open-modal
    .$modalComponent: almacena el elemento html con ID modal-component
    .$cardModal: almacena el elemento html con ID modal-card
*/

let $btnOpenModal = document.querySelector('#btn-open-modal'),
    $modalComponent = document.querySelector('#modal-component'),
    $modalCard = document.querySelector('#modal-card');

/* 
    generamos un evento click en $btnOpenModal y declaramos una funcion
*/
$btnOpenModal.addEventListener('click', function() { 
    /* 
        añadimos a $modalComponent la clase js_show_modal definida
        en 'src/sass/layout/modal.scss' 
    */
    $modalComponent.classList.add('js_show_modal');

    /* 
        añadimos a $modalCard la clase js_translate_down definida
        en 'src/sass/layout/modal.scss'
    */
    $modalCard.classList.add('js_translate_down');

    /*
        añadimos de $body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    $body.classList.add('js_hidden_scroll');
});
    
// __________ end code - show modal __________ //


// __________ start code - close modal __________ //

/* 
    generamos un evento click en $modalComponent y declaramos una funcion
*/
$modalComponent.addEventListener('click', function() {
    /* 
        removemos de $modalComponent la clase js_show_modal definida 
        en 'src/sass/layout/modal.scss'  
    */
    this.classList.remove('js_show_modal');

    /* 
        removemos de $modalCard la clase js_translate_down definida 
        en 'src/sass/layout/modal.scss'
    */
    $modalCard.classList.remove('js_translate_down');

    /*
        removemos de $body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    $body.classList.remove('js_hidden_scroll');
});

// __________ end code - close modal __________ //