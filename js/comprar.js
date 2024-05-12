function comprar() {
 
  Swal.fire({
    title: "Hemos notificado tu pago!",
    text: "Pronto uno de nuestros agente se contactará contigo",
    icon: "success"
  });
}
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón de enviar correo
  const sendEmailBtn = document.getElementById("sendEmailBtn");

  // Agregar un evento de clic al botón
  sendEmailBtn.addEventListener("click", function() {
    // Realizar la solicitud AJAX para enviar el correo electrónico
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "enviar_correo.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log("Correo enviado correctamente");
        // Aquí puedes realizar cualquier otra acción después de enviar el correo
      } else {
        console.error("Error al enviar el correo");
      }
    };
    // Enviar la solicitud con los datos necesarios (si los hay)
    xhr.send();
  });
});



// Obtener elementos del DOM
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const sendEmailBtn = document.getElementById("sendEmailBtn");

// Función para abrir el modal
openModalBtn.addEventListener("click", function() {
  modal.style.display = "flex";
});

// Función para cerrar el modal al hacer clic en la "x"
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Función para cerrar el modal al hacer clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Función para enviar el correo al hacer clic en el botón dentro del modal
sendEmailBtn.addEventListener("click", function() {
  // Aquí puedes agregar la funcionalidad para enviar el correo
  console.log("Correo enviado");
  // Cerrar el modal después de enviar el correo
  modal.style.display = "none";
});
