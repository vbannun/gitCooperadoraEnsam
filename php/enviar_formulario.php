<?php
  if (isset($_POST['g-recaptcha-response'])) {
    $captcha = $_POST['g-recaptcha-response'];
    $respuesta = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdzqvIlAAAAAAY8atbS9FTIE-qP0l9_z1xSu7kH&response=$captcha");
    $resultado = json_decode($respuesta);
    if ($resultado->success == true) {
      // Captcha válido, procesa el formulario
      $nombre = $_POST['nombre'];
      $email = $_POST['email'];
      $celular = $_POST['celular'];
      $asunto = $_POST['asunto'];
      $mensaje = $_POST['mensaje'];

      $to = 'ensamcooperadora@gmail.com';
      $subject = $asunto;
      $body = "Nombre: $nombre\nEmail: $email\nCelular: $celular\nAsunto: $asunto\nMensaje:\n$mensaje";

      if (mail($to, $subject, $body)) {
        echo 'success';
      } else {
        echo 'error';
      }
    } else {
      // Captcha inválido:
      echo 'error';
    }
  } else {
    // El captcha no se envió:
    echo 'error';
  }
?>
