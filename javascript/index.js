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
