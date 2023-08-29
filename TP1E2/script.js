/* Escriba un programa javascript que muestre en una página la fecha y hora
en tiempo real.
El formato de la fecha debe ser:
Hoy es Jueves, 22 de Marzo de 1998
La hora actual es 8:23:05 PM
Utilice los template literals para imprimir los datos.
Ej: innerHTML = (`La hora actual es : ${hora}:${minuto}:${segundo} ${pmam}`);
Nota: Averigue como funciona la función toLocaleDateString */

const options = {weekday: 'long', year: 'numeric', month: 'long',
day: 'numeric'}

setInterval(()=>{
    const now = new Date();

    let hora = now.getHours();
    let minuto = now.getMinutes() < 10 ? '0'+now.getMinutes() : now.getMinutes();
    let segundo = now.getSeconds() < 10 ? '0'+now.getSeconds() : now.getSeconds();
    let pmam = hora >= 12 ? 'PM' : 'AM';

    let sise1 = document.querySelector('.day');
    let sise2 = document.querySelector('.time');

    sise1.innerHTML = 'Hoy es ' + now.toLocaleDateString('es-AR', options);
    sise2.innerHTML = (`La hora actual es ${hora}:${minuto}:${segundo} ${pmam}`);
}, 100)
