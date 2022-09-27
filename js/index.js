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
		cargarDioses();
	    $('#contenido-desplegable').slideToggle();
	});
});

function cargarDioses() {
	$("#contenido-desplegable").html('');
	for(var i = 0; i < arrayDioses.length; i++){
        if(arrayDioses[i] !== undefined){
			getPanteon(arrayDioses[i].panteon);
            $("#contenido-desplegable").append(
				'<a href="' + arrayDioses[i].url + '">'+
					'<div class="item-busqueda">'+
						'<img src="img/' + arrayDioses[i].panteon + '.png" alt="' + getPanteon(arrayDioses[i].panteon) + '">'+
						'<p class="nombre-dios">' + arrayDioses[i].nombre + '</p>'+
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