// -------------- START CODE - SHOW ERRORS ------------- //
/* 
    almacenamos en 1 VAR los INPUTS definidos dentro 
    de COMPONENT_CONTACTS
*/
    let $inputs = document.querySelectorAll('input');

/* 
    almacenamos en VARS los 3 DIVS que definimos dentro
    de BOX_INPUTS para los errores de formulario
*/
    $err_name = document.querySelector('#error_name'),
    $err_email = document.querySelector('#error_email'),
    $err_post = document.querySelector('#error_post'),

/*
    almacenamos en VARS expresiones regulares para validar cada INPUT
*/
    exp_name = /^[a-zA-Z\s]{4,16}$/,
    exp_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/,
    exp_post = /^[a-zA-Z0-9_.+-À-ÿ\s]{10,100}$/;

/* 
    hacemos un FOREACH a $INPUTS, definimos un parametro seguido de una FUNCION
*/
$inputs.forEach(input => {
    /* 
        generamos un evento KEYUP al parametro del FOREACH y declaramos 
        una FUNCION a la que pasamos un EVENT (e) como parametro
    */
    input.addEventListener('keyup', function(e) {
        /* 
            almacenamos en 1 VAR los datos ingresados por el usuario en los 
            diferentes INPUTS con la propiedad E.TARGET.VALUE
        */
        let targget = e.target.value;

        /* 
            con SWITCH que recibe como llave el atributo NAME de los INPUTS definimos
            casos para mostrar los errores de acuerdo al campo seleccionado por el usuario
        */
        switch (e.target.name) {
            /* 
                .TEST() recibe la VAR que almacena los datos ingresados en los INPUTS y
                los compara con las EXPRESIONES REGULARES, luego el condicional mostrara 
                la clase (show_error) definida en 'src/sass/layout/contactos.scss' que
                hace visible el error si la EXPRESION no se cumple y la oculta si es valida
            */
            case 'name': {
                (!exp_name.test(targget)) ? $err_name.classList.add('show_error'):$err_name.classList.remove('show_error'); 
            }; break;
    
            case 'email': {
                (!exp_email.test(targget)) ? $err_email.classList.add('show_error'):$err_email.classList.remove('show_error'); 
            }; break;
            
            case 'post': {
                (!exp_post.test(targget)) ? $err_post.classList.add('show_error'):$err_post.classList.remove('show_error'); 
            }; break;
        };
    });
});

// --------------------- END CODE -------------------- //


// ---------- START CODE - SEND DATA DATABASE -------------- //
/*  
    almacenamos en VARS la URL de nuestra API y el FORM 
    definido dentro de COMPONENT_CONTACTS 
*/
let api = "http://localhost:3000/api/message",
    $formulario = document.querySelector('#formulario');

/* 
    generamos un evento SUBMIT en $FORMULARIO y declaramos una FUNCION
    a la que pasamos un EVENT (e) como parametro
*/
$formulario.addEventListener('submit', function(e){
    /* 
        prevenimos el comportamiento del BUTTON tipo SUBMIT
    */
    e.preventDefault();

    /*
        definimos un OBJETO y pasamos como clave el nombre de los campos 
        declarados en FORM y la API, estas almacenaran la informacion ingresada 
        en cada INPUT, a travez de E.TARGET + el ATRIBUTO NAME de cada input + VALUE
    */
    let fieldsForm = {
        name: e.target.name.value,
        email: e.target.email.value,
        post: e.target.post.value
    };

    /* 
        definimos FETCH y pasamos como parametro la VAR que almacena la URL 
        de la API, definimos un OBJETO, pasamos el METHOD, un HEADERS y en
        BODY utilizamos JSON.STRINGFY para convertir los datos y como parametro
        pasamos el OBJETO antes definido.
    */
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fieldsForm)
    })
    /*  
        FETCH retorna una promesa por ende hacemos uso de .THEN y .CATCH
        para mostrar alertas al usuario dependiedo del estado del formulario
    */
    .then (res => {
        /* 
            definimos un condicional el cual si el status de la respuesta
            es 400 muestra una alerta de error de lo contrario una de exito
        */
        if(res.status === 400) {
            Swal.fire({
                icon: 'error',
                title: 'verifica que los campos sean correctos',
                position: 'center',
                showConfirmButton: false,
                padding: '0 0 3em',
                timer: 3000 
            });
        };
        if(res.status === 200) {
            Swal.fire({ 
                icon: 'success',
                title: 'el mensaje fue enviado correctamente',
                position: 'center',
                showConfirmButton: false,
                padding: '0 0 3em',
                timer: 3000      
            });

            /* 
                formatiamos los campos del fomulario y los errores
            */
            $formulario.reset();
        };
    })
    .catch(err => console.log(err));
});

// --------------------- END CODE -------------------- //