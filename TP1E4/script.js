/* ¿Qué es lo que realiza la siguiente función?
const reverseString = str => [...str].reverse().join('');
Compruebe su funcionamiento. */

const reverseString = str => [...str].reverse().join('');

console.log(reverseString);

// Recibe un string.
// Lo convierte en un arreglo de caracteres.
// Invierte el orden del arreglo.
// Une todos los caracteres en una cadena de caracteres.
// Basicamente retorna el string enviado, pero invertido.