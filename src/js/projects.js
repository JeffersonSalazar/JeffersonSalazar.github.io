/* 
	swiper: alamacena el elemento html con la clase mySwiper
*/
let swiper = new Swiper('.mySwiper', {
	/* 
        paginacion: es donde se define las guias para el
		desplazamiento del slider
    */
	pagination: {
		el: '.swiper-pagination'
	},

	/* 
		navigation: implementa la funcionalidad de ir 
		atras o adelante presionanado los iconos < >
		del slider
	*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	/* 
		loop: esta propiedad nos permite repetir el slider de 
		manera infinita
	*/
	loop: true,
});