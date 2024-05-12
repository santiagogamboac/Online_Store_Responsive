<?php
include 'config.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera los datos del formulario
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Configuración para enviar el correo
    $destinatario = "destinatario@example.com";
    $asunto = "Nuevo mensaje desde el formulario";
    $cuerpoMensaje = "Correo electrónico: $email\nMensaje: $mensaje";

    // Envía el correo
    $resultado = mail($destinatario, $asunto, $cuerpoMensaje);

    // Verifica si se envió correctamente
    if ($resultado) {
        echo "El correo se envió correctamente.";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
}
?>
