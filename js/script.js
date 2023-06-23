var elementos = document.getElementsByClassName('wrap-texto');
for (var i = 0; i < elementos.length; i++) {
  var elemento = elementos[i];
  elemento.style.color = 'white';
}
var list = document.getElementsByClassName('list');
for (var i = 0; i < list.length; i++) {
  var lists = list[i];
  lists.style.listStyleType = 'none';
}
list-style-type
var titulo = document.getElementById('titulo');
titulo.innerHTML = '<h1 style="color: red">Turismo Traslasierra</h1>';
//////
function submitForm() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var query = document.getElementById("query").value;
  var terms = document.getElementById("terms").checked;
  if (!firstName || !lastName || !email || !query || !terms) {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }
  console.log("Nombre: " + firstName);
  console.log("Apellido: " + lastName);
  console.log("Correo electrónico: " + email);
  console.log("Consulta: " + query);
  console.log("Términos y condiciones aceptados: " + terms);
  alert("¡El formulario se ha enviado correctamente!");
  document.getElementById("contactForm").reset();
  return false; 
}
