<?php 
include_once("conexion.php");

class mnpBD{
 //constructor	
 	var $con;
	var $tabla;
	function mnpBD($tabla){
 		$this->con=new BD;
		$this->tabla=$tabla;
 	}

	function insertar($cadCampos,$valor){
	$talValores=count($valor);
	$arrCampos = explode(",",$cadCampos);
	if(count($arrCampos) != $talValores)
	{ echo "imposible continuar el numero de columnas no coincide";}
	else
	{
		for($i=0;$i < $talValores;$i++)
		{
			$valores.="'".addslashes($valor[$i])."',";
		}
		$valores = substr ($valores, 0, strlen($valores) - 1);
		$qry="INSERT INTO ".$this->tabla." (".$cadCampos.") VALUES (".$valores.")";
		//echo $qry;
			if($this->con->ExecuteNonQuery($qry)==true){
				return true;
			}else{return false;}
	}
	}
	
	
	function actualizar($campos,$valor,$condicion){
		$arrCampos = explode(",",$campos);
	$talValores=count($valor);
	for($i=0;$i < $talValores;$i++)
	{
		$valores.=$arrCampos[$i]." = '".addslashes($valor[$i])."', ";
	}
	$valores = substr ($valores, 0, strlen($valores) - 1);
	$valores = substr ($valores, 0, strlen($valores) - 1);
	$qry="UPDATE ".$this->tabla." SET ".$valores ." Where ".$condicion;
	//echo $qry;
	if($this->con->ExecuteNonQuery($qry)==true){
			return true;
		}else{return false;}
	}

	}
?>