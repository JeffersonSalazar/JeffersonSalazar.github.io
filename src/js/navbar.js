// __________ start code - active link __________ //

/* 
   .$navbarLinks: almacena todos los elementos html tag-li que
   .estan dentro de ul_navbar 
*/
let $navbarLinks = document.querySelectorAll('ul_navbar, li');

/* 
    declaracion de la funcion activeLink
*/
function activeLink() {
    /* 
        hacemos un recorrido forEach en $links para remover de cada elemento
        la clase js_active_link definida en 'src/sass/layout/navbar.scss' 
    */
    $navbarLinks.forEach(link => link.classList.remove('js_active_link'));

    /* 
        añadimos la clase js_active_link definida en 'src/sass/layout/navbar.scss' 
        al elemento seleccionado
    */
    this.classList.add('js_active_link');
};  

/* 
    realizamos un recorrido forEach en $links, pasamos un parametro
    (link) y definimos una funcion. generamos un evento CLICK
    al parametro (link) y pasamos la funcion previamente definida
*/
$navbarLinks.forEach(link => link.addEventListener('click', activeLink));

// __________ end code - active link __________ //


// __________ start code - background color generator __________ //

/* 
   .$navbarSkinBtn: almacena el elemento html con ID navbar-skin-btn

   .$modalIcon: almacena el elemento html con ID box_modal_icon

   .$btnBannerHdv: almacena el elemento html con ID btn-banner-hdv
*/
let $navbarSkinBtn = document.querySelector("#navbar-skin-btn"),
    $modalIcon = document.querySelector("#box_modal_icon"),
    $btnBannerHdv = document.querySelector("#btn-banner-hdv");

/* 
   .$backgroundChange: almacena todos los elementos html que tengan
   .la clase js_background_change

   .$colorChange: almacena todos los elementos html que tengan
   .la clase js_color_change

   .$titleBorder: almacena todos los elementos html que tengan
   .la clase box_title_border

   .$imgBorder: almacena todos los elementos html que tengan
   .la clase box_img_border

   .$iconColorChange: almacena todos los elementos html que tengan
   .la clase js_icon_color_change

   .$strongs: almacena todos los elementos html definidos con la tag-strong
*/
let $backgroundChange = document.querySelectorAll(".js_background_change"),
    $colorChange = document.querySelectorAll(".js_color_change"),
    $titleBorder = document.querySelectorAll(".box_title_border");
    $imgBorder = document.querySelectorAll(".box_img_border"),
    $iconColorChange = document.querySelectorAll(".js_icon_color_change");
    // $iconBorder = document.querySelectorAll(".js_icon_border"),
    $strongs = document.querySelectorAll("strong");

/* 
    generateRandomColor: almacena una arrow function
*/
const generateRandomColor = () => {
    /*
        haciendo uso de la propiedad (Match.random() * 256),
        generamos numeros aleatorios que posteriormente con
        la propiedad (Match.floor()) redondeamos un numero 
        decimal a su entero descendiente mas cercano. 
        finalmente almacenamos los numeros generados
    */
    const r = Math.floor(Math.random() * 256),
          g = Math.floor(Math.random() * 256),
          b = Math.floor(Math.random() * 256);

    /* 
        rgb_color: alamacena los diferentes valores convertidos
        a rgb
    */
    let rgb_color = `rgb(${r},${g},${b})`;
    
    /* 
        finalmente hacemos un return de rgb_color
    */
    return rgb_color;
};

/* 
    definimos un evento click en $navbarBtn y definimos una funcion
*/
$navbarSkinBtn.addEventListener("click", function() {
    /* 
        newColor: alamacena la funcion generateRandomColor()
        que es la encargada de generar los valores rgb
    */
    const newColor = generateRandomColor();

    /* 
        $navComponent.style.backgroundColor recibe como valor
        la costante newColor
    */
    $navbarNav.style.backgroundColor = newColor;

    /* 
        $modalIcon.style.border recibe como valor
        la costante newColor
    */
    $modalIcon.style.border = `3px solid ${newColor}`;

    /* 
        $btnBannerHdv.style.border recibe como valor
        la costante newColor
    */
    $btnBannerHdv.style.border = `2px solid ${newColor}`;
    
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

    $titleBorder.forEach(titleBorder => {
        titleBorder.style.borderBottom = `2px solid ${newColor}`
    });

    $imgBorder.forEach(imgBorder => {
        imgBorder.style.border = `5px solid ${newColor}`
    });

    $strongs.forEach(colorText => {
        colorText.style.color = newColor;
    });

    $iconColorChange.forEach(icon => {
        icon.style.fill = newColor;
    });

    // $iconBorder.forEach(iconBorder => {
    //     iconBorder.style.border = `3px solid ${newColor}`
    // });

});

// __________ end code - background color generator __________ //



// __________ start code - close menu __________ //

/* 
    .$menuIconNavbar: almacena el elemento html con ID menu-icon-navbar
*/
$menuIconNavbar = document.querySelector('#menu-icon-navbar');

/* 
    generamos un evento click en menuIconNavbar y definimos una funcion
*/
$menuIconNavbar.addEventListener('click', function() { 
    /*
        removemos de $navbarComponent la clase js_show_overlay
        definida en 'src/sass/navbar.scss'  
    */
        $navbarComponent.classList.remove('js_show_overlay');
            
    /*
        removemos de $navbarNav la clase js_show_menu_nav
        definida en 'src/sass/navbar.scss'  
    */
    $navbarNav.classList.remove('js_show_menu_nav');

    /*
        removemos de $body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    $body.classList.remove('js_hidden_scroll');
});

// __________ end code - close menu __________ //