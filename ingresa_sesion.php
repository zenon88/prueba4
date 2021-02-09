<?php
session_start();
include 'bd/mnpBDsas.class.php';
$email=$_POST['usuario'];
$contrasena=$_POST['contrasena'];
date_default_timezone_set('America/Mexico_City');
$fecha= date("Y-m-d H:i:s");

$sql_registrados="SELECT * FROM tbl_usuarios WHERE Email_usuario='".$email."'";


//-------------
class datos {
 public $success;
 public $id_registrado;
 public $mensaje;
 public $redireccion;
 public $activo;
}

 $respuesta = new datos();
 $respuesta->success = false;
 $respuesta->id_registrado=0;
 $respuesta->mensaje="Al parecer no estas registrado en nuestro sistema.";
 $respuesta->redireccion="";
 $respuesta->activo="";
//------------
$registrados  = $bd->ExecuteE($sql_registrados);
foreach ($registrados as &$registrado) {
		
				if($registrado['Pass_usuario']!=$contrasena)
				{
					$respuesta->success =false;
					$respuesta->id_registrado=0;
					$respuesta->mensaje="La contraseña es incorrecta";
					$respuesta->redireccion="";
					$respuesta->activo="";
				}else
				{
					$respuesta->success = true;
					$respuesta->id_registrado=$registrado['id_usuario'];
					$respuesta->mensaje="Estimado ".$registrado['Nom_usuario']." ".$registrado['Apellp_usuario']." ".$registrado['Apellm_usuario'].",en un momento será redireccionado a nuestra plataforma";
					$respuesta->redireccion=" change-password.php";
					$respuesta->activo=1;
					 $_SESSION['alumno']['id']=$registrado['id_usuario'];
					$_SESSION['alumno']['login']=true;
					$_SESSION['alumno']['nombre']=$registrado['Nom_usuario'];
					$_SESSION['alumno']['email']=$registrado['Email_usuario'];
				}
        }
    


echo json_encode($respuesta);
?>