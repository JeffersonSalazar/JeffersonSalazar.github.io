/* 
	revealElements: alamacena el metodo ScrollReveal() 
*/
let revealElements = ScrollReveal({
    /* 
        duration: esta propiedad me permite defimnir la
        velocidad en que se van revelando los elementos
    */
    duration: 2000,
});

/* 
	pasamos a revealElements el metodo reveal() que recibe
    como parametro el elemento html al cual vamos a aplicar
    scrollReveal 
*/
revealElements.reveal('.jumbotron_component', {
    /* 
        origin: con esta propiedad definimos el modo de 
        revelado del elemento
    */
    origin: "bottom",

    /* 
        distance: esta propiedad me permite definir el
        desplazamiento que tiene tendra el elemento antes
        de ser revelado
    */
    distance: "10px"
})

revealElements.reveal('.box_banner_biografy', {
    origin: "bottom",
    distance: "10px"
});

revealElements.reveal('.box_banner_img', {
    origin: "top",
    distance: "10px"
});

revealElements.reveal('h2', {
    origin: "bottom",
    distance: "30px"
});

revealElements.reveal('.js_customer_left', {
    origin: "bottom",
    distance: "60px"
});

revealElements.reveal('.js_customer_right', {
    origin: "bottom",
    distance: "70px",
    duration: 3500
});


