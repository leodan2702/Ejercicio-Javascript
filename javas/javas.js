document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturamos los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const edad = document.getElementById('edad').value;

    // Validación de los campos
    if (nombre === "" || apellidos === "") {
        alert("Nombre y apellidos no pueden estar vacíos.");
        return;
    }

    if (isNaN(edad) || edad <= 0) {
        alert("Por favor, introduce una edad válida mayor que 0.");
        return;
    }

    // Mostrar los datos en pantalla
    const infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Edad:</strong> ${edad}</p>
    `;

    // Mostrar la caja de datos
    document.getElementById('datos').style.display = 'block';

    // Borrar el formulario
    document.getElementById('formulario').reset();

    // Enfocar en el campo de "nombre"
    document.getElementById('nombre').focus();
});

// Evento para cerrar la caja de datos
document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('datos').style.display = 'none';
});
