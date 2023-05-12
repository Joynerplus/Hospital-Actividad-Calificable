//obtenemos el formulario de los pacientes 
const formularioPacientes = document.getElementById('registroPacientesForm');

formularioPacientes.addEventListener('submit', (event) => {
    event.preventDefault();
    const datosPacientes = {
        nombrePaciente: document.getElementById('nombre').value,
        apellidoPaciente: document.getElementById('apellido').value,
        cedulaPaciente: document.getElementById('cedula').value,
        edadPaciente: document.getElementById('edad').value,
        telefonoPaciente: document.getElementById('telefono').value,
        especialidadRequerida: document.getElementById('especialidadRequerida').value,
    };

    guardarEnCookie(datosPacientes)
    const confirmacion = confirm('¿Desea ver los datos guardados?');
    if (confirmacion) {
        window.location.href = '../listadoPacientes.html';
    } else {
        alert('Continuando en el formulario');
        formularioPacientes.reset()
    }
});

//Guardar en la cookie

function guardarEnCookie (paciente) {
    let datosPaciente = getCookie("pacientes");
    if (datosPaciente === ""){
        datosPaciente = "[]";
    }

    const pacientes = JSON.parse(datosPaciente);
    pacientes.push(paciente);
    const nuevoJSON = JSON.stringify(pacientes)
    setCookie ("pacientes", nuevoJSON);
}

//Obtener los datos de la cookie

function getCookie(nombre) {
    const cookies = document.cookie.split(";");
    for (let i=0; i < cookies.length; i++){
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}

//Guardar datos en la cookie

function setCookie (nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}