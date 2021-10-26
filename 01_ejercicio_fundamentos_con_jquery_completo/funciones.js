var super_id = 2;
function enviarFormulario() {
	// Nunca hacerlo por partes!
	$("#table_body").append('<tr id="nf"> </tr>');
	var nf = $("#nf");
	nf.append('<td> ' + $('#campo_nombre').val() + ' </td>');
	nf.append('<td> ' + $('#campo_apellidos').val() + ' </td>');
	nf.append('<td> ' + $('#campo_fecha').val() + ' </td>');
	// Ejercicio 1 - Y el campo Genero?
	s = ["campo_sexo_hombre", "campo_sexo_mujer","campo_sexo_otro","campo_sexo_no_especificado"];
	if ($("input[name='sexo']:checked").val() != undefined){
		nf.append('<td> ' + $("input[name='sexo']:checked").val() + ' </td>');
	} else{
		nf.append('<td>  </td>');
	}
	// Ejercicio 2 - Y el imagen?	
	if($("#campo_tiempo_parcial").prop('checked')){
		nf.append('<td><img src="ok.png" width="32" alt="Sí"></td>');
	} else {
		nf.append('<td><img src="ko.png" width="32" alt="No"></td>');
	}
	
	// Ejercicio 3 - Y el boton?	
	nf.append('<td><button class="borrar" name="' + super_id.toString()+ '"> BorrarJquery2 </button></td>');
	
	// Ejercicio 4 - Y para que el boton funcione?	
	$(document).ready(function(){
		$("button.borrar").click(function(){
			//$(this).remove();
			//$(this).parent().parent().remove();
			$("#"+ this.name ).remove();
		})
	})
	nf.removeAttr("id");
	nf.attr("id",super_id); 
	super_id +=1;
}


