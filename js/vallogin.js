function ingresar()
{
	var ban = 1;
	if($("#usuario").val()=="")
	{
		alert("Debe de capturar su correo");
		$("#usuario").focus();
		ban=0;
			  
	}else
	if($("#contrasena").val()=="")
	{
		alert("Debe de capturar la contraseña");
		$("#contrasena").focus();
		ban=0; 
	}
	if(ban==1)
	{
		 
      $.ajax({
         url: 'ingresa_sesion.php',
         type: 'POST',
         dataType: 'json',
         data: {usuario: $("#usuario").val(),contrasena: $("#contrasena").val()}
      })
      .done(function(json) {

         if(json.id_registrado!=0){
          if (json.activo==1) {
            alert(json.mensaje);
            window.location.href = json.redireccion;
          }
            
            
         }else{
			  alert(json.mensaje);
		 }
            
      })
      
   }
		
	
}