// ------ START CODE - ROTATE ICON AND SHOW CERTIFY ------- //

/* 
    almacenamos en VARS a CONTAINER_CERTIFY, ICON_CERTIFY y CONTENT_CERTIFY
    definidos dentro de COMPONENT_CERTIFICATES
*/
let $sectsCertify = document.querySelectorAll('.container_certify'),
    $bodyCertify = document.querySelectorAll(".content_certify"),
    $iconCertify = document.querySelectorAll('.icon_certify');

/* 
    generamos un evento CLICK en SECTIONS y declaramos una FUNCTION
*/
$sectsCertify[0].addEventListener("click", function() {
    /* 
        añadimos o removemos la clase (rotate_icon) definida en
        'src/sass/layout/certificados.scss' que rota el icono
        y removemos del resto de los iconos la misma clase
    */
    $iconCertify[0].classList.toggle('rotate_icon');
    $iconCertify[1].classList.remove('rotate_icon');
    $iconCertify[2].classList.remove('rotate_icon');
    $iconCertify[3].classList.remove('rotate_icon');

    /* 
        definimos un condicional en el momento que damos click en
        $SECTSCERTIFY[?] SI el $BODYCERTIFY[?] tiene eL estilo (max-height) 
        cambia el valor que tenga a NULL por ende el contenido se oculta.
        de lo CONTRARIO si damos click en el titulo y no tiene el estilo
        (max-height) este dara como valor la altura total del contenido
        con la ayuda de la propiedad (scrollHeight) por ende mostrara
        el contenido
    */
    ($bodyCertify[0].style.maxHeight) ? $bodyCertify[0].style.maxHeight = null:$bodyCertify[0].style.maxHeight = $bodyCertify[0].scrollHeight + "px";

    /* 
        para el resto de los $BODYCERTIFY[?] definimos el estilo 
        (max-height = null) lo que nos permite ocultar un $BODYCERTIFY[?]
        en el momento en el que desplegamos otro
    */
    $bodyCertify[1].style.maxHeight = null;
    $bodyCertify[2].style.maxHeight = null;
    $bodyCertify[3].style.maxHeight = null;
});

$sectsCertify[1].addEventListener("click", function() {
    $iconCertify[1].classList.toggle('rotate_icon');
    $iconCertify[0].classList.remove('rotate_icon');
    $iconCertify[2].classList.remove('rotate_icon');
    $iconCertify[3].classList.remove('rotate_icon');

    ($bodyCertify[1].style.maxHeight) ? $bodyCertify[1].style.maxHeight = null:$bodyCertify[1].style.maxHeight = $bodyCertify[1].scrollHeight + "px";

    $bodyCertify[0].style.maxHeight = null;
    $bodyCertify[2].style.maxHeight = null;
    $bodyCertify[3].style.maxHeight = null;
});

$sectsCertify[2].addEventListener("click", function() {
    $iconCertify[2].classList.toggle('rotate_icon');
    $iconCertify[0].classList.remove('rotate_icon');
    $iconCertify[1].classList.remove('rotate_icon');
    $iconCertify[3].classList.remove('rotate_icon');

    ($bodyCertify[2].style.maxHeight) ? $bodyCertify[2].style.maxHeight = null:$bodyCertify[2].style.maxHeight = $bodyCertify[2].scrollHeight + "px";

    $bodyCertify[0].style.maxHeight = null;
    $bodyCertify[1].style.maxHeight = null;
    $bodyCertify[3].style.maxHeight = null;
});

$sectsCertify[3].addEventListener("click", function() {
    $iconCertify[3].classList.toggle('rotate_icon');
    $iconCertify[0].classList.remove('rotate_icon');
    $iconCertify[1].classList.remove('rotate_icon');
    $iconCertify[2].classList.remove('rotate_icon');

    ($bodyCertify[3].style.maxHeight) ? $bodyCertify[3].style.maxHeight = null:$bodyCertify[3].style.maxHeight = $bodyCertify[3].scrollHeight + "px";

    $bodyCertify[0].style.maxHeight = null;
    $bodyCertify[1].style.maxHeight = null;
    $bodyCertify[2].style.maxHeight = null;
});

// --------------------- END CODE --------------------- //

