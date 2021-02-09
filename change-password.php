
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-------------------Hojas es Estilos------------------------------>
    <link rel="stylesheet" href="css/estilo-login.css">
    <link rel="stylesheet" href="css/responsive.css">
    <!------------------Libreria de Jquery----------------------------->
  <link rel="stylesheet" href="css/estilos-registro.css">  
  <script src="js/valregistro.js"></script>
</head>

<body>


<div id="mensaje" style="border:1px solid #CCC; padding:10px;"></div>

    <!--=======================================================================
    Login
    =========================================================================-->
    <div id="contenedor-login" class="contenedor ">
       
        <div class="fila">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-0"></div>
            <div class="login col-lg-6 col-md-6 col-sm-6 col-xs-12" style="background-color: rgba(239, 150, 35, 0.89 ); padding-bottom: 40px;">
              
                  <form action="" method="POST" id="registro">
                    <div class="fila">
                        <h4>Cambio de contraseña</h4>
                    </div>
                    <div class="fila">
                        <div class="fila">
                               <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <label>Contraseña</label>
                                    <input type="password" name="pass" id ="pass" required>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <label>Confirmar Password</label>
                                    <input type="password" name="confpass" id ="confpass" required>
                            </div>
                        </div>
                    </div>
                    <div class="fila">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <center><button  style="height: 35px;" type="button" id="btnguardar" onclick="camiocontraseña()">Guardar</button></center>
                        </div>                        
                    </div>
                </form>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-0"></div>
        </div>
    </div>

    <script src="js/jquery-1.9.1.min.js"></script>








    <!-----------------Scripts----------------------------------------------->

	 <script src="js/jquery-1.9.1.min.js"></script>
	 <
	 <script>
     </script>

</body>

</html>