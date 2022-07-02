<?php

$conexion = mysqli_connect('localhost','root', '', 'orende');

insertar($conexion);

function insertar($conexion){
   $Nombre = $_POST['nombre'];
   $Apellido = $_POST['apellido'];
   $Email = $_POST['email'];
   $Contraseña = $_POST['contraseña'];
   $Confirmar_Contraseña = $_POST['Confirmar_Contraseña'];
   $consulta = "INSERT INTO registro(Nombre, Apellido, 
   Email, Contraseña,Confirmar_Contraseña)
   VALUES('$Nombre', '$Apellido', '$Email', '$Contraseña', '$Confirmar_Contraseña')";
   mysqli_query($conexion, $consulta);
   mysqli_close($conexion);
   if($conexion){
      echo"<h2><center>Sus datos fueron diligenciados exitosamente, ya estás registrado</h2>";
   }
}
?>
