var bubbleProductosOpen = true;

$(document).ready(function(){
	/*
	var idioma = navigator.language;
	var resIdioma = idioma.split("-");
	var idiomaActual = resIdioma[0];
	var urlActual = window.location.href;
	var arrayUrl = urlActual.split("/");
	var paginaActual = arrayUrl[arrayUrl.length-1];
	var urlNuevaEN = "https://tarotgratisonline.es/en/";
	var urlNuevaES = "https://tarotgratisonline.es/";

	if(!urlActual.includes("/en/") && idiomaActual == "en") {
		window.location.replace(urlNuevaEN + paginaActual);
	} else if(urlActual.includes("/en/") && idiomaActual == "es") {
		window.location.replace(urlNuevaES + paginaActual);
	}
	*/
	/*
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		items:1,
		autoplay:true
	});
*/
	$('#open-search').on('click', function() {
	    $('#buscador-desplegable').slideToggle();
	});
/*
	$('.cabecera-bubble-productos').on('click', function() {
		$('.desplegable-productos').slideToggle();
		bubbleProductosOpen = !bubbleProductosOpen;
		if(bubbleProductosOpen) {
			$('#btn-cerrar').html("×");
		} else {
			$('#btn-cerrar').html("&#129045");
		}
	});
*/
});