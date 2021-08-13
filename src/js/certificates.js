// ------ START CODE - ROTATE ICON AND SHOW CERTIFY ------- //

/* 
    almacenamos en VARS a CONTAINER_CERTIFY, ICON_CERTIFY y CONTENT_CERTIFY
*/
let $sectionsCertify = document.querySelectorAll('.container_certify');
let $iconCertify = document.querySelectorAll('.icon_certify');
let $bodyCertify = document.querySelectorAll('.content_certify');

/* 
    generamos un evento CLICK en cada una de las $SECTIONSCERTIFY y 
    declaramos una FUNCION
*/
$sectionsCertify[0].addEventListener('click', function() {
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
        añadimos o removemos la clase (show_certify) definida en
        'src/sass/layout/certificados.scss' que muestra el contenido
        y removemos del resto de secciones la misma clase
    */
    $bodyCertify[0].classList.toggle('show_certify');
    $bodyCertify[1].classList.remove('show_certify');
    $bodyCertify[2].classList.remove('show_certify');
    $bodyCertify[3].classList.remove('show_certify');
});

$sectionsCertify[1].addEventListener('click', function() {
    $iconCertify[1].classList.toggle('rotate_icon');
    $iconCertify[0].classList.remove('rotate_icon');
    $iconCertify[2].classList.remove('rotate_icon');
    $iconCertify[3].classList.remove('rotate_icon');

    $bodyCertify[1].classList.toggle('show_certify');
    $bodyCertify[0].classList.remove('show_certify');
    $bodyCertify[2].classList.remove('show_certify');
    $bodyCertify[3].classList.remove('show_certify');
});

$sectionsCertify[2].addEventListener('click', function() {
    $iconCertify[2].classList.toggle('rotate_icon');
    $iconCertify[0].classList.remove('rotate_icon');
    $iconCertify[1].classList.remove('rotate_icon');
    $iconCertify[3].classList.remove('rotate_icon');

    $bodyCertify[2].classList.toggle('show_certify');
    $bodyCertify[0].classList.remove('show_certify');
    $bodyCertify[1].classList.remove('show_certify');
    $bodyCertify[3].classList.remove('show_certify');
});

$sectionsCertify[3].addEventListener('click', function() {
    $iconCertify[3].classList.toggle('rotate_icon');
    $iconCertify[0].classList.remove('rotate_icon');
    $iconCertify[1].classList.remove('rotate_icon');
    $iconCertify[2].classList.remove('rotate_icon');

    $bodyCertify[3].classList.toggle('show_certify');
    $bodyCertify[0].classList.remove('show_certify');
    $bodyCertify[1].classList.remove('show_certify');
    $bodyCertify[2].classList.remove('show_certify');
});

// --------------------- END CODE --------------------- //
