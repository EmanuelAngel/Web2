/* Escriba una función buscarMinimo que acepte un número variable de
argumentos y retorne el valor mas chico. */

const buscarMinimo = (...nums) => {
    let min = nums[0];
    nums.forEach(i=>{
        if(i<min){
            min = i;
        }
    })
    return min;
}