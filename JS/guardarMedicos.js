//obtenemos el formulario de los medicos
const formularioMedicos = document.getElementById('registroMedicosForm')
formularioMedicos.addEventListener('submit',(event) => {
    event.preventDefault();
    const datosMedico = {
        nombreMedico: document.getElementById('nombre').value,
        apellidoMedico: document.getElementById('apellido').value,
        numeroCedula: document.getElementById('cedula').value,
        especialidadMedico: document.getElementById('especialidadMedico').value,
        numeroConsultorio: document.getElementById('consultorio').value,
        email: document.getElementById('email').value,
    };
    const medicosCookie = getCookie('medicos') ? JSON.parse(getCookie('medicos') ) : [];
    const existeMedico =medicosCookie.some(medico => medico.especialidadMedico === datosMedico.especialidadMedico);
    if (existeMedico) {
        alert("Ya tenemos un medico con esa especialidad");
    } else {
        guardarEnCookie(datosMedico);
    }
    const confirmacion = confirm('¿Desea ver los datos guardados?');
    if (confirmacion) {
        window.location.href = '../listadoMedicos.html';
    } else {
        alert('Continuando en el formulario');
        formularioMedicos.reset()
    }
})

//Guardar medico en la cookie
function guardarEnCookie(medico) {
    let datosMedico = getCookie("medicos");
    if (datosMedico === "") {
        datosMedico = "[]";
    }
    const medicos = JSON.parse(datosMedico);
    medicos.push(medico);
    const nuevoJSON = JSON.stringify(medicos);
    setCookie("medicos", nuevoJSON);
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

function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
