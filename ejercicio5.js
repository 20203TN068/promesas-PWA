/*
Ejercicio 5: Promesa con Cancelación
Crea una función que realice las siguientes tareas:
Inicia una promesa que se resuelva después de 5 segundos con un mensaje.
Si se llama a una función cancel antes de que se cumplan los 5 segundos, la
promesa debe rechazarse con el mensaje "Promesa cancelada".
*/
function promesaConCancelacion() {
    let cancel;
    const promise = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            resolve("Promesa resuelta después de 5 segundos");
        }, 5000);
        cancel = () => {
            clearTimeout(timer);
            reject("Promesa cancelada");
        };
    });
    return { promise, cancel };
}

const { promise, cancel } = promesaConCancelacion();

promise.then(result => console.log(result)).catch(err => console.log(err));

// Para cancelar la promesa antes de 5 segundos.
//setTimeout(() => {
//    cancel();
//}, 2000);