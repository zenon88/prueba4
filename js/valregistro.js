
function valregistro()
{
	var ban = 1;
		
		if($("#nombre").val()=="")
		{	
			alert("Debe capturar el nombre");
			$("#nombre").focus();
			ban = 0;
		}else
		if($("#apellidop").val()=="")
		{
			alert("Debe capturar el apellido paterno");
			$("#apellidop").focus();
			ban = 0;
		}else
		if($("#apellidom").val()=="")
		{
			alert("Debe capturar el apellido materno");
			$("#apellidom").focus();
			ban = 0;
		}else
		if($("#num_telefono").val()=="")
		{
			alert("Debe capturar el numero telefonico");
			$("#num_telefono").focus();
			ban = 0;
		}else
		if($("#correo").val()=="")
		{
			alert("Debe proporcionar el correo electrónico");
			$("#correo").focus();
			ban = 0;
		}else
		if($("#pass").val()=="")
		{
			alert("Debe capturar la contraseña");
			$("#pass").focus();
			ban = 0;
		}else
		if($("#confpass").val()=="")
		{
			alert("Debe confirmar contraseña");
			$("#confpass").focus();
			ban = 0;
		}
		if(ban==1)
		{
			if($("#confpass").val()!=$("#pass").val())
			{
				alert("Las contraseñas no coinciden");
			$("#confpass").focus();
				ban = 0;
			}
		}
		
	if(ban ==1)
	{
		inserta()
	}
}
function inserta()
{
	alert("inserta");
}

function validarEmail(email)
 {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validartelefono(telefono)
{
    var te = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return te.test(telefono);

 }
