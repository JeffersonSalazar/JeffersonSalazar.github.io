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


// __________ start code - background color generator __________ //

/* 
   .headerSkinBtn: almacena el elemento html con ID header-skin-btn
*/
let headerSkinBtn = document.querySelector("#header-skin-btn")

/* 
   .$backgroundChange: almacena todos los elementos html que tengan
   .la clase js_background_change

   .$colorChange: almacena todos los elementos html que tengan
   .la clase js_color_change

   .$iconColorChange: almacena todos los elementos html que tengan
   .la clase js_icon_color_change

   .$borderChange: almacena todos los elementos html que tengan
   .la clase js_color_border_change
*/
let $backgroundChange = document.querySelectorAll(".js_background_change"),
    $colorChange = document.querySelectorAll(".js_color_change"),
    $iconColorChange = document.querySelectorAll(".js_icon_color_change"),
    $borderChange = document.querySelectorAll(".js_color_border_change");

/* 
    definimos un evento click en headerSkinBtn y definimos una funcion
*/
headerSkinBtn.addEventListener("click", function(e) {
    /* 
        prevenimos el comportamiento que tiene por defecto los botones
    */
    e.preventDefault(); 

    /*
        haciendo uso de la propiedad (Match.random() * 256),
        generamos numeros aleatorios que posteriormente con
        la propiedad (Match.floor()) redondeamos un numero 
        decimal a su entero descendiente mas cercano. 
        finalmente almacenamos los numeros generados
    */
    const   r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256);

    /* 
        newColor: alamacena los numeros generados para ser
        utilizados como colores rgb
    */
    const newColor = `rgb(${r},${g},${b})`;

    /* 
        hacemos un recorrido forEach, pasamos un parametro y definimos
        una funcion. a esteoarametro pasamos un estilo css que recibe
        como valor la constante newColor
    */
    $backgroundChange.forEach(background => {
        background.style.backgroundColor = newColor
    });

    $colorChange.forEach(color => {
        color.style.color = newColor
    });

    $iconColorChange.forEach(icon => {
        icon.style.fill = newColor;
    });

    $borderChange.forEach(border => {
        border.style.border = `3px solid ${newColor}`;
    });
});

// __________ end code - background color generator __________ //


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
