<?php 
include('bd/conexion.php');
$usuario=$_POST['usuario'];
$contra=$_POST['pass'];

$sql="select * from tbl_usuarios where Cve_usuario='".$usuario."' and Pass_usuario='".$contra."'";

$sql="select * from tbl_usuarios where Cve_usuario='".$usuario."'";
$query =  mysqli_query($conn, $sql);
		if(mysqli_num_rows($query)>0)
		{
			$query =  mysqli_query($conn, $sql);
			if(mysqli_num_rows($query)>0)
			{
				echo "<script> alert('Correo o contraseña incorrectasgggggggggggggggg.'); </script>";
				$row = mysqli_fetch_assoc($query);
				//session_start();
				//$_SESSION['name'] = $row['name'];
			header('Location: home.php');	
			}
			else
			{
				echo "<script> alert('Contraseña incorrecta'); </script>";	
			}
			//header('Location: home.php');
		}
		else
		{	
			echo "<script> alert('El usuario no esta registrado.'); 
				window.location.href='index.html';
			</script>";	
			
		}

		
?>

