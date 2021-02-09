
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
  <script src="js/vallogin.js"></script>
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
              
                <form action="#" method="POST" id="acceso">
                    <div class="fila">
                        <div class="fila">
                            <h1 style=" margin: 30px 0;">Iniciar Sesión</h1>
                        </div>
                    </div>
                    <div class="fila">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <center><h3>Ingresa su correo y contraseña para acceder</h3></center>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <center><input style="height: 45px;  margin-bottom: 35px;" type="email" name="usuario"  id="usuario" placeholder="Email" required></center>
                        </div>
						 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                            <center><input style="height: 45px;  margin-bottom: 35px;" type="password" name="contrasena" id="contrasena" placeholder="contraseña" required></center>
                        </div>
                    </div>
                    <div class="fila">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <center><button type="button" id="login" style="width:60%; margin-bottom: 35px;" onclick="ingresar();"><i class="fas fa-key"></i> &nbsp; Ingresar </button></center>
                        </div>
                    </div>
                </form>
                <div class="fila">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <center>
                            <button  id="registrar" style="width:100%;"> 
                              <a href=" register.php">Registrarse</href
                            </button>
                        </center>
                    </div>  
                </div>
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