document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const edad = document.getElementById("edad");
  
    formulario.addEventListener("submit", function(e) {
      e.preventDefault();   // evitar envio automatico
      let esValido = true;
  
      // Limpiar errores anteriores
      limpiarError(nombre);
      limpiarError(correo);
      limpiarError(edad);
  
      // Validar nombre
      if (nombre.value.trim() === "") {
        mostrarError(nombre, "El nombre es obligatorio.");
        esValido = false;
      }
  
      // Validar correo
      if (correo.value.trim() === "") {
        mostrarError(correo, "El correo electronico es obligatorio.");
        esValido = false;
      } else if (!correoValido(correo.value)) {
        mostrarError(correo, "Formato de correo invalido.");
        esValido = false;
      }
  
      // Validar edad
      if (edad.value.trim() === "") {
        mostrarError(edad, "La edad es obligatoria.");
        esValido = false;
      } else if (isNaN(edad.value) || Number(edad.value) <= 18) {
        mostrarError(edad, "Debes ser mayor de 18 años.");
        esValido = false;
      }
  
      console.log("Resultado de validacion:", esValido);
  
      if (esValido) {
        alert("Formulado enviado!");
        formulario.submit();
      }
    });
  
    // Muestra mensaje de error debajo del campo
    function mostrarError(campo, mensaje) {
      const errorEl = document.getElementById(`error-${campo.id}`);
      errorEl.textContent = mensaje;
    }
  
    // Limpia el mensaje de error de un campo
    function limpiarError(campo) {
      const errorEl = document.getElementById(`error-${campo.id}`);
      errorEl.textContent = "";
    }
  
    // Comprueba que el correo tenga formato valido
    function correoValido(valor) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(valor);
    }
  });
  