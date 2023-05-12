const medicosCookies = JSON.parse(getCookie('medicos'));
const pacientesCookies = JSON.parse(getCookie('pacientes') || "[]");
const tablaMedicos = document.getElementById("listadoMedicos");
const cuerpoTabla = tablaMedicos.querySelector("tbody");

for (let i = 0; i <medicosCookies.length; i++) {
    const medico = medicosCookies[i];
    const fila = cuerpoTabla.insertRow();

    const celdaNombreMedico = fila.insertCell();
    const celdaApellido = fila.insertCell();
    const celdaCedula = fila.insertCell();
    const celdaEspecialidadRequerida = fila.insertCell();
    const celdaConsultorio = fila.insertCell();
    const celdaEmail = fila.insertCell();

    celdaNombreMedico.textContent = medico.nombreMedico;
    celdaApellido.textContent = medico.apellidoMedico;
    celdaCedula.textContent = medico.numeroCedula;
    celdaEspecialidadRequerida.textContent = medico.especialidadRequerida;
    celdaConsultorio.textContent = medico.numeroConsultorio
    celdaEmail.textContent = medico.email

    let pacientesEncontrados = pacientesCookies.filter(paciente => medico.especialidadRequerida === paciente.especialidadRequerida);

    const medicoPacientes = fila.insertCell();
    if(pacientesEncontrados.length > 0) {
        medicoPacientes.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = medicoPacientes.querySelector("#pacientes")
        for (let j=0; j < pacientesEncontrados.length; j++) {
            const pacienteEncontrado = pacientesEncontrados[j];
            pacientes.innerHTML += `<li>${pacienteEncontrado.nombrePaciente}</li>`
        }
    }else {
        medicoPacientes.textContent = "Sin Pacientes"
    }

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