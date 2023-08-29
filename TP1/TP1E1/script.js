/* 1.- Escriba una función flecha que permita comparar si un objeto
tiene todas sus propiedades contenidas en un segundo objeto.

Ejemplo:
contiene({ pelo: 'largo', barba: false },{ edad: 25, pelo: 'largo', barba: true }); // true
contiene({ edad: 25, pelo: 'largo', barba: true },{ pelo: 'largo', barba: true },); //false

-Pruebe su funcionamiento en la consola del navegador
-Agregue la función como un script externo en una página web y pruebe su
funcionamiento. */

let contiene = (obj1, obj2) => {
    for(let key in obj2){
        if(!(key in obj1)){
            return true;
        }
    }
    return false;
}