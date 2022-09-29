let arrayDioses = [];

$(document).ready(function(){
	const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './json/dioses.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let dioses = JSON.parse(this.responseText);

            for(let item of dioses) {
                arrayDioses.push(item);
            }
        }
    }

	$('#open-search').on('click', function() {
	    $('#buscador-desplegable').slideToggle();
	});

	$('#input-buscar').on('click', function() {
		$('#input-buscar').val('');
		cargarDioses(arrayDioses);
		$('#cerrar-desplegable').slideToggle();
	    $('#contenido-desplegable').slideToggle();
	});

	$("#input-buscar").keyup(function() {
		filtrarDioses($( "#input-buscar" ).val());
	});

	$('#cerrar-desplegable').on('click', function() {
		$('#input-buscar').val('');
		$('#cerrar-desplegable').slideToggle();
	    $('#contenido-desplegable').slideToggle();
	});
});

function cargarDioses(diosesFiltrados) {
	$("#contenido-desplegable").html('');
	for(var i = 0; i < diosesFiltrados.length; i++){
        if(diosesFiltrados[i] !== undefined){
			getPanteon(diosesFiltrados[i].panteon);
            $("#contenido-desplegable").append(
				'<a href="' + diosesFiltrados[i].url + '">'+
					'<div class="item-busqueda">'+
						'<img src="img/' + diosesFiltrados[i].panteon + '.png" alt="' + getPanteon(diosesFiltrados[i].panteon) + '">'+
						'<p class="nombre-dios">' + diosesFiltrados[i].nombre + '</p>'+
					'</div>'+
				'</a>'
            );
        }
    }
}

function getPanteon(panteon) {
	let altPanteon = '';
	if (panteon === 'grecia') {
		altPanteon = 'Panteón griego';
	}
	
	return altPanteon;
}

function filtrarDioses(text) {
	let arrayFiltrado = [];
	arrayDioses.forEach(dios => {
		if(dios.nombre.toLowerCase().includes(text.toLowerCase())) {
			arrayFiltrado.push(dios);
		}
	});
	cargarDioses(arrayFiltrado);
}