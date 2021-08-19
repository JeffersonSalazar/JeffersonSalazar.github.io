// ------------ START CODE - ACTIVE LINKS ----------- //

/* 
    almacenamos en una VAR las TAGS LI definidas en COMPONENT_NAVBAR
*/
let $links = document.querySelectorAll('li');

/* 
    Definimos una FUNCION
*/
function activeLink() {
    /* 
        hacemos un FOREACH en $LINKS para remover de cada ENLACE la clase 
        'active_link' definida en 'src/sass/layout/navbar.scss' que añade 
        un color de fondo mostrando el enlace como seleccionado
    */
    $links.forEach(link => link.classList.remove('active_link'));

    /* 
        agregamos la clase 'active_link' a un solo ENLACE
    */
    this.classList.add('active_link');
};  
/* 
    realizamos un FOREACH en $LINKS y generamos un evento CLICK
    al parametro seguido pasamos la FUNCION previamente definida
*/
$links.forEach(link => link.addEventListener('click', activeLink));

// ------------------ END CODE -------------------- //


// ------------ START CODE - PAGE NAVIGATION ----------- //

/*
    definimos una FUNCION y pasamos 2 parametros
*/
function smoothScroll(target, duration){
    /*
        almacenamos en una VAR el TARGET este nos indica cual SECCION
        estamos seleccionado
    */
	let sectionSelected = document.querySelector(target),

    /* 
        almacenamos en una VAR (target.getBoundingClientRect().top) y
        (window.pageYOffset) estas prpiedades nos muestra numericamente 
        la posicion de la SECCION
    */
        sectionPosition = sectionSelected.getBoundingClientRect().top,
        startPosition = window.pageYOffset;
        distance = sectionPosition,
        startTime = null;
	
    /* 
        definimos una FUNCION y pasamos un 1 parametro
    */
	function animation(currentTime) {
        /* 
            definimos un condicional si el valor de STARTTIME es igual  
            NULL va a almacenar el valor de CURRENTTIME que nos muestra 
            numericamente la velocidad de desplazamiento entre SECCIONES 
        */
		if(startTime === null) startTime = currentTime;

		let timeElapsed = currentTime - startTime,
		    run = ease(timeElapsed, startPosition, distance, duration);
		    window.scrollTo(0, run);

		if(timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t,b,c,d){
			t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b
	}
	
	requestAnimationFrame(animation);
}

/* 
    almacenamos en una VAR los enlaces del menu de navegacion
    definidos en COMPONENT_NAVBAR
*/
let $sections = document.querySelectorAll('.sections');

/* 
    definimos un evento CLICK en las diferentes $SECTIONS y
    pasamos una FUNCION
*/
$sections[0].addEventListener('click', function() {
    /* 
        pasamos la funcion y como valor de los parametros
        pasamos los ID y la velocidad de paginacion
    */
    smoothScroll('#banner', 2000);
})

$sections[1].addEventListener('click', function() {
    smoothScroll('#skills', 2000);
})

$sections[2].addEventListener('click', function() {
    smoothScroll('#certify', 2000);
})

$sections[3].addEventListener('click', function() {
    smoothScroll('#proyects', 2000);
})

$sections[4].addEventListener('click', function() {
    smoothScroll('#contacts', 2000);
});

// ------------------ END CODE -------------------- //


// ----- START CODE - GENERATOR BG AND COLOR ------ //

/* 
    almacenamos en una VAR los enlaces del menu de navegacion
    definidos en COMPONENT_NAVBAR
*/
let $btn_navbar = document.querySelector("#btn_navbar");
    $bg_group = document.querySelectorAll(".bg_js"),
    $color_group = document.querySelectorAll(".color_js"),
    $strongs = document.querySelectorAll("strong"),
    $img_banner = document.querySelector("#img_banner");

/* 
    almacenamos en una VAR 1 ARROW FUNCTION 
*/
const generateRandomColor = () => {
    /*
        almacenamos en CONST numeros aleatorios generados con la 
        propiedad (Match.random()) x 256 el resultado lo pasamos 
        por la propiedad (Match.floor()) que redondea un numero 
        decimal a su entero descendiente mas cercano
    */
    const R = Math.floor(Math.random() * 256),
          G = Math.floor(Math.random() * 256),
          B = Math.floor(Math.random() * 256);

    /* 
        alamacenamos en 1 VAR la union de los 3 numeros
    */
    let rgb_color = `rgb(${R},${G},${B})`;
    
    /* 
        por ultimo es importante retornar la VAR
    */
    return rgb_color;
};

/* 
    definimos un evento CLICK en $BTN_NAVBAR y pasamos una FUNCION
*/
$btn_navbar.addEventListener("click", function() {
    /* 
        alamacenamos en 1 VAR la FUNCION antes definida
    */
    const NEW_COLOR = generateRandomColor();

    /* 
        pasamos a las VAR $IMG_BANNER la propiedad STYLE 
        que seran igual a los valores que nos trae la funcion 
        almacenada en NEWCOLOR
    */
    $img_banner.style.borderColor = NEW_COLOR;
    
    /* 
        hacemos un FOREACH en las VARS $BG_GROUP, $COLOR_GROUP
        $STRONGS pasamos un parametro a la cual le pasamos la 
        propiedad STYLE que seran igual a los valores que nos 
        trae la funcion almacenada en NEWCOLOR
    */
    $bg_group.forEach(bg => {
        bg.style.backgroundColor = NEW_COLOR
    });

    $color_group.forEach(color => {
        color.style.color = NEW_COLOR
    });

    $strongs.forEach(text => {
        text.style.color = NEW_COLOR;
    });
});

// ------------------ END CODE -------------------- //