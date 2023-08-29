/*
Escriba una función potenciarYRetornarArgumentos() que acepte un array y un
número variable de argumentos. La función debe retornar un nuevo array con
los valores del array original además de los argumentos pasados elevados al
cuadrado.

Ej.
potenciarYRetornarArgumentos ([1,2,3],4,8) // [1,2,3,16,64]
potenciarYRetornarArgumentos ([2],10,4) // [2, 100, 16]                */

const potenciarYRetornarArgumentos = (arr, ...args)=> {
    args.forEach((el, i, args)=>{
        args[i] = el * el;
    })

    arrCompleto = [...arr, ...args];

    return arrCompleto;
}