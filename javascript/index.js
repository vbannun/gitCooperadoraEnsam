//Javasript para menu hamburguesa //////////////////////////////////////////////////////////////////////////
const hamburguerBtn = document.getElementById('hamburguer-btn');
const navegador = document.getElementById('nav');
const listaItems = navegador.getElementsByTagName('li');

// Agregar la clase "hamburguesa--cerrado" al botón hamburguesa
hamburguerBtn.classList.add('hamburguesa--cerrado');

function toggleMenu() {
  navegador.classList.toggle('mostrar');
  hamburguerBtn.classList.toggle('hamburguesa--cerrado');
}

function hideMenu() {
  navegador.classList.remove('mostrar');
}

function hideMenuOutside(event) {
  if (!navegador.contains(event.target) && !hamburguerBtn.contains(event.target)) {
    navegador.classList.remove('mostrar');
    hamburguerBtn.classList.add('hamburguesa--cerrado');
  }
}

hamburguerBtn.addEventListener('click', toggleMenu);

for (let i = 0; i < listaItems.length; i++) {
  listaItems[i].addEventListener('click', hideMenu);
}

document.addEventListener('click', hideMenuOutside);

// JAVASCRIPT PARA STICKY HEADER //////////////////////////////////////////////////////////////////////////////
const header = document.getElementById('cabecera');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});




//Javasript para modal Socios - Asociarse //////////////////////////////////////////////////////////////////
var boton = document.getElementById("botonSocios");
var modal = document.getElementById("modalSocios");
var cerrarModal = document.getElementById("cerrarModal");
var oscurecer = document.getElementById("oscurecer");

boton.onclick = function() {
  modal.style.display = "block";
  oscurecer.classList.add("mostrar");
}

cerrarModal.onclick = function() {
  modal.style.display = "none";
  oscurecer.classList.remove("mostrar");
}

var aceptarModalBtn = document.getElementById("aceptarModal");
aceptarModalBtn.addEventListener("click", function() {
  var modal = document.getElementById("modalSocios");
  modal.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Javasript para modal Campañas1 - Campañas //////////////////////////////////////////////////////////////////
var boton1 = document.getElementById("botonCampanas1");
var modal1 = document.getElementById("modalCampanas1");
var cerrarModal1 = document.getElementById("cerrarModal1");
var oscurecer1 = document.getElementById("oscurecer1");

boton1.onclick = function() {
  modal1.style.display = "block";
  oscurecer1.classList.add("mostrar");
}

cerrarModal1.onclick = function() {
  modal1.style.display = "none";
  oscurecer1.classList.remove("mostrar");
}

var aceptarModalBtn1 = document.getElementById("aceptarModal1");
aceptarModalBtn1.addEventListener("click", function() {
  var modal1 = document.getElementById("modalCampanas1");
  modal1.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
//Javasript para modal Campañas2 - Campañas //////////////////////////////////////////////////////////////////
var boton2 = document.getElementById("botonCampanas2");
var modal2 = document.getElementById("modalCampanas2");
var cerrarModal2 = document.getElementById("cerrarModal2");
var oscurecer2 = document.getElementById("oscurecer2");

boton2.onclick = function() {
  modal2.style.display = "block";
  oscurecer2.classList.add("mostrar");
}

cerrarModal2.onclick = function() {
  modal2.style.display = "none";
  oscurecer2.classList.remove("mostrar");
}

var aceptarModalBtn2 = document.getElementById("aceptarModal2");
aceptarModalBtn2.addEventListener("click", function() {
  var modal2 = document.getElementById("modalCampanas2");
  modal2.style.display = "none";
});

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

//Javascript para formulario - Contacto /////////////////////////////////////////////////////////////////////
// Rsetear al recargar navegador
window.onload = function() {
  var form = document.getElementById("consultaEnsam");
  form.reset();
};


// Obtener el formulario y el botón de enviar
const form = document.getElementById('consultaEnsam');
const enviarBtn = document.getElementById('enviar');

// Agregar el evento 'submit' al formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevenir el envío del formulario por defecto
  const formData = new FormData(form); // obtener los datos del formulario

  // Crear una instancia de XMLHttpRequest para enviar el formulario
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'php/enviar_formulario.php');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Si el envío fue exitoso, mostrar el modal correspondiente y resetear el formulario
      document.getElementById('modalContacto').style.display = 'block';
      form.reset();
    } else {
      // Si hubo un error, mostrar una alerta con el mensaje correspondiente
      alert('Error al enviar el formulario');
    }
  };
  // Enviar los datos del formulario en formato url-encoded
  xhr.send(new URLSearchParams(formData).toString());
});

// Agregar el evento 'click' al botón de cerrar del modal
document.querySelector('.cerrar-modal').addEventListener('click', () => {
  document.getElementById('modalContacto').style.display = 'none';
});
