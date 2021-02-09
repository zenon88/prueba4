function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
		   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
  		}
	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function Pagina(nropagina)
{
	var numpage=nropagina-1;
	var numquestions = numpage;
	var ban = 0;
	var valselect;
	var ciclo= 0;
	var pagsig= true;
	var examen = document.getElementById("examen").innerHTML;
	var radios = document.getElementsByName(numpage); 
	for (var i = 0, length = radios.length; i < length; i++) 
	{ 
		ciclo =1;
		if (radios[i].checked) 
		{ 
			// do whatever you want with the checked radio 
			//alert(radios[i].value); 
			valselect=radios[i].value;
			ban =1;
			// only one radio can be logically checked, don't check the rest 
			break; 
		} 
	}
	if(ciclo==0)
	{
		var radios = document.getElementsByName(nropagina); 
		for (var i = 0, length = radios.length; i < length; i++) 
		{ 
			if (radios[i].checked) 
			{ 
				// do whatever you want with the checked radio 
				//alert(radios[i].value); 
				valselect=radios[i].value;
				ban =1;
				pagsig= false;
				// only one radio can be logically checked, don't check the rest 
				break; 
			} 
		}
		numquestions= nropagina;
	}
	 if(ban ==0)
	 {
		 
		 alert("Debe de seleccionar una respuesta");
	 }
	 else
	 { 
		if(pagsig==1)
		{
			inserta(numquestions,valselect,examen);
		    cambiaPagina(nropagina);
		}
		if(pagsig==0)
		{
			inserta(numquestions,valselect,examen);
			window.location.href = "sesion1.php"
		}
	 }
	
}
function cambiaPagina(nropagina){
	//alert("Holamundo"+nropagina);
	//donde se mostrará los registros
	divContenido = document.getElementById('contenido');
	ajax=objetoAjax();
	//uso del medoto GET
	//indicamos el archivo que realizará el proceso de paginar
	//junto con un valor que representa el nro de pagina
	ajax.open("GET", "paginacion.php?pag="+nropagina);
	divContenido.innerHTML= '<img src="anim.gif">';
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			//mostrar resultados en esta capa
			divContenido.innerHTML = ajax.responseText
		}
	}
	//como hacemos uso del metodo GET
	//colocamos null ya que enviamos 
	//el valor por la url ?pag=nropagina
	ajax.send(null)
}


function inserta(numquestions,valselect,examen) {
    //var datos = $('#registro').serialize();

    $.ajax({
            type: 'POST',
            url: 'registraexamen.php',
            data: { numquestions: numquestions, opcion:valselect,examen:examen}
        })
        .done(function(r)
            //success:function(r)
            {
                if (r == 1) {
					//cambiaPagina(nropagina);
                 
                }
                //mensaje.html(r);

            });
}


///https://stackoverflow.com/questions/8838648/onchange-event-handler-for-radio-button-input-type-radio-doesnt-work-as-one
//funcion para saber autaticamente cual radio fue activado.
//function handleClick(myRadio) {
  //  alert('Old value: ' + currentValue);
   // alert('New value: ' + myRadio.value);
    //currentValue = myRadio.value;
//}<input type="radio" name="myRadios" onclick="handleClick(this);" value="1" />
//<input type="radio" name="myRadios" onclick="handleClick(this);" value="2" />