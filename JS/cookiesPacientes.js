//Cargar datos Cookies
const pacientesCookies = JSON.parse(getCookie('pacientes'));
const medicosCookie = JSON.parse(getCookie('medicos') || "[]");

const tablaPacientes = document.getElementById('listadoPacientes');
const cuerpoTabla = tablaPacientes.querySelector("tbody");

for (let i = 0; i <pacientesCookies.length; i++) {
    const paciente = pacientesCookies[i];
    const fila = cuerpoTabla.insertRow();

    //Insertar celdas para agregar datos del paciente
    const celdaNombrePaciente = fila.insertCell();
    const celdaApellido = fila.insertCell();
    const celdaCedula = fila.insertCell();
    const celdaEdad = fila.insertCell();
    const celdaTelefono = fila.insertCell();
    const celdaEspecialidadRequerida = fila.insertCell();

    celdaNombrePaciente.textContent = paciente.nombrePaciente;
    celdaApellido.textContent = paciente.apellidoPaciente;
    celdaCedula.textContent = paciente.cedulaPaciente;
    celdaEdad.textContent = paciente.edadPaciente;
    celdaTelefono.textContent = paciente.telefonoPaciente
    celdaEspecialidadRequerida.textContent = paciente.especialidadRequerida

    const medicoEspecialidadRequerida = medicosCookie.find(medico => medico.especialidadMedico === paciente.especialidadRequerida);
    const celdaMedicoPaciente = fila.insertCell();
    celdaMedicoPaciente.textContent = medicoEspecialidadRequerida ? medicoEspecialidadRequerida.nombreMedico : "Por asignar";

}

function getCookie(nombre) {  
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");     
        if (cookie[0] === nombre) {        
            return decodeURIComponent(cookie[1]);
        }
    }

    return "";
}


