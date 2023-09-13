/*
Ejercicio 1: Promesas Encadenadas
Crea una función que realice las siguientes tareas:
Inicia una promesa que se resuelva después de 2 segundos con un número aleatorio entre 1 y 100.
Luego, toma ese número y crea una segunda promesa que se resuelva después de 3 segundos con el resultado de 
elevar ese número al cuadrado.
Finalmente, toma el resultado de la segunda promesa y crea una tercera promesa que se resuelva después de 
1 segundo con la raíz cuadrada del número resultante
*/

function promesasEncadenadas() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroRandom = Math.floor(Math.random() * 100) + 1;
            console.log("Número aleatorio:", numeroRandom);
            resolve(numeroRandom);
        }, 2000);
    })
    .then(numero => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const numeroAlCuadrado = Math.pow(numero, 2);
                console.log("Número al cuadrado:", numeroAlCuadrado); 
                resolve(numeroAlCuadrado);
            }, 3000);
        });
    })
    .then(numeroAlCuadrado => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const raizCuadrada = Math.sqrt(numeroAlCuadrado);
                console.log("Raíz cuadrada:", raizCuadrada);
                resolve(raizCuadrada);
            }, 1000);
        });
    });
}

promesasEncadenadas().then((result) => {
    console.log("Resultado final:", result);
}).catch((error) => {
    console.log(error);
});


