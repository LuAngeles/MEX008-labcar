//Variables para abrir la página de iniciar sesión//
const startSession=document.getElementById('session');
const closeSession=document.getElementById('close');

//Variables para abrir la página modal del formulario del conductor//
const driverSection=document.getElementById('driver');
const closeDriverSection=document.getElementById('close2');

// Funciones para mostrar y ocultar secciones //

//Mostrar sección//
const showSection=(id)=>{
    document.getElementById(id).classList.remove('hide');
}
//Ocultar sección//
const hideSection=(id)=>{
    document.getElementById(id).classList.add('hide');
}

//Abrir la página de iniciar sesión//
const openSessionPage=()=>{
    showSection('inicia-sesion');
}

const closeSessionPage=()=>{
    hideSection('inicia-sesion');
}

startSession.addEventListener('click',openSessionPage);
closeSession.addEventListener('click',closeSessionPage);


//Abrir la página modal del formulario del conductor//
const openDriverPage=()=>{
    showSection('modal-cond');
}
const closeDriverPage=()=>{
    hideSection('modal-cond');
}

driverSection.addEventListener('click',openDriverPage);
closeDriverSection.addEventListener('click',closeDriverPage);