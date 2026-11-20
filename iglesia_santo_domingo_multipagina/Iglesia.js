<script>
  
  var autor = "Simón";
  var semestre = "Primer Semestre";
  console.log("Sitio web creado por " + autor + " (" + semestre + ")");

  var formulario = document.getElementById("form-contacto");

  if (formulario != null) {
    formulario.onsubmit = function(evento) {
      // Evita que la página se recargue sola
      evento.preventDefault();

      var nombre = document.getElementById("nombre").value;
      var correo = document.getElementById("correo").value;
      var mensaje = document.getElementById("mensaje").value;

      if (nombre == "" || correo == "" || mensaje == "") {
        alert("Por favor llena todos los campos antes de enviar.");
      } else {
        alert("¡Mensaje enviado con éxito, " + nombre + "!");
        formulario.reset(); 
      }
    };
  }
</script>