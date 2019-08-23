// Funciones para mostrar y ocultar secciones //
//Mostrar sección//
const showSection=(id)=>{
    document.getElementById(id).classList.remove('hide');
}
//Ocultar sección//
const hideSection=(id)=>{
    document.getElementById(id).classList.add('hide');
}

// Variables para iniciar sesión//
const loginMobile=document.getElementById('login-mobile'); //Modal iniciar sesión//
const loginDesktop=document.getElementById('login-desktop'); //Modal iniciar sesión//

//Variables para modal de conductor//
const driverMobile=document.getElementById('driver-mobile'); //Modal conductor//
const driverDesktop=document.getElementById('driver-desktop'); //Modal conductor//
const driverButton=document.getElementById('driver-button'); //Modal para boton de conviertete en conductor//
const driver=document.getElementById('driver'); //Modal para boton de conviertete en conductor//


//Variables para cerrar modales//
const closeSession=document.getElementById('close');
const closeDriverSection=document.getElementById('close2');


//Abrir la página de iniciar sesión mobile//
const openSessionPage=()=>{
    showSection('login');
}

const closeSessionPage=()=>{
    hideSection('login');
}

loginMobile.addEventListener('click',openSessionPage);
loginDesktop.addEventListener('click',openSessionPage);
closeSession.addEventListener('click',closeSessionPage);


//Abrir la página modal del formulario del conductor//
const openDriverPage=()=>{
    showSection('modal-cond');
}
const closeDriverPage=()=>{
    hideSection('modal-cond');
}

driverMobile.addEventListener('click',openDriverPage);
driverDesktop.addEventListener('click',openDriverPage);
driverButton.addEventListener('click',openDriverPage);
driver.addEventListener('click',openDriverPage);
closeDriverSection.addEventListener('click',closeDriverPage);

// API de Google

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
  
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
  }
  
  