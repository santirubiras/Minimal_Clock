
// RELOJ MEDIANTE INLINE CSS
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock() {

    // Creamos el objeto fecha
    var date = new Date();

    // Para poder adquirir los minutos y las horas independientemente
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Esto es para posicionar las agujas
    let hrPosition = (hr*360/12) + (min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}


// Esto refresca el navegador cada segundo para que la aguja avance 
var interval = setInterval(runTheClock, 1000);