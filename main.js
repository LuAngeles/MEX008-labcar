


// Funciones para mostrar y ocultar secciones //

//Mostrar sección//
const showSection=(id)=>{
    document.getElementById(id).classList.remove('hide');
}
//Ocultar sección//
const hideSection=(id)=>{
    document.getElementById(id).classList.add('hide');
}

//Para abrir la página de iniciar sesión//
const startSession=document.getElementById('session');
const closeSession=document.getElementById('close')

const openSessionPage=()=>{
    showSection('inicia-sesion')
}

const closeSessionPage=()=>{
    hideSection('inicia-sesion')
}

startSession.addEventListener('click',openSessionPage);
closeSession.addEventListener('click',closeSessionPage);