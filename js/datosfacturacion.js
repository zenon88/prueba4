
function registro_facturacion()
{
	var ban = 1;
	var radios;
	var checked =0;
	var radios = document.getElementsByName("tipo_persona"); 

	for (var i = 0, length = radios.length; i < length; i++) 
	{ 
		if (radios[i].checked) 
		{ 
			// do whatever you want with the checked radio 
			//alert(radios[i].value); 
			checked =1;
			// only one radio can be logically checked, don't check the rest 
			break; 
		} 
	}

	if(checked==0)
	{
		ban=0;
		//alert("Debe de seleccionar el tipo de persona");
	}
	if( $("#rfc").val()!="" && $("#razon_social").val()!="" && $("#calle_num").val()!="" && $("#colonia").val()!="" && $("#municipio").val()!="" && $("#codigo_postal").val()!="" && $("#pais").val()!="" && $("#provincia").val()!="" && ban ==1)
	{
		if(ban==1)
		{
			if($("#pais").val()=="Seleccionar País" || ($("#pais").val()==0))
			{
				ban= 0;
				//alert("Debe seleccionar el país");
				toastada.warning('Debe seleccionar el país');
				$("#pais").focus();
			}
		}
		if(ban==1)
		{
			if($("#provincia").val()=="Seleccionar Estado"  || ($("#provincia").val()==0))
			{
				ban= 0;
				//alert("Debe seleccionar la provincia");
				toastada.warning('Debe seleccionar la provincia');
				$("#provincia").focus();
			}
		}

	}
	else
	{    ban = 0;
		if(checked==0)
		{	
			//alert("Debe seleccionar el tipo de Persona");
			toastada.warning('Debe seleccionar el tipo de Persona');
			$("#tipo_persona").focus();
		}
		else
		if($("#rfc").val()=="")
		{	
			//alert("Debe capturar el rfc");
			toastada.warning('Debe capturar el rfc');
			$("#rfc").focus();
		}
		else
		if($("#razon_social").val()=="")
		{
			//alert("Debe capturar la Razón Social");
			toastada.warning('Debe capturar la Razón Social');
			$("#razon_social").focus();
		}
		else
		if($("#calle_num").val()=="")
		{
			//alert("Debe capturar la calle y numero");
			toastada.warning('Debe capturar la calle y numero');
			$("#calle_num").focus();
		}
		else
		if($("#colonia").val()=="")
		{
			//alert("Debe capturar la colonia");
			toastada.warning('Debe capturar la colonia');
			$("#colonia").focus();
		}
		else
		if($("#municipio").val()=="")
		{
			//alert("Debe capturar el municipio");
			toastada.warning('Debe capturar el municipio');
			$("#municipio").focus();
		}else
		if($("#codigo_postal").val()=="")
		{
			//alert("Debe capturar el código postal");
			toastada.warning('Debe capturar el código postal');
			$("#codigo_postal").focus();
		}else
		if($("#pais").val()=="Seleccionar País")
		{
			//alert("Debe seleccionar el pais");
			toastada.warning('Debe seleccionar el pais');
			$("#pais").focus();
		}else
		if($("#provincia").val()=="Seleccionar Estado")
		{
			//alert("Debe seleccionar la provincia");
			toastada.warning('Debe seleccionar la provincia');
			$("#provincia").focus();
		}
	}
	if(ban ==1)
	{
		reg_fac()
	}
}

function reg_fac()
{
	var datos = $('#reg_datos_fac').serialize();
	$.ajax({
			type:'POST',
			url:'registro_datos_facturacion.php',
			data:datos,
			success:function(r)
			{
				if(r == 1)
				{
					//alert("Se actualizó correctamente la información");
					toastada.warning('Se actualizó correctamente la información');
					reload.location();

				}else
				{
					//alert("Se guardó correctamente la información");
					toastada.warning('Se guardó correctamente la información');
					reload.location();
				}
			}
		});
}

function carga_datos()
{
	obtpais();
	 $.ajax
      ({
        url: 'obt_datos_fac.php',
        type: 'POST',
        data: ""
      })
      .done(function(info) 
      {
            //console.log(info);
            var usuario = JSON.parse(info);
            var tipo_persona;
            var rfc;
            var razon_social;
            var calle_num;
            var colonia;
            var municipio;
            var profesion;
            var codigo_postal;
            var id_pais;
           
            for (var i in usuario.data) {
                //console.log(i);
                tipo_persona = usuario.data[i].Tipo_persona;
                rfc = usuario.data[i].Rfc;
                razon_social = usuario.data[i].Razon_social;
                calle_num = usuario.data[i].Calle_num;
                colonia = usuario.data[i].Colonia;
                municipio = usuario.data[i].Municipio;
                codigo_postal = usuario.data[i].Codigo_postal;
                id_pais = usuario.data[i].Pais;
                estado = usuario.data[i].Estado;
            }

            if(tipo_persona == "Fisica")
            {
              document.getElementById("tipo_fisica").checked = true;
            }else
            {
              document.getElementById("tipo_moral").checked = true;
            }
           
            //document.getElementById("tipo_persona").value = tipo_persona;
            document.getElementById("rfc").value = rfc;
            document.getElementById("razon_social").value = razon_social;
            document.getElementById("calle_num").value = calle_num;
            document.getElementById("colonia").value = colonia;
            document.getElementById("municipio").value = municipio;
            document.getElementById("codigo_postal").value = codigo_postal;
           
            $("#pais").val(id_pais);
            $('#provincia').find('option').remove().end().append('<option value="whatever"></option>').val('whatever');   
            $("#pais option:selected").each( function ()
              {
                Id_pais = id_pais;
                $.post("asignaestado.php", { Id_pais: Id_pais,estado:estado }, function(data)
                {
                  $("#provincia").html(data);
                });            
              });
			   
      });
}

window.onload=carga_datos();