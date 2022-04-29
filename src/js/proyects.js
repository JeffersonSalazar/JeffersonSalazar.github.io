/* 
	swiper: alamacena el contenedor con la clase mySwiper
	definido en htlm
*/
let swiper = new Swiper('.mySwiper', {
	/* 
        paginacion: es donde se define las guias circulares 
		del slider, modificando el parametro clickable podemos
		elegir si queremos que slider cambie desde los iconos
    */
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		clickable: true,
	},

	/* 
		loop: esta propiedad nos permite repetir el slider de 
		manera infinita
	*/
	loop: true,
});