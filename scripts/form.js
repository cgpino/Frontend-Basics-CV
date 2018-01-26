var form = document.getElementsByName("contacto")[0];

var nombreInput = document.getElementById("nombre");
var apellidosInput = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var numeroInput = document.getElementById("telefono")

var conocidoInput = {
  conocido1: document.getElementById("tipo_conocido_1"),
  conocido2: document.getElementById("tipo_conocido_2"),
  conocido3: document.getElementById("tipo_conocido_3")
}
var conocidoOtroMensajeInput = document.getElementById("tipo_conocido_otro_mensaje")
var mensajeInput = document.getElementById("contacto_mensaje")






/*var ejercitoInput = document.getElementById("ejercito");
var fechaInput = document.getElementById("fecha");
var submitButton = document.getElementById("enviar");

var misionInput = {
  misions1: document.getElementById("tipo_mision_1"),
  misions2: document.getElementById("tipo_mision_2"),
  misions3: document.getElementById("tipo_mision_3")
};*/

form.addEventListener("submit", function(event) {
  if (nombreInput.checkValidity() === false) {
    alert("Tienes que escribir tu nombre");
    nombreInput.focus();
    event.preventDefault();
    return false;
  }

  if (apellidosInput.checkValidity() === false) {
    alert("Tienes que escribir tu apellidos");
    apellidosInput.focus();
    event.preventDefault();
    return false;
  }

  var regexEmail = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  var resultEmailValidation = regexEmail.test(emailInput.value);

  if (resultEmailValidation === false) {
    alert("Tienes que escribir un email correcto");
    emailInput.focus();
    event.preventDefault();
    return false;
  }

  var regexNumber = /^\+[0-9\{2}]+ [0-9\{9}]/;
  var resultNumberValidation = regexNumber.test(numeroInput.value);

  if (resultNumberValidation === false) {
    alert("Tienes que escribir un número de teléfono correcto");
    emailInput.focus();
    event.preventDefault();
    return false;
  }

  if (misionInput.conocido1.checkValidity() === false) {
    alert("Tienes que seleccionar una opción por la cual me has conocido");
    event.preventDefault();
    return false;
  }

  /*
  if (misionInput.misions1.checkValidity() === false) {
    alert("Tienes que seleccionar el tipo de mision");
    event.preventDefault();
    return false;
  }

  if (ejercitoInput.checkValidity() === false) {
    alert("Tienes que seleccionar tamaño del ejercito");
    ejercitoInput.focus();
    event.preventDefault();
    return false;
  }*/

  submitButton.setAttribute("disabled", "");
  event.preventDefault();

  setTimeout(function() {
    form.reset();
    sendNotification("Formulario recibido", "Gracias por participar");
    submitButton.removeAttribute("disabled");
  }, 1000);
});
