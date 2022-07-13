let $btnPortfolio = document.querySelector('#btn-portfolio'),
    $loaderComponent = document.querySelector('#loader-component');

$btnPortfolio.addEventListener('click', (e) => {
    e.preventDefault(e);

    /* 
        añadimos a $loaderComponent la clase js_show_loader definida
        en 'src/sass/layout/laoder.scss' 
    */
    $loaderComponent.classList.add('js_show_loader');

    /* 
        añadimos la funcion setTimeout() para retrazar la respuesta del
        servidor y con esto darle espacio al loader
    */
    setTimeout(() => {
        /* 
            añadimos a $loaderComponent la clase js_show_loader definida
            en 'src/sass/layout/laoder.scss' 
        */
        $loaderComponent.classList.remove('js_show_loader');
        
        location.href = "./portfolio.html";
    }, 2000)
})